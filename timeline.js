


function firstTimeline(val) {
    if (val == 0) {
        document.getElementById("timelinePeriod").innerHTML = "15th Century";
        document.getElementById("timelineCommentary").innerHTML = "Traders from China came to Singapore, Malaysia and Indonesia (Melaka, Penang, Singapore, and Cirebon)";
    }
    if (val == 1) {
        document.getElementById("timelinePeriod").innerHTML = "1819";
        document.getElementById("timelineCommentary").innerHTML = "British colonization of Singapore";
    }

    if (val == 2) {
        document.getElementById("timelinePeriod").innerHTML = "1819-1889";
        document.getElementById("timelineCommentary").innerHTML = "British reliance on the Peranakans as leaders to control trade resulting in Perankan dominace of the economies of Singapore and Malaysia";
    }

    if (val == 3) {
        document.getElementById("timelinePeriod").innerHTML = "1850-1940";
        document.getElementById("timelineCommentary").innerHTML = "New wave of chinese immigrants from China called Sinkeh - different from Peranakans in social and economic status";
    }
    if (val == 4) {
        document.getElementById("timelinePeriod").innerHTML = "1945";
        document.getElementById("timelineCommentary").innerHTML = "Hokkien-Teochew confict led to the Perankans appointment to the Legislative Council of the Straits Settlement";
    }

    if (val == 5) {
        document.getElementById("timelinePeriod").innerHTML = " Mid 20th Century";
        document.getElementById("timelineCommentary").innerHTML = "Lost of Chinese fluency";
    }

    if (val == 6) {
        document.getElementById("timelinePeriod").innerHTML = "1971";
        document.getElementById("timelineCommentary").innerHTML = "Decline of Peranakan scoietal and economic dominance with the departure of the British";
    }
}