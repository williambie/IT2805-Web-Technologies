# Hjelp, git fungerer ikke og jeg trenger hjelp !!

**Hvordan pushe nye greier til GitLab**

Du har gjort noe greier på nettsida og har lyst til å pushe det til GitLab slik
at vi kan se det. Da må du:

1. Legge til nye filer (gjelder kun hvis du har lagd nye filer du ikke har `git add`'a)
   `git add --all`
2. Committe endringene dine
   `git commit --all -m "Jeg har gjort noen endringer :)"`
3. Finne commit meldingen til den nyesete commiten
   `git log --oneline` (den nyeste meldingen er på toppen)
4. Sammenlign denne meldingen med den nyesete på GitLab
  - Hvis meldinene er like: `git push -u origin/master`
  - Meldingene er ikke like: `git pull`, `git push -u origin/master`
5. Profit

**Hvordan hente ned nye endringer**

1. Stash bort alle lokale endringer
   `git stash`
2. Hent ned alle nye ting fra GitLab serveren
   `git fetch`
3. Legg til dine endringer oppå de nye endringene fra GitLab
   `git pull`
4. Legg til stashen
   `git stash apply`
5. Profit

---

Fungerer det ikke? Spør Mats!
