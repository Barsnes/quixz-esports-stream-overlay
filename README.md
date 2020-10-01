## Quixz Esports Stream Overlay
Website to use on Quixz Esports' stream to grab info from current match

This is made to be running alongside [Lexogrine's Hud Manager](https://github.com/lexogrine/hud-manager) REST Api

Preview of what it will look like once Lexogrine's Hud Manager is running with data attached:

![alt text](https://imgur.com/kt370ot.png)

# Veto
Currently the CSS only supports BO2 veto, but can easily be changed by changing the `.vetoBoxes` css in `./src/veto.css`

BO2:
```css
.vetoBoxes {
  display: grid;
  width: calc(90% + 2rem);
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 150px;
  line-height: 25px;
}
```
BO3:
```css
.vetoBoxes {
  display: grid;
  width: calc(90% + 2rem);
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1rem;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 150px;
  line-height: 25px;
}
```
