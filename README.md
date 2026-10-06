# RiffForge

Procedural guitar riff and solo generator: plucked-string guitar sound (clean, acoustic, metal), text-to-solo, a Markov model and neural network you can train on your own MIDI files, and export to MIDI, GP3 (Ample Guitar) and Guitar Pro 7/8.

## Saving your trained model
In the **Learn** tab, **Save model** writes a `.json` file (Markov data, training notes and neural net weights). **Load model** restores it, so you can keep or share a trained style.

## Run
    npm install
    npm start

## Build installers
    npm run dist

Or push to GitHub: the **Build** workflow makes the Windows installer and portable .exe on every push to `main` (download them from the run's Artifacts). Push a tag such as `v1.0.0` to attach them to a GitHub Release.

## Upload to GitHub
    git init && git add . && git commit -m "RiffForge"
    git branch -M main
    git remote add origin https://github.com/YOUR-USER/riffforge.git
    git push -u origin main
    git tag v1.0.0 && git push origin v1.0.0

Windows may show a SmartScreen warning because the app is unsigned: More info, Run anyway.
