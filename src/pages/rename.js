const fs = require('fs')
const path = require('path')

// Pfad zu dem Ordner mit den Bilddateien
const imageFolderPath = './images'

// Pfad zu dem Ordner mit den .md-Dateien (ein Ordner höher)
const mdFolderPath = './'

// Hilfsfunktion, um Umlaute zu ersetzen
function removeUmlauts(str) {
  return str
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
}

// Funktion, um Dateinamen zu ändern
function renameFiles() {
  fs.readdirSync(imageFolderPath).forEach(file => {
    const oldFilePath = path.join(imageFolderPath, file)
    const newFileName = removeUmlauts(file)
    const newFilePath = path.join(imageFolderPath, newFileName)

    // Wenn es eine Bilddatei ist, umbenennen
    if (/\.(png|jpg|jpeg|webp|gif)$/i.test(file)) {
      fs.renameSync(oldFilePath, newFilePath)
    }
  })
}

// Funktion, um die Pfade in den .md-Dateien zu ersetzen
function updateMarkdownLinks() {
  fs.readdirSync(mdFolderPath).forEach(file => {
    if (file.endsWith('.md')) {
      const mdFilePath = path.join(mdFolderPath, file)
      let content = fs.readFileSync(mdFilePath, 'utf-8')

      // Ersetze Bildpfade in der Markdown-Datei
      content = content.replace(/([!\[]\([^)]+)(\.[a-z]+[\?&]*)?(\))/g, (match, p1, p2, p3) => {
        const oldPath = p1.replace(/[\[\(\]\)]+/g, '') // Extrahiere den Pfad
        const newPath = removeUmlauts(oldPath)
        return p1.replace(oldPath, newPath) + p2 + p3 // Setze den neuen Pfad ein
      })

      // Schreibe die geänderten Inhalte zurück in die Datei
      fs.writeFileSync(mdFilePath, content, 'utf-8')
    }
  })
}

// Umbenennen der Dateien und Aktualisieren der Markdown-Dateien
renameFiles()
updateMarkdownLinks()
