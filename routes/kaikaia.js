var express = require('express');
var router = express.Router();
const website = 'http://kaikaia.com/';
const axios = require("axios");
const cheerio = require('cheerio');
const fetchWebsite = async () => {
    const result = await axios.get(website);
    return cheerio.load(result.data);
};

const statesProject = ['Finish', 'Working'];
const implementProject = ['Nasa', 'Work', 'Ministerio', 'Panama', 'Brasil'];

/* GET users listing. */
router.get('/', async function(req, res, next) {
    const $ = await fetchWebsite();
    const htmlRows = $('.col-sm-3','.row.text-center');
    const projects = [];
    htmlRows.each(function(i, el){
        const div = $(this);
        projects.push({
            imgThumbnail: website + div.children('.img-thumbnail.img-responsive' ).attr('src'),
            imgLogo: website + div.children('h2').children('img').attr('src'),
            title: div.children('.small-text').text(),
            version: div.children('p').children('span').text(),
            lastUpdate: div.children('dl').children('dd').first().text(),
            status: div.children('dl').children('dd').last().text(),
            link: div.children('a').attr('href'),
            state: getRandomValue(statesProject),
            implement: getRandomValue(implementProject),
        });
    });
    res.json(projects);
});

function getRandomValue(list) {
    const i = Math.floor((Math.random() * list.length));
    return list[i];
}

module.exports = router;