(() => {
    "use strict";
    var t = {
        9696: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Animation = void 0;
            const r = i(8871), a = i(4060), n = r.glob.performance && r.glob.performance.now ? function () {
                return r.glob.performance.now()
            } : function () {
                return (new Date).getTime()
            };

            class s {
                constructor(t, e) {
                    this.id = s.animIdCounter++, this.frame = {
                        time: 0,
                        timeDiff: 0,
                        lastTime: n(),
                        frameRate: 0
                    }, this.func = t, this.setLayers(e)
                }

                setLayers(t) {
                    let e = [];
                    return t && (e = Array.isArray(t) ? t : [t]), this.layers = e, this
                }

                getLayers() {
                    return this.layers
                }

                addLayer(t) {
                    const e = this.layers, i = e.length;
                    for (let r = 0; r < i; r++) if (e[r]._id === t._id) return !1;
                    return this.layers.push(t), !0
                }

                isRunning() {
                    const t = s.animations, e = t.length;
                    for (let i = 0; i < e; i++) if (t[i].id === this.id) return !0;
                    return !1
                }

                start() {
                    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = n(), s._addAnimation(this), this
                }

                stop() {
                    return s._removeAnimation(this), this
                }

                _updateFrameObject(t) {
                    this.frame.timeDiff = t - this.frame.lastTime, this.frame.lastTime = t, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff
                }

                static _addAnimation(t) {
                    this.animations.push(t), this._handleAnimation()
                }

                static _removeAnimation(t) {
                    const e = t.id, i = this.animations, r = i.length;
                    for (let t = 0; t < r; t++) if (i[t].id === e) {
                        this.animations.splice(t, 1);
                        break
                    }
                }

                static _runFrames() {
                    const t = {}, e = this.animations;
                    for (let i = 0; i < e.length; i++) {
                        const r = e[i], a = r.layers, s = r.func;
                        r._updateFrameObject(n());
                        const o = a.length;
                        let h;
                        if (h = !s || !1 !== s.call(r, r.frame), h) for (let e = 0; e < o; e++) {
                            const i = a[e];
                            void 0 !== i._id && (t[i._id] = i)
                        }
                    }
                    for (let e in t) t.hasOwnProperty(e) && t[e].batchDraw()
                }

                static _animationLoop() {
                    const t = s;
                    t.animations.length ? (t._runFrames(), a.Util.requestAnimFrame(t._animationLoop)) : t.animRunning = !1
                }

                static _handleAnimation() {
                    this.animRunning || (this.animRunning = !0, a.Util.requestAnimFrame(this._animationLoop))
                }
            }

            e.Animation = s, s.animations = [], s.animIdCounter = 0, s.animRunning = !1
        }, 5570: (t, e) => {
            function i(t, e, i) {
                const a = r(1, i, t), n = r(1, i, e), s = a * a + n * n;
                return Math.sqrt(s)
            }

            Object.defineProperty(e, "__esModule", {value: !0}), e.t2length = e.getQuadraticArcLength = e.getCubicArcLength = e.binomialCoefficients = e.cValues = e.tValues = void 0, e.tValues = [[], [], [-.5773502691896257, .5773502691896257], [0, -.7745966692414834, .7745966692414834], [-.33998104358485626, .33998104358485626, -.8611363115940526, .8611363115940526], [0, -.5384693101056831, .5384693101056831, -.906179845938664, .906179845938664], [.6612093864662645, -.6612093864662645, -.2386191860831969, .2386191860831969, -.932469514203152, .932469514203152], [0, .4058451513773972, -.4058451513773972, -.7415311855993945, .7415311855993945, -.9491079123427585, .9491079123427585], [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363], [0, -.8360311073266358, .8360311073266358, -.9681602395076261, .9681602395076261, -.3242534234038089, .3242534234038089, -.6133714327005904, .6133714327005904], [-.14887433898163122, .14887433898163122, -.4333953941292472, .4333953941292472, -.6794095682990244, .6794095682990244, -.8650633666889845, .8650633666889845, -.9739065285171717, .9739065285171717], [0, -.26954315595234496, .26954315595234496, -.5190961292068118, .5190961292068118, -.7301520055740494, .7301520055740494, -.8870625997680953, .8870625997680953, -.978228658146057, .978228658146057], [-.1252334085114689, .1252334085114689, -.3678314989981802, .3678314989981802, -.5873179542866175, .5873179542866175, -.7699026741943047, .7699026741943047, -.9041172563704749, .9041172563704749, -.9815606342467192, .9815606342467192], [0, -.2304583159551348, .2304583159551348, -.44849275103644687, .44849275103644687, -.6423493394403402, .6423493394403402, -.8015780907333099, .8015780907333099, -.9175983992229779, .9175983992229779, -.9841830547185881, .9841830547185881], [-.10805494870734367, .10805494870734367, -.31911236892788974, .31911236892788974, -.5152486363581541, .5152486363581541, -.6872929048116855, .6872929048116855, -.827201315069765, .827201315069765, -.9284348836635735, .9284348836635735, -.9862838086968123, .9862838086968123], [0, -.20119409399743451, .20119409399743451, -.3941513470775634, .3941513470775634, -.5709721726085388, .5709721726085388, -.7244177313601701, .7244177313601701, -.8482065834104272, .8482065834104272, -.937273392400706, .937273392400706, -.9879925180204854, .9879925180204854], [-.09501250983763744, .09501250983763744, -.2816035507792589, .2816035507792589, -.45801677765722737, .45801677765722737, -.6178762444026438, .6178762444026438, -.755404408355003, .755404408355003, -.8656312023878318, .8656312023878318, -.9445750230732326, .9445750230732326, -.9894009349916499, .9894009349916499], [0, -.17848418149584785, .17848418149584785, -.3512317634538763, .3512317634538763, -.5126905370864769, .5126905370864769, -.6576711592166907, .6576711592166907, -.7815140038968014, .7815140038968014, -.8802391537269859, .8802391537269859, -.9506755217687678, .9506755217687678, -.9905754753144174, .9905754753144174], [-.0847750130417353, .0847750130417353, -.2518862256915055, .2518862256915055, -.41175116146284263, .41175116146284263, -.5597708310739475, .5597708310739475, -.6916870430603532, .6916870430603532, -.8037049589725231, .8037049589725231, -.8926024664975557, .8926024664975557, -.9558239495713977, .9558239495713977, -.9915651684209309, .9915651684209309], [0, -.16035864564022537, .16035864564022537, -.31656409996362983, .31656409996362983, -.46457074137596094, .46457074137596094, -.600545304661681, .600545304661681, -.7209661773352294, .7209661773352294, -.8227146565371428, .8227146565371428, -.9031559036148179, .9031559036148179, -.96020815213483, .96020815213483, -.9924068438435844, .9924068438435844], [-.07652652113349734, .07652652113349734, -.22778585114164507, .22778585114164507, -.37370608871541955, .37370608871541955, -.5108670019508271, .5108670019508271, -.636053680726515, .636053680726515, -.7463319064601508, .7463319064601508, -.8391169718222188, .8391169718222188, -.912234428251326, .912234428251326, -.9639719272779138, .9639719272779138, -.9931285991850949, .9931285991850949], [0, -.1455618541608951, .1455618541608951, -.2880213168024011, .2880213168024011, -.4243421202074388, .4243421202074388, -.5516188358872198, .5516188358872198, -.6671388041974123, .6671388041974123, -.7684399634756779, .7684399634756779, -.8533633645833173, .8533633645833173, -.9200993341504008, .9200993341504008, -.9672268385663063, .9672268385663063, -.9937521706203895, .9937521706203895], [-.06973927331972223, .06973927331972223, -.20786042668822127, .20786042668822127, -.34193582089208424, .34193582089208424, -.469355837986757, .469355837986757, -.5876404035069116, .5876404035069116, -.6944872631866827, .6944872631866827, -.7878168059792081, .7878168059792081, -.8658125777203002, .8658125777203002, -.926956772187174, .926956772187174, -.9700604978354287, .9700604978354287, -.9942945854823992, .9942945854823992], [0, -.1332568242984661, .1332568242984661, -.26413568097034495, .26413568097034495, -.3903010380302908, .3903010380302908, -.5095014778460075, .5095014778460075, -.6196098757636461, .6196098757636461, -.7186613631319502, .7186613631319502, -.8048884016188399, .8048884016188399, -.8767523582704416, .8767523582704416, -.9329710868260161, .9329710868260161, -.9725424712181152, .9725424712181152, -.9947693349975522, .9947693349975522], [-.06405689286260563, .06405689286260563, -.1911188674736163, .1911188674736163, -.3150426796961634, .3150426796961634, -.4337935076260451, .4337935076260451, -.5454214713888396, .5454214713888396, -.6480936519369755, .6480936519369755, -.7401241915785544, .7401241915785544, -.820001985973903, .820001985973903, -.8864155270044011, .8864155270044011, -.9382745520027328, .9382745520027328, -.9747285559713095, .9747285559713095, -.9951872199970213, .9951872199970213]], e.cValues = [[], [], [1, 1], [.8888888888888888, .5555555555555556, .5555555555555556], [.6521451548625461, .6521451548625461, .34785484513745385, .34785484513745385], [.5688888888888889, .47862867049936647, .47862867049936647, .23692688505618908, .23692688505618908], [.3607615730481386, .3607615730481386, .46791393457269104, .46791393457269104, .17132449237917036, .17132449237917036], [.4179591836734694, .3818300505051189, .3818300505051189, .27970539148927664, .27970539148927664, .1294849661688697, .1294849661688697], [.362683783378362, .362683783378362, .31370664587788727, .31370664587788727, .22238103445337448, .22238103445337448, .10122853629037626, .10122853629037626], [.3302393550012598, .1806481606948574, .1806481606948574, .08127438836157441, .08127438836157441, .31234707704000286, .31234707704000286, .26061069640293544, .26061069640293544], [.29552422471475287, .29552422471475287, .26926671930999635, .26926671930999635, .21908636251598204, .21908636251598204, .1494513491505806, .1494513491505806, .06667134430868814, .06667134430868814], [.2729250867779006, .26280454451024665, .26280454451024665, .23319376459199048, .23319376459199048, .18629021092773426, .18629021092773426, .1255803694649046, .1255803694649046, .05566856711617366, .05566856711617366], [.24914704581340277, .24914704581340277, .2334925365383548, .2334925365383548, .20316742672306592, .20316742672306592, .16007832854334622, .16007832854334622, .10693932599531843, .10693932599531843, .04717533638651183, .04717533638651183], [.2325515532308739, .22628318026289723, .22628318026289723, .2078160475368885, .2078160475368885, .17814598076194574, .17814598076194574, .13887351021978725, .13887351021978725, .09212149983772845, .09212149983772845, .04048400476531588, .04048400476531588], [.2152638534631578, .2152638534631578, .2051984637212956, .2051984637212956, .18553839747793782, .18553839747793782, .15720316715819355, .15720316715819355, .12151857068790319, .12151857068790319, .08015808715976021, .08015808715976021, .03511946033175186, .03511946033175186], [.2025782419255613, .19843148532711158, .19843148532711158, .1861610000155622, .1861610000155622, .16626920581699392, .16626920581699392, .13957067792615432, .13957067792615432, .10715922046717194, .10715922046717194, .07036604748810812, .07036604748810812, .03075324199611727, .03075324199611727], [.1894506104550685, .1894506104550685, .18260341504492358, .18260341504492358, .16915651939500254, .16915651939500254, .14959598881657674, .14959598881657674, .12462897125553388, .12462897125553388, .09515851168249279, .09515851168249279, .062253523938647894, .062253523938647894, .027152459411754096, .027152459411754096], [.17944647035620653, .17656270536699264, .17656270536699264, .16800410215645004, .16800410215645004, .15404576107681028, .15404576107681028, .13513636846852548, .13513636846852548, .11188384719340397, .11188384719340397, .08503614831717918, .08503614831717918, .0554595293739872, .0554595293739872, .02414830286854793, .02414830286854793], [.1691423829631436, .1691423829631436, .16427648374583273, .16427648374583273, .15468467512626524, .15468467512626524, .14064291467065065, .14064291467065065, .12255520671147846, .12255520671147846, .10094204410628717, .10094204410628717, .07642573025488905, .07642573025488905, .0497145488949698, .0497145488949698, .02161601352648331, .02161601352648331], [.1610544498487837, .15896884339395434, .15896884339395434, .15276604206585967, .15276604206585967, .1426067021736066, .1426067021736066, .12875396253933621, .12875396253933621, .11156664554733399, .11156664554733399, .09149002162245, .09149002162245, .06904454273764123, .06904454273764123, .0448142267656996, .0448142267656996, .019461788229726478, .019461788229726478], [.15275338713072584, .15275338713072584, .14917298647260374, .14917298647260374, .14209610931838204, .14209610931838204, .13168863844917664, .13168863844917664, .11819453196151841, .11819453196151841, .10193011981724044, .10193011981724044, .08327674157670475, .08327674157670475, .06267204833410907, .06267204833410907, .04060142980038694, .04060142980038694, .017614007139152118, .017614007139152118], [.14608113364969041, .14452440398997005, .14452440398997005, .13988739479107315, .13988739479107315, .13226893863333747, .13226893863333747, .12183141605372853, .12183141605372853, .10879729916714838, .10879729916714838, .09344442345603386, .09344442345603386, .0761001136283793, .0761001136283793, .057134425426857205, .057134425426857205, .036953789770852494, .036953789770852494, .016017228257774335, .016017228257774335], [.13925187285563198, .13925187285563198, .13654149834601517, .13654149834601517, .13117350478706238, .13117350478706238, .12325237681051242, .12325237681051242, .11293229608053922, .11293229608053922, .10041414444288096, .10041414444288096, .08594160621706773, .08594160621706773, .06979646842452049, .06979646842452049, .052293335152683286, .052293335152683286, .03377490158481415, .03377490158481415, .0146279952982722, .0146279952982722], [.13365457218610619, .1324620394046966, .1324620394046966, .12890572218808216, .12890572218808216, .12304908430672953, .12304908430672953, .11499664022241136, .11499664022241136, .10489209146454141, .10489209146454141, .09291576606003515, .09291576606003515, .07928141177671895, .07928141177671895, .06423242140852585, .06423242140852585, .04803767173108467, .04803767173108467, .030988005856979445, .030988005856979445, .013411859487141771, .013411859487141771], [.12793819534675216, .12793819534675216, .1258374563468283, .1258374563468283, .12167047292780339, .12167047292780339, .1155056680537256, .1155056680537256, .10744427011596563, .10744427011596563, .09761865210411388, .09761865210411388, .08619016153195327, .08619016153195327, .0733464814110803, .0733464814110803, .05929858491543678, .05929858491543678, .04427743881741981, .04427743881741981, .028531388628933663, .028531388628933663, .0123412297999872, .0123412297999872]], e.binomialCoefficients = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]], e.getCubicArcLength = (t, r, a) => {
                let n, s, o;
                n = a / 2, s = 0;
                for (let a = 0; a < 20; a++) o = n * e.tValues[20][a] + n, s += e.cValues[20][a] * i(t, r, o);
                return n * s
            }, e.getQuadraticArcLength = (t, e, i) => {
                void 0 === i && (i = 1);
                const r = t[0] - 2 * t[1] + t[2], a = e[0] - 2 * e[1] + e[2], n = 2 * t[1] - 2 * t[0],
                    s = 2 * e[1] - 2 * e[0], o = 4 * (r * r + a * a), h = 4 * (r * n + a * s), l = n * n + s * s;
                if (0 === o) return i * Math.sqrt(Math.pow(t[2] - t[0], 2) + Math.pow(e[2] - e[0], 2));
                const d = h / (2 * o), c = i + d, g = l / o - d * d, u = c * c + g > 0 ? Math.sqrt(c * c + g) : 0,
                    f = d * d + g > 0 ? Math.sqrt(d * d + g) : 0,
                    p = d + Math.sqrt(d * d + g) !== 0 ? g * Math.log(Math.abs((c + u) / (d + f))) : 0;
                return Math.sqrt(o) / 2 * (c * u - d * f + p)
            };
            const r = (t, i, a) => {
                const n = a.length - 1;
                let s, o;
                if (0 === n) return 0;
                if (0 === t) {
                    o = 0;
                    for (let t = 0; t <= n; t++) o += e.binomialCoefficients[n][t] * Math.pow(1 - i, n - t) * Math.pow(i, t) * a[t];
                    return o
                }
                s = new Array(n);
                for (let t = 0; t < n; t++) s[t] = n * (a[t + 1] - a[t]);
                return r(t - 1, i, s)
            };
            e.t2length = (t, e, i) => {
                let r = 1, a = t / e, n = (t - i(a)) / e, s = 0;
                for (; r > .001;) {
                    const o = i(a + n), h = Math.abs(t - o) / e;
                    if (h < r) r = h, a += n; else {
                        const s = i(a - n), o = Math.abs(t - s) / e;
                        o < r ? (r = o, a -= n) : n /= 2
                    }
                    if (s++, s > 500) break
                }
                return a
            }
        }, 8604: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.HitCanvas = e.SceneCanvas = e.Canvas = void 0;
            const r = i(4060), a = i(9869), n = i(8871), s = i(4892), o = i(5483);
            var h;

            class l {
                constructor(t) {
                    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
                    var e = (t || {}).pixelRatio || n.Konva.pixelRatio || function () {
                        if (h) return h;
                        var t = r.Util.createCanvasElement(), e = t.getContext("2d");
                        return h = (n.Konva._global.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1), r.Util.releaseCanvas(t), h
                    }();
                    this.pixelRatio = e, this._canvas = r.Util.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0"
                }

                getContext() {
                    return this.context
                }

                getPixelRatio() {
                    return this.pixelRatio
                }

                setPixelRatio(t) {
                    var e = this.pixelRatio;
                    this.pixelRatio = t, this.setSize(this.getWidth() / e, this.getHeight() / e)
                }

                setWidth(t) {
                    this.width = this._canvas.width = t * this.pixelRatio, this._canvas.style.width = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }

                setHeight(t) {
                    this.height = this._canvas.height = t * this.pixelRatio, this._canvas.style.height = t + "px";
                    var e = this.pixelRatio;
                    this.getContext()._context.scale(e, e)
                }

                getWidth() {
                    return this.width
                }

                getHeight() {
                    return this.height
                }

                setSize(t, e) {
                    this.setWidth(t || 0), this.setHeight(e || 0)
                }

                toDataURL(t, e) {
                    try {
                        return this._canvas.toDataURL(t, e)
                    } catch (t) {
                        try {
                            return this._canvas.toDataURL()
                        } catch (t) {
                            return r.Util.error("Unable to get data URL. " + t.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), ""
                        }
                    }
                }
            }

            e.Canvas = l, s.Factory.addGetterSetter(l, "pixelRatio", void 0, (0, o.getNumberValidator)()), e.SceneCanvas = class extends l {
                constructor(t = {width: 0, height: 0, willReadFrequently: !1}) {
                    super(t), this.context = new a.SceneContext(this, {willReadFrequently: t.willReadFrequently}), this.setSize(t.width, t.height)
                }
            }, e.HitCanvas = class extends l {
                constructor(t = {width: 0, height: 0}) {
                    super(t), this.hitCanvas = !0, this.context = new a.HitContext(this), this.setSize(t.width, t.height)
                }
            }
        }, 4473: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Container = void 0;
            const r = i(4892), a = i(6536), n = i(5483);

            class s extends a.Node {
                constructor() {
                    super(...arguments), this.children = []
                }

                getChildren(t) {
                    if (!t) return this.children || [];
                    const e = this.children || [];
                    var i = [];
                    return e.forEach((function (e) {
                        t(e) && i.push(e)
                    })), i
                }

                hasChildren() {
                    return this.getChildren().length > 0
                }

                removeChildren() {
                    return this.getChildren().forEach((t => {
                        t.parent = null, t.index = 0, t.remove()
                    })), this.children = [], this._requestDraw(), this
                }

                destroyChildren() {
                    return this.getChildren().forEach((t => {
                        t.parent = null, t.index = 0, t.destroy()
                    })), this.children = [], this._requestDraw(), this
                }

                add(...t) {
                    if (0 === t.length) return this;
                    if (t.length > 1) {
                        for (var e = 0; e < t.length; e++) this.add(t[e]);
                        return this
                    }
                    const i = t[0];
                    return i.getParent() ? (i.moveTo(this), this) : (this._validateAdd(i), i.index = this.getChildren().length, i.parent = this, i._clearCaches(), this.getChildren().push(i), this._fire("add", {child: i}), this._requestDraw(), this)
                }

                destroy() {
                    return this.hasChildren() && this.destroyChildren(), super.destroy(), this
                }

                find(t) {
                    return this._generalFind(t, !1)
                }

                findOne(t) {
                    var e = this._generalFind(t, !0);
                    return e.length > 0 ? e[0] : void 0
                }

                _generalFind(t, e) {
                    var i = [];
                    return this._descendants((r => {
                        const a = r._isMatch(t);
                        return a && i.push(r), !(!a || !e)
                    })), i
                }

                _descendants(t) {
                    let e = !1;
                    const i = this.getChildren();
                    for (const r of i) {
                        if (e = t(r), e) return !0;
                        if (r.hasChildren() && (e = r._descendants(t), e)) return !0
                    }
                    return !1
                }

                toObject() {
                    var t = a.Node.prototype.toObject.call(this);
                    return t.children = [], this.getChildren().forEach((e => {
                        t.children.push(e.toObject())
                    })), t
                }

                isAncestorOf(t) {
                    for (var e = t.getParent(); e;) {
                        if (e._id === this._id) return !0;
                        e = e.getParent()
                    }
                    return !1
                }

                clone(t) {
                    var e = a.Node.prototype.clone.call(this, t);
                    return this.getChildren().forEach((function (t) {
                        e.add(t.clone())
                    })), e
                }

                getAllIntersections(t) {
                    var e = [];
                    return this.find("Shape").forEach((i => {
                        i.isVisible() && i.intersects(t) && e.push(i)
                    })), e
                }

                _clearSelfAndDescendantCache(t) {
                    var e;
                    super._clearSelfAndDescendantCache(t), this.isCached() || null === (e = this.children) || void 0 === e || e.forEach((function (e) {
                        e._clearSelfAndDescendantCache(t)
                    }))
                }

                _setChildrenIndices() {
                    var t;
                    null === (t = this.children) || void 0 === t || t.forEach((function (t, e) {
                        t.index = e
                    })), this._requestDraw()
                }

                drawScene(t, e, i) {
                    var r = this.getLayer(), a = t || r && r.getCanvas(), n = a && a.getContext(),
                        s = this._getCanvasCache(), o = s && s.scene, h = a && a.isCache;
                    if (!this.isVisible() && !h) return this;
                    if (o) {
                        n.save();
                        var l = this.getAbsoluteTransform(e).getMatrix();
                        n.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedSceneCanvas(n), n.restore()
                    } else this._drawChildren("drawScene", a, e, i);
                    return this
                }

                drawHit(t, e) {
                    if (!this.shouldDrawHit(e)) return this;
                    var i = this.getLayer(), r = t || i && i.hitCanvas, a = r && r.getContext(),
                        n = this._getCanvasCache();
                    if (n && n.hit) {
                        a.save();
                        var s = this.getAbsoluteTransform(e).getMatrix();
                        a.transform(s[0], s[1], s[2], s[3], s[4], s[5]), this._drawCachedHitCanvas(a), a.restore()
                    } else this._drawChildren("drawHit", r, e);
                    return this
                }

                _drawChildren(t, e, i, r) {
                    var a, n = e && e.getContext(), s = this.clipWidth(), o = this.clipHeight(), h = this.clipFunc(),
                        l = "number" == typeof s && "number" == typeof o || h;
                    const d = i === this;
                    if (l) {
                        n.save();
                        var c = this.getAbsoluteTransform(i), g = c.getMatrix();
                        let t;
                        if (n.transform(g[0], g[1], g[2], g[3], g[4], g[5]), n.beginPath(), h) t = h.call(this, n, this); else {
                            var u = this.clipX(), f = this.clipY();
                            n.rect(u || 0, f || 0, s, o)
                        }
                        n.clip.apply(n, t), g = c.copy().invert().getMatrix(), n.transform(g[0], g[1], g[2], g[3], g[4], g[5])
                    }
                    var p = !d && "source-over" !== this.globalCompositeOperation() && "drawScene" === t;
                    p && (n.save(), n._applyGlobalCompositeOperation(this)), null === (a = this.children) || void 0 === a || a.forEach((function (a) {
                        a[t](e, i, r)
                    })), p && n.restore(), l && n.restore()
                }

                getClientRect(t = {}) {
                    var e, i, r, a, n, s, o = t.skipTransform, h = t.relativeTo, l = this;
                    null === (e = this.children) || void 0 === e || e.forEach((function (e) {
                        if (e.visible()) {
                            var s = e.getClientRect({
                                relativeTo: l,
                                skipShadow: t.skipShadow,
                                skipStroke: t.skipStroke
                            });
                            0 === s.width && 0 === s.height || (void 0 === i ? (i = s.x, r = s.y, a = s.x + s.width, n = s.y + s.height) : (i = Math.min(i, s.x), r = Math.min(r, s.y), a = Math.max(a, s.x + s.width), n = Math.max(n, s.y + s.height)))
                        }
                    }));
                    for (var d = this.find("Shape"), c = !1, g = 0; g < d.length; g++) if (d[g]._isVisible(this)) {
                        c = !0;
                        break
                    }
                    return s = c && void 0 !== i ? {x: i, y: r, width: a - i, height: n - r} : {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }, o ? s : this._transformedRect(s, h)
                }
            }

            e.Container = s, r.Factory.addComponentsGetterSetter(s, "clip", ["x", "y", "width", "height"]), r.Factory.addGetterSetter(s, "clipX", void 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(s, "clipY", void 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(s, "clipWidth", void 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(s, "clipHeight", void 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(s, "clipFunc")
        }, 9869: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.HitContext = e.SceneContext = e.Context = void 0;
            const r = i(4060), a = i(8871);
            var n = ["arc", "arcTo", "beginPath", "bezierCurveTo", "clearRect", "clip", "closePath", "createLinearGradient", "createPattern", "createRadialGradient", "drawImage", "ellipse", "fill", "fillText", "getImageData", "createImageData", "lineTo", "moveTo", "putImageData", "quadraticCurveTo", "rect", "roundRect", "restore", "rotate", "save", "scale", "setLineDash", "setTransform", "stroke", "strokeText", "transform", "translate"];

            class s {
                constructor(t) {
                    this.canvas = t, a.Konva.enableTrace && (this.traceArr = [], this._enableTrace())
                }

                fillShape(t) {
                    t.fillEnabled() && this._fill(t)
                }

                _fill(t) {
                }

                strokeShape(t) {
                    t.hasStroke() && this._stroke(t)
                }

                _stroke(t) {
                }

                fillStrokeShape(t) {
                    t.attrs.fillAfterStrokeEnabled ? (this.strokeShape(t), this.fillShape(t)) : (this.fillShape(t), this.strokeShape(t))
                }

                getTrace(t, e) {
                    var i, a, n, s, o = this.traceArr, h = o.length, l = "";
                    for (i = 0; i < h; i++) (n = (a = o[i]).method) ? (s = a.args, l += n, t ? l += "()" : r.Util._isArray(s[0]) ? l += "([" + s.join(",") + "])" : (e && (s = s.map((t => "number" == typeof t ? Math.floor(t) : t))), l += "(" + s.join(",") + ")")) : (l += a.property, t || (l += "=" + a.val)), l += ";";
                    return l
                }

                clearTrace() {
                    this.traceArr = []
                }

                _trace(t) {
                    var e = this.traceArr;
                    e.push(t), e.length >= 100 && e.shift()
                }

                reset() {
                    var t = this.getCanvas().getPixelRatio();
                    this.setTransform(1 * t, 0, 0, 1 * t, 0, 0)
                }

                getCanvas() {
                    return this.canvas
                }

                clear(t) {
                    var e = this.getCanvas();
                    t ? this.clearRect(t.x || 0, t.y || 0, t.width || 0, t.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio)
                }

                _applyLineCap(t) {
                    const e = t.attrs.lineCap;
                    e && this.setAttr("lineCap", e)
                }

                _applyOpacity(t) {
                    var e = t.getAbsoluteOpacity();
                    1 !== e && this.setAttr("globalAlpha", e)
                }

                _applyLineJoin(t) {
                    const e = t.attrs.lineJoin;
                    e && this.setAttr("lineJoin", e)
                }

                setAttr(t, e) {
                    this._context[t] = e
                }

                arc(t, e, i, r, a, n) {
                    this._context.arc(t, e, i, r, a, n)
                }

                arcTo(t, e, i, r, a) {
                    this._context.arcTo(t, e, i, r, a)
                }

                beginPath() {
                    this._context.beginPath()
                }

                bezierCurveTo(t, e, i, r, a, n) {
                    this._context.bezierCurveTo(t, e, i, r, a, n)
                }

                clearRect(t, e, i, r) {
                    this._context.clearRect(t, e, i, r)
                }

                clip(...t) {
                    this._context.clip.apply(this._context, t)
                }

                closePath() {
                    this._context.closePath()
                }

                createImageData(t, e) {
                    var i = arguments;
                    return 2 === i.length ? this._context.createImageData(t, e) : 1 === i.length ? this._context.createImageData(t) : void 0
                }

                createLinearGradient(t, e, i, r) {
                    return this._context.createLinearGradient(t, e, i, r)
                }

                createPattern(t, e) {
                    return this._context.createPattern(t, e)
                }

                createRadialGradient(t, e, i, r, a, n) {
                    return this._context.createRadialGradient(t, e, i, r, a, n)
                }

                drawImage(t, e, i, r, a, n, s, o, h) {
                    var l = arguments, d = this._context;
                    3 === l.length ? d.drawImage(t, e, i) : 5 === l.length ? d.drawImage(t, e, i, r, a) : 9 === l.length && d.drawImage(t, e, i, r, a, n, s, o, h)
                }

                ellipse(t, e, i, r, a, n, s, o) {
                    this._context.ellipse(t, e, i, r, a, n, s, o)
                }

                isPointInPath(t, e, i, r) {
                    return i ? this._context.isPointInPath(i, t, e, r) : this._context.isPointInPath(t, e, r)
                }

                fill(...t) {
                    this._context.fill.apply(this._context, t)
                }

                fillRect(t, e, i, r) {
                    this._context.fillRect(t, e, i, r)
                }

                strokeRect(t, e, i, r) {
                    this._context.strokeRect(t, e, i, r)
                }

                fillText(t, e, i, r) {
                    r ? this._context.fillText(t, e, i, r) : this._context.fillText(t, e, i)
                }

                measureText(t) {
                    return this._context.measureText(t)
                }

                getImageData(t, e, i, r) {
                    return this._context.getImageData(t, e, i, r)
                }

                lineTo(t, e) {
                    this._context.lineTo(t, e)
                }

                moveTo(t, e) {
                    this._context.moveTo(t, e)
                }

                rect(t, e, i, r) {
                    this._context.rect(t, e, i, r)
                }

                roundRect(t, e, i, r, a) {
                    this._context.roundRect(t, e, i, r, a)
                }

                putImageData(t, e, i) {
                    this._context.putImageData(t, e, i)
                }

                quadraticCurveTo(t, e, i, r) {
                    this._context.quadraticCurveTo(t, e, i, r)
                }

                restore() {
                    this._context.restore()
                }

                rotate(t) {
                    this._context.rotate(t)
                }

                save() {
                    this._context.save()
                }

                scale(t, e) {
                    this._context.scale(t, e)
                }

                setLineDash(t) {
                    this._context.setLineDash ? this._context.setLineDash(t) : "mozDash" in this._context ? this._context.mozDash = t : "webkitLineDash" in this._context && (this._context.webkitLineDash = t)
                }

                getLineDash() {
                    return this._context.getLineDash()
                }

                setTransform(t, e, i, r, a, n) {
                    this._context.setTransform(t, e, i, r, a, n)
                }

                stroke(t) {
                    t ? this._context.stroke(t) : this._context.stroke()
                }

                strokeText(t, e, i, r) {
                    this._context.strokeText(t, e, i, r)
                }

                transform(t, e, i, r, a, n) {
                    this._context.transform(t, e, i, r, a, n)
                }

                translate(t, e) {
                    this._context.translate(t, e)
                }

                _enableTrace() {
                    var t, e, i = this, a = n.length, s = this.setAttr, o = function (t) {
                        var a, n = i[t];
                        i[t] = function () {
                            return e = function (t) {
                                var e, i, a = [], n = t.length, s = r.Util;
                                for (e = 0; e < n; e++) i = t[e], s._isNumber(i) ? i = Math.round(1e3 * i) / 1e3 : s._isString(i) || (i += ""), a.push(i);
                                return a
                            }(Array.prototype.slice.call(arguments, 0)), a = n.apply(i, arguments), i._trace({
                                method: t,
                                args: e
                            }), a
                        }
                    };
                    for (t = 0; t < a; t++) o(n[t]);
                    i.setAttr = function () {
                        s.apply(i, arguments);
                        var t = arguments[0], e = arguments[1];
                        "shadowOffsetX" !== t && "shadowOffsetY" !== t && "shadowBlur" !== t || (e /= this.canvas.getPixelRatio()), i._trace({
                            property: t,
                            val: e
                        })
                    }
                }

                _applyGlobalCompositeOperation(t) {
                    const e = t.attrs.globalCompositeOperation;
                    !e || "source-over" === e || this.setAttr("globalCompositeOperation", e)
                }
            }

            e.Context = s, ["fillStyle", "strokeStyle", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "letterSpacing", "lineCap", "lineDashOffset", "lineJoin", "lineWidth", "miterLimit", "direction", "font", "textAlign", "textBaseline", "globalAlpha", "globalCompositeOperation", "imageSmoothingEnabled"].forEach((function (t) {
                Object.defineProperty(s.prototype, t, {
                    get() {
                        return this._context[t]
                    }, set(e) {
                        this._context[t] = e
                    }
                })
            })), e.SceneContext = class extends s {
                constructor(t, {willReadFrequently: e = !1} = {}) {
                    super(t), this._context = t._canvas.getContext("2d", {willReadFrequently: e})
                }

                _fillColor(t) {
                    var e = t.fill();
                    this.setAttr("fillStyle", e), t._fillFunc(this)
                }

                _fillPattern(t) {
                    this.setAttr("fillStyle", t._getFillPattern()), t._fillFunc(this)
                }

                _fillLinearGradient(t) {
                    var e = t._getLinearGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }

                _fillRadialGradient(t) {
                    const e = t._getRadialGradient();
                    e && (this.setAttr("fillStyle", e), t._fillFunc(this))
                }

                _fill(t) {
                    const e = t.fill(), i = t.getFillPriority();
                    if (e && "color" === i) return void this._fillColor(t);
                    const r = t.getFillPatternImage();
                    if (r && "pattern" === i) return void this._fillPattern(t);
                    const a = t.getFillLinearGradientColorStops();
                    if (a && "linear-gradient" === i) return void this._fillLinearGradient(t);
                    const n = t.getFillRadialGradientColorStops();
                    n && "radial-gradient" === i ? this._fillRadialGradient(t) : e ? this._fillColor(t) : r ? this._fillPattern(t) : a ? this._fillLinearGradient(t) : n && this._fillRadialGradient(t)
                }

                _strokeLinearGradient(t) {
                    const e = t.getStrokeLinearGradientStartPoint(), i = t.getStrokeLinearGradientEndPoint(),
                        r = t.getStrokeLinearGradientColorStops(), a = this.createLinearGradient(e.x, e.y, i.x, i.y);
                    if (r) {
                        for (var n = 0; n < r.length; n += 2) a.addColorStop(r[n], r[n + 1]);
                        this.setAttr("strokeStyle", a)
                    }
                }

                _stroke(t) {
                    var e = t.dash(), i = t.getStrokeScaleEnabled();
                    if (t.hasStroke()) {
                        if (!i) {
                            this.save();
                            var r = this.getCanvas().getPixelRatio();
                            this.setTransform(r, 0, 0, r, 0, 0)
                        }
                        this._applyLineCap(t), e && t.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", t.dashOffset())), this.setAttr("lineWidth", t.strokeWidth()), t.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)"), t.getStrokeLinearGradientColorStops() ? this._strokeLinearGradient(t) : this.setAttr("strokeStyle", t.stroke()), t._strokeFunc(this), i || this.restore()
                    }
                }

                _applyShadow(t) {
                    var e, i, r, a = null !== (e = t.getShadowRGBA()) && void 0 !== e ? e : "black",
                        n = null !== (i = t.getShadowBlur()) && void 0 !== i ? i : 5,
                        s = null !== (r = t.getShadowOffset()) && void 0 !== r ? r : {x: 0, y: 0},
                        o = t.getAbsoluteScale(), h = this.canvas.getPixelRatio(), l = o.x * h, d = o.y * h;
                    this.setAttr("shadowColor", a), this.setAttr("shadowBlur", n * Math.min(Math.abs(l), Math.abs(d))), this.setAttr("shadowOffsetX", s.x * l), this.setAttr("shadowOffsetY", s.y * d)
                }
            }, e.HitContext = class extends s {
                constructor(t) {
                    super(t), this._context = t._canvas.getContext("2d", {willReadFrequently: !0})
                }

                _fill(t) {
                    this.save(), this.setAttr("fillStyle", t.colorKey), t._fillFuncHit(this), this.restore()
                }

                strokeShape(t) {
                    t.hasHitStroke() && this._stroke(t)
                }

                _stroke(t) {
                    if (t.hasHitStroke()) {
                        const a = t.getStrokeScaleEnabled();
                        if (!a) {
                            this.save();
                            var e = this.getCanvas().getPixelRatio();
                            this.setTransform(e, 0, 0, e, 0, 0)
                        }
                        this._applyLineCap(t);
                        var i = t.hitStrokeWidth(), r = "auto" === i ? t.strokeWidth() : i;
                        this.setAttr("lineWidth", r), this.setAttr("strokeStyle", t.colorKey), t._strokeFuncHit(this), a || this.restore()
                    }
                }
            }
        }, 1268: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.DD = void 0;
            const r = i(8871), a = i(4060);
            e.DD = {
                get isDragging() {
                    var t = !1;
                    return e.DD._dragElements.forEach((e => {
                        "dragging" === e.dragStatus && (t = !0)
                    })), t
                }, justDragged: !1, get node() {
                    var t;
                    return e.DD._dragElements.forEach((e => {
                        t = e.node
                    })), t
                }, _dragElements: new Map, _drag(t) {
                    const i = [];
                    e.DD._dragElements.forEach(((e, r) => {
                        const {node: n} = e, s = n.getStage();
                        s.setPointersPositions(t), void 0 === e.pointerId && (e.pointerId = a.Util._getFirstPointerId(t));
                        const o = s._changedPointerPositions.find((t => t.id === e.pointerId));
                        if (o) {
                            if ("dragging" !== e.dragStatus) {
                                var h = n.dragDistance();
                                if (Math.max(Math.abs(o.x - e.startPointerPos.x), Math.abs(o.y - e.startPointerPos.y)) < h) return;
                                if (n.startDrag({evt: t}), !n.isDragging()) return
                            }
                            n._setDragPosition(t, e), i.push(n)
                        }
                    })), i.forEach((e => {
                        e.fire("dragmove", {type: "dragmove", target: e, evt: t}, !0)
                    }))
                }, _endDragBefore(t) {
                    const i = [];
                    e.DD._dragElements.forEach((a => {
                        const {node: n} = a, s = n.getStage();
                        if (t && s.setPointersPositions(t), !s._changedPointerPositions.find((t => t.id === a.pointerId))) return;
                        "dragging" !== a.dragStatus && "stopped" !== a.dragStatus || (e.DD.justDragged = !0, r.Konva._mouseListenClick = !1, r.Konva._touchListenClick = !1, r.Konva._pointerListenClick = !1, a.dragStatus = "stopped");
                        const o = a.node.getLayer() || a.node instanceof r.Konva.Stage && a.node;
                        o && -1 === i.indexOf(o) && i.push(o)
                    })), i.forEach((t => {
                        t.draw()
                    }))
                }, _endDragAfter(t) {
                    e.DD._dragElements.forEach(((i, r) => {
                        "stopped" === i.dragStatus && i.node.fire("dragend", {
                            type: "dragend",
                            target: i.node,
                            evt: t
                        }, !0), "dragging" !== i.dragStatus && e.DD._dragElements.delete(r)
                    }))
                }
            }, r.Konva.isBrowser && (window.addEventListener("mouseup", e.DD._endDragBefore, !0), window.addEventListener("touchend", e.DD._endDragBefore, !0), window.addEventListener("mousemove", e.DD._drag), window.addEventListener("touchmove", e.DD._drag), window.addEventListener("mouseup", e.DD._endDragAfter, !1), window.addEventListener("touchend", e.DD._endDragAfter, !1))
        }, 4892: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Factory = void 0;
            const r = i(4060), a = i(5483);
            var n = "get", s = "set";
            e.Factory = {
                addGetterSetter(t, i, r, a, n) {
                    e.Factory.addGetter(t, i, r), e.Factory.addSetter(t, i, a, n), e.Factory.addOverloadedGetterSetter(t, i)
                }, addGetter(t, e, i) {
                    var a = n + r.Util._capitalize(e);
                    t.prototype[a] = t.prototype[a] || function () {
                        var t = this.attrs[e];
                        return void 0 === t ? i : t
                    }
                }, addSetter(t, i, a, n) {
                    var o = s + r.Util._capitalize(i);
                    t.prototype[o] || e.Factory.overWriteSetter(t, i, a, n)
                }, overWriteSetter(t, e, i, a) {
                    var n = s + r.Util._capitalize(e);
                    t.prototype[n] = function (t) {
                        return i && null != t && (t = i.call(this, t, e)), this._setAttr(e, t), a && a.call(this), this
                    }
                }, addComponentsGetterSetter(t, i, o, h, l) {
                    var d, c, g = o.length, u = r.Util._capitalize, f = n + u(i), p = s + u(i);
                    t.prototype[f] = function () {
                        var t = {};
                        for (d = 0; d < g; d++) t[c = o[d]] = this.getAttr(i + u(c));
                        return t
                    };
                    var v = (0, a.getComponentValidator)(o);
                    t.prototype[p] = function (t) {
                        var e, r = this.attrs[i];
                        for (e in h && (t = h.call(this, t)), v && v.call(this, t, i), t) t.hasOwnProperty(e) && this._setAttr(i + u(e), t[e]);
                        return t || o.forEach((t => {
                            this._setAttr(i + u(t), void 0)
                        })), this._fireChangeEvent(i, r, t), l && l.call(this), this
                    }, e.Factory.addOverloadedGetterSetter(t, i)
                }, addOverloadedGetterSetter(t, e) {
                    var i = r.Util._capitalize(e), a = s + i, o = n + i;
                    t.prototype[e] = function () {
                        return arguments.length ? (this[a](arguments[0]), this) : this[o]()
                    }
                }, addDeprecatedGetterSetter(t, i, a, s) {
                    r.Util.error("Adding deprecated " + i);
                    var o = n + r.Util._capitalize(i),
                        h = i + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
                    t.prototype[o] = function () {
                        r.Util.error(h);
                        var t = this.attrs[i];
                        return void 0 === t ? a : t
                    }, e.Factory.addSetter(t, i, s, (function () {
                        r.Util.error(h)
                    })), e.Factory.addOverloadedGetterSetter(t, i)
                }, backCompat(t, e) {
                    r.Util.each(e, (function (e, i) {
                        var a = t.prototype[i], o = n + r.Util._capitalize(e), h = s + r.Util._capitalize(e);

                        function l() {
                            a.apply(this, arguments), r.Util.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + i + '" instead.')
                        }

                        t.prototype[e] = l, t.prototype[o] = l, t.prototype[h] = l
                    }))
                }, afterSetFilter() {
                    this._filterUpToDate = !1
                }
            }
        }, 7457: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.FastLayer = void 0;
            const r = i(4060), a = i(6267), n = i(8871);

            class s extends a.Layer {
                constructor(t) {
                    super(t), this.listening(!1), r.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.')
                }
            }

            e.FastLayer = s, s.prototype.nodeType = "FastLayer", (0, n._registerNode)(s)
        }, 8871: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e._registerNode = e.Konva = e.glob = void 0;
            const r = Math.PI / 180;
            e.glob = void 0 !== i.g ? i.g : "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope ? self : {}, e.Konva = {
                _global: e.glob,
                version: "9.3.14",
                isBrowser: "undefined" != typeof window && ("[object Window]" === {}.toString.call(window) || "[object global]" === {}.toString.call(window)),
                isUnminified: /param/.test(function (t) {
                }.toString()),
                dblClickWindow: 400,
                getAngle: t => e.Konva.angleDeg ? t * r : t,
                enableTrace: !1,
                pointerEventsEnabled: !0,
                autoDrawEnabled: !0,
                hitOnDragEnabled: !1,
                capturePointerEventsEnabled: !1,
                _mouseListenClick: !1,
                _touchListenClick: !1,
                _pointerListenClick: !1,
                _mouseInDblClickWindow: !1,
                _touchInDblClickWindow: !1,
                _pointerInDblClickWindow: !1,
                _mouseDblClickPointerId: null,
                _touchDblClickPointerId: null,
                _pointerDblClickPointerId: null,
                _fixTextRendering: !1,
                pixelRatio: "undefined" != typeof window && window.devicePixelRatio || 1,
                dragDistance: 3,
                angleDeg: !0,
                showWarnings: !0,
                dragButtons: [0, 1],
                isDragging: () => e.Konva.DD.isDragging,
                isTransforming() {
                    var t;
                    return null === (t = e.Konva.Transformer) || void 0 === t ? void 0 : t.isTransforming()
                },
                isDragReady: () => !!e.Konva.DD.node,
                releaseCanvasOnDestroy: !0,
                document: e.glob.document,
                _injectGlobal(t) {
                    e.glob.Konva = t
                }
            }, e._registerNode = t => {
                e.Konva[t.prototype.getClassName()] = t
            }, e.Konva._injectGlobal(e.Konva)
        }, 7949: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Group = void 0;
            const r = i(4060), a = i(4473), n = i(8871);

            class s extends a.Container {
                _validateAdd(t) {
                    var e = t.getType();
                    "Group" !== e && "Shape" !== e && r.Util.throw("You may only add groups and shapes to groups.")
                }
            }

            e.Group = s, s.prototype.nodeType = "Group", (0, n._registerNode)(s)
        }, 6267: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Layer = void 0;
            const r = i(4060), a = i(4473), n = i(6536), s = i(4892), o = i(8604), h = i(5483), l = i(4723),
                d = i(8871);
            var c = [{x: 0, y: 0}, {x: -1, y: -1}, {x: 1, y: -1}, {x: 1, y: 1}, {x: -1, y: 1}], g = c.length;

            class u extends a.Container {
                constructor(t) {
                    super(t), this.canvas = new o.SceneCanvas, this.hitCanvas = new o.HitCanvas({pixelRatio: 1}), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled()
                }

                createPNGStream() {
                    return this.canvas._canvas.createPNGStream()
                }

                getCanvas() {
                    return this.canvas
                }

                getNativeCanvasElement() {
                    return this.canvas._canvas
                }

                getHitCanvas() {
                    return this.hitCanvas
                }

                getContext() {
                    return this.getCanvas().getContext()
                }

                clear(t) {
                    return this.getContext().clear(t), this.getHitCanvas().getContext().clear(t), this
                }

                setZIndex(t) {
                    super.setZIndex(t);
                    var e = this.getStage();
                    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), t < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[t + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this
                }

                moveToTop() {
                    n.Node.prototype.moveToTop.call(this);
                    var t = this.getStage();
                    return t && t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.appendChild(this.getNativeCanvasElement())), !0
                }

                moveUp() {
                    if (!n.Node.prototype.moveUp.call(this)) return !1;
                    var t = this.getStage();
                    return !(!t || !t.content || (t.content.removeChild(this.getNativeCanvasElement()), this.index < t.children.length - 1 ? t.content.insertBefore(this.getNativeCanvasElement(), t.children[this.index + 1].getCanvas()._canvas) : t.content.appendChild(this.getNativeCanvasElement()), 0))
                }

                moveDown() {
                    if (n.Node.prototype.moveDown.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.children;
                            t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas))
                        }
                        return !0
                    }
                    return !1
                }

                moveToBottom() {
                    if (n.Node.prototype.moveToBottom.call(this)) {
                        var t = this.getStage();
                        if (t) {
                            var e = t.children;
                            t.content && (t.content.removeChild(this.getNativeCanvasElement()), t.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas))
                        }
                        return !0
                    }
                    return !1
                }

                getLayer() {
                    return this
                }

                remove() {
                    var t = this.getNativeCanvasElement();
                    return n.Node.prototype.remove.call(this), t && t.parentNode && r.Util._isInDocument(t) && t.parentNode.removeChild(t), this
                }

                getStage() {
                    return this.parent
                }

                setSize({width: t, height: e}) {
                    return this.canvas.setSize(t, e), this.hitCanvas.setSize(t, e), this._setSmoothEnabled(), this
                }

                _validateAdd(t) {
                    var e = t.getType();
                    "Group" !== e && "Shape" !== e && r.Util.throw("You may only add groups and shapes to a layer.")
                }

                _toKonvaCanvas(t) {
                    return (t = t || {}).width = t.width || this.getWidth(), t.height = t.height || this.getHeight(), t.x = void 0 !== t.x ? t.x : this.x(), t.y = void 0 !== t.y ? t.y : this.y(), n.Node.prototype._toKonvaCanvas.call(this, t)
                }

                _checkVisibility() {
                    const t = this.visible();
                    this.canvas._canvas.style.display = t ? "block" : "none"
                }

                _setSmoothEnabled() {
                    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled()
                }

                getWidth() {
                    if (this.parent) return this.parent.width()
                }

                setWidth() {
                    r.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.')
                }

                getHeight() {
                    if (this.parent) return this.parent.height()
                }

                setHeight() {
                    r.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.')
                }

                batchDraw() {
                    return this._waitingForDraw || (this._waitingForDraw = !0, r.Util.requestAnimFrame((() => {
                        this.draw(), this._waitingForDraw = !1
                    }))), this
                }

                getIntersection(t) {
                    if (!this.isListening() || !this.isVisible()) return null;
                    for (var e = 1, i = !1; ;) {
                        for (let r = 0; r < g; r++) {
                            const a = c[r], n = this._getIntersection({x: t.x + a.x * e, y: t.y + a.y * e}),
                                s = n.shape;
                            if (s) return s;
                            if (i = !!n.antialiased, !n.antialiased) break
                        }
                        if (!i) return null;
                        e += 1
                    }
                }

                _getIntersection(t) {
                    const e = this.hitCanvas.pixelRatio,
                        i = this.hitCanvas.context.getImageData(Math.round(t.x * e), Math.round(t.y * e), 1, 1).data,
                        a = i[3];
                    if (255 === a) {
                        const t = r.Util._rgbToHex(i[0], i[1], i[2]), e = l.shapes["#" + t];
                        return e ? {shape: e} : {antialiased: !0}
                    }
                    return a > 0 ? {antialiased: !0} : {}
                }

                drawScene(t, e) {
                    var i = this.getLayer(), r = t || i && i.getCanvas();
                    return this._fire("beforeDraw", {node: this}), this.clearBeforeDraw() && r.getContext().clear(), a.Container.prototype.drawScene.call(this, r, e), this._fire("draw", {node: this}), this
                }

                drawHit(t, e) {
                    var i = this.getLayer(), r = t || i && i.hitCanvas;
                    return i && i.clearBeforeDraw() && i.getHitCanvas().getContext().clear(), a.Container.prototype.drawHit.call(this, r, e), this
                }

                enableHitGraph() {
                    return this.hitGraphEnabled(!0), this
                }

                disableHitGraph() {
                    return this.hitGraphEnabled(!1), this
                }

                setHitGraphEnabled(t) {
                    r.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(t)
                }

                getHitGraphEnabled(t) {
                    return r.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening()
                }

                toggleHitCanvas() {
                    if (this.parent && this.parent.content) {
                        var t = this.parent;
                        this.hitCanvas._canvas.parentNode ? t.content.removeChild(this.hitCanvas._canvas) : t.content.appendChild(this.hitCanvas._canvas)
                    }
                }

                destroy() {
                    return r.Util.releaseCanvas(this.getNativeCanvasElement(), this.getHitCanvas()._canvas), super.destroy()
                }
            }

            e.Layer = u, u.prototype.nodeType = "Layer", (0, d._registerNode)(u), s.Factory.addGetterSetter(u, "imageSmoothingEnabled", !0), s.Factory.addGetterSetter(u, "clearBeforeDraw", !0), s.Factory.addGetterSetter(u, "hitGraphEnabled", !0, (0, h.getBooleanValidator)())
        }, 6536: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Node = void 0;
            const r = i(4060), a = i(4892), n = i(8604), s = i(8871), o = i(1268), h = i(5483);
            var l = "absoluteOpacity", d = "allEventListeners", c = "absoluteTransform", g = "absoluteScale",
                u = "canvas", f = "listening", p = "mouseenter", v = "mouseleave", m = "Shape", y = " ", _ = "stage",
                b = "transform", x = "visible",
                S = ["xChange.konva", "yChange.konva", "scaleXChange.konva", "scaleYChange.konva", "skewXChange.konva", "skewYChange.konva", "rotationChange.konva", "offsetXChange.konva", "offsetYChange.konva", "transformsEnabledChange.konva"].join(y);
            let C = 1;

            class w {
                constructor(t) {
                    this._id = C++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = new Map, this._attachedDepsListeners = new Map, this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(t), this._shouldFireChangeEvents = !0
                }

                hasChildren() {
                    return !1
                }

                _clearCache(t) {
                    t !== b && t !== c || !this._cache.get(t) ? t ? this._cache.delete(t) : this._cache.clear() : this._cache.get(t).dirty = !0
                }

                _getCache(t, e) {
                    var i = this._cache.get(t);
                    return (void 0 === i || (t === b || t === c) && !0 === i.dirty) && (i = e.call(this), this._cache.set(t, i)), i
                }

                _calculate(t, e, i) {
                    if (!this._attachedDepsListeners.get(t)) {
                        const i = e.map((t => t + "Change.konva")).join(y);
                        this.on(i, (() => {
                            this._clearCache(t)
                        })), this._attachedDepsListeners.set(t, !0)
                    }
                    return this._getCache(t, i)
                }

                _getCanvasCache() {
                    return this._cache.get(u)
                }

                _clearSelfAndDescendantCache(t) {
                    this._clearCache(t), t === c && this.fire("absoluteTransformChange")
                }

                clearCache() {
                    if (this._cache.has(u)) {
                        const {scene: t, filter: e, hit: i} = this._cache.get(u);
                        r.Util.releaseCanvas(t, e, i), this._cache.delete(u)
                    }
                    return this._clearSelfAndDescendantCache(), this._requestDraw(), this
                }

                cache(t) {
                    var e = t || {}, i = {};
                    void 0 !== e.x && void 0 !== e.y && void 0 !== e.width && void 0 !== e.height || (i = this.getClientRect({
                        skipTransform: !0,
                        relativeTo: this.getParent() || void 0
                    }));
                    var a = Math.ceil(e.width || i.width), s = Math.ceil(e.height || i.height), o = e.pixelRatio,
                        h = void 0 === e.x ? Math.floor(i.x) : e.x, d = void 0 === e.y ? Math.floor(i.y) : e.y,
                        c = e.offset || 0, f = e.drawBorder || !1, p = e.hitCanvasPixelRatio || 1;
                    if (a && s) {
                        a += 2 * c + (Math.abs(Math.round(i.x) - h) > .5 ? 1 : 0), s += 2 * c + (Math.abs(Math.round(i.y) - d) > .5 ? 1 : 0), h -= c, d -= c;
                        var v = new n.SceneCanvas({pixelRatio: o, width: a, height: s}),
                            m = new n.SceneCanvas({pixelRatio: o, width: 0, height: 0, willReadFrequently: !0}),
                            y = new n.HitCanvas({pixelRatio: p, width: a, height: s}), _ = v.getContext(),
                            b = y.getContext();
                        return y.isCache = !0, v.isCache = !0, this._cache.delete(u), this._filterUpToDate = !1, !1 === e.imageSmoothingEnabled && (v.getContext()._context.imageSmoothingEnabled = !1, m.getContext()._context.imageSmoothingEnabled = !1), _.save(), b.save(), _.translate(-h, -d), b.translate(-h, -d), this._isUnderCache = !0, this._clearSelfAndDescendantCache(l), this._clearSelfAndDescendantCache(g), this.drawScene(v, this), this.drawHit(y, this), this._isUnderCache = !1, _.restore(), b.restore(), f && (_.save(), _.beginPath(), _.rect(0, 0, a, s), _.closePath(), _.setAttr("strokeStyle", "red"), _.setAttr("lineWidth", 5), _.stroke(), _.restore()), this._cache.set(u, {
                            scene: v,
                            filter: m,
                            hit: y,
                            x: h,
                            y: d
                        }), this._requestDraw(), this
                    }
                    r.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.")
                }

                isCached() {
                    return this._cache.has(u)
                }

                getClientRect(t) {
                    throw new Error('abstract "getClientRect" method call')
                }

                _transformedRect(t, e) {
                    var i = [{x: t.x, y: t.y}, {x: t.x + t.width, y: t.y}, {
                            x: t.x + t.width,
                            y: t.y + t.height
                        }, {x: t.x, y: t.y + t.height}], r = 1 / 0, a = 1 / 0, n = -1 / 0, s = -1 / 0,
                        o = this.getAbsoluteTransform(e);
                    return i.forEach((function (t) {
                        var e = o.point(t);
                        void 0 === r && (r = n = e.x, a = s = e.y), r = Math.min(r, e.x), a = Math.min(a, e.y), n = Math.max(n, e.x), s = Math.max(s, e.y)
                    })), {x: r, y: a, width: n - r, height: s - a}
                }

                _drawCachedSceneCanvas(t) {
                    t.save(), t._applyOpacity(this), t._applyGlobalCompositeOperation(this);
                    const e = this._getCanvasCache();
                    t.translate(e.x, e.y);
                    var i = this._getCachedSceneCanvas(), r = i.pixelRatio;
                    t.drawImage(i._canvas, 0, 0, i.width / r, i.height / r), t.restore()
                }

                _drawCachedHitCanvas(t) {
                    var e = this._getCanvasCache(), i = e.hit;
                    t.save(), t.translate(e.x, e.y), t.drawImage(i._canvas, 0, 0, i.width / i.pixelRatio, i.height / i.pixelRatio), t.restore()
                }

                _getCachedSceneCanvas() {
                    var t, e, i, a, n = this.filters(), s = this._getCanvasCache(), o = s.scene, h = s.filter,
                        l = h.getContext();
                    if (n) {
                        if (!this._filterUpToDate) {
                            var d = o.pixelRatio;
                            h.setSize(o.width / o.pixelRatio, o.height / o.pixelRatio);
                            try {
                                for (t = n.length, l.clear(), l.drawImage(o._canvas, 0, 0, o.getWidth() / d, o.getHeight() / d), e = l.getImageData(0, 0, h.getWidth(), h.getHeight()), i = 0; i < t; i++) "function" == typeof (a = n[i]) ? (a.call(this, e), l.putImageData(e, 0, 0)) : r.Util.error("Filter should be type of function, but got " + typeof a + " instead. Please check correct filters")
                            } catch (t) {
                                r.Util.error("Unable to apply filter. " + t.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.")
                            }
                            this._filterUpToDate = !0
                        }
                        return h
                    }
                    return o
                }

                on(t, e) {
                    if (this._cache && this._cache.delete(d), 3 === arguments.length) return this._delegate.apply(this, arguments);
                    var i, r, a, n, s = t.split(y), o = s.length;
                    for (i = 0; i < o; i++) a = (r = s[i].split("."))[0], n = r[1] || "", this.eventListeners[a] || (this.eventListeners[a] = []), this.eventListeners[a].push({
                        name: n,
                        handler: e
                    });
                    return this
                }

                off(t, e) {
                    var i, r, a, n, s, o = (t || "").split(y), h = o.length;
                    if (this._cache && this._cache.delete(d), !t) for (r in this.eventListeners) this._off(r);
                    for (i = 0; i < h; i++) if (n = (a = o[i].split("."))[0], s = a[1], n) this.eventListeners[n] && this._off(n, s, e); else for (r in this.eventListeners) this._off(r, s, e);
                    return this
                }

                dispatchEvent(t) {
                    var e = {target: this, type: t.type, evt: t};
                    return this.fire(t.type, e), this
                }

                addEventListener(t, e) {
                    return this.on(t, (function (t) {
                        e.call(this, t.evt)
                    })), this
                }

                removeEventListener(t) {
                    return this.off(t), this
                }

                _delegate(t, e, i) {
                    var a = this;
                    this.on(t, (function (t) {
                        for (var n = t.target.findAncestors(e, !0, a), s = 0; s < n.length; s++) (t = r.Util.cloneObject(t)).currentTarget = n[s], i.call(n[s], t)
                    }))
                }

                remove() {
                    return this.isDragging() && this.stopDrag(), o.DD._dragElements.delete(this._id), this._remove(), this
                }

                _clearCaches() {
                    this._clearSelfAndDescendantCache(c), this._clearSelfAndDescendantCache(l), this._clearSelfAndDescendantCache(g), this._clearSelfAndDescendantCache(_), this._clearSelfAndDescendantCache(x), this._clearSelfAndDescendantCache(f)
                }

                _remove() {
                    this._clearCaches();
                    var t = this.getParent();
                    t && t.children && (t.children.splice(this.index, 1), t._setChildrenIndices(), this.parent = null)
                }

                destroy() {
                    return this.remove(), this.clearCache(), this
                }

                getAttr(t) {
                    var e = "get" + r.Util._capitalize(t);
                    return r.Util._isFunction(this[e]) ? this[e]() : this.attrs[t]
                }

                getAncestors() {
                    for (var t = this.getParent(), e = []; t;) e.push(t), t = t.getParent();
                    return e
                }

                getAttrs() {
                    return this.attrs || {}
                }

                setAttrs(t) {
                    return this._batchTransformChanges((() => {
                        var e, i;
                        if (!t) return this;
                        for (e in t) "children" !== e && (i = "set" + r.Util._capitalize(e), r.Util._isFunction(this[i]) ? this[i](t[e]) : this._setAttr(e, t[e]))
                    })), this
                }

                isListening() {
                    return this._getCache(f, this._isListening)
                }

                _isListening(t) {
                    if (!this.listening()) return !1;
                    const e = this.getParent();
                    return !e || e === t || this === t || e._isListening(t)
                }

                isVisible() {
                    return this._getCache(x, this._isVisible)
                }

                _isVisible(t) {
                    if (!this.visible()) return !1;
                    const e = this.getParent();
                    return !e || e === t || this === t || e._isVisible(t)
                }

                shouldDrawHit(t, e = !1) {
                    if (t) return this._isVisible(t) && this._isListening(t);
                    var i = this.getLayer(), r = !1;
                    o.DD._dragElements.forEach((t => {
                        "dragging" === t.dragStatus && ("Stage" === t.node.nodeType || t.node.getLayer() === i) && (r = !0)
                    }));
                    var a = !e && !s.Konva.hitOnDragEnabled && (r || s.Konva.isTransforming());
                    return this.isListening() && this.isVisible() && !a
                }

                show() {
                    return this.visible(!0), this
                }

                hide() {
                    return this.visible(!1), this
                }

                getZIndex() {
                    return this.index || 0
                }

                getAbsoluteZIndex() {
                    var t, e, i, r, a = this.getDepth(), n = this, s = 0;
                    const o = this.getStage();
                    return "Stage" !== n.nodeType && o && function o(h) {
                        for (t = [], e = h.length, i = 0; i < e; i++) r = h[i], s++, r.nodeType !== m && (t = t.concat(r.getChildren().slice())), r._id === n._id && (i = e);
                        t.length > 0 && t[0].getDepth() <= a && o(t)
                    }(o.getChildren()), s
                }

                getDepth() {
                    for (var t = 0, e = this.parent; e;) t++, e = e.parent;
                    return t
                }

                _batchTransformChanges(t) {
                    this._batchingTransformChange = !0, t(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(b), this._clearSelfAndDescendantCache(c)), this._needClearTransformCache = !1
                }

                setPosition(t) {
                    return this._batchTransformChanges((() => {
                        this.x(t.x), this.y(t.y)
                    })), this
                }

                getPosition() {
                    return {x: this.x(), y: this.y()}
                }

                getRelativePointerPosition() {
                    const t = this.getStage();
                    if (!t) return null;
                    var e = t.getPointerPosition();
                    if (!e) return null;
                    var i = this.getAbsoluteTransform().copy();
                    return i.invert(), i.point(e)
                }

                getAbsolutePosition(t) {
                    let e = !1, i = this.parent;
                    for (; i;) {
                        if (i.isCached()) {
                            e = !0;
                            break
                        }
                        i = i.parent
                    }
                    e && !t && (t = !0);
                    var a = this.getAbsoluteTransform(t).getMatrix(), n = new r.Transform, s = this.offset();
                    return n.m = a.slice(), n.translate(s.x, s.y), n.getTranslation()
                }

                setAbsolutePosition(t) {
                    const {x: e, y: i, ...r} = this._clearTransform();
                    this.attrs.x = e, this.attrs.y = i, this._clearCache(b);
                    var a = this._getAbsoluteTransform().copy();
                    return a.invert(), a.translate(t.x, t.y), t = {
                        x: this.attrs.x + a.getTranslation().x,
                        y: this.attrs.y + a.getTranslation().y
                    }, this._setTransform(r), this.setPosition({
                        x: t.x,
                        y: t.y
                    }), this._clearCache(b), this._clearSelfAndDescendantCache(c), this
                }

                _setTransform(t) {
                    var e;
                    for (e in t) this.attrs[e] = t[e]
                }

                _clearTransform() {
                    var t = {
                        x: this.x(),
                        y: this.y(),
                        rotation: this.rotation(),
                        scaleX: this.scaleX(),
                        scaleY: this.scaleY(),
                        offsetX: this.offsetX(),
                        offsetY: this.offsetY(),
                        skewX: this.skewX(),
                        skewY: this.skewY()
                    };
                    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, t
                }

                move(t) {
                    var e = t.x, i = t.y, r = this.x(), a = this.y();
                    return void 0 !== e && (r += e), void 0 !== i && (a += i), this.setPosition({x: r, y: a}), this
                }

                _eachAncestorReverse(t, e) {
                    var i, r, a = [], n = this.getParent();
                    if (!e || e._id !== this._id) {
                        for (a.unshift(this); n && (!e || n._id !== e._id);) a.unshift(n), n = n.parent;
                        for (i = a.length, r = 0; r < i; r++) t(a[r])
                    }
                }

                rotate(t) {
                    return this.rotation(this.rotation() + t), this
                }

                moveToTop() {
                    if (!this.parent) return r.Util.warn("Node has no parent. moveToTop function is ignored."), !1;
                    var t = this.index;
                    return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0)
                }

                moveUp() {
                    if (!this.parent) return r.Util.warn("Node has no parent. moveUp function is ignored."), !1;
                    var t = this.index;
                    return t < this.parent.getChildren().length - 1 && (this.parent.children.splice(t, 1), this.parent.children.splice(t + 1, 0, this), this.parent._setChildrenIndices(), !0)
                }

                moveDown() {
                    if (!this.parent) return r.Util.warn("Node has no parent. moveDown function is ignored."), !1;
                    var t = this.index;
                    return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.splice(t - 1, 0, this), this.parent._setChildrenIndices(), !0)
                }

                moveToBottom() {
                    if (!this.parent) return r.Util.warn("Node has no parent. moveToBottom function is ignored."), !1;
                    var t = this.index;
                    return t > 0 && (this.parent.children.splice(t, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0)
                }

                setZIndex(t) {
                    if (!this.parent) return r.Util.warn("Node has no parent. zIndex parameter is ignored."), this;
                    (t < 0 || t >= this.parent.children.length) && r.Util.warn("Unexpected value " + t + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
                    var e = this.index;
                    return this.parent.children.splice(e, 1), this.parent.children.splice(t, 0, this), this.parent._setChildrenIndices(), this
                }

                getAbsoluteOpacity() {
                    return this._getCache(l, this._getAbsoluteOpacity)
                }

                _getAbsoluteOpacity() {
                    var t = this.opacity(), e = this.getParent();
                    return e && !e._isUnderCache && (t *= e.getAbsoluteOpacity()), t
                }

                moveTo(t) {
                    return this.getParent() !== t && (this._remove(), t.add(this)), this
                }

                toObject() {
                    var t, e, i, a, n = this.getAttrs();
                    const s = {attrs: {}, className: this.getClassName()};
                    for (t in n) e = n[t], r.Util.isObject(e) && !r.Util._isPlainObject(e) && !r.Util._isArray(e) || (i = "function" == typeof this[t] && this[t], delete n[t], a = i ? i.call(this) : null, n[t] = e, a !== e && (s.attrs[t] = e));
                    return r.Util._prepareToStringify(s)
                }

                toJSON() {
                    return JSON.stringify(this.toObject())
                }

                getParent() {
                    return this.parent
                }

                findAncestors(t, e, i) {
                    var r = [];
                    e && this._isMatch(t) && r.push(this);
                    for (var a = this.parent; a;) {
                        if (a === i) return r;
                        a._isMatch(t) && r.push(a), a = a.parent
                    }
                    return r
                }

                isAncestorOf(t) {
                    return !1
                }

                findAncestor(t, e, i) {
                    return this.findAncestors(t, e, i)[0]
                }

                _isMatch(t) {
                    if (!t) return !1;
                    if ("function" == typeof t) return t(this);
                    var e, i, a = t.replace(/ /g, "").split(","), n = a.length;
                    for (e = 0; e < n; e++) if (i = a[e], r.Util.isValidSelector(i) || (r.Util.warn('Selector "' + i + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), r.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), r.Util.warn("Konva is awesome, right?")), "#" === i.charAt(0)) {
                        if (this.id() === i.slice(1)) return !0
                    } else if ("." === i.charAt(0)) {
                        if (this.hasName(i.slice(1))) return !0
                    } else if (this.className === i || this.nodeType === i) return !0;
                    return !1
                }

                getLayer() {
                    var t = this.getParent();
                    return t ? t.getLayer() : null
                }

                getStage() {
                    return this._getCache(_, this._getStage)
                }

                _getStage() {
                    var t = this.getParent();
                    return t ? t.getStage() : null
                }

                fire(t, e = {}, i) {
                    return e.target = e.target || this, i ? this._fireAndBubble(t, e) : this._fire(t, e), this
                }

                getAbsoluteTransform(t) {
                    return t ? this._getAbsoluteTransform(t) : this._getCache(c, this._getAbsoluteTransform)
                }

                _getAbsoluteTransform(t) {
                    var e;
                    if (t) return e = new r.Transform, this._eachAncestorReverse((function (t) {
                        var i = t.transformsEnabled();
                        "all" === i ? e.multiply(t.getTransform()) : "position" === i && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY())
                    }), t), e;
                    e = this._cache.get(c) || new r.Transform, this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
                    var i = this.transformsEnabled();
                    if ("all" === i) e.multiply(this.getTransform()); else if ("position" === i) {
                        const t = this.attrs.x || 0, i = this.attrs.y || 0, r = this.attrs.offsetX || 0,
                            a = this.attrs.offsetY || 0;
                        e.translate(t - r, i - a)
                    }
                    return e.dirty = !1, e
                }

                getAbsoluteScale(t) {
                    for (var e = this; e;) e._isUnderCache && (t = e), e = e.getParent();
                    const i = this.getAbsoluteTransform(t).decompose();
                    return {x: i.scaleX, y: i.scaleY}
                }

                getAbsoluteRotation() {
                    return this.getAbsoluteTransform().decompose().rotation
                }

                getTransform() {
                    return this._getCache(b, this._getTransform)
                }

                _getTransform() {
                    var t, e, i = this._cache.get(b) || new r.Transform;
                    i.reset();
                    var a = this.x(), n = this.y(), o = s.Konva.getAngle(this.rotation()),
                        h = null !== (t = this.attrs.scaleX) && void 0 !== t ? t : 1,
                        l = null !== (e = this.attrs.scaleY) && void 0 !== e ? e : 1, d = this.attrs.skewX || 0,
                        c = this.attrs.skewY || 0, g = this.attrs.offsetX || 0, u = this.attrs.offsetY || 0;
                    return 0 === a && 0 === n || i.translate(a, n), 0 !== o && i.rotate(o), 0 === d && 0 === c || i.skew(d, c), 1 === h && 1 === l || i.scale(h, l), 0 === g && 0 === u || i.translate(-1 * g, -1 * u), i.dirty = !1, i
                }

                clone(t) {
                    var e, i, a, n, s, o = r.Util.cloneObject(this.attrs);
                    for (e in t) o[e] = t[e];
                    var h = new this.constructor(o);
                    for (e in this.eventListeners) for (a = (i = this.eventListeners[e]).length, n = 0; n < a; n++) (s = i[n]).name.indexOf("konva") < 0 && (h.eventListeners[e] || (h.eventListeners[e] = []), h.eventListeners[e].push(s));
                    return h
                }

                _toKonvaCanvas(t) {
                    t = t || {};
                    var e = this.getClientRect(), i = this.getStage(), r = void 0 !== t.x ? t.x : Math.floor(e.x),
                        a = void 0 !== t.y ? t.y : Math.floor(e.y), s = t.pixelRatio || 1, o = new n.SceneCanvas({
                            width: t.width || Math.ceil(e.width) || (i ? i.width() : 0),
                            height: t.height || Math.ceil(e.height) || (i ? i.height() : 0),
                            pixelRatio: s
                        }), h = o.getContext();
                    const l = new n.SceneCanvas({
                        width: o.width / o.pixelRatio + Math.abs(r),
                        height: o.height / o.pixelRatio + Math.abs(a),
                        pixelRatio: o.pixelRatio
                    });
                    return !1 === t.imageSmoothingEnabled && (h._context.imageSmoothingEnabled = !1), h.save(), (r || a) && h.translate(-1 * r, -1 * a), this.drawScene(o, void 0, l), h.restore(), o
                }

                toCanvas(t) {
                    return this._toKonvaCanvas(t)._canvas
                }

                toDataURL(t) {
                    var e = (t = t || {}).mimeType || null, i = t.quality || null,
                        r = this._toKonvaCanvas(t).toDataURL(e, i);
                    return t.callback && t.callback(r), r
                }

                toImage(t) {
                    return new Promise(((e, i) => {
                        try {
                            const i = null == t ? void 0 : t.callback;
                            i && delete t.callback, r.Util._urlToImage(this.toDataURL(t), (function (t) {
                                e(t), null == i || i(t)
                            }))
                        } catch (t) {
                            i(t)
                        }
                    }))
                }

                toBlob(t) {
                    return new Promise(((e, i) => {
                        try {
                            const i = null == t ? void 0 : t.callback;
                            i && delete t.callback, this.toCanvas(t).toBlob((t => {
                                e(t), null == i || i(t)
                            }), null == t ? void 0 : t.mimeType, null == t ? void 0 : t.quality)
                        } catch (t) {
                            i(t)
                        }
                    }))
                }

                setSize(t) {
                    return this.width(t.width), this.height(t.height), this
                }

                getSize() {
                    return {width: this.width(), height: this.height()}
                }

                getClassName() {
                    return this.className || this.nodeType
                }

                getType() {
                    return this.nodeType
                }

                getDragDistance() {
                    return void 0 !== this.attrs.dragDistance ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : s.Konva.dragDistance
                }

                _off(t, e, i) {
                    var r, a, n, s = this.eventListeners[t];
                    for (r = 0; r < s.length; r++) if (a = s[r].name, n = s[r].handler, !("konva" === a && "konva" !== e || e && a !== e || i && i !== n)) {
                        if (s.splice(r, 1), 0 === s.length) {
                            delete this.eventListeners[t];
                            break
                        }
                        r--
                    }
                }

                _fireChangeEvent(t, e, i) {
                    this._fire(t + "Change", {oldVal: e, newVal: i})
                }

                addName(t) {
                    if (!this.hasName(t)) {
                        var e = this.name(), i = e ? e + " " + t : t;
                        this.name(i)
                    }
                    return this
                }

                hasName(t) {
                    if (!t) return !1;
                    const e = this.name();
                    return !!e && -1 !== (e || "").split(/\s/g).indexOf(t)
                }

                removeName(t) {
                    var e = (this.name() || "").split(/\s/g), i = e.indexOf(t);
                    return -1 !== i && (e.splice(i, 1), this.name(e.join(" "))), this
                }

                setAttr(t, e) {
                    var i = this["set" + r.Util._capitalize(t)];
                    return r.Util._isFunction(i) ? i.call(this, e) : this._setAttr(t, e), this
                }

                _requestDraw() {
                    if (s.Konva.autoDrawEnabled) {
                        const t = this.getLayer() || this.getStage();
                        null == t || t.batchDraw()
                    }
                }

                _setAttr(t, e) {
                    var i = this.attrs[t];
                    (i !== e || r.Util.isObject(e)) && (null == e ? delete this.attrs[t] : this.attrs[t] = e, this._shouldFireChangeEvents && this._fireChangeEvent(t, i, e), this._requestDraw())
                }

                _setComponentAttr(t, e, i) {
                    var r;
                    void 0 !== i && ((r = this.attrs[t]) || (this.attrs[t] = this.getAttr(t)), this.attrs[t][e] = i, this._fireChangeEvent(t, r, i))
                }

                _fireAndBubble(t, e, i) {
                    if (e && this.nodeType === m && (e.target = this), t !== p && t !== v || !(i && (this === i || this.isAncestorOf && this.isAncestorOf(i)) || "Stage" === this.nodeType && !i)) {
                        this._fire(t, e);
                        var r = (t === p || t === v) && i && i.isAncestorOf && i.isAncestorOf(this) && !i.isAncestorOf(this.parent);
                        (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !r && (i && i.parent ? this._fireAndBubble.call(this.parent, t, e, i) : this._fireAndBubble.call(this.parent, t, e))
                    }
                }

                _getProtoListeners(t) {
                    var e, i, r;
                    const a = null !== (e = this._cache.get(d)) && void 0 !== e ? e : {};
                    let n = null == a ? void 0 : a[t];
                    if (void 0 === n) {
                        n = [];
                        let e = Object.getPrototypeOf(this);
                        for (; e;) {
                            const a = null !== (r = null === (i = e.eventListeners) || void 0 === i ? void 0 : i[t]) && void 0 !== r ? r : [];
                            n.push(...a), e = Object.getPrototypeOf(e)
                        }
                        a[t] = n, this._cache.set(d, a)
                    }
                    return n
                }

                _fire(t, e) {
                    (e = e || {}).currentTarget = this, e.type = t;
                    const i = this._getProtoListeners(t);
                    if (i) for (var r = 0; r < i.length; r++) i[r].handler.call(this, e);
                    const a = this.eventListeners[t];
                    if (a) for (r = 0; r < a.length; r++) a[r].handler.call(this, e)
                }

                draw() {
                    return this.drawScene(), this.drawHit(), this
                }

                _createDragElement(t) {
                    var e = t ? t.pointerId : void 0, i = this.getStage(), r = this.getAbsolutePosition();
                    if (i) {
                        var a = i._getPointerById(e) || i._changedPointerPositions[0] || r;
                        o.DD._dragElements.set(this._id, {
                            node: this,
                            startPointerPos: a,
                            offset: {x: a.x - r.x, y: a.y - r.y},
                            dragStatus: "ready",
                            pointerId: e
                        })
                    }
                }

                startDrag(t, e = !0) {
                    o.DD._dragElements.has(this._id) || this._createDragElement(t), o.DD._dragElements.get(this._id).dragStatus = "dragging", this.fire("dragstart", {
                        type: "dragstart",
                        target: this,
                        evt: t && t.evt
                    }, e)
                }

                _setDragPosition(t, e) {
                    const i = this.getStage()._getPointerById(e.pointerId);
                    if (i) {
                        var a = {x: i.x - e.offset.x, y: i.y - e.offset.y}, n = this.dragBoundFunc();
                        if (void 0 !== n) {
                            const e = n.call(this, a, t);
                            e ? a = e : r.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.")
                        }
                        this._lastPos && this._lastPos.x === a.x && this._lastPos.y === a.y || (this.setAbsolutePosition(a), this._requestDraw()), this._lastPos = a
                    }
                }

                stopDrag(t) {
                    const e = o.DD._dragElements.get(this._id);
                    e && (e.dragStatus = "stopped"), o.DD._endDragBefore(t), o.DD._endDragAfter(t)
                }

                setDraggable(t) {
                    this._setAttr("draggable", t), this._dragChange()
                }

                isDragging() {
                    const t = o.DD._dragElements.get(this._id);
                    return !!t && "dragging" === t.dragStatus
                }

                _listenDrag() {
                    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", (function (t) {
                        if ((void 0 === t.evt.button || s.Konva.dragButtons.indexOf(t.evt.button) >= 0) && !this.isDragging()) {
                            var e = !1;
                            o.DD._dragElements.forEach((t => {
                                this.isAncestorOf(t.node) && (e = !0)
                            })), e || this._createDragElement(t)
                        }
                    }))
                }

                _dragChange() {
                    if (this.attrs.draggable) this._listenDrag(); else {
                        if (this._dragCleanup(), !this.getStage()) return;
                        const t = o.DD._dragElements.get(this._id), e = t && "dragging" === t.dragStatus,
                            i = t && "ready" === t.dragStatus;
                        e ? this.stopDrag() : i && o.DD._dragElements.delete(this._id)
                    }
                }

                _dragCleanup() {
                    this.off("mousedown.konva"), this.off("touchstart.konva")
                }

                isClientRectOnScreen(t = {x: 0, y: 0}) {
                    const e = this.getStage();
                    if (!e) return !1;
                    const i = {x: -t.x, y: -t.y, width: e.width() + 2 * t.x, height: e.height() + 2 * t.y};
                    return r.Util.haveIntersection(i, this.getClientRect())
                }

                static create(t, e) {
                    return r.Util._isString(t) && (t = JSON.parse(t)), this._createNode(t, e)
                }

                static _createNode(t, e) {
                    var i, a, n, o = w.prototype.getClassName.call(t), h = t.children;
                    if (e && (t.attrs.container = e), s.Konva[o] || (r.Util.warn('Can not find a node with class name "' + o + '". Fallback to "Shape".'), o = "Shape"), i = new (0, s.Konva[o])(t.attrs), h) for (a = h.length, n = 0; n < a; n++) i.add(w._createNode(h[n]));
                    return i
                }
            }

            e.Node = w, w.prototype.nodeType = "Node", w.prototype._attrsAffectingSize = [], w.prototype.eventListeners = {}, w.prototype.on.call(w.prototype, S, (function () {
                this._batchingTransformChange ? this._needClearTransformCache = !0 : (this._clearCache(b), this._clearSelfAndDescendantCache(c))
            })), w.prototype.on.call(w.prototype, "visibleChange.konva", (function () {
                this._clearSelfAndDescendantCache(x)
            })), w.prototype.on.call(w.prototype, "listeningChange.konva", (function () {
                this._clearSelfAndDescendantCache(f)
            })), w.prototype.on.call(w.prototype, "opacityChange.konva", (function () {
                this._clearSelfAndDescendantCache(l)
            }));
            const P = a.Factory.addGetterSetter;
            P(w, "zIndex"), P(w, "absolutePosition"), P(w, "position"), P(w, "x", 0, (0, h.getNumberValidator)()), P(w, "y", 0, (0, h.getNumberValidator)()), P(w, "globalCompositeOperation", "source-over", (0, h.getStringValidator)()), P(w, "opacity", 1, (0, h.getNumberValidator)()), P(w, "name", "", (0, h.getStringValidator)()), P(w, "id", "", (0, h.getStringValidator)()), P(w, "rotation", 0, (0, h.getNumberValidator)()), a.Factory.addComponentsGetterSetter(w, "scale", ["x", "y"]), P(w, "scaleX", 1, (0, h.getNumberValidator)()), P(w, "scaleY", 1, (0, h.getNumberValidator)()), a.Factory.addComponentsGetterSetter(w, "skew", ["x", "y"]), P(w, "skewX", 0, (0, h.getNumberValidator)()), P(w, "skewY", 0, (0, h.getNumberValidator)()), a.Factory.addComponentsGetterSetter(w, "offset", ["x", "y"]), P(w, "offsetX", 0, (0, h.getNumberValidator)()), P(w, "offsetY", 0, (0, h.getNumberValidator)()), P(w, "dragDistance", null, (0, h.getNumberValidator)()), P(w, "width", 0, (0, h.getNumberValidator)()), P(w, "height", 0, (0, h.getNumberValidator)()), P(w, "listening", !0, (0, h.getBooleanValidator)()), P(w, "preventDefault", !0, (0, h.getBooleanValidator)()), P(w, "filters", null, (function (t) {
                return this._filterUpToDate = !1, t
            })), P(w, "visible", !0, (0, h.getBooleanValidator)()), P(w, "transformsEnabled", "all", (0, h.getStringValidator)()), P(w, "size"), P(w, "dragBoundFunc"), P(w, "draggable", !1, (0, h.getBooleanValidator)()), a.Factory.backCompat(w, {
                rotateDeg: "rotate",
                setRotationDeg: "setRotation",
                getRotationDeg: "getRotation"
            })
        }, 8722: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.releaseCapture = e.setPointerCapture = e.hasPointerCapture = e.createEvent = e.getCapturedShape = void 0;
            const r = i(8871), a = new Map, n = void 0 !== r.Konva._global.PointerEvent;

            function s(t) {
                return {evt: t, pointerId: t.pointerId}
            }

            function o(t, e) {
                const i = a.get(t);
                if (!i) return;
                const r = i.getStage();
                r && r.content, a.delete(t), n && i._fire("lostpointercapture", s(new PointerEvent("lostpointercapture")))
            }

            e.getCapturedShape = function (t) {
                return a.get(t)
            }, e.createEvent = s, e.hasPointerCapture = function (t, e) {
                return a.get(t) === e
            }, e.setPointerCapture = function (t, e) {
                o(t), e.getStage() && (a.set(t, e), n && e._fire("gotpointercapture", s(new PointerEvent("gotpointercapture"))))
            }, e.releaseCapture = o
        }, 4723: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Shape = e.shapes = void 0;
            const r = i(8871), a = i(4060), n = i(4892), s = i(6536), o = i(5483), h = i(8871), l = i(8722);
            var d = "hasShadow", c = "shadowRGBA", g = "patternImage", u = "linearGradient", f = "radialGradient";
            let p;

            function v() {
                return p || (p = a.Util.createCanvasElement().getContext("2d"), p)
            }

            e.shapes = {};

            class m extends s.Node {
                constructor(t) {
                    let i;
                    for (super(t); i = a.Util.getRandomColor(), !i || i in e.shapes;) ;
                    this.colorKey = i, e.shapes[i] = this
                }

                getContext() {
                    return a.Util.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext()
                }

                getCanvas() {
                    return a.Util.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas()
                }

                getSceneFunc() {
                    return this.attrs.sceneFunc || this._sceneFunc
                }

                getHitFunc() {
                    return this.attrs.hitFunc || this._hitFunc
                }

                hasShadow() {
                    return this._getCache(d, this._hasShadow)
                }

                _hasShadow() {
                    return this.shadowEnabled() && 0 !== this.shadowOpacity() && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY())
                }

                _getFillPattern() {
                    return this._getCache(g, this.__getFillPattern)
                }

                __getFillPattern() {
                    if (this.fillPatternImage()) {
                        const t = v().createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
                        if (t && t.setTransform) {
                            const e = new a.Transform;
                            e.translate(this.fillPatternX(), this.fillPatternY()), e.rotate(r.Konva.getAngle(this.fillPatternRotation())), e.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), e.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
                            const i = e.getMatrix(), n = "undefined" == typeof DOMMatrix ? {
                                a: i[0],
                                b: i[1],
                                c: i[2],
                                d: i[3],
                                e: i[4],
                                f: i[5]
                            } : new DOMMatrix(i);
                            t.setTransform(n)
                        }
                        return t
                    }
                }

                _getLinearGradient() {
                    return this._getCache(u, this.__getLinearGradient)
                }

                __getLinearGradient() {
                    var t = this.fillLinearGradientColorStops();
                    if (t) {
                        for (var e = v(), i = this.fillLinearGradientStartPoint(), r = this.fillLinearGradientEndPoint(), a = e.createLinearGradient(i.x, i.y, r.x, r.y), n = 0; n < t.length; n += 2) a.addColorStop(t[n], t[n + 1]);
                        return a
                    }
                }

                _getRadialGradient() {
                    return this._getCache(f, this.__getRadialGradient)
                }

                __getRadialGradient() {
                    var t = this.fillRadialGradientColorStops();
                    if (t) {
                        for (var e = v(), i = this.fillRadialGradientStartPoint(), r = this.fillRadialGradientEndPoint(), a = e.createRadialGradient(i.x, i.y, this.fillRadialGradientStartRadius(), r.x, r.y, this.fillRadialGradientEndRadius()), n = 0; n < t.length; n += 2) a.addColorStop(t[n], t[n + 1]);
                        return a
                    }
                }

                getShadowRGBA() {
                    return this._getCache(c, this._getShadowRGBA)
                }

                _getShadowRGBA() {
                    if (this.hasShadow()) {
                        var t = a.Util.colorToRGBA(this.shadowColor());
                        return t ? "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a * (this.shadowOpacity() || 1) + ")" : void 0
                    }
                }

                hasFill() {
                    return this._calculate("hasFill", ["fillEnabled", "fill", "fillPatternImage", "fillLinearGradientColorStops", "fillRadialGradientColorStops"], (() => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops())))
                }

                hasStroke() {
                    return this._calculate("hasStroke", ["strokeEnabled", "strokeWidth", "stroke", "strokeLinearGradientColorStops"], (() => this.strokeEnabled() && this.strokeWidth() && !(!this.stroke() && !this.strokeLinearGradientColorStops())))
                }

                hasHitStroke() {
                    const t = this.hitStrokeWidth();
                    return "auto" === t ? this.hasStroke() : this.strokeEnabled() && !!t
                }

                intersects(t) {
                    var e = this.getStage();
                    if (!e) return !1;
                    const i = e.bufferHitCanvas;
                    return i.getContext().clear(), this.drawHit(i, void 0, !0), i.context.getImageData(Math.round(t.x), Math.round(t.y), 1, 1).data[3] > 0
                }

                destroy() {
                    return s.Node.prototype.destroy.call(this), delete e.shapes[this.colorKey], delete this.colorKey, this
                }

                _useBufferCanvas(t) {
                    var e;
                    if (null !== (e = this.attrs.perfectDrawEnabled) && void 0 !== e && !e) return !1;
                    const i = t || this.hasFill(), r = this.hasStroke(), a = 1 !== this.getAbsoluteOpacity();
                    if (i && r && a) return !0;
                    const n = this.hasShadow(), s = this.shadowForStrokeEnabled();
                    return !!(i && r && n && s)
                }

                setStrokeHitEnabled(t) {
                    a.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), t ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0)
                }

                getStrokeHitEnabled() {
                    return 0 !== this.hitStrokeWidth()
                }

                getSelfRect() {
                    var t = this.size();
                    return {
                        x: this._centroid ? -t.width / 2 : 0,
                        y: this._centroid ? -t.height / 2 : 0,
                        width: t.width,
                        height: t.height
                    }
                }

                getClientRect(t = {}) {
                    let e = !1, i = this.getParent();
                    for (; i;) {
                        if (i.isCached()) {
                            e = !0;
                            break
                        }
                        i = i.getParent()
                    }
                    const r = t.skipTransform, a = t.relativeTo || e && this.getStage() || void 0,
                        n = this.getSelfRect(), s = !t.skipStroke && this.hasStroke() && this.strokeWidth() || 0,
                        o = n.width + s, h = n.height + s, l = !t.skipShadow && this.hasShadow(),
                        d = l ? this.shadowOffsetX() : 0, c = l ? this.shadowOffsetY() : 0, g = o + Math.abs(d),
                        u = h + Math.abs(c), f = l && this.shadowBlur() || 0, p = {
                            width: g + 2 * f,
                            height: u + 2 * f,
                            x: -(s / 2 + f) + Math.min(d, 0) + n.x,
                            y: -(s / 2 + f) + Math.min(c, 0) + n.y
                        };
                    return r ? p : this._transformedRect(p, a)
                }

                drawScene(t, e, i) {
                    var r, a, n = this.getLayer(), s = t || n.getCanvas(), o = s.getContext(),
                        h = this._getCanvasCache(), l = this.getSceneFunc(), d = this.hasShadow(), c = s.isCache,
                        g = e === this;
                    if (!this.isVisible() && !g) return this;
                    if (h) {
                        o.save();
                        var u = this.getAbsoluteTransform(e).getMatrix();
                        return o.transform(u[0], u[1], u[2], u[3], u[4], u[5]), this._drawCachedSceneCanvas(o), o.restore(), this
                    }
                    if (!l) return this;
                    if (o.save(), this._useBufferCanvas() && !c) {
                        r = this.getStage();
                        const t = i || r.bufferCanvas;
                        (a = t.getContext()).clear(), a.save(), a._applyLineJoin(this);
                        var f = this.getAbsoluteTransform(e).getMatrix();
                        a.transform(f[0], f[1], f[2], f[3], f[4], f[5]), l.call(this, a, this), a.restore();
                        var p = t.pixelRatio;
                        d && o._applyShadow(this), o._applyOpacity(this), o._applyGlobalCompositeOperation(this), o.drawImage(t._canvas, 0, 0, t.width / p, t.height / p)
                    } else o._applyLineJoin(this), g || (f = this.getAbsoluteTransform(e).getMatrix(), o.transform(f[0], f[1], f[2], f[3], f[4], f[5]), o._applyOpacity(this), o._applyGlobalCompositeOperation(this)), d && o._applyShadow(this), l.call(this, o, this);
                    return o.restore(), this
                }

                drawHit(t, e, i = !1) {
                    if (!this.shouldDrawHit(e, i)) return this;
                    var r = this.getLayer(), n = t || r.hitCanvas, s = n && n.getContext(),
                        o = this.hitFunc() || this.sceneFunc(), h = this._getCanvasCache(), l = h && h.hit;
                    if (this.colorKey || a.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), l) {
                        s.save();
                        var d = this.getAbsoluteTransform(e).getMatrix();
                        return s.transform(d[0], d[1], d[2], d[3], d[4], d[5]), this._drawCachedHitCanvas(s), s.restore(), this
                    }
                    if (!o) return this;
                    if (s.save(), s._applyLineJoin(this), this !== e) {
                        var c = this.getAbsoluteTransform(e).getMatrix();
                        s.transform(c[0], c[1], c[2], c[3], c[4], c[5])
                    }
                    return o.call(this, s, this), s.restore(), this
                }

                drawHitFromCache(t = 0) {
                    var e, i, r, n, s, o = this._getCanvasCache(), h = this._getCachedSceneCanvas(), l = o.hit,
                        d = l.getContext(), c = l.getWidth(), g = l.getHeight();
                    d.clear(), d.drawImage(h._canvas, 0, 0, c, g);
                    try {
                        for (r = (i = (e = d.getImageData(0, 0, c, g)).data).length, n = a.Util._hexToRgb(this.colorKey), s = 0; s < r; s += 4) i[s + 3] > t ? (i[s] = n.r, i[s + 1] = n.g, i[s + 2] = n.b, i[s + 3] = 255) : i[s + 3] = 0;
                        d.putImageData(e, 0, 0)
                    } catch (t) {
                        a.Util.error("Unable to draw hit graph from cached scene canvas. " + t.message)
                    }
                    return this
                }

                hasPointerCapture(t) {
                    return l.hasPointerCapture(t, this)
                }

                setPointerCapture(t) {
                    l.setPointerCapture(t, this)
                }

                releaseCapture(t) {
                    l.releaseCapture(t, this)
                }
            }

            e.Shape = m, m.prototype._fillFunc = function (t) {
                const e = this.attrs.fillRule;
                e ? t.fill(e) : t.fill()
            }, m.prototype._strokeFunc = function (t) {
                t.stroke()
            }, m.prototype._fillFuncHit = function (t) {
                const e = this.attrs.fillRule;
                e ? t.fill(e) : t.fill()
            }, m.prototype._strokeFuncHit = function (t) {
                t.stroke()
            }, m.prototype._centroid = !1, m.prototype.nodeType = "Shape", (0, h._registerNode)(m), m.prototype.eventListeners = {}, m.prototype.on.call(m.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", (function () {
                this._clearCache(d)
            })), m.prototype.on.call(m.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", (function () {
                this._clearCache(c)
            })), m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", (function () {
                this._clearCache(g)
            })), m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", (function () {
                this._clearCache(u)
            })), m.prototype.on.call(m.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", (function () {
                this._clearCache(f)
            })), n.Factory.addGetterSetter(m, "stroke", void 0, (0, o.getStringOrGradientValidator)()), n.Factory.addGetterSetter(m, "strokeWidth", 2, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillAfterStrokeEnabled", !1), n.Factory.addGetterSetter(m, "hitStrokeWidth", "auto", (0, o.getNumberOrAutoValidator)()), n.Factory.addGetterSetter(m, "strokeHitEnabled", !0, (0, o.getBooleanValidator)()), n.Factory.addGetterSetter(m, "perfectDrawEnabled", !0, (0, o.getBooleanValidator)()), n.Factory.addGetterSetter(m, "shadowForStrokeEnabled", !0, (0, o.getBooleanValidator)()), n.Factory.addGetterSetter(m, "lineJoin"), n.Factory.addGetterSetter(m, "lineCap"), n.Factory.addGetterSetter(m, "sceneFunc"), n.Factory.addGetterSetter(m, "hitFunc"), n.Factory.addGetterSetter(m, "dash"), n.Factory.addGetterSetter(m, "dashOffset", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "shadowColor", void 0, (0, o.getStringValidator)()), n.Factory.addGetterSetter(m, "shadowBlur", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "shadowOpacity", 1, (0, o.getNumberValidator)()), n.Factory.addComponentsGetterSetter(m, "shadowOffset", ["x", "y"]), n.Factory.addGetterSetter(m, "shadowOffsetX", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "shadowOffsetY", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillPatternImage"), n.Factory.addGetterSetter(m, "fill", void 0, (0, o.getStringOrGradientValidator)()), n.Factory.addGetterSetter(m, "fillPatternX", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillPatternY", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillLinearGradientColorStops"), n.Factory.addGetterSetter(m, "strokeLinearGradientColorStops"), n.Factory.addGetterSetter(m, "fillRadialGradientStartRadius", 0), n.Factory.addGetterSetter(m, "fillRadialGradientEndRadius", 0), n.Factory.addGetterSetter(m, "fillRadialGradientColorStops"), n.Factory.addGetterSetter(m, "fillPatternRepeat", "repeat"), n.Factory.addGetterSetter(m, "fillEnabled", !0), n.Factory.addGetterSetter(m, "strokeEnabled", !0), n.Factory.addGetterSetter(m, "shadowEnabled", !0), n.Factory.addGetterSetter(m, "dashEnabled", !0), n.Factory.addGetterSetter(m, "strokeScaleEnabled", !0), n.Factory.addGetterSetter(m, "fillPriority", "color"), n.Factory.addComponentsGetterSetter(m, "fillPatternOffset", ["x", "y"]), n.Factory.addGetterSetter(m, "fillPatternOffsetX", 0, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillPatternOffsetY", 0, (0, o.getNumberValidator)()), n.Factory.addComponentsGetterSetter(m, "fillPatternScale", ["x", "y"]), n.Factory.addGetterSetter(m, "fillPatternScaleX", 1, (0, o.getNumberValidator)()), n.Factory.addGetterSetter(m, "fillPatternScaleY", 1, (0, o.getNumberValidator)()), n.Factory.addComponentsGetterSetter(m, "fillLinearGradientStartPoint", ["x", "y"]), n.Factory.addComponentsGetterSetter(m, "strokeLinearGradientStartPoint", ["x", "y"]), n.Factory.addGetterSetter(m, "fillLinearGradientStartPointX", 0), n.Factory.addGetterSetter(m, "strokeLinearGradientStartPointX", 0), n.Factory.addGetterSetter(m, "fillLinearGradientStartPointY", 0), n.Factory.addGetterSetter(m, "strokeLinearGradientStartPointY", 0), n.Factory.addComponentsGetterSetter(m, "fillLinearGradientEndPoint", ["x", "y"]), n.Factory.addComponentsGetterSetter(m, "strokeLinearGradientEndPoint", ["x", "y"]), n.Factory.addGetterSetter(m, "fillLinearGradientEndPointX", 0), n.Factory.addGetterSetter(m, "strokeLinearGradientEndPointX", 0), n.Factory.addGetterSetter(m, "fillLinearGradientEndPointY", 0), n.Factory.addGetterSetter(m, "strokeLinearGradientEndPointY", 0), n.Factory.addComponentsGetterSetter(m, "fillRadialGradientStartPoint", ["x", "y"]), n.Factory.addGetterSetter(m, "fillRadialGradientStartPointX", 0), n.Factory.addGetterSetter(m, "fillRadialGradientStartPointY", 0), n.Factory.addComponentsGetterSetter(m, "fillRadialGradientEndPoint", ["x", "y"]), n.Factory.addGetterSetter(m, "fillRadialGradientEndPointX", 0), n.Factory.addGetterSetter(m, "fillRadialGradientEndPointY", 0), n.Factory.addGetterSetter(m, "fillPatternRotation", 0), n.Factory.addGetterSetter(m, "fillRule", void 0, (0, o.getStringValidator)()), n.Factory.backCompat(m, {
                dashArray: "dash",
                getDashArray: "getDash",
                setDashArray: "getDash",
                drawFunc: "sceneFunc",
                getDrawFunc: "getSceneFunc",
                setDrawFunc: "setSceneFunc",
                drawHitFunc: "hitFunc",
                getDrawHitFunc: "getHitFunc",
                setDrawHitFunc: "setHitFunc"
            })
        }, 7324: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Stage = e.stages = void 0;
            const r = i(4060), a = i(4892), n = i(4473), s = i(8871), o = i(8604), h = i(1268), l = i(8871),
                d = i(8722);
            var c = "mouseleave", g = "mouseover", u = "mouseenter", f = "mousemove", p = "mousedown", v = "mouseup",
                m = "pointermove", y = "pointerdown", _ = "pointerup", b = "pointercancel", x = "pointerout",
                S = "pointerleave", C = "pointerover", w = "pointerenter", P = "contextmenu", k = "touchstart",
                A = "touchend", T = "touchmove", F = "touchcancel", M = "wheel",
                G = [[u, "_pointerenter"], [p, "_pointerdown"], [f, "_pointermove"], [v, "_pointerup"], [c, "_pointerleave"], [k, "_pointerdown"], [T, "_pointermove"], [A, "_pointerup"], [F, "_pointercancel"], [g, "_pointerover"], [M, "_wheel"], [P, "_contextmenu"], [y, "_pointerdown"], [m, "_pointermove"], [_, "_pointerup"], [b, "_pointercancel"], ["lostpointercapture", "_lostpointercapture"]];
            const R = {
                mouse: {
                    [x]: "mouseout",
                    [S]: c,
                    [C]: g,
                    [w]: u,
                    [m]: f,
                    [y]: p,
                    [_]: v,
                    [b]: "mousecancel",
                    pointerclick: "click",
                    pointerdblclick: "dblclick"
                },
                touch: {
                    [x]: "touchout",
                    [S]: "touchleave",
                    [C]: "touchover",
                    [w]: "touchenter",
                    [m]: T,
                    [y]: k,
                    [_]: A,
                    [b]: F,
                    pointerclick: "tap",
                    pointerdblclick: "dbltap"
                },
                pointer: {
                    [x]: x,
                    [S]: S,
                    [C]: C,
                    [w]: w,
                    [m]: m,
                    [y]: y,
                    [_]: _,
                    [b]: b,
                    pointerclick: "pointerclick",
                    pointerdblclick: "pointerdblclick"
                }
            }, D = t => t.indexOf("pointer") >= 0 ? "pointer" : t.indexOf("touch") >= 0 ? "touch" : "mouse", N = t => {
                const e = D(t);
                return "pointer" === e ? s.Konva.pointerEventsEnabled && R.pointer : "touch" === e ? R.touch : "mouse" === e ? R.mouse : void 0
            };

            function E(t = {}) {
                return (t.clipFunc || t.clipWidth || t.clipHeight) && r.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups."), t
            }

            e.stages = [];

            class O extends n.Container {
                constructor(t) {
                    super(E(t)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), e.stages.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", (() => {
                        E(this.attrs)
                    })), this._checkVisibility()
                }

                _validateAdd(t) {
                    const e = "Layer" === t.getType(), i = "FastLayer" === t.getType();
                    e || i || r.Util.throw("You may only add layers to the stage.")
                }

                _checkVisibility() {
                    if (!this.content) return;
                    const t = this.visible() ? "" : "none";
                    this.content.style.display = t
                }

                setContainer(t) {
                    if ("string" == typeof t) {
                        if ("." === t.charAt(0)) {
                            var e = t.slice(1);
                            t = document.getElementsByClassName(e)[0]
                        } else {
                            var i;
                            i = "#" !== t.charAt(0) ? t : t.slice(1), t = document.getElementById(i)
                        }
                        if (!t) throw "Can not find container in document with id " + i
                    }
                    return this._setAttr("container", t), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), t.appendChild(this.content)), this
                }

                shouldDrawHit() {
                    return !0
                }

                clear() {
                    var t, e = this.children, i = e.length;
                    for (t = 0; t < i; t++) e[t].clear();
                    return this
                }

                clone(t) {
                    return t || (t = {}), t.container = "undefined" != typeof document && document.createElement("div"), n.Container.prototype.clone.call(this, t)
                }

                destroy() {
                    super.destroy();
                    var t = this.content;
                    t && r.Util._isInDocument(t) && this.container().removeChild(t);
                    var i = e.stages.indexOf(this);
                    return i > -1 && e.stages.splice(i, 1), r.Util.releaseCanvas(this.bufferCanvas._canvas, this.bufferHitCanvas._canvas), this
                }

                getPointerPosition() {
                    const t = this._pointerPositions[0] || this._changedPointerPositions[0];
                    return t ? {
                        x: t.x,
                        y: t.y
                    } : (r.Util.warn("Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);"), null)
                }

                _getPointerById(t) {
                    return this._pointerPositions.find((e => e.id === t))
                }

                getPointersPositions() {
                    return this._pointerPositions
                }

                getStage() {
                    return this
                }

                getContent() {
                    return this.content
                }

                _toKonvaCanvas(t) {
                    (t = t || {}).x = t.x || 0, t.y = t.y || 0, t.width = t.width || this.width(), t.height = t.height || this.height();
                    var e = new o.SceneCanvas({width: t.width, height: t.height, pixelRatio: t.pixelRatio || 1}),
                        i = e.getContext()._context, r = this.children;
                    return (t.x || t.y) && i.translate(-1 * t.x, -1 * t.y), r.forEach((function (e) {
                        if (e.isVisible()) {
                            var r = e._toKonvaCanvas(t);
                            i.drawImage(r._canvas, t.x, t.y, r.getWidth() / r.getPixelRatio(), r.getHeight() / r.getPixelRatio())
                        }
                    })), e
                }

                getIntersection(t) {
                    if (!t) return null;
                    var e, i = this.children;
                    for (e = i.length - 1; e >= 0; e--) {
                        const r = i[e].getIntersection(t);
                        if (r) return r
                    }
                    return null
                }

                _resizeDOM() {
                    var t = this.width(), e = this.height();
                    this.content && (this.content.style.width = t + "px", this.content.style.height = e + "px"), this.bufferCanvas.setSize(t, e), this.bufferHitCanvas.setSize(t, e), this.children.forEach((i => {
                        i.setSize({width: t, height: e}), i.draw()
                    }))
                }

                add(t, ...e) {
                    if (arguments.length > 1) {
                        for (var i = 0; i < arguments.length; i++) this.add(arguments[i]);
                        return this
                    }
                    super.add(t);
                    var a = this.children.length;
                    return a > 5 && r.Util.warn("The stage has " + a + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), t.setSize({
                        width: this.width(),
                        height: this.height()
                    }), t.draw(), s.Konva.isBrowser && this.content.appendChild(t.canvas._canvas), this
                }

                getParent() {
                    return null
                }

                getLayer() {
                    return null
                }

                hasPointerCapture(t) {
                    return d.hasPointerCapture(t, this)
                }

                setPointerCapture(t) {
                    d.setPointerCapture(t, this)
                }

                releaseCapture(t) {
                    d.releaseCapture(t, this)
                }

                getLayers() {
                    return this.children
                }

                _bindContentEvents() {
                    s.Konva.isBrowser && G.forEach((([t, e]) => {
                        this.content.addEventListener(t, (t => {
                            this[e](t)
                        }), {passive: !1})
                    }))
                }

                _pointerenter(t) {
                    this.setPointersPositions(t);
                    const e = N(t.type);
                    e && this._fire(e.pointerenter, {evt: t, target: this, currentTarget: this})
                }

                _pointerover(t) {
                    this.setPointersPositions(t);
                    const e = N(t.type);
                    e && this._fire(e.pointerover, {evt: t, target: this, currentTarget: this})
                }

                _getTargetShape(t) {
                    let e = this[t + "targetShape"];
                    return e && !e.getStage() && (e = null), e
                }

                _pointerleave(t) {
                    const e = N(t.type), i = D(t.type);
                    if (e) {
                        this.setPointersPositions(t);
                        var r = this._getTargetShape(i),
                            a = !(s.Konva.isDragging() || s.Konva.isTransforming()) || s.Konva.hitOnDragEnabled;
                        r && a ? (r._fireAndBubble(e.pointerout, {evt: t}), r._fireAndBubble(e.pointerleave, {evt: t}), this._fire(e.pointerleave, {
                            evt: t,
                            target: this,
                            currentTarget: this
                        }), this[i + "targetShape"] = null) : a && (this._fire(e.pointerleave, {
                            evt: t,
                            target: this,
                            currentTarget: this
                        }), this._fire(e.pointerout, {
                            evt: t,
                            target: this,
                            currentTarget: this
                        })), this.pointerPos = null, this._pointerPositions = []
                    }
                }

                _pointerdown(t) {
                    const e = N(t.type), i = D(t.type);
                    if (e) {
                        this.setPointersPositions(t);
                        var r = !1;
                        this._changedPointerPositions.forEach((a => {
                            var n = this.getIntersection(a);
                            if (h.DD.justDragged = !1, s.Konva["_" + i + "ListenClick"] = !0, !n || !n.isListening()) return void (this[i + "ClickStartShape"] = void 0);
                            s.Konva.capturePointerEventsEnabled && n.setPointerCapture(a.id), this[i + "ClickStartShape"] = n, n._fireAndBubble(e.pointerdown, {
                                evt: t,
                                pointerId: a.id
                            }), r = !0;
                            const o = t.type.indexOf("touch") >= 0;
                            n.preventDefault() && t.cancelable && o && t.preventDefault()
                        })), r || this._fire(e.pointerdown, {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: this._pointerPositions[0].id
                        })
                    }
                }

                _pointermove(t) {
                    const e = N(t.type), i = D(t.type);
                    if (!e) return;
                    if (s.Konva.isDragging() && h.DD.node.preventDefault() && t.cancelable && t.preventDefault(), this.setPointersPositions(t), (s.Konva.isDragging() || s.Konva.isTransforming()) && !s.Konva.hitOnDragEnabled) return;
                    var r = {};
                    let a = !1;
                    var n = this._getTargetShape(i);
                    this._changedPointerPositions.forEach((s => {
                        const o = d.getCapturedShape(s.id) || this.getIntersection(s), h = s.id,
                            l = {evt: t, pointerId: h};
                        var c = n !== o;
                        if (c && n && (n._fireAndBubble(e.pointerout, {...l}, o), n._fireAndBubble(e.pointerleave, {...l}, o)), o) {
                            if (r[o._id]) return;
                            r[o._id] = !0
                        }
                        o && o.isListening() ? (a = !0, c && (o._fireAndBubble(e.pointerover, {...l}, n), o._fireAndBubble(e.pointerenter, {...l}, n), this[i + "targetShape"] = o), o._fireAndBubble(e.pointermove, {...l})) : n && (this._fire(e.pointerover, {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: h
                        }), this[i + "targetShape"] = null)
                    })), a || this._fire(e.pointermove, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    })
                }

                _pointerup(t) {
                    const e = N(t.type), i = D(t.type);
                    if (!e) return;
                    this.setPointersPositions(t);
                    const r = this[i + "ClickStartShape"], a = this[i + "ClickEndShape"];
                    var n = {};
                    let o = !1;
                    this._changedPointerPositions.forEach((l => {
                        const c = d.getCapturedShape(l.id) || this.getIntersection(l);
                        if (c) {
                            if (c.releaseCapture(l.id), n[c._id]) return;
                            n[c._id] = !0
                        }
                        const g = l.id, u = {evt: t, pointerId: g};
                        let f = !1;
                        s.Konva["_" + i + "InDblClickWindow"] ? (f = !0, clearTimeout(this[i + "DblTimeout"])) : h.DD.justDragged || (s.Konva["_" + i + "InDblClickWindow"] = !0, clearTimeout(this[i + "DblTimeout"])), this[i + "DblTimeout"] = setTimeout((function () {
                            s.Konva["_" + i + "InDblClickWindow"] = !1
                        }), s.Konva.dblClickWindow), c && c.isListening() ? (o = !0, this[i + "ClickEndShape"] = c, c._fireAndBubble(e.pointerup, {...u}), s.Konva["_" + i + "ListenClick"] && r && r === c && (c._fireAndBubble(e.pointerclick, {...u}), f && a && a === c && c._fireAndBubble(e.pointerdblclick, {...u}))) : (this[i + "ClickEndShape"] = null, s.Konva["_" + i + "ListenClick"] && this._fire(e.pointerclick, {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: g
                        }), f && this._fire(e.pointerdblclick, {
                            evt: t,
                            target: this,
                            currentTarget: this,
                            pointerId: g
                        }))
                    })), o || this._fire(e.pointerup, {
                        evt: t,
                        target: this,
                        currentTarget: this,
                        pointerId: this._changedPointerPositions[0].id
                    }), s.Konva["_" + i + "ListenClick"] = !1, t.cancelable && "touch" !== i && t.preventDefault()
                }

                _contextmenu(t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble(P, {evt: t}) : this._fire(P, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })
                }

                _wheel(t) {
                    this.setPointersPositions(t);
                    var e = this.getIntersection(this.getPointerPosition());
                    e && e.isListening() ? e._fireAndBubble(M, {evt: t}) : this._fire(M, {
                        evt: t,
                        target: this,
                        currentTarget: this
                    })
                }

                _pointercancel(t) {
                    this.setPointersPositions(t);
                    const e = d.getCapturedShape(t.pointerId) || this.getIntersection(this.getPointerPosition());
                    e && e._fireAndBubble(_, d.createEvent(t)), d.releaseCapture(t.pointerId)
                }

                _lostpointercapture(t) {
                    d.releaseCapture(t.pointerId)
                }

                setPointersPositions(t) {
                    var e = this._getContentPosition(), i = null, a = null;
                    void 0 !== (t = t || window.event).touches ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(t.touches, (t => {
                        this._pointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - e.left) / e.scaleX,
                            y: (t.clientY - e.top) / e.scaleY
                        })
                    })), Array.prototype.forEach.call(t.changedTouches || t.touches, (t => {
                        this._changedPointerPositions.push({
                            id: t.identifier,
                            x: (t.clientX - e.left) / e.scaleX,
                            y: (t.clientY - e.top) / e.scaleY
                        })
                    }))) : (i = (t.clientX - e.left) / e.scaleX, a = (t.clientY - e.top) / e.scaleY, this.pointerPos = {
                        x: i,
                        y: a
                    }, this._pointerPositions = [{
                        x: i,
                        y: a,
                        id: r.Util._getFirstPointerId(t)
                    }], this._changedPointerPositions = [{x: i, y: a, id: r.Util._getFirstPointerId(t)}])
                }

                _setPointerPosition(t) {
                    r.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(t)
                }

                _getContentPosition() {
                    if (!this.content || !this.content.getBoundingClientRect) return {
                        top: 0,
                        left: 0,
                        scaleX: 1,
                        scaleY: 1
                    };
                    var t = this.content.getBoundingClientRect();
                    return {
                        top: t.top,
                        left: t.left,
                        scaleX: t.width / this.content.clientWidth || 1,
                        scaleY: t.height / this.content.clientHeight || 1
                    }
                }

                _buildDOM() {
                    if (this.bufferCanvas = new o.SceneCanvas({
                        width: this.width(),
                        height: this.height()
                    }), this.bufferHitCanvas = new o.HitCanvas({
                        pixelRatio: 1,
                        width: this.width(),
                        height: this.height()
                    }), s.Konva.isBrowser) {
                        var t = this.container();
                        if (!t) throw "Stage has no container. A container is required.";
                        t.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), t.appendChild(this.content), this._resizeDOM()
                    }
                }

                cache() {
                    return r.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this
                }

                clearCache() {
                    return this
                }

                batchDraw() {
                    return this.getChildren().forEach((function (t) {
                        t.batchDraw()
                    })), this
                }
            }

            e.Stage = O, O.prototype.nodeType = "Stage", (0, l._registerNode)(O), a.Factory.addGetterSetter(O, "container"), s.Konva.isBrowser && document.addEventListener("visibilitychange", (() => {
                e.stages.forEach((t => {
                    t.batchDraw()
                }))
            }))
        }, 8665: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Easings = e.Tween = void 0;
            const r = i(4060), a = i(9696), n = i(6536), s = i(8871);
            var o = {node: 1, duration: 1, easing: 1, onFinish: 1, yoyo: 1}, h = 0,
                l = ["fill", "stroke", "shadowColor"];

            class d {
                constructor(t, e, i, r, a, n, s) {
                    this.prop = t, this.propFunc = e, this.begin = r, this._pos = r, this.duration = n, this._change = 0, this.prevPos = 0, this.yoyo = s, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = i, this._change = a - this.begin, this.pause()
                }

                fire(t) {
                    var e = this[t];
                    e && e()
                }

                setTime(t) {
                    t > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : t < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = t, this.update())
                }

                getTime() {
                    return this._time
                }

                setPosition(t) {
                    this.prevPos = this._pos, this.propFunc(t), this._pos = t
                }

                getPosition(t) {
                    return void 0 === t && (t = this._time), this.func(t, this.begin, this._change, this.duration)
                }

                play() {
                    this.state = 2, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay")
                }

                reverse() {
                    this.state = 3, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse")
                }

                seek(t) {
                    this.pause(), this._time = t, this.update(), this.fire("onSeek")
                }

                reset() {
                    this.pause(), this._time = 0, this.update(), this.fire("onReset")
                }

                finish() {
                    this.pause(), this._time = this.duration, this.update(), this.fire("onFinish")
                }

                update() {
                    this.setPosition(this.getPosition(this._time)), this.fire("onUpdate")
                }

                onEnterFrame() {
                    var t = this.getTimer() - this._startTime;
                    2 === this.state ? this.setTime(t) : 3 === this.state && this.setTime(this.duration - t)
                }

                pause() {
                    this.state = 1, this.fire("onPause")
                }

                getTimer() {
                    return (new Date).getTime()
                }
            }

            class c {
                constructor(t) {
                    var i, n, l = this, g = t.node, u = g._id, f = t.easing || e.Easings.Linear, p = !!t.yoyo;
                    i = void 0 === t.duration ? .3 : 0 === t.duration ? .001 : t.duration, this.node = g, this._id = h++;
                    var v = g.getLayer() || (g instanceof s.Konva.Stage ? g.getLayers() : null);
                    for (n in v || r.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new a.Animation((function () {
                        l.tween.onEnterFrame()
                    }), v), this.tween = new d(n, (function (t) {
                        l._tweenFunc(t)
                    }), f, 0, 1, 1e3 * i, p), this._addListeners(), c.attrs[u] || (c.attrs[u] = {}), c.attrs[u][this._id] || (c.attrs[u][this._id] = {}), c.tweens[u] || (c.tweens[u] = {}), t) void 0 === o[n] && this._addAttr(n, t[n]);
                    this.reset(), this.onFinish = t.onFinish, this.onReset = t.onReset, this.onUpdate = t.onUpdate
                }

                _addAttr(t, e) {
                    var i, a, n, s, o, h, d, g, u = this.node, f = u._id;
                    if ((n = c.tweens[f][t]) && delete c.attrs[f][n][t], i = u.getAttr(t), r.Util._isArray(e)) if (a = [], o = Math.max(e.length, i.length), "points" === t && e.length !== i.length && (e.length > i.length ? (d = i, i = r.Util._prepareArrayForTween(i, e, u.closed())) : (h = e, e = r.Util._prepareArrayForTween(e, i, u.closed()))), 0 === t.indexOf("fill")) for (s = 0; s < o; s++) if (s % 2 == 0) a.push(e[s] - i[s]); else {
                        var p = r.Util.colorToRGBA(i[s]);
                        g = r.Util.colorToRGBA(e[s]), i[s] = p, a.push({
                            r: g.r - p.r,
                            g: g.g - p.g,
                            b: g.b - p.b,
                            a: g.a - p.a
                        })
                    } else for (s = 0; s < o; s++) a.push(e[s] - i[s]); else -1 !== l.indexOf(t) ? (i = r.Util.colorToRGBA(i), a = {
                        r: (g = r.Util.colorToRGBA(e)).r - i.r,
                        g: g.g - i.g,
                        b: g.b - i.b,
                        a: g.a - i.a
                    }) : a = e - i;
                    c.attrs[f][this._id][t] = {
                        start: i,
                        diff: a,
                        end: e,
                        trueEnd: h,
                        trueStart: d
                    }, c.tweens[f][t] = this._id
                }

                _tweenFunc(t) {
                    var e, i, a, n, s, o, h, d, g = this.node, u = c.attrs[g._id][this._id];
                    for (e in u) {
                        if (a = (i = u[e]).start, n = i.diff, d = i.end, r.Util._isArray(a)) if (s = [], h = Math.max(a.length, d.length), 0 === e.indexOf("fill")) for (o = 0; o < h; o++) o % 2 == 0 ? s.push((a[o] || 0) + n[o] * t) : s.push("rgba(" + Math.round(a[o].r + n[o].r * t) + "," + Math.round(a[o].g + n[o].g * t) + "," + Math.round(a[o].b + n[o].b * t) + "," + (a[o].a + n[o].a * t) + ")"); else for (o = 0; o < h; o++) s.push((a[o] || 0) + n[o] * t); else s = -1 !== l.indexOf(e) ? "rgba(" + Math.round(a.r + n.r * t) + "," + Math.round(a.g + n.g * t) + "," + Math.round(a.b + n.b * t) + "," + (a.a + n.a * t) + ")" : a + n * t;
                        g.setAttr(e, s)
                    }
                }

                _addListeners() {
                    this.tween.onPlay = () => {
                        this.anim.start()
                    }, this.tween.onReverse = () => {
                        this.anim.start()
                    }, this.tween.onPause = () => {
                        this.anim.stop()
                    }, this.tween.onFinish = () => {
                        var t = this.node, e = c.attrs[t._id][this._id];
                        e.points && e.points.trueEnd && t.setAttr("points", e.points.trueEnd), this.onFinish && this.onFinish.call(this)
                    }, this.tween.onReset = () => {
                        var t = this.node, e = c.attrs[t._id][this._id];
                        e.points && e.points.trueStart && t.points(e.points.trueStart), this.onReset && this.onReset()
                    }, this.tween.onUpdate = () => {
                        this.onUpdate && this.onUpdate.call(this)
                    }
                }

                play() {
                    return this.tween.play(), this
                }

                reverse() {
                    return this.tween.reverse(), this
                }

                reset() {
                    return this.tween.reset(), this
                }

                seek(t) {
                    return this.tween.seek(1e3 * t), this
                }

                pause() {
                    return this.tween.pause(), this
                }

                finish() {
                    return this.tween.finish(), this
                }

                destroy() {
                    var t, e = this.node._id, i = this._id, r = c.tweens[e];
                    for (t in this.pause(), r) delete c.tweens[e][t];
                    delete c.attrs[e][i]
                }
            }

            e.Tween = c, c.attrs = {}, c.tweens = {}, n.Node.prototype.to = function (t) {
                var e = t.onFinish;
                t.node = this, t.onFinish = function () {
                    this.destroy(), e && e()
                }, new c(t).play()
            }, e.Easings = {
                BackEaseIn(t, e, i, r) {
                    var a = 1.70158;
                    return i * (t /= r) * t * ((a + 1) * t - a) + e
                },
                BackEaseOut(t, e, i, r) {
                    var a = 1.70158;
                    return i * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + e
                },
                BackEaseInOut(t, e, i, r) {
                    var a = 1.70158;
                    return (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (a *= 1.525)) * t - a)) + e : i / 2 * ((t -= 2) * t * ((1 + (a *= 1.525)) * t + a) + 2) + e
                },
                ElasticEaseIn(t, e, i, r, a, n) {
                    var s = 0;
                    return 0 === t ? e : 1 == (t /= r) ? e + i : (n || (n = .3 * r), !a || a < Math.abs(i) ? (a = i, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(i / a), -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / n) + e)
                },
                ElasticEaseOut(t, e, i, r, a, n) {
                    var s = 0;
                    return 0 === t ? e : 1 == (t /= r) ? e + i : (n || (n = .3 * r), !a || a < Math.abs(i) ? (a = i, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(i / a), a * Math.pow(2, -10 * t) * Math.sin((t * r - s) * (2 * Math.PI) / n) + i + e)
                },
                ElasticEaseInOut(t, e, i, r, a, n) {
                    var s = 0;
                    return 0 === t ? e : 2 == (t /= r / 2) ? e + i : (n || (n = r * (.3 * 1.5)), !a || a < Math.abs(i) ? (a = i, s = n / 4) : s = n / (2 * Math.PI) * Math.asin(i / a), t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / n) * -.5 + e : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / n) * .5 + i + e)
                },
                BounceEaseOut: (t, e, i, r) => (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + e : t < 2 / 2.75 ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e,
                BounceEaseIn: (t, i, r, a) => r - e.Easings.BounceEaseOut(a - t, 0, r, a) + i,
                BounceEaseInOut: (t, i, r, a) => t < a / 2 ? .5 * e.Easings.BounceEaseIn(2 * t, 0, r, a) + i : .5 * e.Easings.BounceEaseOut(2 * t - a, 0, r, a) + .5 * r + i,
                EaseIn: (t, e, i, r) => i * (t /= r) * t + e,
                EaseOut: (t, e, i, r) => -i * (t /= r) * (t - 2) + e,
                EaseInOut: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t * t + e : -i / 2 * (--t * (t - 2) - 1) + e,
                StrongEaseIn: (t, e, i, r) => i * (t /= r) * t * t * t * t + e,
                StrongEaseOut: (t, e, i, r) => i * ((t = t / r - 1) * t * t * t * t + 1) + e,
                StrongEaseInOut: (t, e, i, r) => (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + e : i / 2 * ((t -= 2) * t * t * t * t + 2) + e,
                Linear: (t, e, i, r) => i * t / r + e
            }
        }, 4060: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Util = e.Transform = void 0;
            const r = i(8871);

            class a {
                constructor(t = [1, 0, 0, 1, 0, 0]) {
                    this.dirty = !1, this.m = t && t.slice() || [1, 0, 0, 1, 0, 0]
                }

                reset() {
                    this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0
                }

                copy() {
                    return new a(this.m)
                }

                copyInto(t) {
                    t.m[0] = this.m[0], t.m[1] = this.m[1], t.m[2] = this.m[2], t.m[3] = this.m[3], t.m[4] = this.m[4], t.m[5] = this.m[5]
                }

                point(t) {
                    var e = this.m;
                    return {x: e[0] * t.x + e[2] * t.y + e[4], y: e[1] * t.x + e[3] * t.y + e[5]}
                }

                translate(t, e) {
                    return this.m[4] += this.m[0] * t + this.m[2] * e, this.m[5] += this.m[1] * t + this.m[3] * e, this
                }

                scale(t, e) {
                    return this.m[0] *= t, this.m[1] *= t, this.m[2] *= e, this.m[3] *= e, this
                }

                rotate(t) {
                    var e = Math.cos(t), i = Math.sin(t), r = this.m[0] * e + this.m[2] * i,
                        a = this.m[1] * e + this.m[3] * i, n = this.m[0] * -i + this.m[2] * e,
                        s = this.m[1] * -i + this.m[3] * e;
                    return this.m[0] = r, this.m[1] = a, this.m[2] = n, this.m[3] = s, this
                }

                getTranslation() {
                    return {x: this.m[4], y: this.m[5]}
                }

                skew(t, e) {
                    var i = this.m[0] + this.m[2] * e, r = this.m[1] + this.m[3] * e, a = this.m[2] + this.m[0] * t,
                        n = this.m[3] + this.m[1] * t;
                    return this.m[0] = i, this.m[1] = r, this.m[2] = a, this.m[3] = n, this
                }

                multiply(t) {
                    var e = this.m[0] * t.m[0] + this.m[2] * t.m[1], i = this.m[1] * t.m[0] + this.m[3] * t.m[1],
                        r = this.m[0] * t.m[2] + this.m[2] * t.m[3], a = this.m[1] * t.m[2] + this.m[3] * t.m[3],
                        n = this.m[0] * t.m[4] + this.m[2] * t.m[5] + this.m[4],
                        s = this.m[1] * t.m[4] + this.m[3] * t.m[5] + this.m[5];
                    return this.m[0] = e, this.m[1] = i, this.m[2] = r, this.m[3] = a, this.m[4] = n, this.m[5] = s, this
                }

                invert() {
                    var t = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), e = this.m[3] * t, i = -this.m[1] * t,
                        r = -this.m[2] * t, a = this.m[0] * t, n = t * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                        s = t * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
                    return this.m[0] = e, this.m[1] = i, this.m[2] = r, this.m[3] = a, this.m[4] = n, this.m[5] = s, this
                }

                getMatrix() {
                    return this.m
                }

                decompose() {
                    var t = this.m[0], i = this.m[1], r = this.m[2], a = this.m[3], n = t * a - i * r;
                    let s = {x: this.m[4], y: this.m[5], rotation: 0, scaleX: 0, scaleY: 0, skewX: 0, skewY: 0};
                    if (0 != t || 0 != i) {
                        var o = Math.sqrt(t * t + i * i);
                        s.rotation = i > 0 ? Math.acos(t / o) : -Math.acos(t / o), s.scaleX = o, s.scaleY = n / o, s.skewX = (t * r + i * a) / n, s.skewY = 0
                    } else if (0 != r || 0 != a) {
                        var h = Math.sqrt(r * r + a * a);
                        s.rotation = Math.PI / 2 - (a > 0 ? Math.acos(-r / h) : -Math.acos(r / h)), s.scaleX = n / h, s.scaleY = h, s.skewX = 0, s.skewY = (t * r + i * a) / n
                    }
                    return s.rotation = e.Util._getRotation(s.rotation), s
                }
            }

            e.Transform = a;
            var n = Math.PI / 180, s = 180 / Math.PI, o = "Konva error: ", h = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 132, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 255, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 203],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [119, 128, 144],
                slategrey: [119, 128, 144],
                snow: [255, 255, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                transparent: [255, 255, 255, 0],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 5]
            }, l = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, d = [];
            const c = "undefined" != typeof requestAnimationFrame && requestAnimationFrame || function (t) {
                setTimeout(t, 60)
            };
            e.Util = {
                _isElement: t => !(!t || 1 != t.nodeType),
                _isFunction: t => !!(t && t.constructor && t.call && t.apply),
                _isPlainObject: t => !!t && t.constructor === Object,
                _isArray: t => "[object Array]" === Object.prototype.toString.call(t),
                _isNumber: t => "[object Number]" === Object.prototype.toString.call(t) && !isNaN(t) && isFinite(t),
                _isString: t => "[object String]" === Object.prototype.toString.call(t),
                _isBoolean: t => "[object Boolean]" === Object.prototype.toString.call(t),
                isObject: t => t instanceof Object,
                isValidSelector(t) {
                    if ("string" != typeof t) return !1;
                    var e = t[0];
                    return "#" === e || "." === e || e === e.toUpperCase()
                },
                _sign: t => 0 === t || t > 0 ? 1 : -1,
                requestAnimFrame(t) {
                    d.push(t), 1 === d.length && c((function () {
                        const t = d;
                        d = [], t.forEach((function (t) {
                            t()
                        }))
                    }))
                },
                createCanvasElement() {
                    var t = document.createElement("canvas");
                    try {
                        t.style = t.style || {}
                    } catch (t) {
                    }
                    return t
                },
                createImageElement: () => document.createElement("img"),
                _isInDocument(t) {
                    for (; t = t.parentNode;) if (t == document) return !0;
                    return !1
                },
                _urlToImage(t, i) {
                    var r = e.Util.createImageElement();
                    r.onload = function () {
                        i(r)
                    }, r.src = t
                },
                _rgbToHex: (t, e, i) => ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1),
                _hexToRgb(t) {
                    t = t.replace("#", "");
                    var e = parseInt(t, 16);
                    return {r: e >> 16 & 255, g: e >> 8 & 255, b: 255 & e}
                },
                getRandomColor() {
                    for (var t = (16777215 * Math.random() | 0).toString(16); t.length < 6;) t = "0" + t;
                    return "#" + t
                },
                getRGB(t) {
                    var e;
                    return t in h ? {
                        r: (e = h[t])[0],
                        g: e[1],
                        b: e[2]
                    } : "#" === t[0] ? this._hexToRgb(t.substring(1)) : "rgb(" === t.substr(0, 4) ? (e = l.exec(t.replace(/ /g, "")), {
                        r: parseInt(e[1], 10),
                        g: parseInt(e[2], 10),
                        b: parseInt(e[3], 10)
                    }) : {r: 0, g: 0, b: 0}
                },
                colorToRGBA: t => (t = t || "black", e.Util._namedColorToRBA(t) || e.Util._hex3ColorToRGBA(t) || e.Util._hex4ColorToRGBA(t) || e.Util._hex6ColorToRGBA(t) || e.Util._hex8ColorToRGBA(t) || e.Util._rgbColorToRGBA(t) || e.Util._rgbaColorToRGBA(t) || e.Util._hslColorToRGBA(t)),
                _namedColorToRBA(t) {
                    var e = h[t.toLowerCase()];
                    return e ? {r: e[0], g: e[1], b: e[2], a: 1} : null
                },
                _rgbColorToRGBA(t) {
                    if (0 === t.indexOf("rgb(")) {
                        var e = (t = t.match(/rgb\(([^)]+)\)/)[1]).split(/ *, */).map(Number);
                        return {r: e[0], g: e[1], b: e[2], a: 1}
                    }
                },
                _rgbaColorToRGBA(t) {
                    if (0 === t.indexOf("rgba(")) {
                        var e = (t = t.match(/rgba\(([^)]+)\)/)[1]).split(/ *, */).map(((t, e) => "%" === t.slice(-1) ? 3 === e ? parseInt(t) / 100 : parseInt(t) / 100 * 255 : Number(t)));
                        return {r: e[0], g: e[1], b: e[2], a: e[3]}
                    }
                },
                _hex8ColorToRGBA(t) {
                    if ("#" === t[0] && 9 === t.length) return {
                        r: parseInt(t.slice(1, 3), 16),
                        g: parseInt(t.slice(3, 5), 16),
                        b: parseInt(t.slice(5, 7), 16),
                        a: parseInt(t.slice(7, 9), 16) / 255
                    }
                },
                _hex6ColorToRGBA(t) {
                    if ("#" === t[0] && 7 === t.length) return {
                        r: parseInt(t.slice(1, 3), 16),
                        g: parseInt(t.slice(3, 5), 16),
                        b: parseInt(t.slice(5, 7), 16),
                        a: 1
                    }
                },
                _hex4ColorToRGBA(t) {
                    if ("#" === t[0] && 5 === t.length) return {
                        r: parseInt(t[1] + t[1], 16),
                        g: parseInt(t[2] + t[2], 16),
                        b: parseInt(t[3] + t[3], 16),
                        a: parseInt(t[4] + t[4], 16) / 255
                    }
                },
                _hex3ColorToRGBA(t) {
                    if ("#" === t[0] && 4 === t.length) return {
                        r: parseInt(t[1] + t[1], 16),
                        g: parseInt(t[2] + t[2], 16),
                        b: parseInt(t[3] + t[3], 16),
                        a: 1
                    }
                },
                _hslColorToRGBA(t) {
                    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(t)) {
                        const [e, ...i] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t), r = Number(i[0]) / 360,
                            a = Number(i[1]) / 100, n = Number(i[2]) / 100;
                        let s, o, h;
                        if (0 === a) return h = 255 * n, {r: Math.round(h), g: Math.round(h), b: Math.round(h), a: 1};
                        s = n < .5 ? n * (1 + a) : n + a - n * a;
                        const l = 2 * n - s, d = [0, 0, 0];
                        for (let t = 0; t < 3; t++) o = r + 1 / 3 * -(t - 1), o < 0 && o++, o > 1 && o--, h = 6 * o < 1 ? l + 6 * (s - l) * o : 2 * o < 1 ? s : 3 * o < 2 ? l + (s - l) * (2 / 3 - o) * 6 : l, d[t] = 255 * h;
                        return {r: Math.round(d[0]), g: Math.round(d[1]), b: Math.round(d[2]), a: 1}
                    }
                },
                haveIntersection: (t, e) => !(e.x > t.x + t.width || e.x + e.width < t.x || e.y > t.y + t.height || e.y + e.height < t.y),
                cloneObject(t) {
                    var e = {};
                    for (var i in t) this._isPlainObject(t[i]) ? e[i] = this.cloneObject(t[i]) : this._isArray(t[i]) ? e[i] = this.cloneArray(t[i]) : e[i] = t[i];
                    return e
                },
                cloneArray: t => t.slice(0),
                degToRad: t => t * n,
                radToDeg: t => t * s,
                _degToRad: t => (e.Util.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), e.Util.degToRad(t)),
                _radToDeg: t => (e.Util.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), e.Util.radToDeg(t)),
                _getRotation: t => r.Konva.angleDeg ? e.Util.radToDeg(t) : t,
                _capitalize: t => t.charAt(0).toUpperCase() + t.slice(1),
                throw(t) {
                    throw new Error(o + t)
                },
                error(t) {
                    console.error(o + t)
                },
                warn(t) {
                    r.Konva.showWarnings && console.warn("Konva warning: " + t)
                },
                each(t, e) {
                    for (var i in t) e(i, t[i])
                },
                _inRange: (t, e, i) => e <= t && t < i,
                _getProjectionToSegment(t, e, i, r, a, n) {
                    var s, o, h, l = (t - i) * (t - i) + (e - r) * (e - r);
                    if (0 == l) s = t, o = e, h = (a - i) * (a - i) + (n - r) * (n - r); else {
                        var d = ((a - t) * (i - t) + (n - e) * (r - e)) / l;
                        d < 0 ? (s = t, o = e, h = (t - a) * (t - a) + (e - n) * (e - n)) : d > 1 ? (s = i, o = r, h = (i - a) * (i - a) + (r - n) * (r - n)) : h = ((s = t + d * (i - t)) - a) * (s - a) + ((o = e + d * (r - e)) - n) * (o - n)
                    }
                    return [s, o, h]
                },
                _getProjectionToLine(t, i, r) {
                    var a = e.Util.cloneObject(t), n = Number.MAX_VALUE;
                    return i.forEach((function (s, o) {
                        if (r || o !== i.length - 1) {
                            var h = i[(o + 1) % i.length],
                                l = e.Util._getProjectionToSegment(s.x, s.y, h.x, h.y, t.x, t.y), d = l[0], c = l[1],
                                g = l[2];
                            g < n && (a.x = d, a.y = c, n = g)
                        }
                    })), a
                },
                _prepareArrayForTween(t, i, r) {
                    var a, n = [], s = [];
                    if (t.length > i.length) {
                        var o = i;
                        i = t, t = o
                    }
                    for (a = 0; a < t.length; a += 2) n.push({x: t[a], y: t[a + 1]});
                    for (a = 0; a < i.length; a += 2) s.push({x: i[a], y: i[a + 1]});
                    var h = [];
                    return s.forEach((function (t) {
                        var i = e.Util._getProjectionToLine(t, n, r);
                        h.push(i.x), h.push(i.y)
                    })), h
                },
                _prepareToStringify(t) {
                    var i;
                    for (var r in t.visitedByCircularReferenceRemoval = !0, t) if (t.hasOwnProperty(r) && t[r] && "object" == typeof t[r]) if (i = Object.getOwnPropertyDescriptor(t, r), t[r].visitedByCircularReferenceRemoval || e.Util._isElement(t[r])) {
                        if (!i.configurable) return null;
                        delete t[r]
                    } else if (null === e.Util._prepareToStringify(t[r])) {
                        if (!i.configurable) return null;
                        delete t[r]
                    }
                    return delete t.visitedByCircularReferenceRemoval, t
                },
                _assign(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                },
                _getFirstPointerId: t => t.touches ? t.changedTouches[0].identifier : t.pointerId || 999,
                releaseCanvas(...t) {
                    r.Konva.releaseCanvasOnDestroy && t.forEach((t => {
                        t.width = 0, t.height = 0
                    }))
                },
                drawRoundedRectPath(t, e, i, r) {
                    let a = 0, n = 0, s = 0, o = 0;
                    "number" == typeof r ? a = n = s = o = Math.min(r, e / 2, i / 2) : (a = Math.min(r[0] || 0, e / 2, i / 2), n = Math.min(r[1] || 0, e / 2, i / 2), o = Math.min(r[2] || 0, e / 2, i / 2), s = Math.min(r[3] || 0, e / 2, i / 2)), t.moveTo(a, 0), t.lineTo(e - n, 0), t.arc(e - n, n, n, 3 * Math.PI / 2, 0, !1), t.lineTo(e, i - o), t.arc(e - o, i - o, o, 0, Math.PI / 2, !1), t.lineTo(s, i), t.arc(s, i - s, s, Math.PI / 2, Math.PI, !1), t.lineTo(0, a), t.arc(a, a, a, Math.PI, 3 * Math.PI / 2, !1)
                }
            }
        }, 5483: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.getComponentValidator = e.getBooleanValidator = e.getNumberArrayValidator = e.getFunctionValidator = e.getStringOrGradientValidator = e.getStringValidator = e.getNumberOrAutoValidator = e.getNumberOrArrayOfNumbersValidator = e.getNumberValidator = e.alphaComponent = e.RGBComponent = void 0;
            const r = i(8871), a = i(4060);

            function n(t) {
                return a.Util._isString(t) ? '"' + t + '"' : "[object Number]" === Object.prototype.toString.call(t) || a.Util._isBoolean(t) ? t : Object.prototype.toString.call(t)
            }

            e.RGBComponent = function (t) {
                return t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            }, e.alphaComponent = function (t) {
                return t > 1 ? 1 : t < 1e-4 ? 1e-4 : t
            }, e.getNumberValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return a.Util._isNumber(t) || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number.'), t
                }
            }, e.getNumberOrArrayOfNumbersValidator = function (t) {
                if (r.Konva.isUnminified) return function (e, i) {
                    let r = a.Util._isNumber(e), s = a.Util._isArray(e) && e.length == t;
                    return r || s || a.Util.warn(n(e) + ' is a not valid value for "' + i + '" attribute. The value should be a number or Array<number>(' + t + ")"), e
                }
            }, e.getNumberOrAutoValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return a.Util._isNumber(t) || "auto" === t || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a number or "auto".'), t
                }
            }, e.getStringValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return a.Util._isString(t) || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string.'), t
                }
            }, e.getStringOrGradientValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    const i = a.Util._isString(t),
                        r = "[object CanvasGradient]" === Object.prototype.toString.call(t) || t && t.addColorStop;
                    return i || r || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a string or a native gradient.'), t
                }
            }, e.getFunctionValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return a.Util._isFunction(t) || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a function.'), t
                }
            }, e.getNumberArrayValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    const i = Int8Array ? Object.getPrototypeOf(Int8Array) : null;
                    return i && t instanceof i || (a.Util._isArray(t) ? t.forEach((function (t) {
                        a.Util._isNumber(t) || a.Util.warn('"' + e + '" attribute has non numeric element ' + t + ". Make sure that all elements are numbers.")
                    })) : a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a array of numbers.')), t
                }
            }, e.getBooleanValidator = function () {
                if (r.Konva.isUnminified) return function (t, e) {
                    return !0 === t || !1 === t || a.Util.warn(n(t) + ' is a not valid value for "' + e + '" attribute. The value should be a boolean.'), t
                }
            }, e.getComponentValidator = function (t) {
                if (r.Konva.isUnminified) return function (e, i) {
                    return null == e || a.Util.isObject(e) || a.Util.warn(n(e) + ' is a not valid value for "' + i + '" attribute. The value should be an object with properties ' + t), e
                }
            }
        }, 680: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Konva = void 0;
            const r = i(8871), a = i(4060), n = i(6536), s = i(4473), o = i(7324), h = i(6267), l = i(7457),
                d = i(7949), c = i(1268), g = i(4723), u = i(9696), f = i(8665), p = i(9869), v = i(8604);
            e.Konva = a.Util._assign(r.Konva, {
                Util: a.Util,
                Transform: a.Transform,
                Node: n.Node,
                Container: s.Container,
                Stage: o.Stage,
                stages: o.stages,
                Layer: h.Layer,
                FastLayer: l.FastLayer,
                Group: d.Group,
                DD: c.DD,
                Shape: g.Shape,
                shapes: g.shapes,
                Animation: u.Animation,
                Tween: f.Tween,
                Easings: f.Easings,
                Context: p.Context,
                Canvas: v.Canvas
            }), e.default = e.Konva
        }, 8558: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Konva = void 0;
            const r = i(680), a = i(4821), n = i(9456), s = i(9729), o = i(6955), h = i(7256), l = i(6619), d = i(3443),
                c = i(1486), g = i(5155), u = i(9131), f = i(5451), p = i(9308), v = i(4481), m = i(1958), y = i(8137),
                _ = i(5058), b = i(8001), x = i(6261), S = i(6627), C = i(2650), w = i(983), P = i(7928), k = i(7241),
                A = i(5461), T = i(4843), F = i(6564), M = i(5553), G = i(8624), R = i(5992), D = i(4943), N = i(7019),
                E = i(6921), O = i(3862), L = i(2512), I = i(517), U = i(661);
            e.Konva = r.Konva.Util._assign(r.Konva, {
                Arc: a.Arc,
                Arrow: n.Arrow,
                Circle: s.Circle,
                Ellipse: o.Ellipse,
                Image: h.Image,
                Label: l.Label,
                Tag: l.Tag,
                Line: d.Line,
                Path: c.Path,
                Rect: g.Rect,
                RegularPolygon: u.RegularPolygon,
                Ring: f.Ring,
                Sprite: p.Sprite,
                Star: v.Star,
                Text: m.Text,
                TextPath: y.TextPath,
                Transformer: _.Transformer,
                Wedge: b.Wedge,
                Filters: {
                    Blur: x.Blur,
                    Brighten: S.Brighten,
                    Contrast: C.Contrast,
                    Emboss: w.Emboss,
                    Enhance: P.Enhance,
                    Grayscale: k.Grayscale,
                    HSL: A.HSL,
                    HSV: T.HSV,
                    Invert: F.Invert,
                    Kaleidoscope: M.Kaleidoscope,
                    Mask: G.Mask,
                    Noise: R.Noise,
                    Pixelate: D.Pixelate,
                    Posterize: N.Posterize,
                    RGB: E.RGB,
                    RGBA: O.RGBA,
                    Sepia: L.Sepia,
                    Solarize: I.Solarize,
                    Threshold: U.Threshold
                }
            })
        }, 6261: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Blur = void 0;
            const r = i(4892), a = i(6536), n = i(5483);

            function s() {
                this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
            }

            var o = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259],
                h = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
            e.Blur = function (t) {
                var e = Math.round(this.blurRadius());
                e > 0 && function (t, e) {
                    var i, r, a, n, l, d, c, g, u, f, p, v, m, y, _, b, x, S, C, w, P, k, A, T, F = t.data, M = t.width,
                        G = t.height, R = e + e + 1, D = M - 1, N = G - 1, E = e + 1, O = E * (E + 1) / 2, L = new s,
                        I = null, U = L, B = null, V = null, H = o[e], j = h[e];
                    for (a = 1; a < R; a++) U = U.next = new s, a === E && (I = U);
                    for (U.next = L, c = d = 0, r = 0; r < G; r++) {
                        for (b = x = S = C = g = u = f = p = 0, v = E * (w = F[d]), m = E * (P = F[d + 1]), y = E * (k = F[d + 2]), _ = E * (A = F[d + 3]), g += O * w, u += O * P, f += O * k, p += O * A, U = L, a = 0; a < E; a++) U.r = w, U.g = P, U.b = k, U.a = A, U = U.next;
                        for (a = 1; a < E; a++) n = d + ((D < a ? D : a) << 2), g += (U.r = w = F[n]) * (T = E - a), u += (U.g = P = F[n + 1]) * T, f += (U.b = k = F[n + 2]) * T, p += (U.a = A = F[n + 3]) * T, b += w, x += P, S += k, C += A, U = U.next;
                        for (B = L, V = I, i = 0; i < M; i++) F[d + 3] = A = p * H >> j, 0 !== A ? (A = 255 / A, F[d] = (g * H >> j) * A, F[d + 1] = (u * H >> j) * A, F[d + 2] = (f * H >> j) * A) : F[d] = F[d + 1] = F[d + 2] = 0, g -= v, u -= m, f -= y, p -= _, v -= B.r, m -= B.g, y -= B.b, _ -= B.a, n = c + ((n = i + e + 1) < D ? n : D) << 2, g += b += B.r = F[n], u += x += B.g = F[n + 1], f += S += B.b = F[n + 2], p += C += B.a = F[n + 3], B = B.next, v += w = V.r, m += P = V.g, y += k = V.b, _ += A = V.a, b -= w, x -= P, S -= k, C -= A, V = V.next, d += 4;
                        c += M
                    }
                    for (i = 0; i < M; i++) {
                        for (x = S = C = b = u = f = p = g = 0, v = E * (w = F[d = i << 2]), m = E * (P = F[d + 1]), y = E * (k = F[d + 2]), _ = E * (A = F[d + 3]), g += O * w, u += O * P, f += O * k, p += O * A, U = L, a = 0; a < E; a++) U.r = w, U.g = P, U.b = k, U.a = A, U = U.next;
                        for (l = M, a = 1; a <= e; a++) d = l + i << 2, g += (U.r = w = F[d]) * (T = E - a), u += (U.g = P = F[d + 1]) * T, f += (U.b = k = F[d + 2]) * T, p += (U.a = A = F[d + 3]) * T, b += w, x += P, S += k, C += A, U = U.next, a < N && (l += M);
                        for (d = i, B = L, V = I, r = 0; r < G; r++) F[3 + (n = d << 2)] = A = p * H >> j, A > 0 ? (A = 255 / A, F[n] = (g * H >> j) * A, F[n + 1] = (u * H >> j) * A, F[n + 2] = (f * H >> j) * A) : F[n] = F[n + 1] = F[n + 2] = 0, g -= v, u -= m, f -= y, p -= _, v -= B.r, m -= B.g, y -= B.b, _ -= B.a, n = i + ((n = r + E) < N ? n : N) * M << 2, g += b += B.r = F[n], u += x += B.g = F[n + 1], f += S += B.b = F[n + 2], p += C += B.a = F[n + 3], B = B.next, v += w = V.r, m += P = V.g, y += k = V.b, _ += A = V.a, b -= w, x -= P, S -= k, C -= A, V = V.next, d += M
                    }
                }(t, e)
            }, r.Factory.addGetterSetter(a.Node, "blurRadius", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 6627: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Brighten = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.Brighten = function (t) {
                var e, i = 255 * this.brightness(), r = t.data, a = r.length;
                for (e = 0; e < a; e += 4) r[e] += i, r[e + 1] += i, r[e + 2] += i
            }, r.Factory.addGetterSetter(a.Node, "brightness", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 2650: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Contrast = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.Contrast = function (t) {
                var e, i = Math.pow((this.contrast() + 100) / 100, 2), r = t.data, a = r.length, n = 150, s = 150,
                    o = 150;
                for (e = 0; e < a; e += 4) n = r[e], s = r[e + 1], o = r[e + 2], n /= 255, n -= .5, n *= i, n += .5, s /= 255, s -= .5, s *= i, s += .5, o /= 255, o -= .5, o *= i, o += .5, n = (n *= 255) < 0 ? 0 : n > 255 ? 255 : n, s = (s *= 255) < 0 ? 0 : s > 255 ? 255 : s, o = (o *= 255) < 0 ? 0 : o > 255 ? 255 : o, r[e] = n, r[e + 1] = s, r[e + 2] = o
            }, r.Factory.addGetterSetter(a.Node, "contrast", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 983: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Emboss = void 0;
            const r = i(4892), a = i(6536), n = i(4060), s = i(5483);
            e.Emboss = function (t) {
                var e = 10 * this.embossStrength(), i = 255 * this.embossWhiteLevel(), r = this.embossDirection(),
                    a = this.embossBlend(), s = 0, o = 0, h = t.data, l = t.width, d = t.height, c = 4 * l, g = d;
                switch (r) {
                    case"top-left":
                        s = -1, o = -1;
                        break;
                    case"top":
                        s = -1, o = 0;
                        break;
                    case"top-right":
                        s = -1, o = 1;
                        break;
                    case"right":
                        s = 0, o = 1;
                        break;
                    case"bottom-right":
                        s = 1, o = 1;
                        break;
                    case"bottom":
                        s = 1, o = 0;
                        break;
                    case"bottom-left":
                        s = 1, o = -1;
                        break;
                    case"left":
                        s = 0, o = -1;
                        break;
                    default:
                        n.Util.error("Unknown emboss direction: " + r)
                }
                do {
                    var u = (g - 1) * c, f = s;
                    g + f < 1 && (f = 0), g + f > d && (f = 0);
                    var p = (g - 1 + f) * l * 4, v = l;
                    do {
                        var m = u + 4 * (v - 1), y = o;
                        v + y < 1 && (y = 0), v + y > l && (y = 0);
                        var _ = p + 4 * (v - 1 + y), b = h[m] - h[_], x = h[m + 1] - h[_ + 1], S = h[m + 2] - h[_ + 2],
                            C = b, w = C > 0 ? C : -C;
                        if ((x > 0 ? x : -x) > w && (C = x), (S > 0 ? S : -S) > w && (C = S), C *= e, a) {
                            var P = h[m] + C, k = h[m + 1] + C, A = h[m + 2] + C;
                            h[m] = P > 255 ? 255 : P < 0 ? 0 : P, h[m + 1] = k > 255 ? 255 : k < 0 ? 0 : k, h[m + 2] = A > 255 ? 255 : A < 0 ? 0 : A
                        } else {
                            var T = i - C;
                            T < 0 ? T = 0 : T > 255 && (T = 255), h[m] = h[m + 1] = h[m + 2] = T
                        }
                    } while (--v)
                } while (--g)
            }, r.Factory.addGetterSetter(a.Node, "embossStrength", .5, (0, s.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "embossWhiteLevel", .5, (0, s.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "embossDirection", "top-left", null, r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "embossBlend", !1, null, r.Factory.afterSetFilter)
        }, 7928: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Enhance = void 0;
            const r = i(4892), a = i(6536), n = i(5483);

            function s(t, e, i, r, a) {
                var n = i - e, s = a - r;
                return 0 === n ? r + s / 2 : 0 === s ? r : s * ((t - e) / n) + r
            }

            e.Enhance = function (t) {
                var e, i, r, a, n = t.data, o = n.length, h = n[0], l = h, d = n[1], c = d, g = n[2], u = g,
                    f = this.enhance();
                if (0 !== f) {
                    for (a = 0; a < o; a += 4) (e = n[a + 0]) < h ? h = e : e > l && (l = e), (i = n[a + 1]) < d ? d = i : i > c && (c = i), (r = n[a + 2]) < g ? g = r : r > u && (u = r);
                    var p, v, m, y, _, b, x, S, C;
                    for (l === h && (l = 255, h = 0), c === d && (c = 255, d = 0), u === g && (u = 255, g = 0), f > 0 ? (v = l + f * (255 - l), m = h - f * (h - 0), _ = c + f * (255 - c), b = d - f * (d - 0), S = u + f * (255 - u), C = g - f * (g - 0)) : (v = l + f * (l - (p = .5 * (l + h))), m = h + f * (h - p), _ = c + f * (c - (y = .5 * (c + d))), b = d + f * (d - y), S = u + f * (u - (x = .5 * (u + g))), C = g + f * (g - x)), a = 0; a < o; a += 4) n[a + 0] = s(n[a + 0], h, l, m, v), n[a + 1] = s(n[a + 1], d, c, b, _), n[a + 2] = s(n[a + 2], g, u, C, S)
                }
            }, r.Factory.addGetterSetter(a.Node, "enhance", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 7241: (t, e) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Grayscale = void 0, e.Grayscale = function (t) {
                var e, i, r = t.data, a = r.length;
                for (e = 0; e < a; e += 4) i = .34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2], r[e] = i, r[e + 1] = i, r[e + 2] = i
            }
        }, 5461: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.HSL = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            r.Factory.addGetterSetter(a.Node, "hue", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "saturation", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "luminance", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter), e.HSL = function (t) {
                var e, i, r, a, n, s = t.data, o = s.length, h = Math.pow(2, this.saturation()),
                    l = Math.abs(this.hue() + 360) % 360, d = 127 * this.luminance(),
                    c = 1 * h * Math.cos(l * Math.PI / 180), g = 1 * h * Math.sin(l * Math.PI / 180),
                    u = .299 + .701 * c + .167 * g, f = .587 - .587 * c + .33 * g, p = .114 - .114 * c - .497 * g,
                    v = .299 - .299 * c - .328 * g, m = .587 + .413 * c + .035 * g, y = .114 - .114 * c + .293 * g,
                    _ = .299 - .3 * c + 1.25 * g, b = .587 - .586 * c - 1.05 * g, x = .114 + .886 * c - .2 * g;
                for (e = 0; e < o; e += 4) i = s[e + 0], r = s[e + 1], a = s[e + 2], n = s[e + 3], s[e + 0] = u * i + f * r + p * a + d, s[e + 1] = v * i + m * r + y * a + d, s[e + 2] = _ * i + b * r + x * a + d, s[e + 3] = n
            }
        }, 4843: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.HSV = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.HSV = function (t) {
                var e, i, r, a, n, s = t.data, o = s.length, h = Math.pow(2, this.value()),
                    l = Math.pow(2, this.saturation()), d = Math.abs(this.hue() + 360) % 360,
                    c = h * l * Math.cos(d * Math.PI / 180), g = h * l * Math.sin(d * Math.PI / 180),
                    u = .299 * h + .701 * c + .167 * g, f = .587 * h - .587 * c + .33 * g,
                    p = .114 * h - .114 * c - .497 * g, v = .299 * h - .299 * c - .328 * g,
                    m = .587 * h + .413 * c + .035 * g, y = .114 * h - .114 * c + .293 * g,
                    _ = .299 * h - .3 * c + 1.25 * g, b = .587 * h - .586 * c - 1.05 * g,
                    x = .114 * h + .886 * c - .2 * g;
                for (e = 0; e < o; e += 4) i = s[e + 0], r = s[e + 1], a = s[e + 2], n = s[e + 3], s[e + 0] = u * i + f * r + p * a, s[e + 1] = v * i + m * r + y * a, s[e + 2] = _ * i + b * r + x * a, s[e + 3] = n
            }, r.Factory.addGetterSetter(a.Node, "hue", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "saturation", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "value", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 6564: (t, e) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Invert = void 0, e.Invert = function (t) {
                var e, i = t.data, r = i.length;
                for (e = 0; e < r; e += 4) i[e] = 255 - i[e], i[e + 1] = 255 - i[e + 1], i[e + 2] = 255 - i[e + 2]
            }
        }, 5553: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Kaleidoscope = void 0;
            const r = i(4892), a = i(6536), n = i(4060), s = i(5483);
            e.Kaleidoscope = function (t) {
                var e, i, r, a, s, o, h, l, d, c = t.width, g = t.height, u = Math.round(this.kaleidoscopePower()),
                    f = Math.round(this.kaleidoscopeAngle()), p = Math.floor(c * (f % 360) / 360);
                if (!(u < 1)) {
                    var v = n.Util.createCanvasElement();
                    v.width = c, v.height = g;
                    var m = v.getContext("2d").getImageData(0, 0, c, g);
                    n.Util.releaseCanvas(v), function (t, e, i) {
                        var r, a, n, s, o = t.data, h = e.data, l = t.width, d = t.height, c = i.polarCenterX || l / 2,
                            g = i.polarCenterY || d / 2, u = 0, f = 0, p = 0, v = 0, m = Math.sqrt(c * c + g * g);
                        a = l - c, n = d - g, m = (s = Math.sqrt(a * a + n * n)) > m ? s : m;
                        var y, _, b, x, S = d, C = l, w = 360 / C * Math.PI / 180;
                        for (_ = 0; _ < C; _ += 1) for (b = Math.sin(_ * w), x = Math.cos(_ * w), y = 0; y < S; y += 1) a = Math.floor(c + m * y / S * x), u = o[0 + (r = 4 * ((n = Math.floor(g + m * y / S * b)) * l + a))], f = o[r + 1], p = o[r + 2], v = o[r + 3], h[0 + (r = 4 * (_ + y * l))] = u, h[r + 1] = f, h[r + 2] = p, h[r + 3] = v
                    }(t, m, {polarCenterX: c / 2, polarCenterY: g / 2});
                    for (var y = c / Math.pow(2, u); y <= 8;) y *= 2, u -= 1;
                    var _ = y = Math.ceil(y), b = 0, x = _, S = 1;
                    for (p + y > c && (b = _, x = 0, S = -1), i = 0; i < g; i += 1) for (e = b; e !== x; e += S) l = 4 * (c * i + Math.round(e + p) % c), a = m.data[l + 0], s = m.data[l + 1], o = m.data[l + 2], h = m.data[l + 3], d = 4 * (c * i + e), m.data[d + 0] = a, m.data[d + 1] = s, m.data[d + 2] = o, m.data[d + 3] = h;
                    for (i = 0; i < g; i += 1) for (_ = Math.floor(y), r = 0; r < u; r += 1) {
                        for (e = 0; e < _ + 1; e += 1) l = 4 * (c * i + e), a = m.data[l + 0], s = m.data[l + 1], o = m.data[l + 2], h = m.data[l + 3], d = 4 * (c * i + 2 * _ - e - 1), m.data[d + 0] = a, m.data[d + 1] = s, m.data[d + 2] = o, m.data[d + 3] = h;
                        _ *= 2
                    }
                    !function (t, e, i) {
                        var r, a, n, s, o, h, l = t.data, d = e.data, c = t.width, g = t.height,
                            u = i.polarCenterX || c / 2, f = i.polarCenterY || g / 2, p = 0, v = 0, m = 0, y = 0,
                            _ = Math.sqrt(u * u + f * f);
                        a = c - u, n = g - f, _ = (h = Math.sqrt(a * a + n * n)) > _ ? h : _;
                        var b, x, S, C = g, w = c, P = i.polarRotation || 0;
                        for (a = 0; a < c; a += 1) for (n = 0; n < g; n += 1) s = a - u, o = n - f, b = Math.sqrt(s * s + o * o) * C / _, x = (x = (180 * Math.atan2(o, s) / Math.PI + 360 + P) % 360) * w / 360, S = Math.floor(x), p = l[0 + (r = 4 * (Math.floor(b) * c + S))], v = l[r + 1], m = l[r + 2], y = l[r + 3], d[0 + (r = 4 * (n * c + a))] = p, d[r + 1] = v, d[r + 2] = m, d[r + 3] = y
                    }(m, t, {polarRotation: 0})
                }
            }, r.Factory.addGetterSetter(a.Node, "kaleidoscopePower", 2, (0, s.getNumberValidator)(), r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "kaleidoscopeAngle", 0, (0, s.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 8624: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Mask = void 0;
            const r = i(4892), a = i(6536), n = i(5483);

            function s(t, e, i) {
                var r = 4 * (i * t.width + e), a = [];
                return a.push(t.data[r++], t.data[r++], t.data[r++], t.data[r++]), a
            }

            function o(t, e) {
                return Math.sqrt(Math.pow(t[0] - e[0], 2) + Math.pow(t[1] - e[1], 2) + Math.pow(t[2] - e[2], 2))
            }

            e.Mask = function (t) {
                var e = function (t, e) {
                    var i = s(t, 0, 0), r = s(t, t.width - 1, 0), a = s(t, 0, t.height - 1),
                        n = s(t, t.width - 1, t.height - 1), h = e || 10;
                    if (o(i, r) < h && o(r, n) < h && o(n, a) < h && o(a, i) < h) {
                        for (var l = function (t) {
                            for (var e = [0, 0, 0], i = 0; i < t.length; i++) e[0] += t[i][0], e[1] += t[i][1], e[2] += t[i][2];
                            return e[0] /= t.length, e[1] /= t.length, e[2] /= t.length, e
                        }([r, i, n, a]), d = [], c = 0; c < t.width * t.height; c++) {
                            var g = o(l, [t.data[4 * c], t.data[4 * c + 1], t.data[4 * c + 2]]);
                            d[c] = g < h ? 0 : 255
                        }
                        return d
                    }
                }(t, this.threshold());
                return e && function (t, e) {
                    for (var i = 0; i < t.width * t.height; i++) t.data[4 * i + 3] = e[i]
                }(t, e = function (t, e, i) {
                    for (var r = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9], a = Math.round(Math.sqrt(r.length)), n = Math.floor(a / 2), s = [], o = 0; o < i; o++) for (var h = 0; h < e; h++) {
                        for (var l = o * e + h, d = 0, c = 0; c < a; c++) for (var g = 0; g < a; g++) {
                            var u = o + c - n, f = h + g - n;
                            if (u >= 0 && u < i && f >= 0 && f < e) {
                                var p = r[c * a + g];
                                d += t[u * e + f] * p
                            }
                        }
                        s[l] = d
                    }
                    return s
                }(e = function (t, e, i) {
                    for (var r = [1, 1, 1, 1, 1, 1, 1, 1, 1], a = Math.round(Math.sqrt(r.length)), n = Math.floor(a / 2), s = [], o = 0; o < i; o++) for (var h = 0; h < e; h++) {
                        for (var l = o * e + h, d = 0, c = 0; c < a; c++) for (var g = 0; g < a; g++) {
                            var u = o + c - n, f = h + g - n;
                            if (u >= 0 && u < i && f >= 0 && f < e) {
                                var p = r[c * a + g];
                                d += t[u * e + f] * p
                            }
                        }
                        s[l] = d >= 1020 ? 255 : 0
                    }
                    return s
                }(e = function (t, e, i) {
                    for (var r = [1, 1, 1, 1, 0, 1, 1, 1, 1], a = Math.round(Math.sqrt(r.length)), n = Math.floor(a / 2), s = [], o = 0; o < i; o++) for (var h = 0; h < e; h++) {
                        for (var l = o * e + h, d = 0, c = 0; c < a; c++) for (var g = 0; g < a; g++) {
                            var u = o + c - n, f = h + g - n;
                            if (u >= 0 && u < i && f >= 0 && f < e) {
                                var p = r[c * a + g];
                                d += t[u * e + f] * p
                            }
                        }
                        s[l] = 2040 === d ? 255 : 0
                    }
                    return s
                }(e, t.width, t.height), t.width, t.height), t.width, t.height)), t
            }, r.Factory.addGetterSetter(a.Node, "threshold", 0, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 5992: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Noise = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.Noise = function (t) {
                var e, i = 255 * this.noise(), r = t.data, a = r.length, n = i / 2;
                for (e = 0; e < a; e += 4) r[e + 0] += n - 2 * n * Math.random(), r[e + 1] += n - 2 * n * Math.random(), r[e + 2] += n - 2 * n * Math.random()
            }, r.Factory.addGetterSetter(a.Node, "noise", .2, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 4943: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Pixelate = void 0;
            const r = i(4892), a = i(4060), n = i(6536), s = i(5483);
            e.Pixelate = function (t) {
                var e, i, r, n, s, o, h, l, d, c, g, u, f, p, v = Math.ceil(this.pixelSize()), m = t.width,
                    y = t.height, _ = Math.ceil(m / v), b = Math.ceil(y / v), x = t.data;
                if (v <= 0) a.Util.error("pixelSize value can not be <= 0"); else for (u = 0; u < _; u += 1) for (f = 0; f < b; f += 1) {
                    for (n = 0, s = 0, o = 0, h = 0, d = (l = u * v) + v, g = (c = f * v) + v, p = 0, e = l; e < d; e += 1) if (!(e >= m)) for (i = c; i < g; i += 1) i >= y || (n += x[0 + (r = 4 * (m * i + e))], s += x[r + 1], o += x[r + 2], h += x[r + 3], p += 1);
                    for (n /= p, s /= p, o /= p, h /= p, e = l; e < d; e += 1) if (!(e >= m)) for (i = c; i < g; i += 1) i >= y || (x[0 + (r = 4 * (m * i + e))] = n, x[r + 1] = s, x[r + 2] = o, x[r + 3] = h)
                }
            }, r.Factory.addGetterSetter(n.Node, "pixelSize", 8, (0, s.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 7019: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Posterize = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.Posterize = function (t) {
                var e, i = Math.round(254 * this.levels()) + 1, r = t.data, a = r.length, n = 255 / i;
                for (e = 0; e < a; e += 1) r[e] = Math.floor(r[e] / n) * n
            }, r.Factory.addGetterSetter(a.Node, "levels", .5, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 6921: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.RGB = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.RGB = function (t) {
                var e, i, r = t.data, a = r.length, n = this.red(), s = this.green(), o = this.blue();
                for (e = 0; e < a; e += 4) i = (.34 * r[e] + .5 * r[e + 1] + .16 * r[e + 2]) / 255, r[e] = i * n, r[e + 1] = i * s, r[e + 2] = i * o, r[e + 3] = r[e + 3]
            }, r.Factory.addGetterSetter(a.Node, "red", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(a.Node, "green", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(a.Node, "blue", 0, n.RGBComponent, r.Factory.afterSetFilter)
        }, 3862: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.RGBA = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.RGBA = function (t) {
                var e, i, r = t.data, a = r.length, n = this.red(), s = this.green(), o = this.blue(), h = this.alpha();
                for (e = 0; e < a; e += 4) i = 1 - h, r[e] = n * h + r[e] * i, r[e + 1] = s * h + r[e + 1] * i, r[e + 2] = o * h + r[e + 2] * i
            }, r.Factory.addGetterSetter(a.Node, "red", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(a.Node, "green", 0, (function (t) {
                return this._filterUpToDate = !1, t > 255 ? 255 : t < 0 ? 0 : Math.round(t)
            })), r.Factory.addGetterSetter(a.Node, "blue", 0, n.RGBComponent, r.Factory.afterSetFilter), r.Factory.addGetterSetter(a.Node, "alpha", 1, (function (t) {
                return this._filterUpToDate = !1, t > 1 ? 1 : t < 0 ? 0 : t
            }))
        }, 2512: (t, e) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Sepia = void 0, e.Sepia = function (t) {
                var e, i, r, a, n = t.data, s = n.length;
                for (e = 0; e < s; e += 4) i = n[e + 0], r = n[e + 1], a = n[e + 2], n[e + 0] = Math.min(255, .393 * i + .769 * r + .189 * a), n[e + 1] = Math.min(255, .349 * i + .686 * r + .168 * a), n[e + 2] = Math.min(255, .272 * i + .534 * r + .131 * a)
            }
        }, 517: (t, e) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Solarize = void 0, e.Solarize = function (t) {
                var e = t.data, i = t.width, r = 4 * i, a = t.height;
                do {
                    var n = (a - 1) * r, s = i;
                    do {
                        var o = n + 4 * (s - 1), h = e[o], l = e[o + 1], d = e[o + 2];
                        h > 127 && (h = 255 - h), l > 127 && (l = 255 - l), d > 127 && (d = 255 - d), e[o] = h, e[o + 1] = l, e[o + 2] = d
                    } while (--s)
                } while (--a)
            }
        }, 661: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Threshold = void 0;
            const r = i(4892), a = i(6536), n = i(5483);
            e.Threshold = function (t) {
                var e, i = 255 * this.threshold(), r = t.data, a = r.length;
                for (e = 0; e < a; e += 1) r[e] = r[e] < i ? 0 : 255
            }, r.Factory.addGetterSetter(a.Node, "threshold", .5, (0, n.getNumberValidator)(), r.Factory.afterSetFilter)
        }, 5778: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0});
            const r = i(8558);
            t.exports = r.Konva
        }, 4821: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Arc = void 0;
            const r = i(4892), a = i(4723), n = i(8871), s = i(5483), o = i(8871);

            class h extends a.Shape {
                _sceneFunc(t) {
                    var e = n.Konva.getAngle(this.angle()), i = this.clockwise();
                    t.beginPath(), t.arc(0, 0, this.outerRadius(), 0, e, i), t.arc(0, 0, this.innerRadius(), e, 0, !i), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.outerRadius()
                }

                getHeight() {
                    return 2 * this.outerRadius()
                }

                setWidth(t) {
                    this.outerRadius(t / 2)
                }

                setHeight(t) {
                    this.outerRadius(t / 2)
                }

                getSelfRect() {
                    const t = this.innerRadius(), e = this.outerRadius(), i = this.clockwise(),
                        r = n.Konva.getAngle(i ? 360 - this.angle() : this.angle()), a = Math.cos(Math.min(r, Math.PI)),
                        s = Math.sin(Math.min(Math.max(Math.PI, r), 3 * Math.PI / 2)),
                        o = Math.sin(Math.min(r, Math.PI / 2)), h = a * (a > 0 ? t : e), l = s * (s > 0 ? t : e),
                        d = o * (o > 0 ? e : t);
                    return {x: h, y: i ? -1 * d : l, width: 1 * e - h, height: d - l}
                }
            }

            e.Arc = h, h.prototype._centroid = !0, h.prototype.className = "Arc", h.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, o._registerNode)(h), r.Factory.addGetterSetter(h, "innerRadius", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "outerRadius", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "angle", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "clockwise", !1, (0, s.getBooleanValidator)())
        }, 9456: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Arrow = void 0;
            const r = i(4892), a = i(3443), n = i(5483), s = i(8871), o = i(1486);

            class h extends a.Line {
                _sceneFunc(t) {
                    super._sceneFunc(t);
                    var e = 2 * Math.PI, i = this.points(), r = i, a = 0 !== this.tension() && i.length > 4;
                    a && (r = this.getTensionPoints());
                    var n, s, h = this.pointerLength(), l = i.length;
                    if (a) {
                        const t = [r[r.length - 4], r[r.length - 3], r[r.length - 2], r[r.length - 1], i[l - 2], i[l - 1]],
                            e = o.Path.calcLength(r[r.length - 4], r[r.length - 3], "C", t),
                            a = o.Path.getPointOnQuadraticBezier(Math.min(1, 1 - h / e), t[0], t[1], t[2], t[3], t[4], t[5]);
                        n = i[l - 2] - a.x, s = i[l - 1] - a.y
                    } else n = i[l - 2] - i[l - 4], s = i[l - 1] - i[l - 3];
                    var d = (Math.atan2(s, n) + e) % e, c = this.pointerWidth();
                    this.pointerAtEnding() && (t.save(), t.beginPath(), t.translate(i[l - 2], i[l - 1]), t.rotate(d), t.moveTo(0, 0), t.lineTo(-h, c / 2), t.lineTo(-h, -c / 2), t.closePath(), t.restore(), this.__fillStroke(t)), this.pointerAtBeginning() && (t.save(), t.beginPath(), t.translate(i[0], i[1]), a ? (n = (r[0] + r[2]) / 2 - i[0], s = (r[1] + r[3]) / 2 - i[1]) : (n = i[2] - i[0], s = i[3] - i[1]), t.rotate((Math.atan2(-s, -n) + e) % e), t.moveTo(0, 0), t.lineTo(-h, c / 2), t.lineTo(-h, -c / 2), t.closePath(), t.restore(), this.__fillStroke(t))
                }

                __fillStroke(t) {
                    var e = this.dashEnabled();
                    e && (this.attrs.dashEnabled = !1, t.setLineDash([])), t.fillStrokeShape(this), e && (this.attrs.dashEnabled = !0)
                }

                getSelfRect() {
                    const t = super.getSelfRect(), e = this.pointerWidth() / 2;
                    return {x: t.x - e, y: t.y - e, width: t.width + 2 * e, height: t.height + 2 * e}
                }
            }

            e.Arrow = h, h.prototype.className = "Arrow", (0, s._registerNode)(h), r.Factory.addGetterSetter(h, "pointerLength", 10, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(h, "pointerWidth", 10, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(h, "pointerAtBeginning", !1), r.Factory.addGetterSetter(h, "pointerAtEnding", !0)
        }, 9729: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Circle = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);

            class o extends a.Shape {
                _sceneFunc(t) {
                    t.beginPath(), t.arc(0, 0, this.attrs.radius || 0, 0, 2 * Math.PI, !1), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.radius()
                }

                getHeight() {
                    return 2 * this.radius()
                }

                setWidth(t) {
                    this.radius() !== t / 2 && this.radius(t / 2)
                }

                setHeight(t) {
                    this.radius() !== t / 2 && this.radius(t / 2)
                }
            }

            e.Circle = o, o.prototype._centroid = !0, o.prototype.className = "Circle", o.prototype._attrsAffectingSize = ["radius"], (0, s._registerNode)(o), r.Factory.addGetterSetter(o, "radius", 0, (0, n.getNumberValidator)())
        }, 6955: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Ellipse = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);

            class o extends a.Shape {
                _sceneFunc(t) {
                    var e = this.radiusX(), i = this.radiusY();
                    t.beginPath(), t.save(), e !== i && t.scale(1, i / e), t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.restore(), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.radiusX()
                }

                getHeight() {
                    return 2 * this.radiusY()
                }

                setWidth(t) {
                    this.radiusX(t / 2)
                }

                setHeight(t) {
                    this.radiusY(t / 2)
                }
            }

            e.Ellipse = o, o.prototype.className = "Ellipse", o.prototype._centroid = !0, o.prototype._attrsAffectingSize = ["radiusX", "radiusY"], (0, s._registerNode)(o), r.Factory.addComponentsGetterSetter(o, "radius", ["x", "y"]), r.Factory.addGetterSetter(o, "radiusX", 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(o, "radiusY", 0, (0, n.getNumberValidator)())
        }, 7256: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Image = void 0;
            const r = i(4060), a = i(4892), n = i(4723), s = i(8871), o = i(5483);

            class h extends n.Shape {
                constructor(t) {
                    super(t), this.on("imageChange.konva", (() => {
                        this._setImageLoad()
                    })), this._setImageLoad()
                }

                _setImageLoad() {
                    const t = this.image();
                    t && t.complete || t && 4 === t.readyState || t && t.addEventListener && t.addEventListener("load", (() => {
                        this._requestDraw()
                    }))
                }

                _useBufferCanvas() {
                    const t = !!this.cornerRadius(), e = this.hasShadow();
                    return !(!t || !e) || super._useBufferCanvas(!0)
                }

                _sceneFunc(t) {
                    const e = this.getWidth(), i = this.getHeight(), a = this.cornerRadius(), n = this.attrs.image;
                    let s;
                    if (n) {
                        const t = this.attrs.cropWidth, r = this.attrs.cropHeight;
                        s = t && r ? [n, this.cropX(), this.cropY(), t, r, 0, 0, e, i] : [n, 0, 0, e, i]
                    }
                    (this.hasFill() || this.hasStroke() || a) && (t.beginPath(), a ? r.Util.drawRoundedRectPath(t, e, i, a) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)), n && (a && t.clip(), t.drawImage.apply(t, s))
                }

                _hitFunc(t) {
                    var e = this.width(), i = this.height(), a = this.cornerRadius();
                    t.beginPath(), a ? r.Util.drawRoundedRectPath(t, e, i, a) : t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    var t, e;
                    return null !== (t = this.attrs.width) && void 0 !== t ? t : null === (e = this.image()) || void 0 === e ? void 0 : e.width
                }

                getHeight() {
                    var t, e;
                    return null !== (t = this.attrs.height) && void 0 !== t ? t : null === (e = this.image()) || void 0 === e ? void 0 : e.height
                }

                static fromURL(t, e, i = null) {
                    var a = r.Util.createImageElement();
                    a.onload = function () {
                        var t = new h({image: a});
                        e(t)
                    }, a.onerror = i, a.crossOrigin = "Anonymous", a.src = t
                }
            }

            e.Image = h, h.prototype.className = "Image", (0, s._registerNode)(h), a.Factory.addGetterSetter(h, "cornerRadius", 0, (0, o.getNumberOrArrayOfNumbersValidator)(4)), a.Factory.addGetterSetter(h, "image"), a.Factory.addComponentsGetterSetter(h, "crop", ["x", "y", "width", "height"]), a.Factory.addGetterSetter(h, "cropX", 0, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(h, "cropY", 0, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(h, "cropWidth", 0, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(h, "cropHeight", 0, (0, o.getNumberValidator)())
        }, 6619: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Tag = e.Label = void 0;
            const r = i(4892), a = i(4723), n = i(7949), s = i(5483), o = i(8871);
            var h = ["fontFamily", "fontSize", "fontStyle", "padding", "lineHeight", "text", "width", "height", "pointerDirection", "pointerWidth", "pointerHeight"],
                l = "up", d = "right", c = "down", g = "left", u = h.length;

            class f extends n.Group {
                constructor(t) {
                    super(t), this.on("add.konva", (function (t) {
                        this._addListeners(t.child), this._sync()
                    }))
                }

                getText() {
                    return this.find("Text")[0]
                }

                getTag() {
                    return this.find("Tag")[0]
                }

                _addListeners(t) {
                    var e, i = this, r = function () {
                        i._sync()
                    };
                    for (e = 0; e < u; e++) t.on(h[e] + "Change.konva", r)
                }

                getWidth() {
                    return this.getText().width()
                }

                getHeight() {
                    return this.getText().height()
                }

                _sync() {
                    var t, e, i, r, a, n, s, o = this.getText(), h = this.getTag();
                    if (o && h) {
                        switch (t = o.width(), e = o.height(), i = h.pointerDirection(), r = h.pointerWidth(), s = h.pointerHeight(), a = 0, n = 0, i) {
                            case l:
                                a = t / 2, n = -1 * s;
                                break;
                            case d:
                                a = t + r, n = e / 2;
                                break;
                            case c:
                                a = t / 2, n = e + s;
                                break;
                            case g:
                                a = -1 * r, n = e / 2
                        }
                        h.setAttrs({x: -1 * a, y: -1 * n, width: t, height: e}), o.setAttrs({x: -1 * a, y: -1 * n})
                    }
                }
            }

            e.Label = f, f.prototype.className = "Label", (0, o._registerNode)(f);

            class p extends a.Shape {
                _sceneFunc(t) {
                    var e = this.width(), i = this.height(), r = this.pointerDirection(), a = this.pointerWidth(),
                        n = this.pointerHeight(), s = this.cornerRadius();
                    let o = 0, h = 0, u = 0, f = 0;
                    "number" == typeof s ? o = h = u = f = Math.min(s, e / 2, i / 2) : (o = Math.min(s[0] || 0, e / 2, i / 2), h = Math.min(s[1] || 0, e / 2, i / 2), f = Math.min(s[2] || 0, e / 2, i / 2), u = Math.min(s[3] || 0, e / 2, i / 2)), t.beginPath(), t.moveTo(o, 0), r === l && (t.lineTo((e - a) / 2, 0), t.lineTo(e / 2, -1 * n), t.lineTo((e + a) / 2, 0)), t.lineTo(e - h, 0), t.arc(e - h, h, h, 3 * Math.PI / 2, 0, !1), r === d && (t.lineTo(e, (i - n) / 2), t.lineTo(e + a, i / 2), t.lineTo(e, (i + n) / 2)), t.lineTo(e, i - f), t.arc(e - f, i - f, f, 0, Math.PI / 2, !1), r === c && (t.lineTo((e + a) / 2, i), t.lineTo(e / 2, i + n), t.lineTo((e - a) / 2, i)), t.lineTo(u, i), t.arc(u, i - u, u, Math.PI / 2, Math.PI, !1), r === g && (t.lineTo(0, (i + n) / 2), t.lineTo(-1 * a, i / 2), t.lineTo(0, (i - n) / 2)), t.lineTo(0, o), t.arc(o, o, o, Math.PI, 3 * Math.PI / 2, !1), t.closePath(), t.fillStrokeShape(this)
                }

                getSelfRect() {
                    var t = 0, e = 0, i = this.pointerWidth(), r = this.pointerHeight(), a = this.pointerDirection(),
                        n = this.width(), s = this.height();
                    return a === l ? (e -= r, s += r) : a === c ? s += r : a === g ? (t -= 1.5 * i, n += i) : a === d && (n += 1.5 * i), {
                        x: t,
                        y: e,
                        width: n,
                        height: s
                    }
                }
            }

            e.Tag = p, p.prototype.className = "Tag", (0, o._registerNode)(p), r.Factory.addGetterSetter(p, "pointerDirection", "none"), r.Factory.addGetterSetter(p, "pointerWidth", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(p, "pointerHeight", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(p, "cornerRadius", 0, (0, s.getNumberOrArrayOfNumbersValidator)(4))
        }, 3443: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Line = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);

            function o(t, e, i, r, a, n, s) {
                var o = Math.sqrt(Math.pow(i - t, 2) + Math.pow(r - e, 2)),
                    h = Math.sqrt(Math.pow(a - i, 2) + Math.pow(n - r, 2)), l = s * o / (o + h), d = s * h / (o + h);
                return [i - l * (a - t), r - l * (n - e), i + d * (a - t), r + d * (n - e)]
            }

            function h(t, e) {
                var i, r, a = t.length, n = [];
                for (i = 2; i < a - 2; i += 2) r = o(t[i - 2], t[i - 1], t[i], t[i + 1], t[i + 2], t[i + 3], e), isNaN(r[0]) || (n.push(r[0]), n.push(r[1]), n.push(t[i]), n.push(t[i + 1]), n.push(r[2]), n.push(r[3]));
                return n
            }

            class l extends a.Shape {
                constructor(t) {
                    super(t), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", (function () {
                        this._clearCache("tensionPoints")
                    }))
                }

                _sceneFunc(t) {
                    var e, i, r, a = this.points(), n = a.length, s = this.tension(), o = this.closed(),
                        h = this.bezier();
                    if (n) {
                        if (t.beginPath(), t.moveTo(a[0], a[1]), 0 !== s && n > 4) {
                            for (i = (e = this.getTensionPoints()).length, r = o ? 0 : 4, o || t.quadraticCurveTo(e[0], e[1], e[2], e[3]); r < i - 2;) t.bezierCurveTo(e[r++], e[r++], e[r++], e[r++], e[r++], e[r++]);
                            o || t.quadraticCurveTo(e[i - 2], e[i - 1], a[n - 2], a[n - 1])
                        } else if (h) for (r = 2; r < n;) t.bezierCurveTo(a[r++], a[r++], a[r++], a[r++], a[r++], a[r++]); else for (r = 2; r < n; r += 2) t.lineTo(a[r], a[r + 1]);
                        o ? (t.closePath(), t.fillStrokeShape(this)) : t.strokeShape(this)
                    }
                }

                getTensionPoints() {
                    return this._getCache("tensionPoints", this._getTensionPoints)
                }

                _getTensionPoints() {
                    return this.closed() ? this._getTensionPointsClosed() : h(this.points(), this.tension())
                }

                _getTensionPointsClosed() {
                    var t = this.points(), e = t.length, i = this.tension(),
                        r = o(t[e - 2], t[e - 1], t[0], t[1], t[2], t[3], i),
                        a = o(t[e - 4], t[e - 3], t[e - 2], t[e - 1], t[0], t[1], i), n = h(t, i);
                    return [r[2], r[3]].concat(n).concat([a[0], a[1], t[e - 2], t[e - 1], a[2], a[3], r[0], r[1], t[0], t[1]])
                }

                getWidth() {
                    return this.getSelfRect().width
                }

                getHeight() {
                    return this.getSelfRect().height
                }

                getSelfRect() {
                    var t = this.points();
                    if (t.length < 4) return {x: t[0] || 0, y: t[1] || 0, width: 0, height: 0};
                    for (var e, i, r = (t = 0 !== this.tension() ? [t[0], t[1], ...this._getTensionPoints(), t[t.length - 2], t[t.length - 1]] : this.points())[0], a = t[0], n = t[1], s = t[1], o = 0; o < t.length / 2; o++) e = t[2 * o], i = t[2 * o + 1], r = Math.min(r, e), a = Math.max(a, e), n = Math.min(n, i), s = Math.max(s, i);
                    return {x: r, y: n, width: a - r, height: s - n}
                }
            }

            e.Line = l, l.prototype.className = "Line", l.prototype._attrsAffectingSize = ["points", "bezier", "tension"], (0, s._registerNode)(l), r.Factory.addGetterSetter(l, "closed", !1), r.Factory.addGetterSetter(l, "bezier", !1), r.Factory.addGetterSetter(l, "tension", 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(l, "points", [], (0, n.getNumberArrayValidator)())
        }, 1486: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Path = void 0;
            const r = i(4892), a = i(4723), n = i(8871), s = i(5570);

            class o extends a.Shape {
                constructor(t) {
                    super(t), this.dataArray = [], this.pathLength = 0, this._readDataAttribute(), this.on("dataChange.konva", (function () {
                        this._readDataAttribute()
                    }))
                }

                _readDataAttribute() {
                    this.dataArray = o.parsePathData(this.data()), this.pathLength = o.getPathLength(this.dataArray)
                }

                _sceneFunc(t) {
                    var e = this.dataArray;
                    t.beginPath();
                    for (var i = !1, r = 0; r < e.length; r++) {
                        var a = e[r].command, n = e[r].points;
                        switch (a) {
                            case"L":
                                t.lineTo(n[0], n[1]);
                                break;
                            case"M":
                                t.moveTo(n[0], n[1]);
                                break;
                            case"C":
                                t.bezierCurveTo(n[0], n[1], n[2], n[3], n[4], n[5]);
                                break;
                            case"Q":
                                t.quadraticCurveTo(n[0], n[1], n[2], n[3]);
                                break;
                            case"A":
                                var s = n[0], o = n[1], h = n[2], l = n[3], d = n[4], c = n[5], g = n[6], u = n[7],
                                    f = h > l ? h : l, p = h > l ? 1 : h / l, v = h > l ? l / h : 1;
                                t.translate(s, o), t.rotate(g), t.scale(p, v), t.arc(0, 0, f, d, d + c, 1 - u), t.scale(1 / p, 1 / v), t.rotate(-g), t.translate(-s, -o);
                                break;
                            case"z":
                                i = !0, t.closePath()
                        }
                    }
                    i || this.hasFill() ? t.fillStrokeShape(this) : t.strokeShape(this)
                }

                getSelfRect() {
                    var t = [];
                    this.dataArray.forEach((function (e) {
                        if ("A" === e.command) {
                            var i = e.points[4], r = e.points[5], a = e.points[4] + r, n = Math.PI / 180;
                            if (Math.abs(i - a) < n && (n = Math.abs(i - a)), r < 0) for (let r = i - n; r > a; r -= n) {
                                const i = o.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], r, 0);
                                t.push(i.x, i.y)
                            } else for (let r = i + n; r < a; r += n) {
                                const i = o.getPointOnEllipticalArc(e.points[0], e.points[1], e.points[2], e.points[3], r, 0);
                                t.push(i.x, i.y)
                            }
                        } else if ("C" === e.command) for (let i = 0; i <= 1; i += .01) {
                            const r = o.getPointOnCubicBezier(i, e.start.x, e.start.y, e.points[0], e.points[1], e.points[2], e.points[3], e.points[4], e.points[5]);
                            t.push(r.x, r.y)
                        } else t = t.concat(e.points)
                    }));
                    for (var e, i, r = t[0], a = t[0], n = t[1], s = t[1], h = 0; h < t.length / 2; h++) e = t[2 * h], i = t[2 * h + 1], isNaN(e) || (r = Math.min(r, e), a = Math.max(a, e)), isNaN(i) || (n = Math.min(n, i), s = Math.max(s, i));
                    return {x: r, y: n, width: a - r, height: s - n}
                }

                getLength() {
                    return this.pathLength
                }

                getPointAtLength(t) {
                    return o.getPointAtLengthOfDataArray(t, this.dataArray)
                }

                static getLineLength(t, e, i, r) {
                    return Math.sqrt((i - t) * (i - t) + (r - e) * (r - e))
                }

                static getPathLength(t) {
                    let e = 0;
                    for (var i = 0; i < t.length; ++i) e += t[i].pathLength;
                    return e
                }

                static getPointAtLengthOfDataArray(t, e) {
                    var i, r = 0, a = e.length;
                    if (!a) return null;
                    for (; r < a && t > e[r].pathLength;) t -= e[r].pathLength, ++r;
                    if (r === a) return {x: (i = e[r - 1].points.slice(-2))[0], y: i[1]};
                    if (t < .01) return {x: (i = e[r].points.slice(0, 2))[0], y: i[1]};
                    var n = e[r], h = n.points;
                    switch (n.command) {
                        case"L":
                            return o.getPointOnLine(t, n.start.x, n.start.y, h[0], h[1]);
                        case"C":
                            return o.getPointOnCubicBezier((0, s.t2length)(t, o.getPathLength(e), (t => (0, s.getCubicArcLength)([n.start.x, h[0], h[2], h[4]], [n.start.y, h[1], h[3], h[5]], t))), n.start.x, n.start.y, h[0], h[1], h[2], h[3], h[4], h[5]);
                        case"Q":
                            return o.getPointOnQuadraticBezier((0, s.t2length)(t, o.getPathLength(e), (t => (0, s.getQuadraticArcLength)([n.start.x, h[0], h[2]], [n.start.y, h[1], h[3]], t))), n.start.x, n.start.y, h[0], h[1], h[2], h[3]);
                        case"A":
                            var l = h[0], d = h[1], c = h[2], g = h[3], u = h[4], f = h[5], p = h[6];
                            return u += f * t / n.pathLength, o.getPointOnEllipticalArc(l, d, c, g, u, p)
                    }
                    return null
                }

                static getPointOnLine(t, e, i, r, a, n, s) {
                    n = null != n ? n : e, s = null != s ? s : i;
                    const o = this.getLineLength(e, i, r, a);
                    if (o < 1e-10) return {x: e, y: i};
                    if (r === e) return {x: n, y: s + (a > i ? t : -t)};
                    const h = (a - i) / (r - e), l = Math.sqrt(t * t / (1 + h * h)) * (r < e ? -1 : 1), d = h * l;
                    if (Math.abs(s - i - h * (n - e)) < 1e-10) return {x: n + l, y: s + d};
                    const c = ((n - e) * (r - e) + (s - i) * (a - i)) / (o * o), g = e + c * (r - e),
                        u = i + c * (a - i), f = this.getLineLength(n, s, g, u), p = Math.sqrt(t * t - f * f),
                        v = Math.sqrt(p * p / (1 + h * h)) * (r < e ? -1 : 1);
                    return {x: g + v, y: u + h * v}
                }

                static getPointOnCubicBezier(t, e, i, r, a, n, s, o, h) {
                    function l(t) {
                        return t * t * t
                    }

                    function d(t) {
                        return 3 * t * t * (1 - t)
                    }

                    function c(t) {
                        return 3 * t * (1 - t) * (1 - t)
                    }

                    function g(t) {
                        return (1 - t) * (1 - t) * (1 - t)
                    }

                    return {x: o * l(t) + n * d(t) + r * c(t) + e * g(t), y: h * l(t) + s * d(t) + a * c(t) + i * g(t)}
                }

                static getPointOnQuadraticBezier(t, e, i, r, a, n, s) {
                    function o(t) {
                        return t * t
                    }

                    function h(t) {
                        return 2 * t * (1 - t)
                    }

                    function l(t) {
                        return (1 - t) * (1 - t)
                    }

                    return {x: n * o(t) + r * h(t) + e * l(t), y: s * o(t) + a * h(t) + i * l(t)}
                }

                static getPointOnEllipticalArc(t, e, i, r, a, n) {
                    var s = Math.cos(n), o = Math.sin(n), h = i * Math.cos(a), l = r * Math.sin(a);
                    return {x: t + (h * s - l * o), y: e + (h * o + l * s)}
                }

                static parsePathData(t) {
                    if (!t) return [];
                    var e = t,
                        i = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
                    e = e.replace(new RegExp(" ", "g"), ",");
                    for (var r = 0; r < i.length; r++) e = e.replace(new RegExp(i[r], "g"), "|" + i[r]);
                    var a, n = e.split("|"), s = [], o = [], h = 0, l = 0,
                        d = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
                    for (r = 1; r < n.length; r++) {
                        var c = n[r], g = c.charAt(0);
                        for (c = c.slice(1), o.length = 0; a = d.exec(c);) o.push(a[0]);
                        for (var u = [], f = 0, p = o.length; f < p; f++) if ("00" !== o[f]) {
                            var v = parseFloat(o[f]);
                            isNaN(v) ? u.push(0) : u.push(v)
                        } else u.push(0, 0);
                        for (; u.length > 0 && !isNaN(u[0]);) {
                            var m, y, _, b, x, S, C, w, P, k, A = "", T = [], F = h, M = l;
                            switch (g) {
                                case"l":
                                    h += u.shift(), l += u.shift(), A = "L", T.push(h, l);
                                    break;
                                case"L":
                                    h = u.shift(), l = u.shift(), T.push(h, l);
                                    break;
                                case"m":
                                    var G = u.shift(), R = u.shift();
                                    if (h += G, l += R, A = "M", s.length > 2 && "z" === s[s.length - 1].command) for (var D = s.length - 2; D >= 0; D--) if ("M" === s[D].command) {
                                        h = s[D].points[0] + G, l = s[D].points[1] + R;
                                        break
                                    }
                                    T.push(h, l), g = "l";
                                    break;
                                case"M":
                                    h = u.shift(), l = u.shift(), A = "M", T.push(h, l), g = "L";
                                    break;
                                case"h":
                                    h += u.shift(), A = "L", T.push(h, l);
                                    break;
                                case"H":
                                    h = u.shift(), A = "L", T.push(h, l);
                                    break;
                                case"v":
                                    l += u.shift(), A = "L", T.push(h, l);
                                    break;
                                case"V":
                                    l = u.shift(), A = "L", T.push(h, l);
                                    break;
                                case"C":
                                    T.push(u.shift(), u.shift(), u.shift(), u.shift()), h = u.shift(), l = u.shift(), T.push(h, l);
                                    break;
                                case"c":
                                    T.push(h + u.shift(), l + u.shift(), h + u.shift(), l + u.shift()), h += u.shift(), l += u.shift(), A = "C", T.push(h, l);
                                    break;
                                case"S":
                                    y = h, _ = l, "C" === (m = s[s.length - 1]).command && (y = h + (h - m.points[2]), _ = l + (l - m.points[3])), T.push(y, _, u.shift(), u.shift()), h = u.shift(), l = u.shift(), A = "C", T.push(h, l);
                                    break;
                                case"s":
                                    y = h, _ = l, "C" === (m = s[s.length - 1]).command && (y = h + (h - m.points[2]), _ = l + (l - m.points[3])), T.push(y, _, h + u.shift(), l + u.shift()), h += u.shift(), l += u.shift(), A = "C", T.push(h, l);
                                    break;
                                case"Q":
                                    T.push(u.shift(), u.shift()), h = u.shift(), l = u.shift(), T.push(h, l);
                                    break;
                                case"q":
                                    T.push(h + u.shift(), l + u.shift()), h += u.shift(), l += u.shift(), A = "Q", T.push(h, l);
                                    break;
                                case"T":
                                    y = h, _ = l, "Q" === (m = s[s.length - 1]).command && (y = h + (h - m.points[0]), _ = l + (l - m.points[1])), h = u.shift(), l = u.shift(), A = "Q", T.push(y, _, h, l);
                                    break;
                                case"t":
                                    y = h, _ = l, "Q" === (m = s[s.length - 1]).command && (y = h + (h - m.points[0]), _ = l + (l - m.points[1])), h += u.shift(), l += u.shift(), A = "Q", T.push(y, _, h, l);
                                    break;
                                case"A":
                                    b = u.shift(), x = u.shift(), S = u.shift(), C = u.shift(), w = u.shift(), P = h, k = l, h = u.shift(), l = u.shift(), A = "A", T = this.convertEndpointToCenterParameterization(P, k, h, l, C, w, b, x, S);
                                    break;
                                case"a":
                                    b = u.shift(), x = u.shift(), S = u.shift(), C = u.shift(), w = u.shift(), P = h, k = l, h += u.shift(), l += u.shift(), A = "A", T = this.convertEndpointToCenterParameterization(P, k, h, l, C, w, b, x, S)
                            }
                            s.push({
                                command: A || g,
                                points: T,
                                start: {x: F, y: M},
                                pathLength: this.calcLength(F, M, A || g, T)
                            })
                        }
                        "z" !== g && "Z" !== g || s.push({command: "z", points: [], start: void 0, pathLength: 0})
                    }
                    return s
                }

                static calcLength(t, e, i, r) {
                    var a, n, h, l, d = o;
                    switch (i) {
                        case"L":
                            return d.getLineLength(t, e, r[0], r[1]);
                        case"C":
                            return (0, s.getCubicArcLength)([t, r[0], r[2], r[4]], [e, r[1], r[3], r[5]], 1);
                        case"Q":
                            return (0, s.getQuadraticArcLength)([t, r[0], r[2]], [e, r[1], r[3]], 1);
                        case"A":
                            a = 0;
                            var c = r[4], g = r[5], u = r[4] + g, f = Math.PI / 180;
                            if (Math.abs(c - u) < f && (f = Math.abs(c - u)), n = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], c, 0), g < 0) for (l = c - f; l > u; l -= f) h = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0), a += d.getLineLength(n.x, n.y, h.x, h.y), n = h; else for (l = c + f; l < u; l += f) h = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], l, 0), a += d.getLineLength(n.x, n.y, h.x, h.y), n = h;
                            return h = d.getPointOnEllipticalArc(r[0], r[1], r[2], r[3], u, 0), a + d.getLineLength(n.x, n.y, h.x, h.y)
                    }
                    return 0
                }

                static convertEndpointToCenterParameterization(t, e, i, r, a, n, s, o, h) {
                    var l = h * (Math.PI / 180), d = Math.cos(l) * (t - i) / 2 + Math.sin(l) * (e - r) / 2,
                        c = -1 * Math.sin(l) * (t - i) / 2 + Math.cos(l) * (e - r) / 2,
                        g = d * d / (s * s) + c * c / (o * o);
                    g > 1 && (s *= Math.sqrt(g), o *= Math.sqrt(g));
                    var u = Math.sqrt((s * s * (o * o) - s * s * (c * c) - o * o * (d * d)) / (s * s * (c * c) + o * o * (d * d)));
                    a === n && (u *= -1), isNaN(u) && (u = 0);
                    var f = u * s * c / o, p = u * -o * d / s, v = (t + i) / 2 + Math.cos(l) * f - Math.sin(l) * p,
                        m = (e + r) / 2 + Math.sin(l) * f + Math.cos(l) * p, y = function (t) {
                            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
                        }, _ = function (t, e) {
                            return (t[0] * e[0] + t[1] * e[1]) / (y(t) * y(e))
                        }, b = function (t, e) {
                            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(_(t, e))
                        }, x = b([1, 0], [(d - f) / s, (c - p) / o]), S = [(d - f) / s, (c - p) / o],
                        C = [(-1 * d - f) / s, (-1 * c - p) / o], w = b(S, C);
                    return _(S, C) <= -1 && (w = Math.PI), _(S, C) >= 1 && (w = 0), 0 === n && w > 0 && (w -= 2 * Math.PI), 1 === n && w < 0 && (w += 2 * Math.PI), [v, m, s, o, x, w, l, n]
                }
            }

            e.Path = o, o.prototype.className = "Path", o.prototype._attrsAffectingSize = ["data"], (0, n._registerNode)(o), r.Factory.addGetterSetter(o, "data")
        }, 5155: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Rect = void 0;
            const r = i(4892), a = i(4723), n = i(8871), s = i(4060), o = i(5483);

            class h extends a.Shape {
                _sceneFunc(t) {
                    var e = this.cornerRadius(), i = this.width(), r = this.height();
                    t.beginPath(), e ? s.Util.drawRoundedRectPath(t, i, r, e) : t.rect(0, 0, i, r), t.closePath(), t.fillStrokeShape(this)
                }
            }

            e.Rect = h, h.prototype.className = "Rect", (0, n._registerNode)(h), r.Factory.addGetterSetter(h, "cornerRadius", 0, (0, o.getNumberOrArrayOfNumbersValidator)(4))
        }, 9131: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.RegularPolygon = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);

            class o extends a.Shape {
                _sceneFunc(t) {
                    const e = this._getPoints();
                    t.beginPath(), t.moveTo(e[0].x, e[0].y);
                    for (var i = 1; i < e.length; i++) t.lineTo(e[i].x, e[i].y);
                    t.closePath(), t.fillStrokeShape(this)
                }

                _getPoints() {
                    const t = this.attrs.sides, e = this.attrs.radius || 0, i = [];
                    for (var r = 0; r < t; r++) i.push({
                        x: e * Math.sin(2 * r * Math.PI / t),
                        y: -1 * e * Math.cos(2 * r * Math.PI / t)
                    });
                    return i
                }

                getSelfRect() {
                    const t = this._getPoints();
                    var e = t[0].x, i = t[0].y, r = t[0].x, a = t[0].y;
                    return t.forEach((t => {
                        e = Math.min(e, t.x), i = Math.max(i, t.x), r = Math.min(r, t.y), a = Math.max(a, t.y)
                    })), {x: e, y: r, width: i - e, height: a - r}
                }

                getWidth() {
                    return 2 * this.radius()
                }

                getHeight() {
                    return 2 * this.radius()
                }

                setWidth(t) {
                    this.radius(t / 2)
                }

                setHeight(t) {
                    this.radius(t / 2)
                }
            }

            e.RegularPolygon = o, o.prototype.className = "RegularPolygon", o.prototype._centroid = !0, o.prototype._attrsAffectingSize = ["radius"], (0, s._registerNode)(o), r.Factory.addGetterSetter(o, "radius", 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(o, "sides", 0, (0, n.getNumberValidator)())
        }, 5451: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Ring = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);
            var o = 2 * Math.PI;

            class h extends a.Shape {
                _sceneFunc(t) {
                    t.beginPath(), t.arc(0, 0, this.innerRadius(), 0, o, !1), t.moveTo(this.outerRadius(), 0), t.arc(0, 0, this.outerRadius(), o, 0, !0), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.outerRadius()
                }

                getHeight() {
                    return 2 * this.outerRadius()
                }

                setWidth(t) {
                    this.outerRadius(t / 2)
                }

                setHeight(t) {
                    this.outerRadius(t / 2)
                }
            }

            e.Ring = h, h.prototype.className = "Ring", h.prototype._centroid = !0, h.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, s._registerNode)(h), r.Factory.addGetterSetter(h, "innerRadius", 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(h, "outerRadius", 0, (0, n.getNumberValidator)())
        }, 9308: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Sprite = void 0;
            const r = i(4892), a = i(4723), n = i(9696), s = i(5483), o = i(8871);

            class h extends a.Shape {
                constructor(t) {
                    super(t), this._updated = !0, this.anim = new n.Animation((() => {
                        var t = this._updated;
                        return this._updated = !1, t
                    })), this.on("animationChange.konva", (function () {
                        this.frameIndex(0)
                    })), this.on("frameIndexChange.konva", (function () {
                        this._updated = !0
                    })), this.on("frameRateChange.konva", (function () {
                        this.anim.isRunning() && (clearInterval(this.interval), this._setInterval())
                    }))
                }

                _sceneFunc(t) {
                    var e = this.animation(), i = this.frameIndex(), r = 4 * i, a = this.animations()[e],
                        n = this.frameOffsets(), s = a[r + 0], o = a[r + 1], h = a[r + 2], l = a[r + 3],
                        d = this.image();
                    if ((this.hasFill() || this.hasStroke()) && (t.beginPath(), t.rect(0, 0, h, l), t.closePath(), t.fillStrokeShape(this)), d) if (n) {
                        var c = n[e], g = 2 * i;
                        t.drawImage(d, s, o, h, l, c[g + 0], c[g + 1], h, l)
                    } else t.drawImage(d, s, o, h, l, 0, 0, h, l)
                }

                _hitFunc(t) {
                    var e = this.animation(), i = this.frameIndex(), r = 4 * i, a = this.animations()[e],
                        n = this.frameOffsets(), s = a[r + 2], o = a[r + 3];
                    if (t.beginPath(), n) {
                        var h = n[e], l = 2 * i;
                        t.rect(h[l + 0], h[l + 1], s, o)
                    } else t.rect(0, 0, s, o);
                    t.closePath(), t.fillShape(this)
                }

                _useBufferCanvas() {
                    return super._useBufferCanvas(!0)
                }

                _setInterval() {
                    var t = this;
                    this.interval = setInterval((function () {
                        t._updateIndex()
                    }), 1e3 / this.frameRate())
                }

                start() {
                    if (!this.isRunning()) {
                        var t = this.getLayer();
                        this.anim.setLayers(t), this._setInterval(), this.anim.start()
                    }
                }

                stop() {
                    this.anim.stop(), clearInterval(this.interval)
                }

                isRunning() {
                    return this.anim.isRunning()
                }

                _updateIndex() {
                    var t = this.frameIndex(), e = this.animation();
                    t < this.animations()[e].length / 4 - 1 ? this.frameIndex(t + 1) : this.frameIndex(0)
                }
            }

            e.Sprite = h, h.prototype.className = "Sprite", (0, o._registerNode)(h), r.Factory.addGetterSetter(h, "animation"), r.Factory.addGetterSetter(h, "animations"), r.Factory.addGetterSetter(h, "frameOffsets"), r.Factory.addGetterSetter(h, "image"), r.Factory.addGetterSetter(h, "frameIndex", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "frameRate", 17, (0, s.getNumberValidator)()), r.Factory.backCompat(h, {
                index: "frameIndex",
                getIndex: "getFrameIndex",
                setIndex: "setFrameIndex"
            })
        }, 4481: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Star = void 0;
            const r = i(4892), a = i(4723), n = i(5483), s = i(8871);

            class o extends a.Shape {
                _sceneFunc(t) {
                    var e = this.innerRadius(), i = this.outerRadius(), r = this.numPoints();
                    t.beginPath(), t.moveTo(0, 0 - i);
                    for (var a = 1; a < 2 * r; a++) {
                        var n = a % 2 == 0 ? i : e, s = n * Math.sin(a * Math.PI / r),
                            o = -1 * n * Math.cos(a * Math.PI / r);
                        t.lineTo(s, o)
                    }
                    t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.outerRadius()
                }

                getHeight() {
                    return 2 * this.outerRadius()
                }

                setWidth(t) {
                    this.outerRadius(t / 2)
                }

                setHeight(t) {
                    this.outerRadius(t / 2)
                }
            }

            e.Star = o, o.prototype.className = "Star", o.prototype._centroid = !0, o.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"], (0, s._registerNode)(o), r.Factory.addGetterSetter(o, "numPoints", 5, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(o, "innerRadius", 0, (0, n.getNumberValidator)()), r.Factory.addGetterSetter(o, "outerRadius", 0, (0, n.getNumberValidator)())
        }, 1958: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Text = e.stringToArray = void 0;
            const r = i(4060), a = i(4892), n = i(4723), s = i(8871), o = i(5483), h = i(8871);

            function l(t) {
                return Array.from(t)
            }

            e.stringToArray = l;
            var d, c = "auto", g = "inherit", u = "justify", f = "left", p = "middle", v = "normal", m = " ",
                y = "none",
                _ = ["direction", "fontFamily", "fontSize", "fontStyle", "fontVariant", "padding", "align", "verticalAlign", "lineHeight", "text", "width", "height", "wrap", "ellipsis", "letterSpacing"],
                b = _.length;

            function x() {
                return d || (d = r.Util.createCanvasElement().getContext("2d"))
            }

            class S extends n.Shape {
                constructor(t) {
                    super(function (t) {
                        return (t = t || {}).fillLinearGradientColorStops || t.fillRadialGradientColorStops || t.fillPatternImage || (t.fill = t.fill || "black"), t
                    }(t)), this._partialTextX = 0, this._partialTextY = 0;
                    for (var e = 0; e < b; e++) this.on(_[e] + "Change.konva", this._setTextData);
                    this._setTextData()
                }

                _sceneFunc(t) {
                    var e = this.textArr, i = e.length;
                    if (this.text()) {
                        var r, a = this.padding(), n = this.fontSize(), o = this.lineHeight() * n,
                            h = this.verticalAlign(), d = this.direction(), c = 0, v = this.align(),
                            m = this.getWidth(), y = this.letterSpacing(), _ = this.fill(), b = this.textDecoration(),
                            x = -1 !== b.indexOf("underline"), S = -1 !== b.indexOf("line-through");
                        d = d === g ? t.direction : d;
                        var C = o / 2, w = p;
                        if (s.Konva._fixTextRendering) {
                            var P = this.measureSize("M");
                            w = "alphabetic", C = (P.fontBoundingBoxAscent - P.fontBoundingBoxDescent) / 2 + o / 2
                        }
                        var k = 0, A = 0;
                        for ("rtl" === d && t.setAttr("direction", d), t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", w), t.setAttr("textAlign", f), h === p ? c = (this.getHeight() - i * o - 2 * a) / 2 : "bottom" === h && (c = this.getHeight() - i * o - 2 * a), t.translate(a, c + a), r = 0; r < i; r++) {
                            k = 0, A = 0;
                            var T, F, M, G = e[r], R = G.text, D = G.width, N = G.lastInParagraph;
                            if (t.save(), "right" === v ? k += m - D - 2 * a : "center" === v && (k += (m - D - 2 * a) / 2), x) {
                                t.save(), t.beginPath();
                                const e = k,
                                    i = C + A + (s.Konva._fixTextRendering ? Math.round(n / 4) : Math.round(n / 2));
                                t.moveTo(e, i), F = 0 == (T = R.split(" ").length - 1), M = v !== u || N ? D : m - 2 * a, t.lineTo(e + Math.round(M), i), t.lineWidth = n / 15;
                                const r = this._getLinearGradient();
                                t.strokeStyle = r || _, t.stroke(), t.restore()
                            }
                            if (S) {
                                t.save(), t.beginPath();
                                let e = s.Konva._fixTextRendering ? -Math.round(n / 4) : 0;
                                t.moveTo(k, C + A + e), F = 0 == (T = R.split(" ").length - 1), M = v === u && N && !F ? m - 2 * a : D, t.lineTo(k + Math.round(M), C + A + e), t.lineWidth = n / 15;
                                const i = this._getLinearGradient();
                                t.strokeStyle = i || _, t.stroke(), t.restore()
                            }
                            if ("rtl" === d || 0 === y && v !== u) 0 !== y && t.setAttr("letterSpacing", `${y}px`), this._partialTextX = k, this._partialTextY = C + A, this._partialText = R, t.fillStrokeShape(this); else {
                                T = R.split(" ").length - 1;
                                for (var E = l(R), O = 0; O < E.length; O++) {
                                    var L = E[O];
                                    " " !== L || N || v !== u || (k += (m - 2 * a - D) / T), this._partialTextX = k, this._partialTextY = C + A, this._partialText = L, t.fillStrokeShape(this), k += this.measureSize(L).width + y
                                }
                            }
                            t.restore(), i > 1 && (C += o)
                        }
                    }
                }

                _hitFunc(t) {
                    var e = this.getWidth(), i = this.getHeight();
                    t.beginPath(), t.rect(0, 0, e, i), t.closePath(), t.fillStrokeShape(this)
                }

                setText(t) {
                    var e = r.Util._isString(t) ? t : null == t ? "" : t + "";
                    return this._setAttr("text", e), this
                }

                getWidth() {
                    return this.attrs.width === c || void 0 === this.attrs.width ? this.getTextWidth() + 2 * this.padding() : this.attrs.width
                }

                getHeight() {
                    return this.attrs.height === c || void 0 === this.attrs.height ? this.fontSize() * this.textArr.length * this.lineHeight() + 2 * this.padding() : this.attrs.height
                }

                getTextWidth() {
                    return this.textWidth
                }

                getTextHeight() {
                    return r.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }

                measureSize(t) {
                    var e, i, r, a, n, s, o, h, l, d, c, g, u = x(), f = this.fontSize();
                    u.save(), u.font = this._getContextFont(), g = u.measureText(t), u.restore();
                    const p = f / 100;
                    return {
                        actualBoundingBoxAscent: null !== (e = g.actualBoundingBoxAscent) && void 0 !== e ? e : 71.58203125 * p,
                        actualBoundingBoxDescent: null !== (i = g.actualBoundingBoxDescent) && void 0 !== i ? i : 0,
                        actualBoundingBoxLeft: null !== (r = g.actualBoundingBoxLeft) && void 0 !== r ? r : -7.421875 * p,
                        actualBoundingBoxRight: null !== (a = g.actualBoundingBoxRight) && void 0 !== a ? a : 75.732421875 * p,
                        alphabeticBaseline: null !== (n = g.alphabeticBaseline) && void 0 !== n ? n : 0,
                        emHeightAscent: null !== (s = g.emHeightAscent) && void 0 !== s ? s : 100 * p,
                        emHeightDescent: null !== (o = g.emHeightDescent) && void 0 !== o ? o : -20 * p,
                        fontBoundingBoxAscent: null !== (h = g.fontBoundingBoxAscent) && void 0 !== h ? h : 91 * p,
                        fontBoundingBoxDescent: null !== (l = g.fontBoundingBoxDescent) && void 0 !== l ? l : 21 * p,
                        hangingBaseline: null !== (d = g.hangingBaseline) && void 0 !== d ? d : 72.80000305175781 * p,
                        ideographicBaseline: null !== (c = g.ideographicBaseline) && void 0 !== c ? c : -21 * p,
                        width: g.width,
                        height: f
                    }
                }

                _getContextFont() {
                    return this.fontStyle() + m + this.fontVariant() + m + (this.fontSize() + "px ") + this.fontFamily().split(",").map((t => {
                        const e = (t = t.trim()).indexOf(" ") >= 0, i = t.indexOf('"') >= 0 || t.indexOf("'") >= 0;
                        return e && !i && (t = `"${t}"`), t
                    })).join(", ")
                }

                _addTextLine(t) {
                    this.align() === u && (t = t.trim());
                    var e = this._getTextWidth(t);
                    return this.textArr.push({text: t, width: e, lastInParagraph: !1})
                }

                _getTextWidth(t) {
                    var e = this.letterSpacing(), i = t.length;
                    return x().measureText(t).width + (i ? e * (i - 1) : 0)
                }

                _setTextData() {
                    var t = this.text().split("\n"), e = +this.fontSize(), i = 0, r = this.lineHeight() * e,
                        a = this.attrs.width, n = this.attrs.height, s = a !== c && void 0 !== a,
                        o = n !== c && void 0 !== n, h = this.padding(), l = a - 2 * h, d = n - 2 * h, g = 0,
                        u = this.wrap(), f = "char" !== u && u !== y, p = this.ellipsis();
                    this.textArr = [], x().font = this._getContextFont();
                    for (var v = p ? this._getTextWidth("…") : 0, _ = 0, b = t.length; _ < b; ++_) {
                        var S = t[_], C = this._getTextWidth(S);
                        if (s && C > l) for (; S.length > 0;) {
                            for (var w = 0, P = S.length, k = "", A = 0; w < P;) {
                                var T = w + P >>> 1, F = S.slice(0, T + 1), M = this._getTextWidth(F) + v;
                                M <= l ? (w = T + 1, k = F, A = M) : P = T
                            }
                            if (!k) break;
                            if (f) {
                                var G, R = S[k.length];
                                (G = (R === m || "-" === R) && A <= l ? k.length : Math.max(k.lastIndexOf(m), k.lastIndexOf("-")) + 1) > 0 && (w = G, k = k.slice(0, w), A = this._getTextWidth(k))
                            }
                            if (k = k.trimRight(), this._addTextLine(k), i = Math.max(i, A), g += r, this._shouldHandleEllipsis(g)) {
                                this._tryToAddEllipsisToLastLine();
                                break
                            }
                            if ((S = (S = S.slice(w)).trimLeft()).length > 0 && (C = this._getTextWidth(S)) <= l) {
                                this._addTextLine(S), g += r, i = Math.max(i, C);
                                break
                            }
                        } else this._addTextLine(S), g += r, i = Math.max(i, C), this._shouldHandleEllipsis(g) && _ < b - 1 && this._tryToAddEllipsisToLastLine();
                        if (this.textArr[this.textArr.length - 1] && (this.textArr[this.textArr.length - 1].lastInParagraph = !0), o && g + r > d) break
                    }
                    this.textHeight = e, this.textWidth = i
                }

                _shouldHandleEllipsis(t) {
                    var e = +this.fontSize(), i = this.lineHeight() * e, r = this.attrs.height,
                        a = r !== c && void 0 !== r, n = r - 2 * this.padding();
                    return !(this.wrap() !== y) || a && t + i > n
                }

                _tryToAddEllipsisToLastLine() {
                    var t = this.attrs.width, e = t !== c && void 0 !== t, i = t - 2 * this.padding(),
                        r = this.ellipsis(), a = this.textArr[this.textArr.length - 1];
                    a && r && (e && (this._getTextWidth(a.text + "…") < i || (a.text = a.text.slice(0, a.text.length - 3))), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(a.text + "…"))
                }

                getStrokeScaleEnabled() {
                    return !0
                }

                _useBufferCanvas() {
                    const t = -1 !== this.textDecoration().indexOf("underline") || -1 !== this.textDecoration().indexOf("line-through"),
                        e = this.hasShadow();
                    return !(!t || !e) || super._useBufferCanvas()
                }
            }

            e.Text = S, S.prototype._fillFunc = function (t) {
                t.fillText(this._partialText, this._partialTextX, this._partialTextY)
            }, S.prototype._strokeFunc = function (t) {
                t.setAttr("miterLimit", 2), t.strokeText(this._partialText, this._partialTextX, this._partialTextY)
            }, S.prototype.className = "Text", S.prototype._attrsAffectingSize = ["text", "fontSize", "padding", "wrap", "lineHeight", "letterSpacing"], (0, h._registerNode)(S), a.Factory.overWriteSetter(S, "width", (0, o.getNumberOrAutoValidator)()), a.Factory.overWriteSetter(S, "height", (0, o.getNumberOrAutoValidator)()), a.Factory.addGetterSetter(S, "direction", g), a.Factory.addGetterSetter(S, "fontFamily", "Arial"), a.Factory.addGetterSetter(S, "fontSize", 12, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(S, "fontStyle", v), a.Factory.addGetterSetter(S, "fontVariant", v), a.Factory.addGetterSetter(S, "padding", 0, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(S, "align", f), a.Factory.addGetterSetter(S, "verticalAlign", "top"), a.Factory.addGetterSetter(S, "lineHeight", 1, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(S, "wrap", "word"), a.Factory.addGetterSetter(S, "ellipsis", !1, (0, o.getBooleanValidator)()), a.Factory.addGetterSetter(S, "letterSpacing", 0, (0, o.getNumberValidator)()), a.Factory.addGetterSetter(S, "text", "", (0, o.getStringValidator)()), a.Factory.addGetterSetter(S, "textDecoration", "")
        }, 8137: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.TextPath = void 0;
            const r = i(4060), a = i(4892), n = i(4723), s = i(1486), o = i(1958), h = i(5483), l = i(8871);
            var d = "normal";

            function c(t) {
                t.fillText(this.partialText, 0, 0)
            }

            function g(t) {
                t.strokeText(this.partialText, 0, 0)
            }

            class u extends n.Shape {
                constructor(t) {
                    super(t), this.dummyCanvas = r.Util.createCanvasElement(), this.dataArray = [], this._readDataAttribute(), this.on("dataChange.konva", (function () {
                        this._readDataAttribute(), this._setTextData()
                    })), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva", this._setTextData), this._setTextData()
                }

                _getTextPathLength() {
                    return s.Path.getPathLength(this.dataArray)
                }

                _getPointAtLength(t) {
                    return this.attrs.data ? t - 1 > this.pathLength ? null : s.Path.getPointAtLengthOfDataArray(t, this.dataArray) : null
                }

                _readDataAttribute() {
                    this.dataArray = s.Path.parsePathData(this.attrs.data), this.pathLength = this._getTextPathLength()
                }

                _sceneFunc(t) {
                    t.setAttr("font", this._getContextFont()), t.setAttr("textBaseline", this.textBaseline()), t.setAttr("textAlign", "left"), t.save();
                    var e = this.textDecoration(), i = this.fill(), r = this.fontSize(), a = this.glyphInfo;
                    "underline" === e && t.beginPath();
                    for (var n = 0; n < a.length; n++) {
                        t.save();
                        var s = a[n].p0;
                        t.translate(s.x, s.y), t.rotate(a[n].rotation), this.partialText = a[n].text, t.fillStrokeShape(this), "underline" === e && (0 === n && t.moveTo(0, r / 2 + 1), t.lineTo(r, r / 2 + 1)), t.restore()
                    }
                    "underline" === e && (t.strokeStyle = i, t.lineWidth = r / 20, t.stroke()), t.restore()
                }

                _hitFunc(t) {
                    t.beginPath();
                    var e = this.glyphInfo;
                    if (e.length >= 1) {
                        var i = e[0].p0;
                        t.moveTo(i.x, i.y)
                    }
                    for (var r = 0; r < e.length; r++) {
                        var a = e[r].p1;
                        t.lineTo(a.x, a.y)
                    }
                    t.setAttr("lineWidth", this.fontSize()), t.setAttr("strokeStyle", this.colorKey), t.stroke()
                }

                getTextWidth() {
                    return this.textWidth
                }

                getTextHeight() {
                    return r.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight
                }

                setText(t) {
                    return o.Text.prototype.setText.call(this, t)
                }

                _getContextFont() {
                    return o.Text.prototype._getContextFont.call(this)
                }

                _getTextSize(t) {
                    var e = this.dummyCanvas.getContext("2d");
                    e.save(), e.font = this._getContextFont();
                    var i = e.measureText(t);
                    return e.restore(), {width: i.width, height: parseInt(`${this.fontSize()}`, 10)}
                }

                _setTextData() {
                    const {width: t, height: e} = this._getTextSize(this.attrs.text);
                    if (this.textWidth = t, this.textHeight = e, this.glyphInfo = [], !this.attrs.data) return null;
                    const i = this.letterSpacing(), r = this.align(), a = this.kerningFunc(),
                        n = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * i, 0);
                    let h = 0;
                    "center" === r && (h = Math.max(0, this.pathLength / 2 - n / 2)), "right" === r && (h = Math.max(0, this.pathLength - n));
                    const l = (0, o.stringToArray)(this.text());
                    let d = h;
                    for (var c = 0; c < l.length; c++) {
                        const t = this._getPointAtLength(d);
                        if (!t) return;
                        let e = this._getTextSize(l[c]).width + i;
                        if (" " === l[c] && "justify" === r) {
                            const t = this.text().split(" ").length - 1;
                            e += (this.pathLength - n) / t
                        }
                        const o = this._getPointAtLength(d + e);
                        if (!o) return;
                        const h = s.Path.getLineLength(t.x, t.y, o.x, o.y);
                        let g = 0;
                        if (a) try {
                            g = a(l[c - 1], l[c]) * this.fontSize()
                        } catch (t) {
                            g = 0
                        }
                        t.x += g, o.x += g, this.textWidth += g;
                        const u = s.Path.getPointOnLine(g + h / 2, t.x, t.y, o.x, o.y),
                            f = Math.atan2(o.y - t.y, o.x - t.x);
                        this.glyphInfo.push({
                            transposeX: u.x,
                            transposeY: u.y,
                            text: l[c],
                            rotation: f,
                            p0: t,
                            p1: o
                        }), d += e
                    }
                }

                getSelfRect() {
                    if (!this.glyphInfo.length) return {x: 0, y: 0, width: 0, height: 0};
                    var t = [];
                    this.glyphInfo.forEach((function (e) {
                        t.push(e.p0.x), t.push(e.p0.y), t.push(e.p1.x), t.push(e.p1.y)
                    }));
                    for (var e, i, r = t[0] || 0, a = t[0] || 0, n = t[1] || 0, s = t[1] || 0, o = 0; o < t.length / 2; o++) e = t[2 * o], i = t[2 * o + 1], r = Math.min(r, e), a = Math.max(a, e), n = Math.min(n, i), s = Math.max(s, i);
                    var h = this.fontSize();
                    return {x: r - h / 2, y: n - h / 2, width: a - r + h, height: s - n + h}
                }

                destroy() {
                    return r.Util.releaseCanvas(this.dummyCanvas), super.destroy()
                }
            }

            e.TextPath = u, u.prototype._fillFunc = c, u.prototype._strokeFunc = g, u.prototype._fillFuncHit = c, u.prototype._strokeFuncHit = g, u.prototype.className = "TextPath", u.prototype._attrsAffectingSize = ["text", "fontSize", "data"], (0, l._registerNode)(u), a.Factory.addGetterSetter(u, "data"), a.Factory.addGetterSetter(u, "fontFamily", "Arial"), a.Factory.addGetterSetter(u, "fontSize", 12, (0, h.getNumberValidator)()), a.Factory.addGetterSetter(u, "fontStyle", d), a.Factory.addGetterSetter(u, "align", "left"), a.Factory.addGetterSetter(u, "letterSpacing", 0, (0, h.getNumberValidator)()), a.Factory.addGetterSetter(u, "textBaseline", "middle"), a.Factory.addGetterSetter(u, "fontVariant", d), a.Factory.addGetterSetter(u, "text", ""), a.Factory.addGetterSetter(u, "textDecoration", null), a.Factory.addGetterSetter(u, "kerningFunc", null)
        }, 5058: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Transformer = void 0;
            const r = i(4060), a = i(4892), n = i(6536), s = i(4723), o = i(5155), h = i(7949), l = i(8871),
                d = i(5483), c = i(8871);
            var g = "tr-konva",
                u = ["resizeEnabledChange", "rotateAnchorOffsetChange", "rotateEnabledChange", "enabledAnchorsChange", "anchorSizeChange", "borderEnabledChange", "borderStrokeChange", "borderStrokeWidthChange", "borderDashChange", "anchorStrokeChange", "anchorStrokeWidthChange", "anchorFillChange", "anchorCornerRadiusChange", "ignoreStrokeChange", "anchorStyleFuncChange"].map((t => t + `.${g}`)).join(" "),
                f = "nodesRect",
                p = ["widthChange", "heightChange", "scaleXChange", "scaleYChange", "skewXChange", "skewYChange", "rotationChange", "offsetXChange", "offsetYChange", "transformsEnabledChange", "strokeWidthChange"],
                v = {
                    "top-left": -45,
                    "top-center": 0,
                    "top-right": 45,
                    "middle-right": -90,
                    "middle-left": 90,
                    "bottom-left": -135,
                    "bottom-center": 180,
                    "bottom-right": 135
                };
            const m = "ontouchstart" in l.Konva._global;
            var y = ["top-left", "top-center", "top-right", "middle-right", "middle-left", "bottom-left", "bottom-center", "bottom-right"];

            function _(t, e, i) {
                const r = i.x + (t.x - i.x) * Math.cos(e) - (t.y - i.y) * Math.sin(e),
                    a = i.y + (t.x - i.x) * Math.sin(e) + (t.y - i.y) * Math.cos(e);
                return {...t, rotation: t.rotation + e, x: r, y: a}
            }

            let b = 0;

            class x extends h.Group {
                constructor(t) {
                    super(t), this._movingAnchorName = null, this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(u, this.update), this.getNode() && this.update()
                }

                attachTo(t) {
                    return this.setNode(t), this
                }

                setNode(t) {
                    return r.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([t])
                }

                getNode() {
                    return this._nodes && this._nodes[0]
                }

                _getEventNamespace() {
                    return g + this._id
                }

                setNodes(t = []) {
                    this._nodes && this._nodes.length && this.detach();
                    const e = t.filter((t => !t.isAncestorOf(this) || (r.Util.error("Konva.Transformer cannot be an a child of the node you are trying to attach"), !1)));
                    return this._nodes = t = e, 1 === t.length && this.useSingleNodeRotation() ? this.rotation(t[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((t => {
                        const e = () => {
                            1 === this.nodes().length && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), this._transforming || this.isDragging() || this.update()
                        }, i = t._attrsAffectingSize.map((t => t + "Change." + this._getEventNamespace())).join(" ");
                        t.on(i, e), t.on(p.map((t => t + `.${this._getEventNamespace()}`)).join(" "), e), t.on(`absoluteTransformChange.${this._getEventNamespace()}`, e), this._proxyDrag(t)
                    })), this._resetTransformCache(), !!this.findOne(".top-left") && this.update(), this
                }

                _proxyDrag(t) {
                    let e;
                    t.on(`dragstart.${this._getEventNamespace()}`, (i => {
                        e = t.getAbsolutePosition(), this.isDragging() || t === this.findOne(".back") || this.startDrag(i, !1)
                    })), t.on(`dragmove.${this._getEventNamespace()}`, (i => {
                        if (!e) return;
                        const r = t.getAbsolutePosition(), a = r.x - e.x, n = r.y - e.y;
                        this.nodes().forEach((e => {
                            if (e === t) return;
                            if (e.isDragging()) return;
                            const r = e.getAbsolutePosition();
                            e.setAbsolutePosition({x: r.x + a, y: r.y + n}), e.startDrag(i)
                        })), e = null
                    }))
                }

                getNodes() {
                    return this._nodes || []
                }

                getActiveAnchor() {
                    return this._movingAnchorName
                }

                detach() {
                    this._nodes && this._nodes.forEach((t => {
                        t.off("." + this._getEventNamespace())
                    })), this._nodes = [], this._resetTransformCache()
                }

                _resetTransformCache() {
                    this._clearCache(f), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform")
                }

                _getNodeRect() {
                    return this._getCache(f, this.__getNodeRect)
                }

                __getNodeShape(t, e = this.rotation(), i) {
                    var r = t.getClientRect({skipTransform: !0, skipShadow: !0, skipStroke: this.ignoreStroke()}),
                        a = t.getAbsoluteScale(i), n = t.getAbsolutePosition(i), s = r.x * a.x - t.offsetX() * a.x,
                        o = r.y * a.y - t.offsetY() * a.y;
                    const h = (l.Konva.getAngle(t.getAbsoluteRotation()) + 2 * Math.PI) % (2 * Math.PI);
                    return _({
                        x: n.x + s * Math.cos(h) + o * Math.sin(-h),
                        y: n.y + o * Math.cos(h) + s * Math.sin(h),
                        width: r.width * a.x,
                        height: r.height * a.y,
                        rotation: h
                    }, -l.Konva.getAngle(e), {x: 0, y: 0})
                }

                __getNodeRect() {
                    if (!this.getNode()) return {x: -1e8, y: -1e8, width: 0, height: 0, rotation: 0};
                    const t = [];
                    this.nodes().map((e => {
                        const i = e.getClientRect({skipTransform: !0, skipShadow: !0, skipStroke: this.ignoreStroke()});
                        var r = [{x: i.x, y: i.y}, {x: i.x + i.width, y: i.y}, {
                            x: i.x + i.width,
                            y: i.y + i.height
                        }, {x: i.x, y: i.y + i.height}], a = e.getAbsoluteTransform();
                        r.forEach((function (e) {
                            var i = a.point(e);
                            t.push(i)
                        }))
                    }));
                    const e = new r.Transform;
                    e.rotate(-l.Konva.getAngle(this.rotation()));
                    var i = 1 / 0, a = 1 / 0, n = -1 / 0, s = -1 / 0;
                    t.forEach((function (t) {
                        var r = e.point(t);
                        void 0 === i && (i = n = r.x, a = s = r.y), i = Math.min(i, r.x), a = Math.min(a, r.y), n = Math.max(n, r.x), s = Math.max(s, r.y)
                    })), e.invert();
                    const o = e.point({x: i, y: a});
                    return {x: o.x, y: o.y, width: n - i, height: s - a, rotation: l.Konva.getAngle(this.rotation())}
                }

                getX() {
                    return this._getNodeRect().x
                }

                getY() {
                    return this._getNodeRect().y
                }

                getWidth() {
                    return this._getNodeRect().width
                }

                getHeight() {
                    return this._getNodeRect().height
                }

                _createElements() {
                    this._createBack(), y.forEach((t => {
                        this._createAnchor(t)
                    })), this._createAnchor("rotater")
                }

                _createAnchor(t) {
                    var e = new o.Rect({
                        stroke: "rgb(0, 161, 255)",
                        fill: "white",
                        strokeWidth: 1,
                        name: t + " _anchor",
                        dragDistance: 0,
                        draggable: !0,
                        hitStrokeWidth: m ? 10 : "auto"
                    }), i = this;
                    e.on("mousedown touchstart", (function (t) {
                        i._handleMouseDown(t)
                    })), e.on("dragstart", (t => {
                        e.stopDrag(), t.cancelBubble = !0
                    })), e.on("dragend", (t => {
                        t.cancelBubble = !0
                    })), e.on("mouseenter", (() => {
                        var i = l.Konva.getAngle(this.rotation()), a = this.rotateAnchorCursor(),
                            n = function (t, e, i) {
                                if ("rotater" === t) return i;
                                e += r.Util.degToRad(v[t] || 0);
                                var a = (r.Util.radToDeg(e) % 360 + 360) % 360;
                                return r.Util._inRange(a, 337.5, 360) || r.Util._inRange(a, 0, 22.5) ? "ns-resize" : r.Util._inRange(a, 22.5, 67.5) ? "nesw-resize" : r.Util._inRange(a, 67.5, 112.5) ? "ew-resize" : r.Util._inRange(a, 112.5, 157.5) ? "nwse-resize" : r.Util._inRange(a, 157.5, 202.5) ? "ns-resize" : r.Util._inRange(a, 202.5, 247.5) ? "nesw-resize" : r.Util._inRange(a, 247.5, 292.5) ? "ew-resize" : r.Util._inRange(a, 292.5, 337.5) ? "nwse-resize" : (r.Util.error("Transformer has unknown angle for cursor detection: " + a), "pointer")
                            }(t, i, a);
                        e.getStage().content && (e.getStage().content.style.cursor = n), this._cursorChange = !0
                    })), e.on("mouseout", (() => {
                        e.getStage().content && (e.getStage().content.style.cursor = ""), this._cursorChange = !1
                    })), this.add(e)
                }

                _createBack() {
                    var t = new s.Shape({
                        name: "back", width: 0, height: 0, draggable: !0, sceneFunc(t, e) {
                            var i = e.getParent(), a = i.padding();
                            t.beginPath(), t.rect(-a, -a, e.width() + 2 * a, e.height() + 2 * a), t.moveTo(e.width() / 2, -a), i.rotateEnabled() && i.rotateLineVisible() && t.lineTo(e.width() / 2, -i.rotateAnchorOffset() * r.Util._sign(e.height()) - a), t.fillStrokeShape(e)
                        }, hitFunc: (t, e) => {
                            if (this.shouldOverdrawWholeArea()) {
                                var i = this.padding();
                                t.beginPath(), t.rect(-i, -i, e.width() + 2 * i, e.height() + 2 * i), t.fillStrokeShape(e)
                            }
                        }
                    });
                    this.add(t), this._proxyDrag(t), t.on("dragstart", (t => {
                        t.cancelBubble = !0
                    })), t.on("dragmove", (t => {
                        t.cancelBubble = !0
                    })), t.on("dragend", (t => {
                        t.cancelBubble = !0
                    })), this.on("dragmove", (t => {
                        this.update()
                    }))
                }

                _handleMouseDown(t) {
                    if (!this._transforming) {
                        this._movingAnchorName = t.target.name().split(" ")[0];
                        var e = this._getNodeRect(), i = e.width, r = e.height,
                            a = Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2));
                        this.sin = Math.abs(r / a), this.cos = Math.abs(i / a), "undefined" != typeof window && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
                        var n = t.target.getAbsolutePosition(), s = t.target.getStage().getPointerPosition();
                        this._anchorDragOffset = {
                            x: s.x - n.x,
                            y: s.y - n.y
                        }, b++, this._fire("transformstart", {
                            evt: t.evt,
                            target: this.getNode()
                        }), this._nodes.forEach((e => {
                            e._fire("transformstart", {evt: t.evt, target: e})
                        }))
                    }
                }

                _handleMouseMove(t) {
                    var e, i, r, a = this.findOne("." + this._movingAnchorName), n = a.getStage();
                    n.setPointersPositions(t);
                    const s = n.getPointerPosition();
                    let o = {x: s.x - this._anchorDragOffset.x, y: s.y - this._anchorDragOffset.y};
                    const h = a.getAbsolutePosition();
                    this.anchorDragBoundFunc() && (o = this.anchorDragBoundFunc()(h, o, t)), a.setAbsolutePosition(o);
                    const d = a.getAbsolutePosition();
                    if (h.x !== d.x || h.y !== d.y) if ("rotater" !== this._movingAnchorName) {
                        var c, g = this.shiftBehavior();
                        c = "inverted" === g ? this.keepRatio() && !t.shiftKey : "none" === g ? this.keepRatio() : this.keepRatio() || t.shiftKey;
                        var u = this.centeredScaling() || t.altKey;
                        if ("top-left" === this._movingAnchorName) {
                            if (c) {
                                var f = u ? {
                                    x: this.width() / 2,
                                    y: this.height() / 2
                                } : {x: this.findOne(".bottom-right").x(), y: this.findOne(".bottom-right").y()};
                                r = Math.sqrt(Math.pow(f.x - a.x(), 2) + Math.pow(f.y - a.y(), 2));
                                var p = this.findOne(".top-left").x() > f.x ? -1 : 1,
                                    v = this.findOne(".top-left").y() > f.y ? -1 : 1;
                                e = r * this.cos * p, i = r * this.sin * v, this.findOne(".top-left").x(f.x - e), this.findOne(".top-left").y(f.y - i)
                            }
                        } else if ("top-center" === this._movingAnchorName) this.findOne(".top-left").y(a.y()); else if ("top-right" === this._movingAnchorName) {
                            c && (f = u ? {
                                x: this.width() / 2,
                                y: this.height() / 2
                            } : {
                                x: this.findOne(".bottom-left").x(),
                                y: this.findOne(".bottom-left").y()
                            }, r = Math.sqrt(Math.pow(a.x() - f.x, 2) + Math.pow(f.y - a.y(), 2)), p = this.findOne(".top-right").x() < f.x ? -1 : 1, v = this.findOne(".top-right").y() > f.y ? -1 : 1, e = r * this.cos * p, i = r * this.sin * v, this.findOne(".top-right").x(f.x + e), this.findOne(".top-right").y(f.y - i));
                            var m = a.position();
                            this.findOne(".top-left").y(m.y), this.findOne(".bottom-right").x(m.x)
                        } else "middle-left" === this._movingAnchorName ? this.findOne(".top-left").x(a.x()) : "middle-right" === this._movingAnchorName ? this.findOne(".bottom-right").x(a.x()) : "bottom-left" === this._movingAnchorName ? (c && (f = u ? {
                            x: this.width() / 2,
                            y: this.height() / 2
                        } : {
                            x: this.findOne(".top-right").x(),
                            y: this.findOne(".top-right").y()
                        }, r = Math.sqrt(Math.pow(f.x - a.x(), 2) + Math.pow(a.y() - f.y, 2)), p = f.x < a.x() ? -1 : 1, v = a.y() < f.y ? -1 : 1, e = r * this.cos * p, i = r * this.sin * v, a.x(f.x - e), a.y(f.y + i)), m = a.position(), this.findOne(".top-left").x(m.x), this.findOne(".bottom-right").y(m.y)) : "bottom-center" === this._movingAnchorName ? this.findOne(".bottom-right").y(a.y()) : "bottom-right" === this._movingAnchorName ? c && (f = u ? {
                            x: this.width() / 2,
                            y: this.height() / 2
                        } : {
                            x: this.findOne(".top-left").x(),
                            y: this.findOne(".top-left").y()
                        }, r = Math.sqrt(Math.pow(a.x() - f.x, 2) + Math.pow(a.y() - f.y, 2)), p = this.findOne(".bottom-right").x() < f.x ? -1 : 1, v = this.findOne(".bottom-right").y() < f.y ? -1 : 1, e = r * this.cos * p, i = r * this.sin * v, this.findOne(".bottom-right").x(f.x + e), this.findOne(".bottom-right").y(f.y + i)) : console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
                        if (u = this.centeredScaling() || t.altKey) {
                            var y = this.findOne(".top-left"), b = this.findOne(".bottom-right"), x = y.x(), S = y.y(),
                                C = this.getWidth() - b.x(), w = this.getHeight() - b.y();
                            b.move({x: -x, y: -S}), y.move({x: C, y: w})
                        }
                        var P = this.findOne(".top-left").getAbsolutePosition();
                        e = P.x, i = P.y;
                        var k = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(),
                            A = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
                        this._fitNodesInto({
                            x: e,
                            y: i,
                            width: k,
                            height: A,
                            rotation: l.Konva.getAngle(this.rotation())
                        }, t)
                    } else {
                        var T = this._getNodeRect();
                        e = a.x() - T.width / 2, i = -a.y() + T.height / 2;
                        let r = Math.atan2(-i, e) + Math.PI / 2;
                        T.height < 0 && (r -= Math.PI);
                        const n = l.Konva.getAngle(this.rotation()) + r,
                            s = l.Konva.getAngle(this.rotationSnapTolerance()), o = function (t, e) {
                                const i = function (t) {
                                    return {
                                        x: t.x + t.width / 2 * Math.cos(t.rotation) + t.height / 2 * Math.sin(-t.rotation),
                                        y: t.y + t.height / 2 * Math.cos(t.rotation) + t.width / 2 * Math.sin(t.rotation)
                                    }
                                }(t);
                                return _(t, e, i)
                            }(T, function (t, e, i) {
                                let r = e;
                                for (let a = 0; a < t.length; a++) {
                                    const n = l.Konva.getAngle(t[a]), s = Math.abs(n - e) % (2 * Math.PI);
                                    Math.min(s, 2 * Math.PI - s) < i && (r = n)
                                }
                                return r
                            }(this.rotationSnaps(), n, s) - T.rotation);
                        this._fitNodesInto(o, t)
                    }
                }

                _handleMouseUp(t) {
                    this._removeEvents(t)
                }

                getAbsoluteTransform() {
                    return this.getTransform()
                }

                _removeEvents(t) {
                    var e;
                    if (this._transforming) {
                        this._transforming = !1, "undefined" != typeof window && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
                        var i = this.getNode();
                        b--, this._fire("transformend", {
                            evt: t,
                            target: i
                        }), null === (e = this.getLayer()) || void 0 === e || e.batchDraw(), i && this._nodes.forEach((e => {
                            var i;
                            e._fire("transformend", {
                                evt: t,
                                target: e
                            }), null === (i = e.getLayer()) || void 0 === i || i.batchDraw()
                        })), this._movingAnchorName = null
                    }
                }

                _fitNodesInto(t, e) {
                    var i = this._getNodeRect();
                    if (r.Util._inRange(t.width, 2 * -this.padding() - 1, 1)) return void this.update();
                    if (r.Util._inRange(t.height, 2 * -this.padding() - 1, 1)) return void this.update();
                    var a = new r.Transform;
                    if (a.rotate(l.Konva.getAngle(this.rotation())), this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
                        const e = a.point({x: 2 * -this.padding(), y: 0});
                        t.x += e.x, t.y += e.y, t.width += 2 * this.padding(), this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= e.x, this._anchorDragOffset.y -= e.y
                    } else if (this._movingAnchorName && t.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
                        const e = a.point({x: 2 * this.padding(), y: 0});
                        this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= e.x, this._anchorDragOffset.y -= e.y, t.width += 2 * this.padding()
                    }
                    if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
                        const e = a.point({x: 0, y: 2 * -this.padding()});
                        t.x += e.x, t.y += e.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= e.x, this._anchorDragOffset.y -= e.y, t.height += 2 * this.padding()
                    } else if (this._movingAnchorName && t.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
                        const e = a.point({x: 0, y: 2 * this.padding()});
                        this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= e.x, this._anchorDragOffset.y -= e.y, t.height += 2 * this.padding()
                    }
                    if (this.boundBoxFunc()) {
                        const e = this.boundBoxFunc()(i, t);
                        e ? t = e : r.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!")
                    }
                    const n = 1e7, s = new r.Transform;
                    s.translate(i.x, i.y), s.rotate(i.rotation), s.scale(i.width / n, i.height / n);
                    const o = new r.Transform, h = t.width / n, d = t.height / n;
                    !1 === this.flipEnabled() ? (o.translate(t.x, t.y), o.rotate(t.rotation), o.translate(t.width < 0 ? t.width : 0, t.height < 0 ? t.height : 0), o.scale(Math.abs(h), Math.abs(d))) : (o.translate(t.x, t.y), o.rotate(t.rotation), o.scale(h, d));
                    const c = o.multiply(s.invert());
                    this._nodes.forEach((t => {
                        var e;
                        const i = t.getParent().getAbsoluteTransform(), a = t.getTransform().copy();
                        a.translate(t.offsetX(), t.offsetY());
                        const n = new r.Transform;
                        n.multiply(i.copy().invert()).multiply(c).multiply(i).multiply(a);
                        const s = n.decompose();
                        t.setAttrs(s), null === (e = t.getLayer()) || void 0 === e || e.batchDraw()
                    })), this.rotation(r.Util._getRotation(t.rotation)), this._nodes.forEach((t => {
                        this._fire("transform", {evt: e, target: t}), t._fire("transform", {evt: e, target: t})
                    })), this._resetTransformCache(), this.update(), this.getLayer().batchDraw()
                }

                forceUpdate() {
                    this._resetTransformCache(), this.update()
                }

                _batchChangeChild(t, e) {
                    this.findOne(t).setAttrs(e)
                }

                update() {
                    var t, e = this._getNodeRect();
                    this.rotation(r.Util._getRotation(e.rotation));
                    var i = e.width, a = e.height, n = this.enabledAnchors(), s = this.resizeEnabled(),
                        o = this.padding(), h = this.anchorSize();
                    const l = this.find("._anchor");
                    l.forEach((t => {
                        t.setAttrs({
                            width: h,
                            height: h,
                            offsetX: h / 2,
                            offsetY: h / 2,
                            stroke: this.anchorStroke(),
                            strokeWidth: this.anchorStrokeWidth(),
                            fill: this.anchorFill(),
                            cornerRadius: this.anchorCornerRadius()
                        })
                    })), this._batchChangeChild(".top-left", {
                        x: 0,
                        y: 0,
                        offsetX: h / 2 + o,
                        offsetY: h / 2 + o,
                        visible: s && n.indexOf("top-left") >= 0
                    }), this._batchChangeChild(".top-center", {
                        x: i / 2,
                        y: 0,
                        offsetY: h / 2 + o,
                        visible: s && n.indexOf("top-center") >= 0
                    }), this._batchChangeChild(".top-right", {
                        x: i,
                        y: 0,
                        offsetX: h / 2 - o,
                        offsetY: h / 2 + o,
                        visible: s && n.indexOf("top-right") >= 0
                    }), this._batchChangeChild(".middle-left", {
                        x: 0,
                        y: a / 2,
                        offsetX: h / 2 + o,
                        visible: s && n.indexOf("middle-left") >= 0
                    }), this._batchChangeChild(".middle-right", {
                        x: i,
                        y: a / 2,
                        offsetX: h / 2 - o,
                        visible: s && n.indexOf("middle-right") >= 0
                    }), this._batchChangeChild(".bottom-left", {
                        x: 0,
                        y: a,
                        offsetX: h / 2 + o,
                        offsetY: h / 2 - o,
                        visible: s && n.indexOf("bottom-left") >= 0
                    }), this._batchChangeChild(".bottom-center", {
                        x: i / 2,
                        y: a,
                        offsetY: h / 2 - o,
                        visible: s && n.indexOf("bottom-center") >= 0
                    }), this._batchChangeChild(".bottom-right", {
                        x: i,
                        y: a,
                        offsetX: h / 2 - o,
                        offsetY: h / 2 - o,
                        visible: s && n.indexOf("bottom-right") >= 0
                    }), this._batchChangeChild(".rotater", {
                        x: i / 2,
                        y: -this.rotateAnchorOffset() * r.Util._sign(a) - o,
                        visible: this.rotateEnabled()
                    }), this._batchChangeChild(".back", {
                        width: i,
                        height: a,
                        visible: this.borderEnabled(),
                        stroke: this.borderStroke(),
                        strokeWidth: this.borderStrokeWidth(),
                        dash: this.borderDash(),
                        x: 0,
                        y: 0
                    });
                    const d = this.anchorStyleFunc();
                    d && l.forEach((t => {
                        d(t)
                    })), null === (t = this.getLayer()) || void 0 === t || t.batchDraw()
                }

                isTransforming() {
                    return this._transforming
                }

                stopTransform() {
                    if (this._transforming) {
                        this._removeEvents();
                        var t = this.findOne("." + this._movingAnchorName);
                        t && t.stopDrag()
                    }
                }

                destroy() {
                    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), h.Group.prototype.destroy.call(this), this.detach(), this._removeEvents(), this
                }

                toObject() {
                    return n.Node.prototype.toObject.call(this)
                }

                clone(t) {
                    return n.Node.prototype.clone.call(this, t)
                }

                getClientRect() {
                    return this.nodes().length > 0 ? super.getClientRect() : {x: 0, y: 0, width: 0, height: 0}
                }
            }

            e.Transformer = x, x.isTransforming = () => b > 0, x.prototype.className = "Transformer", (0, c._registerNode)(x), a.Factory.addGetterSetter(x, "enabledAnchors", y, (function (t) {
                return t instanceof Array || r.Util.warn("enabledAnchors value should be an array"), t instanceof Array && t.forEach((function (t) {
                    -1 === y.indexOf(t) && r.Util.warn("Unknown anchor name: " + t + ". Available names are: " + y.join(", "))
                })), t || []
            })), a.Factory.addGetterSetter(x, "flipEnabled", !0, (0, d.getBooleanValidator)()), a.Factory.addGetterSetter(x, "resizeEnabled", !0), a.Factory.addGetterSetter(x, "anchorSize", 10, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "rotateEnabled", !0), a.Factory.addGetterSetter(x, "rotateLineVisible", !0), a.Factory.addGetterSetter(x, "rotationSnaps", []), a.Factory.addGetterSetter(x, "rotateAnchorOffset", 50, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "rotateAnchorCursor", "crosshair"), a.Factory.addGetterSetter(x, "rotationSnapTolerance", 5, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "borderEnabled", !0), a.Factory.addGetterSetter(x, "anchorStroke", "rgb(0, 161, 255)"), a.Factory.addGetterSetter(x, "anchorStrokeWidth", 1, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "anchorFill", "white"), a.Factory.addGetterSetter(x, "anchorCornerRadius", 0, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "borderStroke", "rgb(0, 161, 255)"), a.Factory.addGetterSetter(x, "borderStrokeWidth", 1, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "borderDash"), a.Factory.addGetterSetter(x, "keepRatio", !0), a.Factory.addGetterSetter(x, "shiftBehavior", "default"), a.Factory.addGetterSetter(x, "centeredScaling", !1), a.Factory.addGetterSetter(x, "ignoreStroke", !1), a.Factory.addGetterSetter(x, "padding", 0, (0, d.getNumberValidator)()), a.Factory.addGetterSetter(x, "node"), a.Factory.addGetterSetter(x, "nodes"), a.Factory.addGetterSetter(x, "boundBoxFunc"), a.Factory.addGetterSetter(x, "anchorDragBoundFunc"), a.Factory.addGetterSetter(x, "anchorStyleFunc"), a.Factory.addGetterSetter(x, "shouldOverdrawWholeArea", !1), a.Factory.addGetterSetter(x, "useSingleNodeRotation", !0), a.Factory.backCompat(x, {
                lineEnabled: "borderEnabled",
                rotateHandlerOffset: "rotateAnchorOffset",
                enabledHandlers: "enabledAnchors"
            })
        }, 8001: (t, e, i) => {
            Object.defineProperty(e, "__esModule", {value: !0}), e.Wedge = void 0;
            const r = i(4892), a = i(4723), n = i(8871), s = i(5483), o = i(8871);

            class h extends a.Shape {
                _sceneFunc(t) {
                    t.beginPath(), t.arc(0, 0, this.radius(), 0, n.Konva.getAngle(this.angle()), this.clockwise()), t.lineTo(0, 0), t.closePath(), t.fillStrokeShape(this)
                }

                getWidth() {
                    return 2 * this.radius()
                }

                getHeight() {
                    return 2 * this.radius()
                }

                setWidth(t) {
                    this.radius(t / 2)
                }

                setHeight(t) {
                    this.radius(t / 2)
                }
            }

            e.Wedge = h, h.prototype.className = "Wedge", h.prototype._centroid = !0, h.prototype._attrsAffectingSize = ["radius"], (0, o._registerNode)(h), r.Factory.addGetterSetter(h, "radius", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "angle", 0, (0, s.getNumberValidator)()), r.Factory.addGetterSetter(h, "clockwise", !1), r.Factory.backCompat(h, {
                angleDeg: "angle",
                getAngleDeg: "getAngle",
                setAngleDeg: "setAngle"
            })
        }
    }, e = {};

    function i(r) {
        var a = e[r];
        if (void 0 !== a) return a.exports;
        var n = e[r] = {exports: {}};
        return t[r](n, n.exports, i), n.exports
    }

    i.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, {a: e}), e
    }, i.d = (t, e) => {
        for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
    }, i.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var r = i(5778), a = i.n(r), n = new (a().Stage)({container: "container", width: 500, height: 500}),
        s = new (a().Layer);
    n.add(s), window.addCircle = function () {
        var t = new (a().Circle)({x: 50, y: 50, radius: 25, fill: "red", draggable: !0});
        t.on("contextmenu", (function (e) {
            e.evt.preventDefault(), t.destroy(), s.draw()
        })), s.add(t), s.draw()
    }, window.addSquare = function () {
        var t = new (a().Rect)({x: 50, y: 50, width: 50, height: 50, fill: "blue", draggable: !0});
        t.on("contextmenu", (function (e) {
            e.evt.preventDefault(), t.destroy(), s.draw()
        })), s.add(t), s.draw()
    }
})();
