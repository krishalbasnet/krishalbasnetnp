$port = 8082
$baseUrl = "http://localhost:$port/"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($baseUrl)

try {
    $listener.Start()
    Write-Host "Election Dashboard Server started at $baseUrl"
    Write-Host "Press Ctrl+C to stop the server."

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $localPath = Join-Path (Get-Location) $path.TrimStart('/')

        if ($path -eq "/api/data") {
            if ($request.HttpMethod -eq "GET") {
                $dataPath = "data.json"
                if (-not (Test-Path $dataPath)) {
                    $dataPath = "api/data_initial.json"
                }
                $content = Get-Content $dataPath -Raw -Encoding UTF8
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                $response.ContentType = "application/json"
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
            elseif ($request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream)
                $body = $reader.ReadToEnd()
                
                # Check if it's the new payload structure { password, data }
                try {
                    $json = $body | ConvertFrom-Json
                    if ($json.data -ne $null) {
                        $body = $json.data | ConvertTo-Json -Depth 10
                    }
                } catch {}

                $body | Out-File "data.json" -Encoding UTF8
                
                $msg = "Data saved successfully"
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($msg)
                $response.StatusCode = 200
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
        }
        elseif (Test-Path $localPath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($localPath)
            $extension = [System.IO.Path]::GetExtension($localPath)
            $response.ContentType = switch ($extension) {
                ".html" { "text/html" }
                ".css"  { "text/css" }
                ".js"   { "application/javascript" }
                default { "application/octet-stream" }
            }
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        }
        else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
}
finally {
    $listener.Stop()
}
