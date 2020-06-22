var Thread;
(function (Thread) {
    Thread.Marks = ["", "А"];
    Thread.Description = ["Жилы - медные", "Жилы - алюминиевые"];
})(Thread || (Thread = {}));
var Isolate;
(function (Isolate) {
    Isolate.Marks = ["", "Ц", "-В", "В", "П", "Пс", "Пв", "Пвс", "Р"];
    Isolate.Description = [
        "Изоляция - бумажная",
        "Изоляция - бумажная, пропитанная нестекающим составом",
        "Изоляция - бумажная с обедненной пропиткой",
        "Изоляция - поливинилхлоридная",
        "Изоляция - полиэтиленовая",
        "Изоляция - из самозатухающего полиэтилена",
        "Изоляция - из вулканизированного полиэтилена",
        "Изоляция - из вулканизированного самозатухающего полиэтилена",
        "Изоляция - резиновая"
    ];
})(Isolate || (Isolate = {}));
var Cover;
(function (Cover) {
    Cover.Marks = ["А", "СТ", "В", "С", "П", "Н"];
    Cover.Description = [
        "Оболочка - алюминиевая",
        "Оболочка - стальная гофрированная",
        "Оболочка - поливинилхлоридная",
        "Оболочка - свинцовая",
        "Оболочка - полиэтиленовая",
        "Оболочка - найритовая"
    ];
})(Cover || (Cover = {}));
var Bron;
(function (Bron) {
    Bron.Marks = ["", "Б", "П", "К"];
    Bron.Description = [
        "Небронированный",
        "Броня - 2 стальные оцинкованные ленты",
        "Броня - плоские стальные оцинкованные проволоки",
        "Броня - круглые стальные оцинкованные проволоки"
    ];
})(Bron || (Bron = {}));
var UnderBron;
(function (UnderBron) {
    UnderBron.Marks = ["", "л", "2л", "п", "в", "б"];
    UnderBron.Description = [
        "Подушка под броней - нормальная (битум, кабельная бумага, кабельная пряжа)",
        "Подушка под броней - усиленная (битум, кабельная бумага, кабельная пряжа, один слой пластмассовой ленты)",
        "Подушка под броней - особо усиленная (битум, кабельная бумага, кабельная пряжа, два слоя пластмассовой ленты)",
        "Подушка под броней - с полиэтиленовым шлангом (битум, пластмассовая лента, ПЭ шланг, кабельная бумага)",
        "Подушка под броней - с поливинилхлоридным шлангом (битум, пластмассовая лента, ПВХ шланг, кабельная бумага)",
        "Без подушки под броней"
    ];
})(UnderBron || (UnderBron = {}));
var OuterCover;
(function (OuterCover) {
    OuterCover.Marks = ["", "н", "Шп", "Шв", "Г"];
    OuterCover.Description = [
        "Наружный покров - нормальный (битум, кабельная пряжа)",
        "Наружный покров - негорючий (негорючий состав, пряжа из штапельрованного стекловолокна)",
        "Наружный покров - полиэтиленовый шланг",
        "Наружный покров - поливинилхлоридный шланг",
        "Без наружного покрова"
    ];
})(OuterCover || (OuterCover = {}));
var Plosk;
(function (Plosk) {
    Plosk.Marks = ["", "-П"];
    Plosk.Description = ["", "Кабель плоский"];
})(Plosk || (Plosk = {}));
var Greeter = /** @class */ (function () {
    function Greeter() {
        //this.element = element;
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
        var _this = this;
        this.UserMarkInputElement = document.getElementById("UserMark");
        this.UserMarkInputElement.addEventListener('keyup', function (e) {
            _this.start();
        });
        this.KabelDescriptionDiv = document.getElementById("KabelDescription");
    }
    Greeter.prototype.start = function () {
        for (var iThread = 0; iThread < Thread.Marks.length; iThread++) {
            for (var iIsolate = 0; iIsolate < Isolate.Marks.length; iIsolate++) {
                for (var iCover = 0; iCover < Cover.Marks.length; iCover++) {
                    for (var iBron = 0; iBron < Bron.Marks.length; iBron++) {
                        var underbron_to = iBron == 0 ? 0 : UnderBron.Marks.length - 1;
                        var outercover_from = iBron == 0 ? 4 : 0;
                        for (var iUnderBron = 0; iUnderBron <= underbron_to; iUnderBron++) {
                            for (var iOuterCover = outercover_from; iOuterCover < OuterCover.Marks.length; iOuterCover++) {
                                for (var iPlosk = 0; iPlosk < Plosk.Marks.length; iPlosk++) {
                                    var sThread = Thread.Marks[iThread];
                                    var sIsolate = Isolate.Marks[iIsolate];
                                    var sCover = Cover.Marks[iCover];
                                    var sBron = Bron.Marks[iBron];
                                    var sUnderBron = UnderBron.Marks[iUnderBron];
                                    var sOuterCover = OuterCover.Marks[iOuterCover];
                                    var sPlosk = Plosk.Marks[iPlosk];
                                    var sMark = "";
                                    if (sIsolate == "Ц")
                                        sMark = sIsolate + sThread + sCover + sBron + sUnderBron + sOuterCover + sPlosk;
                                    else if (sIsolate == "-В")
                                        sMark = sThread + sCover + sBron + sUnderBron + sOuterCover + sIsolate + sPlosk;
                                    else if (sIsolate == "Р")
                                        sMark = sThread + sCover + sIsolate + sBron + sUnderBron + sOuterCover + sPlosk;
                                    else
                                        sMark = sThread + sIsolate + sCover + sBron + sUnderBron + sOuterCover + sPlosk;
                                    var sUserMark = this.UserMarkInputElement.value;
                                    this.KabelDescriptionDiv.innerHTML = "";
                                    var pm = document.createElement("p");
                                    pm.innerText = sUserMark;
                                    this.KabelDescriptionDiv.appendChild(pm);
                                    if (sMark.toUpperCase() == sUserMark.toUpperCase()) {
                                        this.KabelDescriptionDiv.innerHTML = "";
                                        var p_1 = document.createElement("p");
                                        p_1.innerText = Thread.Description[iThread];
                                        this.KabelDescriptionDiv.appendChild(p_1);
                                        p_1 = document.createElement("p");
                                        p_1.innerText = Isolate.Description[iIsolate];
                                        this.KabelDescriptionDiv.appendChild(p_1);
                                        p_1 = document.createElement("p");
                                        p_1.innerText = Cover.Description[iCover];
                                        this.KabelDescriptionDiv.appendChild(p_1);
                                        p_1 = document.createElement("p");
                                        p_1.innerText = Bron.Description[iBron];
                                        this.KabelDescriptionDiv.appendChild(p_1);
                                        if (iBron != 0) {
                                            p_1 = document.createElement("p");
                                            p_1.innerText = UnderBron.Description[iUnderBron];
                                            this.KabelDescriptionDiv.appendChild(p_1);
                                        }
                                        p_1 = document.createElement("p");
                                        p_1.innerText = OuterCover.Description[iOuterCover];
                                        this.KabelDescriptionDiv.appendChild(p_1);
                                        if (iPlosk == 1) {
                                            p_1 = document.createElement("p");
                                            p_1.innerText = Plosk.Description[iPlosk];
                                            this.KabelDescriptionDiv.appendChild(p_1);
                                        }
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        this.KabelDescriptionDiv.innerHTML = "";
        var p = document.createElement("p");
        p.innerText = "Не удалось расшифровать маркировку";
        this.KabelDescriptionDiv.appendChild(p);
    };
    return Greeter;
}());
window.onload = function () {
    var greeter = new Greeter();
    greeter.start();
};
//# sourceMappingURL=Greeter.js.map