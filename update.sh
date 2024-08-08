#!/bin/bash

# Function to update the website
update_website() {
    ng build --base-href https://palioartegna.github.io/
    git add .
    git commit -m "Update scores"
    git push
}

# Call the function
update_website

