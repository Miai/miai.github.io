/*jshint esversion: 6 */
/*
 * Create a list that holds all of your cards
 */
const icons = ["500px","accessible-icon","accusoft","adn","adversal","affiliatetheme","algolia","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","asymmetrik","audible","autoprefixer","avianex","aviato","aws","bandcamp","behance","behance-square","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","btc","buromobelexperte","buysellads","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","chrome","cloudscale","cloudsmith","cloudversify","codepen","codiepie","connectdevelop","contao","cpanel","creative-commons","css3","css3-alt","cuttlefish","d-and-d","dashcube","delicious","deploydog","deskpro","deviantart","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","edge","elementor","ember","empire","envira","erlang","ethereum","etsy","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","firefox","first-order","firstdraft","flickr","fly","font-awesome","font-awesome-alt","font-awesome-flag","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","get-pocket","gg","gg-circle","git","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","goodreads","goodreads-g","google","google-drive","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","gulp","hacker-news","hacker-news-square","hire-a-helper","hooli","hotjar","houzz","html5","hubspot","imdb","instagram","internet-explorer","ioxhost","itunes","itunes-note","jenkins","joget","joomla","js","js-square","jsfiddle","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","maxcdn","medapps","medium","medium-m","medrt","meetup","microsoft","mix","mixcloud","mizuni","modx","monero","napster","nintendo-switch","node","node-js","npm","ns8","nutritionix","odnoklassniki","odnoklassniki-square","opencart","openid","opera","optin-monster","osi","page4","pagelines","palfed","patreon","paypal","periscope","phabricator","phoenix-framework","pied-piper","pied-piper-alt","pied-piper-pp","pinterest","pinterest-p","pinterest-square","playstation","product-hunt","pushed","python","qq","quora","ravelry","react","rebel","red-river","reddit","reddit-alien","reddit-square","rendact","renren","replyd","resolving","rocketchat","rockrms","safari","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","simplybuilt","sistrix","skyatlas","skype","slack","slack-hash","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","speakap","spotify","stack-exchange","stack-overflow","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","telegram","telegram-plane","tencent-weibo","themeisle","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","uikit","uniregistry","untappd","usb","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","xbox","xing","xing-square","y-combinator","yahoo","yandex","yandex-international","yelp","yoast","youtube","youtube-square","address-book","address-card","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","bell","bell-slash","bookmark","building","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","caret-square-down","caret-square-left","caret-square-right","caret-square-up","chart-bar","check-circle","check-square","circle","clipboard","clock","clone","closed-captioning","comment","comment-alt","comments","compass","copy","copyright","credit-card","dot-circle","edit","envelope","envelope-open","eye-slash","file","file-alt","file-archive","file-audio","file-code","file-excel","file-image","file-pdf","file-powerpoint","file-video","file-word","flag","folder","folder-open","frown","futbol","gem","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","handshake","hdd","heart","hospital","hourglass","id-badge","id-card","image","images","keyboard","lemon","life-ring","lightbulb","list-alt","map","meh","minus-square","money-bill-alt","moon","newspaper","object-group","object-ungroup","paper-plane","pause-circle","play-circle","plus-square","question-circle","registered","save","share-square","smile","snowflake","square","star","star-half","sticky-note","stop-circle","sun","thumbs-down","thumbs-up","times-circle","trash-alt","user","user-circle","window-close","window-maximize","window-minimize","window-restore","address-book","address-card","adjust","align-center","align-justify","align-left","align-right","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","archive","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","audio-description","backward","balance-scale","ban","barcode","bars","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bicycle","binoculars","birthday-cake","blind","bold","bolt","bomb","book","bookmark","braille","briefcase","bug","building","bullhorn","bullseye","bus","calculator","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","camera","camera-retro","car","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","cart-arrow-down","cart-plus","certificate","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-square","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","circle","circle-notch","clipboard","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-upload-alt","code","code-branch","coffee","cog","cogs","columns","comment","comment-alt","comments","compass","compress","copy","copyright","credit-card","crop","crosshairs","cube","cubes","cut","database","deaf","desktop","dollar-sign","dot-circle","download","edit","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-square","eraser","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fast-backward","fast-forward","fax","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-excel","file-image","file-pdf","file-powerpoint","file-video","file-word","film","filter","fire","fire-extinguisher","flag","flag-checkered","flask","folder","folder-open","font","forward","frown","futbol","gamepad","gavel","gem","genderless","gift","glass-martini","globe","graduation-cap","h-square","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","handshake","hashtag","hdd","heading","headphones","heart","heartbeat","history","home","hospital","hourglass","hourglass-end","hourglass-half","hourglass-start","i-cursor","id-badge","id-card","image","images","inbox","indent","industry","info","info-circle","italic","key","keyboard","language","laptop","leaf","lemon","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","magic","magnet","male","map","map-marker","map-marker-alt","map-pin","map-signs","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","medkit","meh","mercury","microchip","microphone","microphone-slash","minus","minus-circle","minus-square","mobile","mobile-alt","money-bill-alt","moon","motorcycle","mouse-pointer","music","neuter","newspaper","object-group","object-ungroup","outdent","paint-brush","paper-plane","paperclip","paragraph","paste","pause","pause-circle","paw","pen-square","pencil-alt","percent","phone","phone-square","phone-volume","plane","play","play-circle","plug","plus","plus-circle","plus-square","podcast","pound-sign","power-off","print","puzzle-piece","qrcode","question","question-circle","quote-left","quote-right","random","recycle","redo","redo-alt","registered","reply","reply-all","retweet","road","rocket","rss","rss-square","ruble-sign","rupee-sign","save","search","search-minus","search-plus","server","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shopping-bag","shopping-basket","shopping-cart","shower","sign-in-alt","sign-language","sign-out-alt","signal","sitemap","sliders-h","smile","snowflake","sort","sort-alpha-down","sort-alpha-up","sort-amount-down","sort-amount-up","sort-down","sort-numeric-down","sort-numeric-up","sort-up","space-shuttle","spinner","square","star","star-half","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","street-view","strikethrough","subscript","subway","suitcase","sun","superscript","sync","sync-alt","table","tablet","tablet-alt","tachometer-alt","tag","tags","tasks","taxi","terminal","text-height","text-width","th","th-large","th-list","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","toggle-off","toggle-on","trademark","train","transgender","transgender-alt","trash","trash-alt","tree","trophy","truck","tty","tv","umbrella","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-circle","user-md","user-plus","user-secret","user-times","users","utensil-spoon","utensils","venus","venus-double","venus-mars","video","volume-down","volume-off","volume-up","wheelchair","wifi","window-close","window-maximize","window-minimize","window-restore","won-sign","wrench","yen-sign"];

/*
 * Create an arry with the designs to show on the cards
 * the desired number of pairs that the user wanted 
 */

/* Board generation variables */
const boardDeck = document.getElementById('board-deck');
const movesCounter = document.querySelectorAll('.moves');
const resetBtn = document.querySelectorAll('.restart');
const allStarsItems = document.querySelectorAll('.stars li');
const allStars = document.querySelector('.stars');
const bodyEl = document.body;
const modalContainer = document.getElementById('modal-container');
const modalScore = modalContainer.querySelector('.restart');
let modalStars;
/* Board generation and stats */
let desiredNoOfPairs = 8; /* Get dynamically the number of pairs that the players wants */
let urlParameter = null;
const urlParameterString = 'pairs';
let designArray = [];
let openedArray = [];
let pairsArray = [];
let moves = 0;
let pairMoves = 0;
/* Timer variables */
const hoursSelector = document.querySelectorAll('.hours');
const minutesSelector = document.querySelectorAll('.minutes');
const secondsSelector = document.querySelectorAll('.seconds');
let hours = 0;
let minutes = 0;
let seconds = 0;
let totalSeconds = 0;

let stopTimer; //function used to stop the timer;
let myTimer; //function that initializez the timer;

function cardDesignArray(noOfPairs) {
    designArray = [];
    for (let i = 1; i <= noOfPairs; i++) {
        designArray.push(shuffle(icons)[i]);
    }
    designArray = designArray.concat(designArray);
}

function createGameBoard(desiredNoOfPairs) {
    cardDesignArray(desiredNoOfPairs); 

    let shuffledArray = shuffle(designArray);
    //Clear the deck before adding cards
    while (boardDeck.firstChild) {
        boardDeck.removeChild(boardDeck.firstChild);
    }
    //Adding rows and creating the table overall
    for(let i=0; i < (desiredNoOfPairs*2); i++) {
        const listItem = document.createElement('li');
        let itemContent = '<i class="fas fab fa-' + shuffledArray[i] + '"></i>';
        listItem.innerHTML = itemContent;
        listItem.setAttribute('class', 'card');
        boardDeck.appendChild(listItem);
    }
}

/**
 * @description Timer Setup
 */
function timer() {
    /* TODO
     * refactor this so that you have a full seconds counter
     * determine all the other variables with math formulas
     */
    totalSeconds = totalSeconds + 1;
    seconds = seconds + 1;
    if(seconds === 60) {
        seconds = 0;
        minutes = minutes + 1;
        if(minutes === 60) {
            minutes = 0;
            hours = hours + 1;       
        }
    }

    displayTimer(hours, minutes, seconds);
}

function displayTimer(h, m, s) {
    let formatedH = ("0" + h).slice(-2);
    let formatedM = ("0" + m).slice(-2);
    let formatedS = ("0" + s).slice(-2);
    
    for (var i = 0; i < secondsSelector.length; i++) {
        hoursSelector[i].textContent = formatedH;
        minutesSelector[i].textContent =formatedM;
        secondsSelector[i].textContent =formatedS;
    }
}

/**
 * @description Game clicking actions
 */
boardDeck.addEventListener('click', function clickedCard(event) {
    if(event.target.classList.contains('show')){
        return;
    } else if(event.target.nodeName === 'LI') {
        if(openedArray.length >= 2) {
            turnCards();
            openedArray=[];
        }
        event.target.setAttribute('class', 'card open show');
        openedArray.push(event.target.firstChild.getAttribute('data-icon'));
        moves = moves + 1;
        updateMoves(moves);
        myTimer();
        event.target.firstChild.setAttribute('data-move', moves);
        starRating(pairMoves);
        checkSimilarity();
        gameEnded();
    }
});

function updateMoves (moves) {
    pairMoves = Math.floor(moves/2);
    if ((moves % 2) == 0) {
        for (var i = 0; i < movesCounter.length; i++) {
            movesCounter[i].innerHTML = pairMoves;
            }
    }
}


/**
 * @description Check if the 2 clicked cards match and if so keep them "face up"
 */
function checkSimilarity() {
    if(openedArray.length === 2) {
        if (openedArray[0] === openedArray[1]) {
        pairsArray = pairsArray.concat(openedArray);
        document.querySelector('[data-move="' + (moves-1) + '"]').parentNode.setAttribute('class', 'card open show keep');
        document.querySelector('[data-move="' + moves + '"]').parentNode.setAttribute('class', 'card open show keep');
        openedArray = [];
        return true;
        } else {
            //openedArray = [];
            return false;
        }
    }
}

/**
 * @description Turn cards back upside down if they don't match
 */
function turnCards() {
    document.querySelector('[data-move="' + (moves-1) + '"]').parentNode.setAttribute('class', 'card');
    document.querySelector('[data-move="' + moves + '"]').parentNode.setAttribute('class', 'card');
}

/**
 * @description Determine if the game has ended
 */
function gameEnded() {
    if(designArray.length === pairsArray.length) {
        clearInterval(stopTimer);
        modalView();
    }
}

/**
 * @description Adding/updating info to the modal
 */
function modalView() {
    const cloneAllStars = allStars.cloneNode(true);
    modalStars = modalScore.parentNode.insertBefore(cloneAllStars, modalScore);
    bodyEl.setAttribute('class', 'modal-active');
    modalContainer.setAttribute('class', 'zoomish');
    return modalStars;
}


/**
 * @description Determine the number of stars based on moves
 * TODO: Maybe make so that it takes into account the time as well
 * @param {number} noOfMoves - number of total cards turned
 */
function starRating(noOfMoves) {
    if(noOfMoves === 0) {
        allStarsItems[0].innerHTML = '<li><i class="fa fa-star"></i></li>';
        allStarsItems[1].innerHTML = '<li><i class="fa fa-star"></i></li>';
        allStarsItems[2].innerHTML = '<li><i class="fa fa-star"></i></li>';
        return;
    } else if (noOfMoves > (desiredNoOfPairs +(desiredNoOfPairs / 2)) && noOfMoves <= (desiredNoOfPairs * 2)) {
                allStarsItems[0].innerHTML = '<li><i class="far fa-star"></i></li>';
            } else if (noOfMoves > (desiredNoOfPairs * 2) && noOfMoves <= (desiredNoOfPairs * 3)) {
                        allStarsItems[1].innerHTML = '<li><i class="far fa-star"></i></li>';
                    }
}

/**
 * @description Shuffle function from http://stackoverflow.com/a/2450976
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/**
* @description Helper function that make sure that functions run through it
* are runned only once from https://davidwalsh.name/javascript-once
*/
function once(fn, context) { 
	var result;
	return function() { 
		if(fn) {
            result = fn.apply(context || this, arguments);
			fn = null;
        }
        return result;
	};
}

/**
 * @description Initialization function that sets/resets everything
 */
function init() {
    moves = 0;
    pairMoves = 0;
    designArray = [];
    openedArray = [];
    pairsArray = [];
    hours = 0;
    minutes = 0;
    seconds = 0;
    totalSeconds = 0;

    displayTimer(hours, minutes, seconds);
    clearInterval(stopTimer);

    myTimer = once(function() {
        stopTimer = window.setInterval(function (){
            timer();
          }, 1000);
    });

    updateMoves(moves);
    createGameBoard(desiredNoOfPairs);
    
    buttonsReset();
}

function buttonsReset() {
    for (var i = 0; i < resetBtn.length; i++) {
        resetBtn[i].addEventListener('click', function resetGame(event) {
                init();
                modalContainer.setAttribute('class', 'out');
                bodyEl.removeAttribute('class');
                starRating(0);
                if (typeof modalStars !== 'undefined'){
                    modalStars.remove();
                }
                event.preventDefault();
        });
    }
}

/**
 * @description Function that retrieves URL parameters taken from https://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript/11582513#11582513
 * @param {string} name - name of the paramater
 */
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }

/**
 * Initialize the game with the number of desired pairs as a URL parameter
 * 
 */
function initWithURLParameter() {
    urlParameterValue = getURLParameter(urlParameterString);
    if(urlParameterValue === null) {
        init();
        return;
    } else if(isNaN(parseFloat(urlParameterValue))) {
        init();
        return;
    } else {
        desiredNoOfPairs = parseFloat(urlParameterValue);
        init();
        return;
    }
}
initWithURLParameter();
