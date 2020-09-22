export class Helper {
    static scrollToTop = () => {
        document.getElementsByTagName('html')[0].setAttribute('smooth','false');
        window.scrollTo(0,0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        if(navigator.userAgent.search("Firefox")  > -1){
            document.location.href = "#top";
            console.log('the shit is ' + document.documentElement.scrollTop);
        }
        document.getElementsByTagName('html')[0].setAttribute('smooth','true');
    }
}