const browserVersion='Chrome'
function getBrowserVersion()
{
    if (browserVersion==='Chrome')
    {
        let browserVersion='firefox'
    console.log("The Browser version inside function is: "+browserVersion)
    }
    console.log("The Browser version outside function is: "+browserVersion)
}
getBrowserVersion()
console.log("The global Browser version is: "+browserVersion)