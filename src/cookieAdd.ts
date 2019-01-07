class CookieAdd {


    constructor() {

    }

    public setCookie(cname: any, cvalue: any, exdays: any) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    public getCookie(cname: any) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    public checkCookie(subject: string, score: number): any {
        if (subject == 'highscore') {
            let i = 1
            while (i < 6) {
                var user = this.getCookie(`username` + i);
                const points = Number(this.getCookie(`points` + i));
                if ((points == null || points <= score)) {
                    user = prompt("Geef een gamenaam in:", "");

                    for (let y = 5; y > i - 1; y--) {
                        this.setCookie((`username` + (y + 1)), this.getCookie(`username` + y), 30);
                        this.setCookie((`points` + (y + 1)), Number(this.getCookie(`points` + y)), 30);
                    }
                    if (user != "" && user != null) {
                        this.setCookie((`username` + i), user, 30);
                        this.setCookie((`points` + i), score, 30)
                    }
                    i = 6
                }
                else {
                    i++;
                }

            }

            for (let z = 1; z < 6; z++) {
                document.getElementById(`place${z}`).innerHTML = `${this.getCookie(`username` + z)}: ${Number(this.getCookie(`points` + z))} punten`;
            }
        }
        else if (subject == 'backgroundMusic') {
            const muted = this.getCookie('muted')
            if (muted == 'false') {
                return false;
            }
            else if (muted == 'true'){
                return true;
            }
        }
    }

    public muteCookie(condition: boolean){
        if(condition == true){
            this.setCookie('muted', 'false', 30);
        }
        else if(condition == false){
            this.setCookie('muted', 'true', 30);
        }
    }
}