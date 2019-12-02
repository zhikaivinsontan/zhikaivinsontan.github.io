

let variationsDescription = ["The Serani are a creole ethnic group of people of mixed Portuguese and Malaccan descent based in Malaysia and to some extent in Singapore. People of this ethnicity have, besides Portuguese, a strong Dutch heritage, as well as some British, Malay, Chinese and Indian heritage due to intermarriages, which is common among the Kristang. In addition, due to the Portuguese Inquisition in the region, a lot of the Jews of Malacca assimilated into the Kristang community.[1] The creole group arose in Malacca (Malaysia) between the 16th and 17th centuries, when the city was a port and base of the Portuguese Empire. Some descendants speak a distinctive Kristang language or Malacca Portuguese, a creole based on Portuguese. Today the government classifies them as Portuguese Eurasians.", "gray", "navy"];

function part2European() {
    document.getElementById("part2img").src = "images/europeanperanakan.jpg";
    document.getElementById("part2textdiv").innerHTML = variationsDescription[0];
}

function part2Chinese() {
    document.getElementById("part2img").src = "images/chineseperanakan.jpg";
    document.getElementById("part2textdiv").innerHTML = "The first Chinese immigrants to settle in the Malay Archipelago arrived from Guangdong and Fujian provinces in the 10th century C.E. They were joined by much larger numbers of the Chinese in the 15th through 17th centuries, following on the heels of the Ming emperor's reopening of Chinese-Malay trade relations in the 15th century.";
}

part2Indian();
function part2Indian() {
    document.getElementById("part2img").src = "images/chitty.jpg";
    document.getElementById("part2textdiv").innerHTML = "The Chitty are a distinctive group of Tamil people found mainly in Melaka and Singapore, who are also known as the Indian Peranakans and have adopted Chinese and Malay cultural practices whilst also retaining their Hindu heritage. In the 21st century, their population stands at 2,000. The Chitty/Chetti community is largely from South India and are devout Hindus.";
}


const svg = d3.select("#svg1")
const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
}

const width = +svg.attr("width") - margin.left - margin.right
const height = +svg.attr("height") - margin.top - margin.bottom
// piece of paper
const g = svg.append("g")
    .attr("transform",
        "translate(" +
        margin.left + "," +
        margin.top + ")");
const circleRad = 100
const xCenter = 150
const yCenter = 150
const circle1 = g.append("circle")
    .attr("r", circleRad)
    .attr("fill", "purple")
    .attr('transform',
        "translate(" +
        xCenter + "," +
        yCenter + ")");

g.append("text")
        .text("Europeans")
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('font-size', '12px')
        .attr('fill', 'black')
        .attr('transform',
        "translate(" +
        xCenter + "," +
        yCenter + ")");

circleFill = "honeydew";
const xCenter2 = xCenter + 1.1*circleRad
const yCenter2 = yCenter + 1*circleRad
var circle = g.append("circle")
    .attr("r", circleRad)
    .attr("fill",circleFill)
    .attr('transform',
        "translate(" +
        xCenter2 + "," +
        yCenter2 + ")");


g.append("text")
    .text("Indigenous ")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '12px')
    .attr('fill', 'black')
    .attr('transform',
        "translate(" +
        xCenter2 + "," +
        yCenter2 + ")");

const xCenter3 = xCenter + 2.1*circleRad
const yCenter3 = yCenter
g.append("circle")
    .attr("r", circleRad)
    .attr("fill", "red")
    .attr('transform',
        "translate(" +
        xCenter3 + "," +
        yCenter3 + ")");

g.append("text")
    .text("Mainland Chinese")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '12px')
    .attr('fill', 'black')
    .attr('transform',
        "translate(" +
        xCenter3 + "," +
        yCenter3 + ")");

const xCenter4 = xCenter + 1.1*circleRad
const yCenter4 = yCenter + 2.3*circleRad
    g.append("circle")
        .attr("r", circleRad)
        .attr("fill", "yellow")
        .attr('transform',
            "translate(" +
            xCenter4 + "," +
            yCenter4 + ")");

g.append("text")
        .text("Indians")
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline', 'middle')
        .style('font-size', '12px')
        .attr('fill', 'black')
        .attr('transform',
            "translate(" +
            xCenter4 + "," +
            yCenter4 + ")");

const xCenter15 = xCenter + 50
const yCenter15 = xCenter + 60
            
g.append("text")
    .text("Serani")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '12px')
    .attr('fill', 'black')
    .attr('transform',
        "translate(" +
        xCenter15 + "," +
        yCenter15 + ")");

const xCenter35 = xCenter3 - 100;
const yCenter35 = xCenter3 - 40;
                    
g.append("text")
    .text("Chitty")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '12px')
    .attr('fill', 'black')
    .attr('transform',
            "translate(" +
            xCenter35 + "," +
            yCenter35 + ")");

const xCenter25 = xCenter2 + 60;
const yCenter25 = xCenter2 - 50;
                                
g.append("text")
    .text("Baba/Nyonya")
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .style('font-size', '12px')
    .attr('fill', 'black')
    .attr('transform',
            "translate(" +
            xCenter25 + "," +
            yCenter25 + ")");



data = "" 
data += '[{"name" : "Cheang Hong Lim","stats":"1 1 1 3 1","color":"cadetblue","meta-data" : "Singapore 1825 to 1893 Singapore","nickname":"The opium king","abstract":"Opium overlord and conspicuous donor, Cheang Hong Lim has left a problematic legacy. He greatly expanded his father’s opium monopoly and protected his market with the help of secret societies. The opium trade was encouraged by the colonial government, but Cheang’s enhancement of his position was illegal."}';
data += ',{"name" : "Oei Tiong Ham","stats":"1 1 2 5 1","color":"cornflowerblue", "meta-data" : "Semarang, Java 1866 to 1924 Singapore", "nickname" : "Sugar king", "abstract" : "Oei Tiong Ham ran a vast conglomerate of businesses involving shipping, opium trading, and sugar cane. His company, Oei Tiong Ham Concern, was the leading sugar producer in the Dutch East Indies and grew to become the largest Chinese-owned company in Asia."}';
data += ',{"name" : "Tan Jiak Kim","stats":"1 1 5 1 1","color":"darkblue", "meta-data" : "Singapore 1859 to 1917 Singapore", "nickname" : "Colonial Peranakan", "abstract":"Tan Keong Saik came to Singapore to work as a shipping clerk. In 1890, together with Tan Jiak Kim and Lee Cheng Yan, he formed the Straits Steamship Company, the first joint Singapore-European shipping enterprise. It was bought by Keppel Corporation in 1983. Tan also sat on the board of Tanjong Pagar Dock Company."}'
data += ',{"name" : "Chan Kim Boon","stats":"1 1 1 5 1","color":"darkgreen","meta-data" : "Penang 1851 to 1920 Singapore", "nickname": "Translator of Chinese tales into Malay","abstract":"Chan Kim Boon translated Chinese literary works into Malay, making ancient Chinese fables accessible to audiences who were unable to read Chinese. Chan was fluent in English, Malay and Chinese. He moved to Singapore to work as a bookkeeper and cashier. The first Malay translations of Chinese classics were published in Batavia (Jakarta) in the 1880s, and by 1889 similar versions appeared in Singapore. Chan added historical explanations, sometimes in English, and included Chinese characters for names and titles. His books appeared in series like magazines, with news reports, amusing stories, and correspondence. Readership stretched across the Malay Archipelago and included romanized-Malay readers, not just Peranakans familiar with Baba Malay."}'
data += ',{"name" : "Ong Boon Tat","stats":"1 1 3 1 1","color":"darkolivegreen","meta-data" : "Singapore 1888 to 1941 Singapore", "nickname":"Amusement park pioneer","abstract":"In 1923, Ong Boon Tat opened New World, the first amusement park in Singapore. It came to include many attractions, including an air-conditioned cabaret with a large dance floor, movies screenings, boxing tournaments, ronggeng, bangsawan, Cantonese opera, and beauty contests. Visitors could also buy tickets to dance with the “taxi dancers”. The park offered Western and Asian entertainments for an audience drawn from all ethnic groups."}'

data += ',{"name" : "Goh Hood Keng","stats":"1 5 1 1 1","color":"darksalmon","meta-data" : "Singapore 1888 to 1961 Singapore", "nickname":"Methodist preacher","abstract":"Reverend Goh served for many years as pastor of the Straits Chinese Methodist Church (now Kampong Kapor Methodist Church), which had a large Peranakan congregation. He was the first Straits Chinese to be ordained a Methodist minister. By his own account, his parents, strict Buddhists, initially objected but later came to accept his conversion to Christianity ."}'
data += ',{"name" : "Song Ong Siang","stats":"1 1 4 4 1","color":"darkslategrey","meta-data" : "Singapore 1871 to 1941 Singapore", "nickname":"Historian of the Straits Chinese and Singapore’s first Chinese knight","abstract":"The first Chinese from Malaya to receive a British knighthood, Song Ong Siang was deeply committed to reforming the Chinese community in the Straits. That he was also among the most pro-British of all Peranakans embodies the complexities of Singapore’s transition to the modern world."}'
data += ',{"name" : "Tan Chay Yan","stats":"4 1 1 3 1","color":"deepskyblue","meta-data" : "Malacca 1871 to 1916 Malacca", "nickname":"Rubber king","abstract":"In 1895, Tan Chay Yan obtained nine rubber tree seedlings from the Singapore Botanic Gardens (the rubber plant originated in Brazil), and used them to start a plantation at Bukit Lintang, Malacca, using his father’s old tapioca farm. Tan’s work started the rubber industry in Malaya, which by 1920 had covered 2.2 million acres, and was a major cash crop for the region. Tan’s 3000-acre rubber plantation at Bukit Asahan was the largest in world. He contracted malaria through his work in the plantations and died in 1916."}'
data += ',{"name" : "Lim Nee Soon","stats":"1 2 1 3 1","color":"firebrick","meta-data" : "Singapore 1879 to 1936 Shanghai", "nickname":"Pineapple king and Chinese Nationalist","abstract":"Lim Nee Soon married Wi Pek Hay, a Peranakan woman whose father is thought to have been a kapitan in Bali. Lim started a rubber and pineapple company in 1911, and his large plantations in the booming pineapple industry earned him the moniker “Pineapple King”."}'
data += ',{"name" : "Tan Boo Liat","stats":"1 2 4 3 1","color":"darkorange","meta-data" : "Singapura 1875 to 1934 Shanghai", "nickname":"Horse racing enthusiast","abstract":"Great-grandson of Tan Tock Seng, Tan Boo Liat followed his ancestors in leading the Hokkien Huay Kuan and Thian Hock Keng temple. He had strong international connections and commercial interests in Thailand. He was also a supporter of Sun Yat-sen and president of the Kuomintang in Singapore."}'

data += ',{"name" : "Lim Boon Keng","stats":"5 5 4 3 1","color":"gainsboro","meta-data" : "Penang 1869 to 1957 Singapore", "nickname":"The first Chinese Queen’s Scholar, Lim earned first-class honours in medicine at University of Edinburgh. He joined the Straits Legislative Council and helped found the Straits Chinese Magazine and the Straits Chinese British Association."}'
data += ',{"name" : "Chew Joo Chiat","stats":"1 2 3 3 1","color":"honeydew","meta-data" : "Xiamen 1857 to 1926 Singapore", "nickname":" King of Katong","abstract":"After moving to Singapore, Chew Joo Chiat married a Peranakan woman named Tan Quan Neo. He made his fortune by growing gambier, nutmeg, and coconut. Chew acquired large tracts of land in the Katong area of Singapore. In 1917, he allowed a public road through his land, and today the area is known as Joo Chiat."}'
data += ',{"name" : "Cheong Koon Seng","stats":"1 1 4 1 1","color":"ivory","meta-data" : "Singapore 1880 to 1934 Singapore", "nickname":"Malay-language theatre impresario","abstract":"Cheong Koon Seng built the Theatre Royal as a venue for the Star Opera Company, a Malay-language performance company. It was the first major theatre in Singapore to specialize in Malay performances. It presented Shakespeare’s plays, Chinese classics, and fairy tales of many cultures – all embellished with a variety of entertainments, from dance and music to magic, wrestling, and clowns."}'
data += ',{"name" : "Lee Choon Guan","stats":"1 1 4 3 2","color":"lawngreen","meta-data" : "Singapore 1868 to 1924 Singapore", "nickname":"Banker","abstract":"The son of Lee Cheng Yan, Lee Choon Guan greatly expanded his family’s wealth through shipping and banking. Lee was chairman of the Chinese Commercial Bank, which later merged with Ho Hong Bank to form the Oversea-Chinese Banking Corporation (OCBC)."}'
data += ',{"name" : "Koh Hoon Teck","stats":"1 4 1 3 2","color":"lightskyblue","meta-data" : "Singapore 1878 to 1956 Singapore", "nickname":"Master of Malay poetry and song","abstract":"Koh Hoon Teck was a master of pantun (a Malay poetic form) and dondang sayang (an exchange of songs). He began his career in 1904 as one of the Cornwall Minstrels, a group of “young respectable Straits Chinese gentlemen” who performed comic songs in English for weddings, parties, and charity events. In 1910, Koh founded the Gunong Sayang Association, one of the earliest Peranakan theatre groups in Singapore, which remains active today. He would often gather members of the association for rehearsals at his home, with him on violin. He requested that dondang sayang accompany his funeral."}'

data += ',{"name" : "Lee Choo Neo","stats":"1 5 4 3 2","color":"darkcyan","meta-data" : "Singapore 1895 to 1947 Singapore", "nickname":"Singapore’s first female doctor","abstract":"Lee Choo Neo broke away from the tradition of the cloistered nyonya, and used her privileged position to take advantage of social reforms. She was the daughter of a Peranakan from Semarang who managed Oei Tiong Ham’s shipping company in Singapore. Her brother, Lee Chin Koon, was the father of Lee Kuan Yew."}'
data += ',{"name" : "Lim Yew Hock","stats":"5 5 1 3 2","color":"darkorange","meta-data" : "Singapore 1914 to 1984 Jeddah", "nickname":"Second chief minister of Singapore","abstract":"Lim Yew Hock was one of the most powerful Singaporean politicians in the years before Singapore’s independence. A third-generation Peranakan, Lim was a member of the Straits Chinese British Association. After the resignation of David Marshall, he served as the country’s second chief minister, from 1956 to 1959."}'
data += ',{"name" : "Toh Chin Chye","stats":"1 2 4 3 1","color":"darkseagreen","meta-data" : "Perak 1921 to 2012 Singapore", "nickname":"Founding chairman of the PAP","abstract":"Toh proposed the formation of the People’s Action Party and was its chairman for 27 years. After the 1959 general election victory, his vote picked Lee Kuan Yew as the prime minister of Singapore. As Singapore’s first deputy prime minister, he was a strong advocate of merger with Malaysia, although a rift later developed with Lee over the separation of the two nations."}'
data += ',{"name" : "Tan Tock Seng","stats":"1 1 4 3 1","color":"darkorange","meta-data" : "Malacca 1798 to 1850 Singapore", "nickname":"The first community leader","abstract":"Tan Tock Seng arrived in Singapore in 1819, the year it was established by the British. He sold produce before building his fortune as a landowner in partnership with J. H. Whitehead of the British firm of Shaw, Whitehead and Company."}'
data += ',{"name" : "Gan Eng Seng","stats":"1 1 4 3 1","color":"darkorange","meta-data" : "Malacca 1844 to 1899 Singapore", "nickname":"Founder of a bilingual Chinese-English school","abstract":"Gan Eng Seng was born to a poor family in Malacca and moved to Singapore at the age of 16. He joined Guthrie and Co., one of the leading trading firms in Singapore, and eventually rose to be its chief comprador. He made his fortune contracting labour for Tanjong Pagar Dock Co. and from land holdings."}]'

var image_arr = ["images/cheahhonglim.jpg","images/oeitiongham.jpg","images/tanjiakkim.jpg","images/chankimboon.jpg","images/ongboontat.jpg","images/gohhoodkeng.jpeg","images/songongsiang.jpg","images/tanchayyan.jpg","images/limneesoon.jpeg","images/tanbooliat.jpg","images/limboonkeng.jpg","images/chewjoochiat.jpg","images/cheongkoonseng.jpg","images/leechoonguan.jpg","images/kohhoonteck.jpg","images/leechooneo.jpg","images/limyewhock.jpeg"];

function changeText(val){
    var mydata = JSON.parse(data);

    console.log(mydata[0]);

    var pName = document.getElementById("personName");
    var pNameText = "";
    pNameText += mydata[val]["name"];

    var pMeta = document.getElementById("personMeta");
    var pMetaText = "";
    pMetaText += mydata[val]["meta-data"];

    var pNick = document.getElementById("personNickname");
    var pNickText = "";
    pNickText += mydata[val]["nickname"];

    var pAbstract = document.getElementById("personAbstract");
    var pAbstractText = "";
    pAbstractText += mydata[val]["abstract"];

    document.getElementById("personPhoto").src = image_arr[val];
    console.log(image_arr[val]);
    pName.innerHTML = pNameText;
    pMeta.innerHTML = pMetaText;
    pNick.innerHTML = pNickText;
    pAbstract.innerHTML = pAbstractText;
    displaySpyder(mydata[val]["color"],mydata[val]["stats"]);
}


function integerArray(integerString) {
    var myArray = integerString.split(" ");
    for( var i=0; i<myArray.length; i++) { 
        myArray[i] = +myArray[i]; 
    }
    
    return myArray;
}

displaySpyderOnRefresh();
function displaySpyderOnRefresh() {
    changeText(0);
}


function displaySpyder(shapeColor,shapeStats){

let data1 = [];
statsData = integerArray(shapeStats);
// let features = ["A","B","C","D","E","F"];
let features = ["Education","Healthcare","Economy","Arts and Culture","Politics"];
//generate the data
for (var i = 0; i < 1; i++){
    var point = {}
    //each feature will be a random number from 1-9
    var j = 0;
    features.forEach(f => point[f] = statsData[j++]);
    data1.push(point);
}
console.log(data1);
var svg2 = d3.select("#svg2");

// svg2.remove();

let radialScale = d3.scaleLinear()
    .domain([0,10])
    .range([0,200]);
let ticks = [1,2,3,4,5];

ticks.forEach(t =>
    svg2.append("circle")
    .attr("cx", 300)
    .attr("cy", 300)
    .attr("fill", "none")
    .attr("stroke", "gray")
    .attr("r", radialScale(t))
);

function angleToCoordinate(angle, value){
    let x = Math.cos(angle) * radialScale(value);
    let y = Math.sin(angle) * radialScale(value);
    return {"x": 300 + x, "y": 300 - y};
}

for (var i = 0; i < features.length; i++) {
    let ft_name = features[i];
    let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
    let line_coordinate = angleToCoordinate(angle, 10);
    let label_coordinate = angleToCoordinate(angle, 10.5);

    //draw axis line
    svg2.append("line")
    .attr("x1", 300)
    .attr("y1", 300)
    .attr("x2", line_coordinate.x)
    .attr("y2", line_coordinate.y)
    .attr("stroke","black");

    //draw axis label
    svg2.append("text")
    .attr("x", label_coordinate.x)
    .attr("y", label_coordinate.y)
    .text(ft_name);
}


let line = d3.line()
    .x(d => d.x)
    .y(d => d.y);
let colors = ["darkorange", "gray", "navy"];



function getPathCoordinates(data_point){
    let coordinates = [];
    for (var i = 0; i < features.length; i++){
        let ft_name = features[i];
        let angle = (Math.PI / 2) + (2 * Math.PI * i / features.length);
        coordinates.push(angleToCoordinate(angle, data_point[ft_name]));
    }
    return coordinates;
}



for (var i = 0; i < data1.length; i ++){
    let d = data1[i];
    let color = colors[i];
    let coordinates = getPathCoordinates(d);

    console.log(coordinates)

    //draw the path element
    svg2.append("path")
    .datum(coordinates)
    .attr("d",line)
    .attr("stroke-width", 3)
    .attr("stroke", shapeColor)
    .attr("fill", shapeColor)
    .attr("stroke-opacity", 1)
    .attr("opacity", 0.8);
}
}