import axios from "axios";
import {
    createRequire
} from "module";
const require = createRequire(
    import.meta.url);
import {
    stringify
} from "node:querystring";
let fs = require("fs");

var url =
    "https://www.toutiao.com/api/pc/feed/?max_behot_time=1616307926&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&_signature=_02B4Z6wo00501nXVgjQAAIDCD2y7kiEkGj518YaAAP0xEa1OvIy5sCEf.jiQanJz8M6XHD3OoOelDvKy7BLpN0.HRYsWWtJv4h61oe1WciOuRSJ1GeGwhZNAYrQgFBwzmg1WEwz0N6JXShmcb7";

axios
    .get(url, {
        headers: {
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4442.4 Safari/537.36",
            cookie: "tt_webid=6939045076816463396; ttcid=21183a9b17f84d138c96de31a326a8de29; csrftoken=d3364b83e0ce7933d05c1aa31db3f46b; tt_webid=6939045076816463396; ttwid=1%7CICE6IJzfTU4wK1XzkgZRf9iHauemO_Wv3qKjCNpcQCk%7C1615624974%7Cd2041b78e4bc98c0b2487ee15fa8da91602c72b263e0bba516d8de47e3692ee8; passport_csrf_token=a91af50aa7780604458ea1f6b136aba7; __ac_signature=_02B4Z6wo00f01YxZm2gAAIDB9uCizmgJpsmMfZ.AAANIQn10l0ft.R3odBNZLvk4e2A.QpaFHp-OQ-RMroi7VTlwvdetTDYbQ8kNZcEjKO1yzLrhl5hWQHy0TYt774KZXxwZzQ-p2HWoJM.Z11; MONITOR_WEB_ID=a41a035a-fafd-46a5-9d28-04c1cea87d57; s_v_web_id=verify_kmixjr0t_DPNwcc5P_Cv4N_4UOF_8jF8_exZKiuPPNn6W; tt_scid=TkKviYkXIry-5PXoEBOjNPaOiTtbdd8E1an.CtzuK5Zcfm-xkvOF8ZRLE6gdYkeScc3b",
        },
    })
    .then((res) => {
        fs.writeFileSync("res.json", JSON.stringify(res.data.data));
    })
    .catch(() => {
        console.log("spider get error");
    });