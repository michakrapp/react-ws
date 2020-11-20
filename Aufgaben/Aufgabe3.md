# Kategorie löschen

1. Lagert die Darstellung einer Kategorie in eine Unterkomponente aus

Übergebt die Kategorie, die dargstellt werden soll per Prop an die Unterkomponente

2. Löschen einer Kategorie

Implementiert einen Löschenbutton in der Unterkomponente

Übergebt eine Funktion, die das Löschen verwaltet von der Elternkomponente an die Kindkomponenten

Löscht die Kategorie vom Server und (wenn erfolgreich) aus dem lokalen State der Komponente

DELETE http://localhost:3001/categories/<id>

fetch(url, {method: 'DELETE'}).then(response)
