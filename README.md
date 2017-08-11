# Instructions

## Local build 

To develop the web site locally on your laptop and next generate the html, use this command if ruby and jekyll gems are deployed on your machine
```
bundle exec jekyll build --config _config.yml
```

Next, you can start the server locally and open it in your browser
```
bundle exec jekyll serve -P 4000 -o
```

## Build and publish on gh-pages branch manually

In order to do a manual build and push to gh-pages branch the site generated, use these commands.
Specify a `$MESSAGE` to commit instruction.

```bash
rm -rf _site
jekyll build --config _config_github.yml
rm -rf gh-pages && git clone https://github.com/snowdrop/site.git gh-pages
cd gh-pages && git checkout gh-pages
git rm -rf .
cp -r ../_site/ .
git add .
git commit -am "Site updated - $MESSAGE"
git push origin gh-pages
```

## CI Build & Deployment

The site is build and deployed under gh-pages branch by Travis automatically every time you push a commit to git
Travis uses this script `./deploy.sh` and jekyll to build the site will use
the following yaml config file `_config_github.yml`

