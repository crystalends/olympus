$Quality = 90

$images = Get-ChildItem -Recurse -Include *.jpg, *.jpeg, *.png

foreach ($img in $images) {
    $outputFile = [System.IO.Path]::ChangeExtension($img.FullName, ".webp")

    Write-Host "Конвертирую $($img.FullName) → $outputFile"

    magick convert $img.FullName -quality $Quality $outputFile

    if (Test-Path $outputFile) {
        Remove-Item $img.FullName -Force
    }
}
