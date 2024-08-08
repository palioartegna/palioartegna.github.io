#!/bin/bash

# Function to update the website
update_website() {
    /home/ubuntu/.nvm/versions/node/v18.20.1/bin/ng build --base-href https://palioartegna.github.io/
    git add .
    git commit -m "Update scores"
    git push
}

# Call the function
update_website

