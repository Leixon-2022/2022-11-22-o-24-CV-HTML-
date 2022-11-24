// const janitorTags = "Fixa saker | Rensa avloppet | Bytat glödlampor | Klippa gräset | Hej"
// const cleanerTags = "Städat vardagsrum | Städat kök | Städat toaletter"

function showJanitorTags() {
  const paragraphJanitorTags = document.getElementById("janitor-tags")
  if (paragraphJanitorTags.innerText === "") {
    paragraphJanitorTags.innerText = "Fixa saker | Rensa avloppet | Bytat glödlampor | Klippa gräset | Hej"
  } else {
    paragraphJanitorTags.innerText = ""
  }
}

function showCleanerTags() {
  const paragraphCleanerTags = document.getElementById("cleaner-tags")
  if (paragraphCleanerTags.innerText === "") {
    paragraphCleanerTags.innerText = "Städat vardagsrum | Städat kök | Städat toaletter"
  } else {
    paragraphCleanerTags.innerText = ""
  }
}