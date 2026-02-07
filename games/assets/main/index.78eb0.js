window.__require = function e(t, i, o) {
    function a(r, s) {
        if (!i[r]) {
            if (!t[r]) {
                var l = r.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var p = "function" == typeof __require && __require;
                    if (!s && p) return p(l, !0);
                    if (n) return n(l, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = l
            }
            var c = i[r] = {
                exports: {}
            };
            t[r][0].call(c.exports, function (e) {
                return a(t[r][1][e] || e)
            }, c, c.exports, e, t, i, o)
        }
        return i[r].exports
    }
    for (var n = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
    return a
}({
    Ani: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "9feebmmil1CUIYFn89K74B9", "Ani"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.AniMgr = void 0;
        var o = function () {
            function e() {
                this.playerConfig = {
                    1: {
                        atk: 6,
                        idle: 6,
                        move: 6,
                        hit: 0,
                        death: 6,
                        win: 6
                    }
                }, this.monsterConfig = {
                    1: {
                        atk: 0,
                        move: 5,
                        hit: 0,
                        death: 8,
                        w: 46,
                        h: 90,
                        index: 1
                    },
                    2: {
                        atk: 0,
                        move: 6,
                        hit: 0,
                        death: 8,
                        w: 81,
                        h: 73,
                        index: 2
                    },
                    3: {
                        atk: 0,
                        move: 5,
                        hit: 0,
                        death: 8,
                        w: 70,
                        h: 80,
                        index: 3
                    },
                    4: {
                        atk: 0,
                        move: 5,
                        hit: 0,
                        death: 8,
                        w: 93,
                        h: 68,
                        index: 4
                    },
                    5: {
                        atk: 2,
                        move: 6,
                        hit: 0,
                        death: 8,
                        w: 233,
                        h: 225,
                        index: 5
                    }
                }
            }
            return Object.defineProperty(e, "instance", {
                get: function () {
                    return null === this._instance && (this._instance = new e), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), e._instance = null, e
        }();
        i.AniMgr = o, cc._RF.pop()
    }, {}],
    App: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "b8f7b84QmtA/5G5amyW6XPF", "App"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.App = void 0;
        var o = e("./Common/GameType"),
            a = e("./Data/GameData"),
            n = e("./Manager/Ani"),
            r = e("./Manager/Event"),
            s = e("./Manager/NativeManager"),
            l = e("./Manager/Pool"),
            p = e("./Manager/Resource"),
            c = e("./Manager/SkillMgr"),
            h = e("./Manager/StorageManager"),
            u = e("./Manager/UI"),
            d = e("./Manager/ironsource"),
            _ = e("./Other/MonsterHelper"),
            m = e("./Other/SkillHelper"),
            f = e("./Util/Util");
        i.App = {
            util: f.Util.instance,
            native: s.NativeMgr.instance,
            res: p.ResourceMgr.instance,
            ui: u.UIMgr.instance,
            pool: l.PoolMgr.instance,
            ani: n.AniMgr.instance,
            event: r.EventMgr.instance,
            skillMgr: c.SkillMgr.instance,
            skillHelper: m.SkillHelper.instance,
            monsterHelper: _.MonsterHelper.instance,
            storage: h.StorageMgr.instance,
            gameData: a.GameData,
            audio: null,
            ironsource: d.default,
            Initialization: function (e) {
                i.App.gameData.Language = o.Language.EN, i.App.native.Init(), i.App.res.LoadBundle("Loading").then(function () {
                    i.App.ui.LoadFirstUI(e)
                })
            }
        }, cc._RF.pop()
    }, {
        "./Common/GameType": "GameType",
        "./Data/GameData": "GameData",
        "./Manager/Ani": "Ani",
        "./Manager/Event": "Event",
        "./Manager/NativeManager": "NativeManager",
        "./Manager/Pool": "Pool",
        "./Manager/Resource": "Resource",
        "./Manager/SkillMgr": "SkillMgr",
        "./Manager/StorageManager": "StorageManager",
        "./Manager/UI": "UI",
        "./Manager/ironsource": "ironsource",
        "./Other/MonsterHelper": "MonsterHelper",
        "./Other/SkillHelper": "SkillHelper",
        "./Util/Util": "Util"
    }],
    AudioManager: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "bb3dbojSChOV5H/3nqgoS4N", "AudioManager");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.AudioManager = void 0;
        var r = e("../Data/GameData"),
            s = cc._decorator,
            l = s.ccclass,
            p = s.property,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bgm = null, t.click = null, t.emerged = null, t.skill_19 = null, t.skill_20 = null, t.skill_21 = null, t.hit = null, t._currentBgm = null, t._playState = !1, t
                }
                return a(t, e), t.prototype.Init = function () {
                    var e = cc.sys.localStorage.getItem("audio");
                    e ? r.GameData.audioSwitchList = JSON.parse(e) : cc.sys.localStorage.setItem("audio", JSON.stringify(r.GameData.audioSwitchList)), window.startAudio = this.playBgm, window.pauseAudio = this.stopBgm
                }, t.prototype.onAudioChange = function () {
                    r.GameData.audioSwitchList[1] ? this.playBgm() : this.stopBgm()
                }, t.prototype.playBgm = function () {
                    r.GameData.audioSwitchList[1] && "bgm" != this._currentBgm && (1 == r.GameData.audioSwitchList[1] && (this.stopBgm(), this.bgm.play()), this._currentBgm = "bgm", this._playState = !0)
                }, t.prototype.stopBgm = function () {
                    this._currentBgm = "", this.bgm.stop(), this._playState = !1
                }, t.prototype.playEffect = function (e) {
                    if (1 != r.GameData.audioSwitchList[0] && 1 == r.GameData.audioSwitchList[0] && this._playState) {
                        var t = this[e];
                        t && t.play()
                    }
                }, t.prototype.stopEffect = function (e) {
                    this[e].isPlaying && this[e].stop()
                }, t.prototype.onAudio = function () {
                    this.playBgm()
                }, n([p(cc.AudioSource)], t.prototype, "bgm", void 0), n([p(cc.AudioSource)], t.prototype, "click", void 0), n([p(cc.AudioSource)], t.prototype, "emerged", void 0), n([p(cc.AudioSource)], t.prototype, "skill_19", void 0), n([p(cc.AudioSource)], t.prototype, "skill_20", void 0), n([p(cc.AudioSource)], t.prototype, "skill_21", void 0), n([p(cc.AudioSource)], t.prototype, "hit", void 0), n([l], t)
            }(cc.Component);
        i.AudioManager = c, cc._RF.pop()
    }, {
        "../Data/GameData": "GameData"
    }],
    CfgMng: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e1220nYHPdLGJ+GnelCixZk", "CfgMng"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = ["CfgSkill", "CfgMonster", "CfgPlayer", "CfgLevel"],
            a = function () {
                function e() {
                    this._Cfgs = {}, this._Cfgs2 = {}
                }
                return e.prototype.initConfig = function (e) {
                    for (var t = 0; t < o.length; t++) {
                        var i = o[t];
                        if (this._Cfgs[i] = {}, e[i]) {
                            var a = e[i].keys;
                            if (a)
                                for (var n = 0, r = Object.keys(e[i]); n < r.length; n++) {
                                    var s = r[n];
                                    if ("keys" == s) break;
                                    if (e[i].hasOwnProperty(s)) {
                                        for (var l = e[i][s], p = {}, c = 0; c < a.length; c++) p[a[c]] = l[c];
                                        this._Cfgs[i][s] = p
                                    }
                                } else console.error("\u8fd9\u4e2a\u8868\u6ca1\u6709\u7c7b\u578b\u5b9a\u4e49\u62ff\u6570\u636e:", i)
                        } else console.error("\u6ca1\u6709\u8fd9\u4e2a\u8868:", i)
                    }
                }, e.prototype.initConfig2 = function (e) {
                    for (var t = 0; t < o.length; t++) {
                        var i = o[t];
                        if (this._Cfgs2[i] = {}, e[i]) {
                            var a = e[i].keys;
                            if (a)
                                for (var n = 0, r = Object.keys(e[i]); n < r.length; n++) {
                                    var s = r[n];
                                    if ("keys" == s) break;
                                    if (e[i].hasOwnProperty(s)) {
                                        for (var l = e[i][s], p = {}, c = 0; c < a.length; c++) p[a[c]] = l[c];
                                        this._Cfgs2[i][s] = p
                                    }
                                } else console.error("\u8fd9\u4e2a\u8868\u6ca1\u6709\u7c7b\u578b\u5b9a\u4e49\u62ff\u6570\u636e:", i)
                        } else console.error("\u6ca1\u6709\u8fd9\u4e2a\u8868:", i)
                    }
                }, e.prototype.getCfgSkill = function (e) {
                    return this._Cfgs.CfgSkill[e.toString()]
                }, e.prototype.getCfgMonster = function (e) {
                    return this._Cfgs.CfgMonster[e.toString()]
                }, e.prototype.getCfgPlayer = function (e) {
                    return this._Cfgs.CfgPlayer[e.toString()]
                }, e.prototype.getCfgLevel = function (e) {
                    return this._Cfgs.CfgLevel[e.toString()]
                }, e.prototype.getCfgSkillList = function () {
                    return this._Cfgs.CfgSkill
                }, e.prototype.getCfgMonsterList = function () {
                    return this._Cfgs.CfgMonster
                }, e.prototype.getCfgPlayerList = function () {
                    return this._Cfgs.CfgPlayer
                }, e.prototype.getCfgLevelList = function () {
                    return this._Cfgs.CfgLevel
                }, e.prototype.getCfgSkill2 = function (e) {
                    return this._Cfgs2.CfgSkill[e.toString()]
                }, e
            }();
        i.default = new a, cc._RF.pop()
    }, {}],
    ChooseSkill: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "70a04EPRRhB7Y9+gkm4ptUr", "ChooseSkill");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ChooseSkill = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("../Data/CfgMng"),
            p = e("./ViewBase"),
            c = cc._decorator.ccclass,
            h = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bgNode = null, t.contentNode = null, t.closeBtn = null, t._audioBtn = null, t.confirmBtn = null, t.labRange = null, t.labSpeed = null, t._skillList = [], t._LevelData = l.default.getCfgLevel(r.App.gameData.present), t._skillType = s.SkillType.Accord, t._gradeSkill = 1, t._countDown = 0, t._showTips = !0, t.idx = -1, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this.bgNode = this.node.Find("bg"), this.contentNode = this.node.Find("content"), this.closeBtn = this.node.Find("closeBtn"), this._audioBtn = this.node.Find("audioBtn"), this.confirmBtn = this.node.Find("ConfirmBtn"), this.Adaptive(), this.closeBtn.on("click", this._OnClickCloseBtn, this), this.confirmBtn.on("click", this._OnClickConfirmBtn, this), this._audioBtn.on("click", this._OnClickAudioBtn, this)
                }, t.prototype.Adaptive = function () {
                    var e = this.node.Find("block");
                    e.width = r.App.gameData.FrameSize.w, e.height = r.App.gameData.FrameSize.h
                }, t.prototype.OnShow = function (e) {
                    r.App.gameData.pauseGame = !0, r.App.event.emit(s.EGameEvent.ON_PAUSE_ALLACTION), r.App.gameData.chooseSkill = !1, this._gradeSkill = e.grade, this._skillType = e.type, this._LevelData = l.default.getCfgLevel(r.App.gameData.present), this._countDown = 10, this._showTips = !0, this.idx = -1, this.showSkillList(), this.showAudioBtn()
                }, t.prototype.update = function () {}, t.prototype.OnHide = function () {
                    r.App.gameData.startGame = !0, r.App.gameData.pauseGame = !1, r.App.event.emit(s.EGameEvent.ON_RESUME_ALLACTION), r.App.gameData.chooseSkill = !0, this._gradeSkill < r.App.gameData.playerGrade && this._skillList.length > 0 && r.App.ui.Show("chooseSkill", {
                        grade: this._gradeSkill + 1,
                        type: -1
                    })
                }, t.prototype.onGoEnding = function () {
                    r.App.gameData.stopOperateTime = 0, !IRONSOURCE && r.App.audio.stopBgm(), r.App.gameData.startGame = !1, r.App.gameData.pauseGame = !0, r.App.gameData.endGame = !0, r.App.ui.Show("Ending")
                }, t.prototype.onRefreshTips = function () {}, t.prototype.showSkillList = function () {
                    var e = this;
                    this.contentNode.children.forEach(function (e) {
                        return r.App.util.SetNodeState(e, !1)
                    }), this._skillList = r.App.util.getRandomSkill(3, this._skillType), this._skillList.length >= 0 ? r.App.ui.dialogShow(this.bgNode, function () {
                        for (var t = 0; t < e._skillList.length; ++t) {
                            var i = t + "",
                                o = e.contentNode.Find(i);
                            null == o && ((o = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skillDes), e.contentNode)).name = i, o.on("click", e.onClickSkill, e));
                            var a = e._skillList[t],
                                n = l.default.getCfgSkill(a),
                                p = r.App.gameData.gameSkillID.hasOwnProperty(a);
                            r.App.util.SetNodeState(o), r.App.ui.dialogShow(o), o.Find("icon", cc.Sprite).spriteFrame = r.App.res.GetImage("Game/" + n.resName);
                            var c = p ? r.App.gameData.gameSkillID[a].grade : e._LevelData.skillGrade;
                            o.Find("name", cc.Label).string = n.name + " LV." + (c + 1), o.Find("Desc1", cc.Label).string = n.des, o.children[0].opacity = 0
                        }
                    }) : r.App.ui.Hide("chooseSkill")
                }, t.prototype.onClickSkill = function (e) {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), this.idx = parseInt(e.target.name);
                    for (var t = 0; t < this.contentNode.childrenCount; t++) this.contentNode.children[t].children[0].opacity = 0;
                    e.node.children[0].opacity = 255
                }, t.prototype.onChooseSkill = function (e) {
                    var t = this._skillList[e],
                        i = l.default.getCfgSkill(t);
                    if (i.skillType == s.SkillType.Moment) r.App.skillHelper.onTriggerMomentSkill(t);
                    else {
                        var o = r.App.gameData.gameSkillID[t] || {
                            id: t,
                            grade: this._LevelData.skillGrade,
                            data: i,
                            red: !1
                        };
                        o.grade == this._LevelData.skillGrade && (r.App.gameData.skillHarm[o.id] = 0), o.grade >= r.App.gameData.skillMaxGrade ? o.red = !0 : o.grade += 1, r.App.gameData.gameSkillID[t] = o, r.App.skillHelper.onSkill(t)
                    }
                    r.App.ui.Hide("chooseSkill")
                }, t.prototype.showAudioBtn = function () {
                    var e = 1 == r.App.gameData.audioSwitchList[1];
                    this._audioBtn.getChildByName("off").active = e, this._audioBtn.getChildByName("on").active = !e
                }, t.prototype._OnClickAudioBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), 1 == r.App.gameData.audioSwitchList[0] ? (r.App.gameData.audioSwitchList[0] = 0, r.App.gameData.audioSwitchList[1] = 0) : (r.App.gameData.audioSwitchList[0] = 1, r.App.gameData.audioSwitchList[1] = 1), r.App.audio.onAudioChange(), this.showAudioBtn()
                }, t.prototype._OnClickConfirmBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), -1 != this.idx ? this.onChooseSkill(this.idx) : r.App.ui.ShowFloatTip("\u8bf7\u5148\u9009\u62e9\u4e00\u4e2a\u9053\u5177")
                }, t.prototype._OnClickCloseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.ui.Hide("chooseSkill")
                }, n([c], t)
            }(p.ViewBase);
        i.ChooseSkill = h, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "./ViewBase": "ViewBase"
    }],
    ColliderManager: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "1a6034FQ/VBnop1FU5arnzi", "ColliderManager"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ColliderMgr = void 0;
        var o = e("../App"),
            a = e("../Common/GameType"),
            n = e("../Data/GameData"),
            r = function () {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.onEnabledDebugDraw = function () {
                    var e = n.GameData.gameScene.node.Find("game"),
                        t = e.Find("_debug");
                    null == t && ((t = new cc.Node).parent = e, t.name = "_debug", t.setPosition(n.GameData.sceneSize.w / 2, n.GameData.sceneSize.h / 2)), t.children.forEach(function (e) {
                        return o.App.util.SetNodeState(e, !1)
                    });
                    for (var i = 0; i < n.GameData.monsterClass.length; ++i) {
                        var r = n.GameData.monsterClass[i],
                            s = "monster_debug_" + i;
                        null == (_ = t.Find(s)) && (_ = new cc.Node("mini_game/10225/image/common/pure.jpg")), o.App.util.SetNodeState(_), _.parent = t, _.name = s;
                        var l = r.node;
                        _.width = l.width, _.height = l.height, _.anchorX = .5, _.anchorY = .5, _.setPosition(l.x - n.GameData.playerPos.x, l.y - n.GameData.playerPos.y)
                    }
                    var p = o.App.util.getGameInfo(a.GameInfoType.AtkScope);
                    for (i = 0; i < n.GameData.skillClass.length; ++i)
                        for (var c = (r = n.GameData.skillClass[i]).node, h = 0; h < c.childrenCount; ++h) {
                            s = r.name + "_debug_" + h, null == (_ = t.Find(s)) && (_ = new cc.Node("mini_game/10225/image/common/pure.jpg")), o.App.util.SetNodeState(_), _.parent = t, _.name = s;
                            var u = c.children[h];
                            _.width = u.width + p, _.height = u.height + p, _.anchorX = .5, _.anchorY = .5, _.opacity = 125, _.setPosition(u.x + c.x, u.y + c.y)
                        }
                    for (i = 0; i < n.GameData.propClass.length; ++i) {
                        var d = n.GameData.propClass[i];
                        s = "prop_debug_" + i, null == (_ = t.Find(s)) && (_ = new cc.Node("mini_game/10225/image/common/pure.jpg")), o.App.util.SetNodeState(_), _.parent = t, _.name = s, c = d.node, _.width = c.width, _.height = c.height, _.anchorX = .5, _.anchorY = .5, _.opacity = 76.5, _.setPosition(c.x - n.GameData.playerPos.x, c.y - n.GameData.playerPos.y)
                    }
                    for (i = 0; i < n.GameData.propClass2.length; ++i) {
                        var _;
                        d = n.GameData.propClass2[i], s = "prop_debug2_" + i, null == (_ = t.Find(s)) && (_ = new cc.Node("mini_game/10225/image/common/pure.jpg")), o.App.util.SetNodeState(_), _.parent = t, _.name = s, c = d.node, _.width = c.width, _.height = c.height, _.anchorX = .5, _.anchorY = .5, _.opacity = 76.5, _.setPosition(c.x - n.GameData.playerPos.x, c.y - n.GameData.playerPos.y)
                    }
                }, e.prototype.onColliderManager = function () {
                    for (var e = 0; e < n.GameData.skillClass.length; ++e)
                        if ((f = n.GameData.skillClass[e]).name != a.PREFABS.skill_30 && f.name != a.PREFABS.skill_31)
                            for (var t = f.node, i = 0; i < t.childrenCount; ++i) {
                                var r = t.children[i],
                                    s = {
                                        x: r.x + t.x,
                                        y: r.y + t.y,
                                        w: r.width * r.scale,
                                        h: r.height * r.scale
                                    },
                                    l = (D = f.script).SkillData,
                                    p = l.data.harm[l.grade - 1],
                                    c = !1;
                                l.id == a.SkillList.Force && (c = !0);
                                var h = this.onCheckMonster(s, p, f, r.name, c);
                                if (h > 0) {
                                    console.log(t.name);
                                    var u = n.GameData.skillHarm[l.id] || 0;
                                    n.GameData.skillHarm[l.id] = u + h * p, D.SkillData.id != a.SkillList.Guard && D.SkillData.id != a.SkillList.Boomerang && D.SkillData.id != a.SkillList.BitPlay && D.SkillData.id != a.SkillList.Rocket && D.SkillData.id != a.SkillList.FootBall && D.SkillData.id != a.SkillList.With && D.SkillData.id != a.SkillList.Shotgun && D.SkillData.id != a.SkillList.Katana || o.App.audio.playEffect("hit")
                                }
                            }
                    for (e = 0; e < n.GameData.propClass.length; ++e) {
                        var d = n.GameData.propClass[e].node;
                        if (this.coliderDis(d.x, d.y, d.width, d.height, n.GameData.playerPos.x, n.GameData.playerPos.y, n.GameData.playerSize, n.GameData.playerSize)) {
                            var _ = n.GameData.propClass.splice(e, 1)[0];
                            o.App.skillHelper.onTriggerMomentSkill(_.index), o.App.pool.putNode(_.node);
                            break
                        }
                        var m = new cc.Vec2(d.x, d.y).clone().subtract(o.App.gameData.playerPos);
                        if (cc.Vec2.len(m) > o.App.gameData.outOfRange) {
                            _ = n.GameData.propClass.splice(e, 1)[0], o.App.pool.putNode(_.node);
                            break
                        }
                    }
                    for (e = 0; e < n.GameData.propClass2.length; ++e) {
                        if (d = n.GameData.propClass2[e].node, this.coliderDis(d.x, d.y, d.width, d.height, n.GameData.playerPos.x, n.GameData.playerPos.y, n.GameData.playerSize, n.GameData.playerSize)) {
                            _ = n.GameData.propClass2.splice(e, 1)[0], o.App.skillHelper.onTriggerMomentSkill(_.index), o.App.pool.putNode(_.node);
                            break
                        }
                        if (m = new cc.Vec2(d.x, d.y).clone().subtract(o.App.gameData.playerPos), cc.Vec2.len(m) > o.App.gameData.outOfRange) {
                            _ = n.GameData.propClass2.splice(e, 1)[0], o.App.pool.putNode(_.node);
                            break
                        }
                    }
                    for (e = 0; e < n.GameData.skillClass.length; ++e) {
                        var f;
                        if ((f = n.GameData.skillClass[e]).name == a.PREFABS.skill_30 || f.name == a.PREFABS.skill_31)
                            for (var g = 0, y = (d = f.node).children; g < y.length; g++) {
                                var k = y[g],
                                    A = .8 * n.GameData.playerSize,
                                    v = .8 * n.GameData.playerSize;
                                if (this.coliderDis(k.x, k.y, k.width, k.height, n.GameData.playerPos.x, n.GameData.playerPos.y, A, v)) {
                                    f.script.harm > 0 && o.App.event.emit(a.EGameEvent.ON_ATK_PLAYER, {
                                        harm: f.script.harm
                                    });
                                    var D = f.script,
                                        S = parseInt(k.name);
                                    D && D.onDestroyNode(S)
                                }
                            }
                    }
                }, e.prototype.block = function (e) {
                    for (var t = o.App.util.getGameInfo(a.GameInfoType.AtkScope), i = 0; i < n.GameData.skillClass.length; ++i) {
                        var r = n.GameData.skillClass[i];
                        if (r.name == a.PREFABS.skill_30 || r.name == a.PREFABS.skill_31)
                            for (var s = r.node, l = new cc.Vec2(e.x, e.y).clone().add(n.GameData.playerPos), p = 0, c = s.children; p < c.length; p++) {
                                var h = c[p];
                                if (this.coliderDis(h.x, h.y, h.width, h.height, l.x, l.y, e.w + t, e.h + t)) {
                                    r.script.harm = 0;
                                    var u = r.script,
                                        d = parseInt(h.name);
                                    u && u.onDestroyNode(d)
                                }
                            }
                    }
                }, e.prototype.onCheckMonster = function (e, t, i, r, s) {
                    for (var l = 0, p = o.App.util.getGameInfo(a.GameInfoType.AtkScope), c = 0; c < n.GameData.monsterClass.length; ++c) {
                        var h = n.GameData.monsterClass[c],
                            u = h.node,
                            d = new cc.Vec2(u.x, u.y).clone().subtract(n.GameData.playerPos);
                        if (s ? this.coliderDis2(e.x, e.y, e.w + p, e.h + p, d.x, d.y, u.width, u.height) : this.coliderDis(e.x, e.y, e.w + p, e.h + p, d.x, d.y, u.width, u.height)) {
                            var _ = !0;
                            if (i && i.name == a.PREFABS.skill_5) {
                                var m = parseInt(r);
                                0 == (_ = (f = i.script).getBoomState(m)) && f.onBoom(m)
                            }
                            if (_) {
                                var f, g = h.script.onBeAssaulted(t, 0);
                                if (g && l++, i)
                                    if (g && i.name == a.PREFABS.skill_7 && (m = parseInt(r), (f = i.script).onCollision(m)), g && i.name == a.PREFABS.skill_20 && (m = parseInt(r), (f = i.script) && f.onDestroyNode(m)), g && i.name == a.PREFABS.skill_23) m = parseInt(r), (f = i.script) && f.onDestroyNode(m)
                            }
                        }
                    }
                    return l
                }, e.prototype.coliderDis = function (e, t, i, o, a, n, r, s) {
                    var l = {
                            min_x: e - i / 2,
                            max_x: e + i / 2,
                            min_y: t - o / 2,
                            max_y: t + o / 2
                        },
                        p = {
                            min_x: a - r / 2,
                            max_x: a + r / 2,
                            min_y: n - s / 2,
                            max_y: n + s / 2
                        },
                        c = function (e, t) {
                            var i = {
                                    x: e.min_x,
                                    y: e.min_y
                                },
                                o = {
                                    x: e.min_x,
                                    y: e.max_y
                                },
                                a = {
                                    x: e.max_x,
                                    y: e.min_y
                                },
                                n = {
                                    x: e.max_x,
                                    y: e.max_y
                                },
                                r = function (e, t) {
                                    return e.x >= t.min_x && e.x <= t.max_x && e.y >= t.min_y && e.y <= t.max_y
                                };
                            return !!(r(i, t) || r(o, t) || r(a, t) || r(n, t))
                        };
                    return !(!c(l, p) && !c(p, l))
                }, e.prototype.coliderDis2 = function (e, t, i, o, a, n, r, s) {
                    var l = {
                            min_x: e - i / 2,
                            max_x: e + i / 2,
                            min_y: t - o / 2,
                            max_y: t + o / 2
                        },
                        p = {
                            min_x: a - r / 2,
                            max_x: a + r / 2,
                            min_y: n - s / 2,
                            max_y: n + s / 2
                        },
                        c = {
                            min_x: .6 * l.min_x,
                            max_x: .6 * l.max_x,
                            min_y: .6 * l.min_y,
                            max_y: .6 * l.max_y
                        },
                        h = function (e, t) {
                            var i = {
                                    x: e.min_x,
                                    y: e.min_y
                                },
                                o = {
                                    x: e.min_x,
                                    y: e.max_y
                                },
                                a = {
                                    x: e.max_x,
                                    y: e.min_y
                                },
                                n = {
                                    x: e.max_x,
                                    y: e.max_y
                                },
                                r = function (e, t) {
                                    return e.x >= t.min_x && e.x <= t.max_x && e.y >= t.min_y && e.y <= t.max_y
                                };
                            return !!(r(i, t) || r(o, t) || r(a, t) || r(n, t))
                        };
                    return !(!h(l, p) && !h(p, l) || h(p, c) || h(c, p))
                }, e._instance = null, e
            }();
        i.ColliderMgr = r, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/GameData": "GameData"
    }],
    Define: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d9625tl/IVKULAHk1ck+625", "Define"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    Ending: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "a2ffeQLcdJMea+XEfiry1V1", "Ending");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Ending = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./ViewBase"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._shareBtn = null, t._downloadBtn = null, t._closeBtn = null, t.rankNum = null, t._audioBtn = null, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this._audioBtn = this.node.Find("audioBtn"), this._shareBtn = this.node.Find("shareBtn"), this._downloadBtn = this.node.Find("downloadBtn"), this._closeBtn = this.node.Find("closeBtn"), this.rankNum = this.node.Find("rankNum", cc.Label), this._shareBtn.on("click", this.onClickShareBtn, this), this._downloadBtn.on("click", this.onClickDownBtn, this), this._audioBtn.on("click", this._OnClickAudioBtn, this), this._closeBtn.on("click", this.onClickCloseBtn, this)
                }, t.prototype.OnShow = function () {
                    r.App.gameData.startGame = !1, r.App.gameData.endGame = !0, r.App.ui.HideAll(), this.node.active = !0, this.rankNum.string = "1", this.showAudioBtn()
                }, t.prototype.getRankNum = function () {}, t.prototype.onClickDownBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.util.UA(s.UAType.DOWNLOAD), IRONSOURCE && r.App.ironsource.openStoreUrl(), FACEBOOK && FbPlayableAd.onCTAClick(), UNITY && window.mraid && window.mraid.open(cc.sys.os == cc.sys.OS_IOS ? "https://apps.apple.com/app/goddess-of-victory-nikke/id1585915174" : "https://play.google.com/store/apps/details?id=com.proximabeta.nikke")
                }, t.prototype.showAudioBtn = function () {
                    var e = 1 == r.App.gameData.audioSwitchList[1];
                    this._audioBtn.getChildByName("off").active = e, this._audioBtn.getChildByName("on").active = !e
                }, t.prototype._OnClickAudioBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.gameData.isAudio ? !IRONSOURCE && r.App.audio.stopBgm() : !IRONSOURCE && r.App.audio.playBgm(), r.App.audio.onAudioChange(), this.showAudioBtn()
                }, t.prototype.onClickShareBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.gameData.shareType = 1, r.App.ui.Show("Share"), r.App.ui.Hide("Ending")
                }, t.prototype.onClickCloseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.ui.Show("Select"), r.App.ui.Hide("Ending")
                }, t.prototype.onClickAgainBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.ui.Show("Select"), r.App.ui.Hide("Ending")
                }, n([p], t)
            }(l.ViewBase);
        i.Ending = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./ViewBase": "ViewBase"
    }],
    Event: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8ad9eK1kxFBp6ix6jwNDMVI", "Event"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.EventMgr = void 0;
        var o = e("../Common/GameType"),
            a = {},
            n = function () {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.on = function (e, t, i) {
                    null == a[e] && (a[e] = new Array), a[e].push({
                        f: t,
                        n: i
                    })
                }, e.prototype.emit = function (e, t) {
                    var i = a[e];
                    if (i)
                        for (var n = 0; n < i.length; ++n) {
                            var r = i[n];
                            r ? (e == o.EGameEvent.ON_GAME_Result || r.n.node.active) && r.f.call(r.n, t) : cc.error(e + " hasn't callback")
                        }
                }, e._instance = null, e
            }();
        i.EventMgr = n, cc._RF.pop()
    }, {
        "../Common/GameType": "GameType"
    }],
    FloatTip: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "abe2cv+AGhP64He7H/qq16G", "FloatTip");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.FloatTip = void 0;
        var r = e("../App"),
            s = e("./ViewBase"),
            l = cc._decorator.ccclass,
            p = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._bgNode = null, t._textTxt = null, t._initPos = cc.Vec2.ZERO.clone(), t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this._bgNode = this.node.Find("bg"), this._textTxt = this._bgNode.Find("text", cc.Label), this._initPos = cc.v2(this._bgNode.position)
                }, t.prototype.OnShow = function (e) {
                    this._bgNode.setPosition(this._initPos), this._textTxt.string = e.content, cc.Tween.stopAllByTarget(this._bgNode), cc.tween(this._bgNode).to(1.5, {
                        y: this._initPos.y + 200
                    }).call(function () {
                        r.App.ui.Hide("FloatTip")
                    }).start()
                }, n([l], t)
            }(s.ViewBase);
        i.FloatTip = p, cc._RF.pop()
    }, {
        "../App": "App",
        "./ViewBase": "ViewBase"
    }],
    GameApi: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "47646zMamlH1bAFPt+VQp6B", "GameApi"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.GameApi = void 0;
        var o = function () {
            function e() {}
            return e.sendMessageToParent = function (e, t) {
                window.parent.postMessage({
                    action: e,
                    params: t
                }, "*")
            }, e
        }();
        i.GameApi = o, cc._RF.pop()
    }, {}],
    GameConstant: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "2ecdbE9SkZKwaH8Vi+uIPPY", "GameConstant"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.GameConstant = void 0;
        var o = function () {
            function e() {}
            return e.pathFix = "", e
        }();
        i.GameConstant = o, cc._RF.pop()
    }, {}],
    GameData: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "a71ddUHWFlF9qzHQTCppRvZ", "GameData"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.GameData = void 0, i.GameData = {
            Language: "jp",
            FrameSize: {
                w: 0,
                h: 0
            },
            isLogin: !1,
            startLoading: !1,
            gameScene: null,
            sceneSize: {
                w: 0,
                h: 0
            },
            startGame: !1,
            pauseGame: !1,
            endGame: !1,
            skillMax: 6,
            skillDelayTime: 100,
            aniFrame: 7,
            playerPos: cc.Vec2.ZERO.clone(),
            playerGrade: 18,
            expNum: 0,
            coinNum: 0,
            playerDir: 1,
            gameTime: 0,
            showBoss: !1,
            pkSize: 1700,
            monsterNum: 0,
            killsNum: 0,
            killsBossNum: 0,
            bruiseTxtNum: 0,
            monsterCome: !1,
            createMonsterTime: 1,
            monsterTimeCome: 15,
            addMonsterSpeed: 2,
            level: 1,
            present: 1,
            canExitLv: 0,
            mapWidth: 2048,
            mapHeight: 2048,
            rockerMainPos: cc.Vec2.ZERO.clone(),
            playerID: 1,
            playerMoverDir: cc.Vec2.ZERO.clone(),
            gameSkillID: Array(),
            skillHarm: Array(),
            skillMaxGrade: 5,
            expDefScope: 70,
            expDrawScope: 0,
            recoverHp: 0,
            propList: Array(),
            addHpTime: 0,
            skillClass: Array(),
            monsterClass: Array(),
            bruiseTxtClass: Array(),
            propClass: Array(),
            propClass2: Array(),
            playerSize: 0,
            expTime: 10,
            chapterList: null,
            unlockList: null,
            hpCoefficient: 1,
            showBossTime: 0,
            gameEndTime: 0,
            wave: 0,
            bossWave: 0,
            audioSwitchList: [1, 1, 1],
            remoteAttackMonsterId: 3,
            currentSurvivalChapter: 0,
            guideId: 0,
            loginLimit: .99,
            whiteMaterials: null,
            preventHarmPct: 100,
            createMagnetTime: 0,
            chooseSkill: !0,
            outOfRange: 0,
            bossDie: !1,
            stopOperateTime: 0,
            upgradeMax: !1,
            OperateType: 0,
            shareType: 0,
            resurrection: !1,
            roleType: 1,
            revivalsNum: 0,
            isRoleDie: !1,
            isAudio: 1,
            roundRevivals: 0,
            recordTimeList: [],
            HpLimitUpNum: 0,
            creatHpProp: 600,
            goldRequired: 1,
            playerMoverDirLast: cc.Vec2.ZERO.clone(),
            isActivity: !1,
            addMonsterHpTime: 3,
            isLoginType: !1,
            isWx: !1,
            isQQ: !1,
            SelectType: 0
        }, cc._RF.pop()
    }, {}],
    GameType: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "fe0984PvMlEgJLAPWmVOAr1", "GameType"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.OperateType = i.UAType = i.Language = i.TaskDemand = i.TaskType = i.EquipType = i.ChapterName = i.WarningType = i.MonsterList = i.MonsterType = i.SkillList = i.SkillType = i.GameInfoType = i.MapQuadrant = i.PlayerState = i.PlayerEvent = i.AniName = i.LifeState = i.Vec3 = i.Vec2 = i.EAUDIOPATH = i.EGameEvent = i.SPRITE_FRAMES = i.PREFABS = void 0, i.PREFABS = {
                Map: "Other_Map",
                skill_1: "Skill_1",
                skill_1_0: "Skill_1_0",
                skill_2: "Skill_2",
                skill_2_0: "Skill_2_0",
                skill_3: "Skill_3",
                skill_3_0: "Skill_3_0",
                skill_4: "Skill_4",
                skill_4_0: "Skill_4_0",
                skill_5: "Skill_5",
                skill_5_0: "Skill_5_0",
                skill_6: "Skill_6",
                skill_6_0: "Skill_6_0",
                skill_7: "Skill_7",
                skill_7_0: "Skill_7_0",
                skill_19: "Skill_19",
                skill_19_0: "Skill_19_0",
                skill_20: "Skill_20",
                skill_20_0: "Skill_20_0",
                skill_21: "Skill_21",
                skill_21_0: "Skill_21_0",
                skill_23: "Skill_23",
                skill_23_0: "Skill_23_0",
                skill_30: "Skill_30",
                skill_30_0: "Skill_30_0",
                skill_31: "Skill_31",
                skill_31_0: "Skill_31_0",
                Monster: "Monster",
                bruiseTxt: "OtherBruiseTxt",
                skillDes: "Other_Skill_Des",
                coin: "Other_Coin",
                prop: "Other_Prop"
            }, i.SPRITE_FRAMES = {
                ending_0: "Ending/ending_0",
                ending_1: "Ending/ending_1",
                monster_1_move_1: "Monster/monster_1_move_1",
                monster_1_move_2: "Monster/monster_1_move_2",
                monster_1_move_3: "Monster/monster_1_move_3",
                monster_1_move_4: "Monster/monster_1_move_4",
                monster_1_move_5: "Monster/monster_1_move_5",
                monster_2_move_1: "Monster/monster_2_move_1",
                monster_2_move_2: "Monster/monster_2_move_2",
                monster_2_move_3: "Monster/monster_2_move_3",
                monster_2_move_4: "Monster/monster_2_move_4",
                monster_2_move_5: "Monster/monster_2_move_5",
                monster_2_move_6: "Monster/monster_2_move_6",
                monster_3_move_1: "Monster/monster_3_move_1",
                monster_3_move_2: "Monster/monster_3_move_2",
                monster_3_move_3: "Monster/monster_3_move_3",
                monster_3_move_4: "Monster/monster_3_move_4",
                monster_3_move_5: "Monster/monster_3_move_5",
                monster_4_move_1: "Monster/monster_4_move_1",
                monster_4_move_2: "Monster/monster_4_move_2",
                monster_4_move_3: "Monster/monster_4_move_3",
                monster_4_move_4: "Monster/monster_4_move_4",
                monster_4_move_5: "Monster/monster_4_move_5",
                monster_5_atk_1: "Monster/monster_5_atk_1",
                monster_5_atk_2: "Monster/monster_5_atk_2",
                monster_5_move_1: "Monster/monster_5_move_1",
                monster_5_move_2: "Monster/monster_5_move_2",
                monster_5_move_3: "Monster/monster_5_move_3",
                monster_5_move_4: "Monster/monster_5_move_4",
                monster_5_move_5: "Monster/monster_5_move_5",
                monster_5_move_6: "Monster/monster_5_move_6",
                player_1_atk_1: "Monster/player_1_atk_1",
                player_1_atk_2: "Monster/player_1_atk_2",
                player_1_atk_3: "Monster/player_1_atk_3",
                player_1_atk_4: "Monster/player_1_atk_4",
                player_1_atk_5: "Monster/player_1_atk_5",
                player_1_atk_6: "Monster/player_1_atk_6",
                player_1_death_1: "Monster/player_1_death_1",
                player_1_death_2: "Monster/player_1_death_2",
                player_1_death_3: "Monster/player_1_death_3",
                player_1_death_4: "Monster/player_1_death_4",
                player_1_death_5: "Monster/player_1_death_5",
                player_1_death_6: "Monster/player_1_death_6",
                player_1_idle_1: "Monster/player_1_idle_1",
                player_1_idle_2: "Monster/player_1_idle_2",
                player_1_idle_3: "Monster/player_1_idle_3",
                player_1_idle_4: "Monster/player_1_idle_4",
                player_1_idle_5: "Monster/player_1_idle_5",
                player_1_idle_6: "Monster/player_1_idle_6",
                player_1_move_1: "Monster/player_1_move_1",
                player_1_move_2: "Monster/player_1_move_2",
                player_1_move_3: "Monster/player_1_move_3",
                player_1_move_4: "Monster/player_1_move_4",
                player_1_move_5: "Monster/player_1_move_5",
                player_1_move_6: "Monster/player_1_move_6",
                player_1_win_1: "Monster/player_1_win_1",
                player_1_win_2: "Monster/player_1_win_2",
                player_1_win_3: "Monster/player_1_win_3",
                player_1_win_4: "Monster/player_1_win_4",
                player_1_win_5: "Monster/player_1_win_5",
                player_1_win_6: "Monster/player_1_win_6",
                skill_1_0: "Skill/skill_1_0",
                skill_1_1: "Skill/skill_1_1",
                skill_1_2: "Skill/skill_1_2",
                skill_1_3: "Skill/skill_1_3",
                skill_1_up_0: "Skill/skill_1_up_0",
                skill_1_up_1: "Skill/skill_1_up_1",
                skill_1_up_2: "Skill/skill_1_up_2",
                skill_1_up_3: "Skill/skill_1_up_3",
                skill_2: "Skill/skill_2",
                skill_3: "Skill/skill_3",
                skill_6_0: "Monster/skill_6_0",
                skill_6_1: "Monster/skill_6_1",
                skill_6_2: "Monster/skill_6_2",
                skill_6_3: "Monster/skill_6_3",
                skill_6_4: "Monster/skill_6_4",
                skill_6_5: "Monster/skill_6_5",
                skill_6_6: "Monster/skill_6_6",
                skill_6_7: "Monster/skill_6_7",
                skill_6_8: "Monster/skill_6_8",
                skill_20_0: "Monster/skill_20_0",
                skill_20_1: "Monster/skill_20_1",
                skill_21_eff_0: "Skill/skill_21_eff_0",
                skill_21_eff_1: "Skill/skill_21_eff_1",
                skill_21_eff_2: "Skill/skill_21_eff_2",
                skill_21_eff_3: "Skill/skill_21_eff_3",
                skill_21_eff_4: "Skill/skill_21_eff_4",
                skill_21_eff_5: "Skill/skill_21_eff_5",
                skill_21_eff_6: "Skill/skill_21_eff_6",
                skill_21_eff_7: "Skill/skill_21_eff_7",
                skill_21_eff_up_0: "Skill/skill_21_eff_up_0",
                skill_21_eff_up_1: "Skill/skill_21_eff_up_1",
                skill_21_eff_up_2: "Skill/skill_21_eff_up_2",
                skill_21_eff_up_3: "Skill/skill_21_eff_up_3",
                skill_21_eff_up_4: "Skill/skill_21_eff_up_4",
                skill_21_eff_up_5: "Skill/skill_21_eff_up_5",
                skill_21_eff_up_6: "Skill/skill_21_eff_up_6",
                skill_21_eff_up_7: "Skill/skill_21_eff_up_7",
                skill_5_eff_0: "Monster/eff_boom_0",
                skill_5_eff_1: "Monster/eff_boom_1",
                skill_5_eff_2: "Monster/eff_boom_2",
                skill_5_eff_3: "Monster/eff_boom_3",
                skill_5_red: "Monster/skill_5_red",
                prop_magnet: "Monster/prop_magnet",
                prop_hp: "Monster/prop_hp",
                img_hp: "Game/prop_hp",
                skill_guard: "Game/skill_guard",
                skill_rang: "Game/skill_rang",
                skill_bit: "Game/skill_bit",
                skill_position: "Game/skill_position",
                skill_katana: "Game/skill_katana",
                skill_sneakers: "Game/skill_sneakers",
                skill_shotgun: "Game/skill_shotgun",
                skill_rocket: "Game/skill_rocket",
                skill_maxHp: "Game/skill_maxHp",
                skill_magnet: "Game/skill_magnet",
                skill_rifle: "Game/skill_rifle",
                skill_monsterBt_1: "Monster/monster_bullet_1",
                skill_monsterBt_2: "Monster/monster_bullet_2",
                bg_1: "Bg/1",
                monster_die_0: "Monster/eff_die_0",
                monster_die_1: "Monster/eff_die_1",
                monster_die_2: "Monster/eff_die_2",
                monster_die_3: "Monster/eff_die_3",
                monster_die_4: "Monster/eff_die_4",
                monster_die_5: "Monster/eff_die_5",
                monster_die_6: "Monster/eff_die_6",
                monster_die_7: "Monster/eff_die_7",
                monster_born_0: "Monster/eff_born_0",
                monster_born_1: "Monster/eff_born_1",
                monster_born_2: "Monster/eff_born_2",
                monster_born_3: "Monster/eff_born_3",
                monster_born_4: "Monster/eff_born_4",
                monster_born_5: "Monster/eff_born_5",
                ending_2_en: "Common/ending_2_en",
                title_ruler: "Ruler/title_ruler",
                title_tips: "Ruler/title_tips"
            },
            function (e) {
                e.PLAYER_EVENT = "Monster/player_EVENT", e.ON_GAME_Result = "ON_GAME_Result", e.ON_GAME_OVER = "ON_GAME_OVER", e.ON_REFRESH_KILLSNUM = "ON_REFRESH_KILLSNUM", e.ON_CREATE_COIN = "ON_CREATE_COIN", e.ON_ATK_PLAYER = "ON_ATK_PLAYER", e.ON_REMOTE_ATK_PLAYER = "ON_REMOTE_ATK_PLAYER", e.ON_BOSS_REMOTE_ATK_PLAYER = "ON_BOSS_REMOTE_ATK_PLAYER", e.ON_REFRESH_BOSSBAR = "ON_REFRESH_BOSSBAR", e.ON_PLAYER_SPEED = "ON_PLAYER_SPEED", e.ON_CURE_PLAYER = "ON_CURE_PLAYER", e.ON_DRAW_ALLEXP = "ON_DRAW_ALLEXP", e.ON_REFRESH_SKIN = "ON_REFRESH_SKIN", e.ON_REFRESH_RESOURCE = "REFRESH_RESOURCE", e.ON_REFRESH_EQUIPS = "REFRESH_EQUIPS", e.ON_REFRESH_SHOP = "ON_REFRESH_SHOP", e.ON_REFRESH_PROPERTIES = "ON_REFRESH_PROPERTIES", e.ON_REFRESH_RED = "ON_REFRESH_RED", e.ON_REFRESH_PLAYER_CD = "ON_REFRESH_PLAYER_CD", e.ON_PAUSE_ALLACTION = "ON_PAUSE_ALLACTION", e.ON_RESUME_ALLACTION = "ON_RESUME_ALLACTION", e.ON_SHOW_PLAYERINFO = "ON_SHOW_PLAYERINFO", e.ON_HIDE_PLAYERINFO = "ON_HIDE_PLAYERINFO", e.PLAYER_DIE = "PLAYER_DIE", e.ON_RESUME_RESULT = "ON_RESUME_RESULT", e.ON_RESURRECTIONS = "ON_RESURRECTIONS", e.ON_PLAYER_UPLIMITHP = "ON_PLAYER_UPLIMITHP"
            }(i.EGameEvent || (i.EGameEvent = {})),
            function (e) {
                e.click = "click", e.bgm = "bgm", e.win = "win", e.fail = "fail", e.emerged = "emerged", e.exp = "exp", e.equipUp = "equipup", e.talentUp = "talentup", e.hit = "hit"
            }(i.EAUDIOPATH || (i.EAUDIOPATH = {})), i.Vec2 = {
                ONE: cc.Vec2.ONE,
                ZERO: cc.Vec2.ZERO
            }, i.Vec3 = {
                ONE: cc.Vec3.ONE,
                ZERO: cc.Vec3.ZERO
            },
            function (e) {
                e[e.Accrue = 0] = "Accrue", e[e.Die = 1] = "Die"
            }(i.LifeState || (i.LifeState = {})),
            function (e) {
                e.IDLE = "idle", e.RUN = "move", e.DEATH = "death", e.ATK = "atk", e.HIT = "hit", e.WIN = "win"
            }(i.AniName || (i.AniName = {})),
            function (e) {
                e[e.MOVE = 0] = "MOVE", e[e.IDLE = 1] = "IDLE"
            }(i.PlayerEvent || (i.PlayerEvent = {})),
            function (e) {
                e[e.IDLE = 0] = "IDLE", e[e.RUN = 1] = "RUN"
            }(i.PlayerState || (i.PlayerState = {})),
            function (e) {
                e[e.None = 0] = "None", e[e.One = 1] = "One", e[e.Two = 2] = "Two", e[e.Three = 3] = "Three", e[e.Four = 4] = "Four"
            }(i.MapQuadrant || (i.MapQuadrant = {})),
            function (e) {
                e[e.PlayerSpeed = 0] = "PlayerSpeed", e[e.AtkScope = 1] = "AtkScope", e[e.AddSpeed = 2] = "AddSpeed", e[e.Energy = 3] = "Energy", e[e.Absorb = 4] = "Absorb", e[e.RecoverHp = 5] = "RecoverHp", e[e.UpLimitHp = 6] = "UpLimitHp"
            }(i.GameInfoType || (i.GameInfoType = {})),
            function (e) {
                e[e.Accord = 0] = "Accord", e[e.Passive = 1] = "Passive", e[e.Moment = 2] = "Moment", e[e.General = 3] = "General"
            }(i.SkillType || (i.SkillType = {})),
            function (e) {
                e[e.None = 0] = "None", e[e.Guard = 1] = "Guard", e[e.Boomerang = 2] = "Boomerang", e[e.BitPlay = 3] = "BitPlay", e[e.Thunder = 4] = "Thunder", e[e.Rocket = 5] = "Rocket", e[e.Force = 6] = "Force", e[e.FootBall = 7] = "FootBall", e[e.Extend = 8] = "Extend", e[e.Absorb = 9] = "Absorb", e[e.Bullet = 10] = "Bullet", e[e.Energy = 11] = "Energy", e[e.Fuel = 12] = "Fuel", e[e.Drink = 13] = "Drink", e[e.Sneaker = 14] = "Sneaker", e[e.Hp = 15] = "Hp", e[e.Magnet = 16] = "Magnet", e[e.Bomb = 17] = "Bomb", e[e.Box = 18] = "Box", e[e.With = 19] = "With", e[e.Shotgun = 20] = "Shotgun", e[e.Katana = 21] = "Katana", e[e.UpLimitHp = 22] = "UpLimitHp", e[e.Rifle = 23] = "Rifle", e[e.Monster_Bullet = 30] = "Monster_Bullet", e[e.BOSS_Bullet = 31] = "BOSS_Bullet"
            }(i.SkillList || (i.SkillList = {})),
            function (e) {
                e[e.Common = 0] = "Common", e[e.Elite = 1] = "Elite", e[e.Boss = 2] = "Boss"
            }(i.MonsterType || (i.MonsterType = {})),
            function (e) {
                e[e.None = 0] = "None", e[e.Monster_1 = 1] = "Monster_1", e[e.Monster_2 = 2] = "Monster_2", e[e.Monster_3 = 3] = "Monster_3", e[e.Monster_4 = 4] = "Monster_4", e[e.Monster_5 = 5] = "Monster_5"
            }(i.MonsterList || (i.MonsterList = {})),
            function (e) {
                e[e.Boss = 0] = "Boss", e[e.Monster = 1] = "Monster"
            }(i.WarningType || (i.WarningType = {})),
            function (e) {
                e.grassland = "\u8349\u539f", e.desert = "\u6c99\u6f20", e.base = "\u5916\u661f\u57fa\u5730"
            }(i.ChapterName || (i.ChapterName = {})),
            function (e) {
                e[e.Weapon = 1] = "Weapon", e[e.Attack = 2] = "Attack", e[e.Hp = 3] = "Hp"
            }(i.EquipType || (i.EquipType = {})),
            function (e) {
                e[e.Task = 1] = "Task", e[e.Reward = 2] = "Reward"
            }(i.TaskType || (i.TaskType = {})), i.TaskDemand = [1, 1, 1, 1, 100, 1],
            function (e) {
                e.EN = "en", e.JP = "jp", e.KR = "kr", e.TW = "tw", e.CN = "cn"
            }(i.Language || (i.Language = {})),
            function (e) {
                e.DOWNLOAD = "download", e.TIMING = "timing"
            }(i.UAType || (i.UAType = {})),
            function (e) {
                e[e.None = 0] = "None", e[e.TOUCH = 1] = "TOUCH", e[e.KEYBOARD_KEY = 2] = "KEYBOARD_KEY", e[e.KEYBOARD_ARROW = 3] = "KEYBOARD_ARROW"
            }(i.OperateType || (i.OperateType = {})), cc._RF.pop()
    }, {}],
    GameUI: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8e915QFEElGnqmAjvxlKj2S", "GameUI");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.GameUI = void 0;
        var r = e("./App"),
            s = e("./Data/GameData"),
            l = cc._decorator,
            p = l.ccclass,
            c = (l.property, function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), t.prototype.StartGame = function (e) {
                    s.GameData.present = e, this.scheduleOnce(function () {
                        r.App.ui.Show("Game")
                    }, 0)
                }, n([p], t)
            }(cc.Component));
        i.GameUI = c, cc._RF.pop()
    }, {
        "./App": "App",
        "./Data/GameData": "GameData"
    }],
    Game: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "e50b1Ns00RLFJtV4bRb3Prk", "Game");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Game = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("../Data/CfgMng"),
            p = e("../GameApi"),
            c = e("../Manager/ColliderManager"),
            h = e("../Other/Keyboard"),
            u = e("../Other/Player"),
            d = e("../Other/Rocker"),
            _ = e("./ViewBase"),
            m = cc._decorator.ccclass,
            f = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.mapNode = null, t.uiNode = null, t.playerInfoNode = null, t.rockerNode = null, t.bottomSkillNode = null, t.propNode = null, t.coinNode = null, t.drawNode = null, t.playerNode = null, t.monsterNode = null, t.skillNode = null, t.MonsterTxtNode = null, t.pauseBtn = null, t.gameTime = null, t.gameMsTime = null, t.killsNum = null, t.coinNum = null, t.arrowsNode = null, t.expBar = null, t.bossHpNode = null, t.bossHpBar = null, t.warningNode = null, t.closeBtn = null, t._LevelData = l.default.getCfgLevel(r.App.gameData.present), t._PlayerData = l.default.getCfgPlayer(r.App.gameData.playerID), t._playerState = s.PlayerState.IDLE, t._playerDefaultPos = s.Vec2.ZERO.clone(), t.isMoving = !1, t._vectorPos = s.Vec2.ZERO.clone(), t._PlayerSpeed = 0, t._mapPos = s.Vec2.ZERO.clone(), t._mapQuadrant = s.MapQuadrant.None, t._playerMoveScope = {
                        top: 0,
                        down: 0,
                        left: 0,
                        right: 0
                    }, t._comeCount = 0, t._hpFps = 0, t._localTime = 0, t._showTips = !0, t._showResult = !0, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this.mapNode = this.node.Find("Map"), this.uiNode = this.node.Find("ui"), this.playerInfoNode = this.node.Find("playerInfo"), this.rockerNode = this.uiNode.Find("rocker"), this.bottomSkillNode = this.node.Find("bottomSkill"), this.propNode = this.node.Find("Prop"), this.coinNode = this.node.Find("Coin"), this.drawNode = this.node.Find("DrawExp"), this.playerNode = this.node.Find("player"), this.skillNode = this.node.Find("Skill"), this.monsterNode = this.node.Find("Monster"), this.MonsterTxtNode = this.node.Find("MonsterTxt"), this.pauseBtn = this.playerInfoNode.Find("pauseBtn"), this.gameTime = this.playerInfoNode.Find("timeTxt", cc.Label), this.gameMsTime = this.playerInfoNode.Find("timeTxt/ms", cc.Label), this.killsNum = this.playerInfoNode.Find("kills/num", cc.Label), this.coinNum = this.playerInfoNode.Find("coin/num", cc.Label), this.arrowsNode = this.uiNode.Find("arrows"), this.expBar = this.playerInfoNode.Find("ExpBar"), this.bossHpNode = this.uiNode.Find("bossHp"), this.bossHpBar = this.bossHpNode.Find("bar"), this.warningNode = this.node.Find("warning"), this.closeBtn = this.playerInfoNode.children[5], cc.sys.isMobile && window.addEventListener("orientationchange", this.onOrientationChange.bind(this)), this.Adaptive(), r.App.gameData.sceneSize = {
                        w: cc.winSize.width,
                        h: cc.winSize.height
                    }, this._rockerScript = this.rockerNode.addComponent(d.Rocker), this._keyboardScript = new h.Keyboard, this._playerScript = this.playerNode.addComponent(u.Player), this.pauseBtn.on("click", this.onPauseBtn, this), this.closeBtn.on("click", this.onCloseBtn, this)
                }, t.prototype.Adaptive = function () {
                    var e = r.App.gameData.FrameSize.w,
                        t = r.App.gameData.FrameSize.h;
                    this.rockerNode.width = e, this.rockerNode.height = t, r.App.gameData.rockerMainPos = new cc.Vec2(0, -348), this.playerInfoNode.y = t / 2 - this.playerInfoNode.height / 2 - ([cc.sys.OS_ANDROID, cc.sys.OS_IOS].includes(cc.sys.os) ? 10 : 80) - 70;
                    var i = this.warningNode.Find("block");
                    i.width = e, i.height = t;
                    var o = this.warningNode.Find("img");
                    o.width = e, o.children.forEach(function (t) {
                        return t.width = e
                    })
                }, t.prototype.register = function () {
                    r.App.event.on(s.EGameEvent.PLAYER_EVENT, this.onPlayerEvent, this), r.App.event.on(s.EGameEvent.ON_REFRESH_KILLSNUM, this.onRefreshKillsNum, this), r.App.event.on(s.EGameEvent.ON_CREATE_COIN, this.onCreateCoin, this), r.App.event.on(s.EGameEvent.ON_GAME_OVER, this.onGameOver, this), r.App.event.on(s.EGameEvent.ON_ATK_PLAYER, this.onAtkPlayer, this), r.App.event.on(s.EGameEvent.ON_REFRESH_BOSSBAR, this.onRefreshBossBar, this), r.App.event.on(s.EGameEvent.ON_PLAYER_SPEED, this.onPlayerSpeed, this), r.App.event.on(s.EGameEvent.ON_CURE_PLAYER, this.onCurePlayer, this), r.App.event.on(s.EGameEvent.ON_DRAW_ALLEXP, this.onDrawAllExp, this), r.App.event.on(s.EGameEvent.ON_REFRESH_PLAYER_CD, this.onRefreshPlayerCd, this), r.App.event.on(s.EGameEvent.ON_PAUSE_ALLACTION, this.onPauseAllAction, this), r.App.event.on(s.EGameEvent.ON_SHOW_PLAYERINFO, this.onShowPlayerInfo, this), r.App.event.on(s.EGameEvent.ON_HIDE_PLAYERINFO, this.onHidePlayerInfo, this), r.App.event.on(s.EGameEvent.ON_RESUME_ALLACTION, this.onResumeAllAction, this), r.App.event.on(s.EGameEvent.ON_RESUME_RESULT, this.onResumeReult, this), r.App.event.on(s.EGameEvent.ON_PLAYER_UPLIMITHP, this.onPlayerUpLimitHp, this)
                }, t.prototype.OnShow = function () {
                    this.onRecycling(), window.orientation, this._mapPos = s.Vec2.ZERO.clone(), this._LevelData = l.default.getCfgLevel(r.App.gameData.present), r.App.gameData.showBossTime = 60, this._PlayerData = l.default.getCfgPlayer(r.App.gameData.playerID), this.onInit()
                }, t.prototype.OnHide = function () {
                    this.onRecycling()
                }, t.prototype.onOrientationChange = function () {
                    var e = window.orientation;
                    90 === e || -90 === e ? (this.closeBtn.x = 385, this.closeBtn.y = -6) : (this.closeBtn.x = 327, this.closeBtn.y = 77)
                }, t.prototype.onShowPlayerInfo = function () {
                    this.playerInfoNode.active = !0
                }, t.prototype.onHidePlayerInfo = function () {
                    this.playerInfoNode.active = !1
                }, t.prototype.onRecycling = function () {
                    for (; r.App.gameData.monsterClass.length > 0;) {
                        var e = r.App.gameData.monsterClass.pop();
                        r.App.pool.putScriptClass(e)
                    }
                    for (; r.App.gameData.skillClass.length > 0;) {
                        var t = r.App.gameData.skillClass.pop();
                        r.App.pool.putScriptClass(t)
                    }
                    for (; r.App.gameData.bruiseTxtClass.length > 0;) {
                        var i = r.App.gameData.bruiseTxtClass.pop();
                        r.App.pool.putScriptClass(i)
                    }
                    for (; this.coinNode.childrenCount > 0;) {
                        var o = this.coinNode.children[0];
                        r.App.pool.putNode(o)
                    }
                    for (r.App.gameData.propClass = [], r.App.gameData.propClass2 = []; this.propNode.childrenCount > 0;) {
                        var a = this.propNode.children[0];
                        r.App.pool.putNode(a)
                    }
                    for (; this.drawNode.childrenCount > 0;) {
                        var n = this.drawNode.children[0];
                        n.stopAllActions(), r.App.pool.putNode(n)
                    }
                }, t.prototype.update = function (e) {
                    if (r.App.gameData.startGame && 0 == r.App.gameData.pauseGame && 0 == r.App.gameData.endGame) {
                        if (this._rockerScript.update(), this._keyboardScript.update(), r.App.gameData.gameTime += e, r.App.gameData.gameTime >= r.App.gameData.showBossTime && (r.App.audio.playEffect(s.EAUDIOPATH.emerged), r.App.gameData.showBoss = !1, r.App.gameData.showBossTime += 60, this.onShowWarning(), r.App.monsterHelper.createMonster(!0, this._LevelData.bossID)), this.onRereshGameTime(), this.CheckDrawCoin(), c.ColliderMgr.instance.onColliderManager(), r.App.monsterHelper.update(e), this._LevelData.comeForth.length > this._comeCount && r.App.gameData.gameTime >= this._LevelData.comeForth[this._comeCount] ? (this._comeCount += 1, r.App.audio.playEffect(s.EAUDIOPATH.emerged), this.onShowWarning(), r.App.gameData.monsterCome = !0, r.App.gameData.createMonsterTime = .1) : r.App.gameData.monsterCome && r.App.gameData.gameTime - this._LevelData.comeForth[Math.max(0, this._comeCount - 1)] >= r.App.gameData.monsterTimeCome && (r.App.gameData.monsterCome = !1, r.App.gameData.createMonsterTime = .3), this.isMoving) {
                            var t = new cc.Vec2(this._vectorPos.y, this._vectorPos.x),
                                i = -1 * this._PlayerSpeed,
                                o = new cc.Vec2(this.mapNode.x, this.mapNode.y).add(new cc.Vec2(t.y * i, t.x * i));
                            this.mapNode.setPosition(o.x, o.y), this.coinNode.setPosition(this.mapNode.x, this.mapNode.y), this.propNode.setPosition(this.mapNode.x, this.mapNode.y), this.monsterNode.setPosition(this.mapNode.x, this.mapNode.y), this.MonsterTxtNode.setPosition(this.mapNode.x, this.mapNode.y), this._playerScript && (this._playerScript.playerScaleX = this._vectorPos.x >= 0 ? -1 : 1), r.App.gameData.playerPos = this._playerDefaultPos.clone().subtract(new cc.Vec2(this.mapNode.x, this.mapNode.y));
                            var a = this.getMapCentre();
                            this._mapPos.x == a.x && this._mapPos.y == a.y || (this._mapPos = a, this.refreshMap());
                            var n = this._playerDefaultPos.clone().subtract(new cc.Vec2(this.mapNode.x, this.mapNode.y)),
                                l = r.App.util.countMapQuadrant(n, this._mapPos);
                            l != this._mapQuadrant && this.refreshMap(l)
                        }
                        var p = (new Date).getTime();
                        if (p - this._localTime >= 10) {
                            this._localTime = p;
                            for (var h = 0; h < r.App.gameData.skillClass.length; ++h) {
                                var u = r.App.gameData.skillClass[h].script;
                                u && u.customUpdate(e)
                            }
                        }
                        if (r.App.gameData.recoverHp > 0 && (this._hpFps += e, this._hpFps >= 1 && (this._hpFps = 0, this._playerScript))) {
                            var d = Math.trunc(this._playerScript.playerHP * r.App.gameData.recoverHp / 100);
                            this._playerScript.onCure(d)
                        }
                        r.App.gameData.addHpTime = Math.max(0, r.App.gameData.addHpTime - e)
                    }
                }, t.prototype.onPlayerSpeed = function () {
                    this._PlayerSpeed = r.App.util.getGameInfo(s.GameInfoType.PlayerSpeed) || 0
                }, t.prototype.onPlayerUpLimitHp = function (e) {
                    this._playerScript && (r.App.gameData.HpLimitUpNum = e.pct, this._playerScript.onUpDateHpLimit(e.pct))
                }, t.prototype.onCurePlayer = function (e) {
                    if (this._playerScript) {
                        var t = e.pct;
                        this._playerScript.onCurePercent(t)
                    }
                }, t.prototype.onInit = function () {
                    var e, t, i;
                    r.App.gameData.OperateType = s.OperateType.None, r.App.gameData.stopOperateTime = 0, r.App.gameData.upgradeMax = !1, this._showTips = !0, r.App.gameData.chooseSkill = !0, r.App.gameData.bossDie = !1, this._rockerScript.onInit(), this._keyboardScript.onInit(), r.App.gameData.startGame = !1, r.App.gameData.pauseGame = !1, r.App.gameData.endGame = !1, r.App.gameData.gameTime = 0, r.App.gameData.HpLimitUpNum = 0, r.App.gameData.creatHpProp = 600, this._comeCount = 0, r.App.gameData.killsNum = 0, r.App.gameData.killsBossNum = 0, r.App.gameData.monsterNum = 0, r.App.gameData.bruiseTxtNum = 0, r.App.gameData.gameSkillID = [], r.App.gameData.skillHarm = [], r.App.gameData.playerGrade = 1, r.App.gameData.goldRequired = 0, r.App.gameData.expNum = 0, this._playerScript && (this._playerScript.playerScaleX = 1), r.App.gameData.showBoss = !1, r.App.gameData.monsterCome = !1, r.App.gameData.expDrawScope = r.App.gameData.expDefScope, r.App.gameData.recoverHp = 0, r.App.gameData.wave = 0, r.App.gameData.coinNum = 0, r.App.gameData.recordTimeList = [], this._showResult = !1, this.onRefreshCoinNum(), this._hpFps = 0, r.App.gameData.createMonsterTime = .3, r.App.util.SetNodeState(this.warningNode, !1), this.playerNode.setPosition(this._playerDefaultPos.x, this._playerDefaultPos.y), this.onRefreshPlayerSize(), r.App.gameData.playerPos = s.Vec2.ZERO.clone(), this.uiNode.setPosition(this.playerNode.x, this.playerNode.y), this.mapNode.setPosition(this.playerNode.x, this.playerNode.y), this.coinNode.setPosition(this.playerNode.x, this.playerNode.y), this.propNode.setPosition(this.playerNode.x, this.playerNode.y), this.drawNode.setPosition(this.playerNode.x, this.playerNode.y), this.skillNode.setPosition(this.playerNode.x, this.playerNode.y), this.bottomSkillNode.setPosition(this.playerNode.x, this.playerNode.y), this.monsterNode.setPosition(this.playerNode.x, this.playerNode.y), this.MonsterTxtNode.setPosition(this.playerNode.x, this.playerNode.y), r.App.monsterHelper.onInit(), this._playerScript && this._playerScript.onInit(this._PlayerData), r.App.event.emit(s.EGameEvent.PLAYER_EVENT, {
                        event: s.PlayerEvent.IDLE
                    }), this.onRereshGameTime(), this.onRefreshExpBar(), r.App.event.emit(s.EGameEvent.ON_REFRESH_KILLSNUM), this.onPlayerSpeed(), this.refreshMap(), r.App.event.emit(s.EGameEvent.ON_REFRESH_BOSSBAR), r.App.gameData.propList = [];
                    for (var o = Object.keys(l.default.getCfgSkillList()), a = 0; a < o.length; ++a) {
                        var n = l.default.getCfgSkill(o[a]);
                        if (n.open && n.skillType == s.SkillType.Moment) {
                            var p = {
                                id: n.ID,
                                time: n.speed[0],
                                prob: n.property[0],
                                plan: 0
                            };
                            r.App.gameData.propList.push(p)
                        }
                    }
                    r.App.gameData.preventHarmPct = 100, e = s.SkillList.Rifle, t = l.default.getCfgSkill(e), i = r.App.gameData.gameSkillID[e] || {
                        id: e,
                        grade: e == s.SkillList.Rifle ? 0 : this._LevelData.skillGrade,
                        data: t,
                        red: !1
                    }, r.App.gameData.skillHarm[i.id] = 0, i.grade < r.App.gameData.skillMaxGrade && (i.grade += 1), r.App.gameData.gameSkillID[e] = i, r.App.skillHelper.onSkill(e), r.App.gameData.startGame = !0, r.App.gameData.pauseGame = !1, this.onRefreshPauseBtn()
                }, t.prototype.onPlayerEvent = function (e) {
                    switch (r.App.gameData.stopOperateTime = 0, this._showTips = !0, e.event) {
                        case s.PlayerEvent.IDLE:
                            r.App.util.SetNodeState(this.arrowsNode, !1), this.isMoving = !1, this._playerScript && this._playerScript.playAnimation(s.AniName.IDLE), this._playerState = s.PlayerState.IDLE, r.App.gameData.playerMoverDir = new cc.Vec2(this._playerScript && 1 == this._playerScript.playerScaleX ? -1 : 1, 0);
                            break;
                        case s.PlayerEvent.MOVE:
                            r.App.util.SetNodeState(this.arrowsNode), this.arrowsNode.angle = e.angle, this._playerState == s.PlayerState.IDLE && this._playerScript && this._playerScript.playAnimation(s.AniName.RUN), this._playerState = s.PlayerState.RUN, this.isMoving = !0, this._vectorPos = e.vector.clone(), r.App.gameData.playerMoverDir = e.vector.clone(), r.App.gameData.playerMoverDirLast = e.vector.clone()
                    }
                }, t.prototype.refreshMap = function (e) {
                    void 0 === e && (e = -1);
                    var t = this._playerDefaultPos.clone().subtract(new cc.Vec2(this.mapNode.x, this.mapNode.y)),
                        i = t.x >= this._mapPos.x ? this._mapPos.x + r.App.gameData.mapWidth : this._mapPos.x - r.App.gameData.mapWidth,
                        o = t.y >= this._mapPos.y ? this._mapPos.y + r.App.gameData.mapHeight : this._mapPos.y - r.App.gameData.mapHeight;
                    this._mapQuadrant = e >= 0 ? e : r.App.util.countMapQuadrant(t, this._mapPos);
                    for (var a = 0; a < 4; ++a) {
                        var n = a + "",
                            l = this.mapNode.Find(n);
                        null == l && ((l = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.Map), this.mapNode)).name = n);
                        var p = l.Find("bg");
                        switch (p.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Bg/1"), p.width = r.App.gameData.mapWidth, p.height = r.App.gameData.mapHeight, a) {
                            case 0:
                                l.setPosition(this._mapPos.x, this._mapPos.y);
                                break;
                            case 1:
                                l.setPosition(i, this._mapPos.y);
                                break;
                            case 2:
                                l.setPosition(this._mapPos.x, o);
                                break;
                            case 3:
                                l.setPosition(i, o)
                        }
                    }
                }, t.prototype.getMapCentre = function () {
                    var e = s.Vec2.ZERO.clone(),
                        t = r.App.gameData.mapWidth,
                        i = r.App.gameData.mapHeight,
                        o = new cc.Vec2(this.mapNode.x, this.mapNode.y).subtract(this._playerDefaultPos);
                    if (Math.abs(o.x) > t / 2) {
                        var a = Math.ceil((Math.abs(o.x) - t / 2) / t),
                            n = o.x >= 0 ? -1 : 1;
                        e.x = a * t * n
                    }
                    if (Math.abs(o.y) > i / 2) {
                        var l = Math.ceil((Math.abs(o.y) - i / 2) / i),
                            p = o.y >= 0 ? -1 : 1;
                        e.y = l * i * p
                    }
                    return e
                }, t.prototype.isLandscape = function () {
                    var e = cc.view.getFrameSize();
                    return e.width > e.height
                }, t.prototype.onPauseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.gameData.endGame || (r.App.gameData.pauseGame = !r.App.gameData.pauseGame, this.onRefreshPauseBtn())
                }, t.prototype.onCloseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.gameData.endGame = !0, r.App.ui.HideAll(), r.App.pool && r.App.pool.clearAll && r.App.pool.clearAll(), r.App.ui.Show("Select")
                }, t.prototype.onRefreshPauseBtn = function () {
                    this.pauseBtn.getChildByName("off").active = r.App.gameData.pauseGame, this.pauseBtn.getChildByName("on").active = !r.App.gameData.pauseGame
                }, t.prototype.onRereshGameTime = function () {
                    if (this.gameTime.string = r.App.util.secondsFormat(Math.trunc(r.App.gameData.gameTime), !1), this.gameMsTime.string = "" + ~~(100 * (r.App.gameData.gameTime - Math.trunc(r.App.gameData.gameTime))), r.App.gameData.isActivity) {
                        var e = Math.trunc(r.App.gameData.gameTime);
                        180 == e && -1 == r.App.gameData.recordTimeList.indexOf(180) ? (p.GameApi.sendMessageToParent("gameLottery", ["lottery", 180]), r.App.gameData.recordTimeList.push(180)) : 300 == e && -1 == r.App.gameData.recordTimeList.indexOf(300) ? (p.GameApi.sendMessageToParent("gameLottery", ["lottery", 300]), r.App.gameData.recordTimeList.push(300)) : 600 == e && -1 == r.App.gameData.recordTimeList.indexOf(600) && (p.GameApi.sendMessageToParent("gameLottery", ["lottery", 600]), r.App.gameData.recordTimeList.push(600))
                    }
                }, t.prototype.onRefreshKillsNum = function () {
                    this.killsNum.string = "" + r.App.gameData.killsNum
                }, t.prototype.onRefreshCoinNum = function () {
                    this.coinNum.string = "" + r.App.gameData.coinNum
                }, t.prototype.onRefreshExpBar = function () {
                    var e = 1,
                        t = r.App.gameData.playerGrade,
                        i = Math.pow(1.125, r.App.gameData.goldRequired),
                        o = Math.floor(30 * i);
                    r.App.gameData.expNum >= o ? (t += 1, r.App.gameData.expNum = 0, r.App.gameData.goldRequired += 1) : e = Math.max(.001, Math.min(1, r.App.gameData.expNum / o)), r.App.gameData.playerGrade != t && (r.App.gameData.playerGrade = t, this._playerScript && this._playerScript.onUpgrade(), 0 == r.App.ui.IsShow("chooseSkill") && r.App.gameData.chooseSkill && (r.App.gameData.chooseSkill = !1, r.App.ui.Show("chooseSkill", {
                        grade: r.App.gameData.playerGrade,
                        type: -1
                    })));
                    var a = 1 == r.App.gameData.playerGrade ? Math.max(.5, e) : r.App.gameData.upgradeMax ? 1 : e;
                    this.expBar.width = 537 * a
                }, t.prototype.onCreateCoin = function (e) {
                    var t = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.coin), this.coinNode);
                    t.stopAllActions(), t.showTime = r.App.gameData.expTime, t.setPosition(e.nodePos.x, e.nodePos.y)
                }, t.prototype.onGameOver = function () {
                    if (!this._showResult) {
                        this._showResult = !0, r.App.gameData.startGame = !1, r.App.gameData.pauseGame = !0, r.App.gameData.endGame = !0;
                        var e = Math.trunc(r.App.gameData.gameTime);
                        setTimeout(function () {
                            r.App.gameData.isActivity ? p.GameApi.sendMessageToParent("settlement", [r.App.gameData.killsNum, e]) : r.App.ui.Show("result", {
                                win: !0
                            })
                        }, 100)
                    }
                }, t.prototype.onDrawAllExp = function () {
                    this.CheckDrawCoin(!0)
                }, t.prototype.CheckDrawCoin = function (e) {
                    var t = this;
                    void 0 === e && (e = !1);
                    var i = function (e, i) {
                        var o = new cc.Vec2(i.x, i.y).clone().subtract(r.App.gameData.playerPos);
                        t.coinNode.removeChild(i), i.parent = t.drawNode, i.setPosition(o.x, o.y), i.stopAllActions();
                        var a = .7 * e;
                        cc.tween(i).to(a / 1e3, {
                            x: 0,
                            y: 0
                        }).call(function () {
                            r.App.gameData.expNum += 1, t.onRefreshExpBar(), r.App.gameData.coinNum += 1, r.App.pool.putNode(i), t.onRefreshCoinNum()
                        }).start()
                    };
                    if (e)
                        for (; this.coinNode.childrenCount > 0;) {
                            var o = this.coinNode.children[0],
                                a = new cc.Vec2(o.x, o.y).clone().subtract(r.App.gameData.playerPos);
                            i(s = cc.Vec2.len(a), o)
                        } else
                            for (var n = 0; n < this.coinNode.childrenCount; ++n)
                                if (o = this.coinNode.children[n]) {
                                    a = new cc.Vec2(o.x, o.y).clone().subtract(r.App.gameData.playerPos);
                                    var s = cc.Vec2.len(a);
                                    o.showTime -= 1 / 60, s <= r.App.gameData.expDrawScope ? i(s, o) : o.showTime < 0 && r.App.pool.putNode(o)
                                }
                }, t.prototype.onAtkPlayer = function (e) {
                    var t = e.harm || 0;
                    this._playerScript && this._playerScript.onBeAssaulted(t)
                }, t.prototype.onRefreshBossBar = function (e) {
                    if (r.App.util.SetNodeState(this.bossHpNode, !1), r.App.gameData.showBoss) {
                        var t = Math.max(.001, Math.min(1, e.now / e.count));
                        this.bossHpBar.width = 657 * t
                    }
                }, t.prototype.onShowWarning = function () {
                    var e = this;
                    r.App.util.SetNodeState(this.warningNode);
                    var t = this.warningNode.getChildByName("war"),
                        i = 0,
                        o = function () {
                            t.stopAllActions(), t.opacity = 255, cc.tween(t).to(.3, {
                                opacity: 50
                            }).to(.3, {
                                opacity: 255
                            }).call(function () {
                                3 > i++ ? o() : r.App.util.SetNodeState(e.warningNode, !1)
                            }).start()
                        };
                    o()
                }, t.prototype.onRefreshPlayerSize = function () {
                    var e = this._PlayerData.scale,
                        t = Math.floor(64 * e);
                    r.App.gameData.playerSize = t, this.playerNode.width = t, this.playerNode.height = t, this.playerNode.Find("hp").setPosition(0, t / 2 + 16)
                }, t.prototype.onRefreshPlayerCd = function (e) {
                    this._playerScript.playerCD = e.plan
                }, t.prototype.onGoEnding = function () {
                    r.App.gameData.stopOperateTime = 0, r.App.gameData.startGame = !1, r.App.gameData.pauseGame = !0, r.App.gameData.endGame = !0, r.App.ui.Show("Ending")
                }, t.prototype.onPauseAllAction = function () {
                    this.drawNode.children.forEach(function (e) {
                        return e.pauseAllActions()
                    })
                }, t.prototype.onResumeAllAction = function () {
                    this.drawNode.children.forEach(function (e) {
                        return e.resumeAllActions()
                    })
                }, t.prototype.onResumeReult = function () {
                    this._showResult = !1
                }, n([m], t)
            }(_.ViewBase);
        i.Game = f, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../GameApi": "GameApi",
        "../Manager/ColliderManager": "ColliderManager",
        "../Other/Keyboard": "Keyboard",
        "../Other/Player": "Player",
        "../Other/Rocker": "Rocker",
        "./ViewBase": "ViewBase"
    }],
    Keyboard: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "1a924UeiFRM+rdo+FAC/Zjl", "Keyboard");
        var o = this && this.__decorate || function (e, t, i, o) {
            var a, n = arguments.length,
                r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
            return n > 3 && r && Object.defineProperty(t, i, r), r
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Keyboard = void 0;
        var a = e("../App"),
            n = e("../Common/GameType"),
            r = cc._decorator.ccclass,
            s = function () {
                function e() {
                    this._moveDir = cc.Vec2.ZERO.clone(), this._moveSpeed = 1, this._keyMap = [cc.macro.KEY.w, cc.macro.KEY.s, cc.macro.KEY.a, cc.macro.KEY.d], this._dirMap = [cc.macro.KEY.up, cc.macro.KEY.down, cc.macro.KEY.left, cc.macro.KEY.right], this._keyList = [], cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown.bind(this), this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp.bind(this), this), this.onInit()
                }
                return e.prototype.update = function () {
                    if (this._keyList.length > 0) {
                        this._moveDir = cc.Vec2.ZERO.clone();
                        for (var e = 0, t = this._keyList; e < t.length; e++) switch (t[e]) {
                            case cc.macro.KEY.w:
                            case cc.macro.KEY.up:
                                this._moveDir.y += this._moveSpeed;
                                break;
                            case cc.macro.KEY.s:
                            case cc.macro.KEY.down:
                                this._moveDir.y -= this._moveSpeed;
                                break;
                            case cc.macro.KEY.a:
                            case cc.macro.KEY.left:
                                this._moveDir.x -= this._moveSpeed;
                                break;
                            case cc.macro.KEY.d:
                            case cc.macro.KEY.right:
                                this._moveDir.x += this._moveSpeed
                        }
                        var i = cc.Vec2.ZERO.clone();
                        cc.Vec2.normalize(i, this._moveDir.clone()), a.App.event.emit(n.EGameEvent.PLAYER_EVENT, {
                            event: n.PlayerEvent.MOVE,
                            angle: -Math.round(180 * Math.atan2(this._moveDir.x, this._moveDir.y) / Math.PI),
                            vector: i
                        })
                    }
                }, e.prototype.onInit = function () {
                    this._moveDir = cc.Vec2.ZERO.clone(), this._keyList = []
                }, e.prototype.onKeyDown = function (e) {
                    var t = e.keyCode;
                    a.App.gameData.pauseGame || a.App.gameData.endGame || a.App.gameData.OperateType == n.OperateType.TOUCH || a.App.gameData.OperateType == n.OperateType.KEYBOARD_KEY && !this._keyMap.includes(t) || a.App.gameData.OperateType == n.OperateType.KEYBOARD_ARROW && !this._dirMap.includes(t) || (this._keyMap.includes(t) || this._dirMap.includes(t)) && (a.App.gameData.OperateType = this._keyMap.includes(t) ? n.OperateType.KEYBOARD_KEY : n.OperateType.KEYBOARD_ARROW, 0 == this._keyList.includes(t) && this._keyList.push(t))
                }, e.prototype.onKeyUp = function (e) {
                    var t = e.keyCode;
                    this._keyList.includes(t) && this._keyList.splice(this._keyList.indexOf(t), 1), 0 == this._keyList.length && [n.OperateType.KEYBOARD_KEY, n.OperateType.KEYBOARD_ARROW].includes(a.App.gameData.OperateType) && (a.App.gameData.OperateType = n.OperateType.None, a.App.event.emit(n.EGameEvent.PLAYER_EVENT, {
                        event: n.PlayerEvent.IDLE
                    }))
                }, o([r], e)
            }();
        i.Keyboard = s, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType"
    }],
    Loading: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "01f0d3lcnVOKIztNcxS+o/4", "Loading");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            },
            r = this && this.__awaiter || function (e, t, i, o) {
                return new(i || (i = Promise))(function (a, n) {
                    function r(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function (e, t) {
                var i, o, a, n, r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
                    return this
                }), n;

                function s(e) {
                    return function (t) {
                        return l([e, t])
                    }
                }

                function l(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (i = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
                        switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return r.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < a[1]) {
                                    r.label = a[1], a = n;
                                    break
                                }
                                if (a && r.label < a[2]) {
                                    r.label = a[2], r.ops.push(n);
                                    break
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        n = t.call(e, r)
                    } catch (s) {
                        n = [6, s], o = 0
                    } finally {
                        i = a = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Loading = void 0;
        var l = e("../App"),
            p = e("../Data/GameData"),
            c = e("../Data/UserData"),
            h = e("../Manager/AudioManager"),
            u = cc._decorator.ccclass,
            d = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._progress = 0, t._barNode = null, t._progressNode = null, t._isLogin = !0, t._isLoad = !1, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "progress", {
                    set: function (e) {
                        this._progress = e, this._RefreshProgress()
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onLoad = function () {
                    this._progressNode = this.node.Find("Progress"), this._barNode = this._progressNode.Find("Bar"), this.progress = 0, l.App.util.SetNodeState(this._progressNode, !1);
                    var e = cc.winSize,
                        t = cc.view.getFrameSize(),
                        i = e.width / e.height > t.width / t.height;
                    l.App.gameData.FrameSize.w = i ? e.width : e.height / t.height * t.width, l.App.gameData.FrameSize.h = i ? e.width / t.width * t.height : e.height;
                    var o = 1024 * Math.ceil(Math.max(l.App.gameData.FrameSize.w, l.App.gameData.FrameSize.h) / 1024);
                    l.App.gameData.mapWidth = o, l.App.gameData.mapHeight = o, l.App.gameData.outOfRange = Math.max(l.App.gameData.FrameSize.w, l.App.gameData.FrameSize.h), this.Adaptive()
                }, t.prototype.Adaptive = function () {
                    var e = this.node.Find("block");
                    e.width = l.App.gameData.FrameSize.w, e.height = l.App.gameData.FrameSize.h
                }, t.prototype.Initialization = function () {
                    return r(this, void 0, Promise, function () {
                        var e = this;
                        return s(this, function (t) {
                            switch (t.label) {
                                case 0:
                                    return c.UserData.account = l.App.native.GetUserName(), c.UserData.lvState = l.App.native.GetUserLvState(), l.App.util.SetNodeState(this._progressNode), [4, l.App.res.LoadBundle("Select")];
                                case 1:
                                    return t.sent(), [4, l.App.res.LoadBundle("Prefabs")];
                                case 2:
                                    return t.sent(), [4, l.App.res.InitConfig()];
                                case 3:
                                    return t.sent(), [4, l.App.res.LoadMaterials()];
                                case 4:
                                    return t.sent(), [4, l.App.res.LoadBundle("Audios")];
                                case 5:
                                    return t.sent(), [4, l.App.res.LoadBundle("Images")];
                                case 6:
                                    return t.sent(), [4, l.App.res.LoadImages()];
                                case 7:
                                    return t.sent(), [4, l.App.res.LoadPrefabs()];
                                case 8:
                                    return t.sent(), p.GameData.loginLimit = .99, l.App.res.LoadAudioManager().then(function (t) {
                                        var i = cc.instantiate(t);
                                        i.parent = e.node.parent, l.App.audio = i.getComponent(h.AudioManager), p.GameData.loginLimit = 1
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.update = function (e) {
                    l.App.gameData.isLogin && (l.App.gameData.isLogin && !l.App.gameData.startLoading && (l.App.gameData.startLoading = !0, this.Initialization()), 1 != this._progress && (this.progress = Math.max(.06, Math.min(p.GameData.loginLimit, this._progress + .2 * e)), this._isLogin && 1 == p.GameData.loginLimit && (this._isLogin = !1, this._Login())), this._progress >= 1 && this._isLoad && (l.App.audio.Init(), l.App.audio.playBgm(), l.App.util.SetNodeState(this.node, !1)))
                }, t.prototype._Login = function () {
                    var e = this;
                    l.App.ui.Show("Select").then(function () {
                        e._isLoad = !0
                    })
                }, t.prototype._RefreshProgress = function () {
                    this._barNode.getComponent(cc.Sprite).fillRange = this._progress
                }, n([u], t)
            }(cc.Component);
        i.Loading = d, cc._RF.pop()
    }, {
        "../App": "App",
        "../Data/GameData": "GameData",
        "../Data/UserData": "UserData",
        "../Manager/AudioManager": "AudioManager"
    }],
    Main: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "80869vzGYFNn6iK/2ToylYq", "Main");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            },
            r = this && this.__awaiter || function (e, t, i, o) {
                return new(i || (i = Promise))(function (a, n) {
                    function r(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? a(e.value) : (t = e.value, t instanceof i ? t : new i(function (e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function (e, t) {
                var i, o, a, n, r = {
                    label: 0,
                    sent: function () {
                        if (1 & a[0]) throw a[1];
                        return a[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function () {
                    return this
                }), n;

                function s(e) {
                    return function (t) {
                        return l([e, t])
                    }
                }

                function l(n) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (i = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, n[1])).done) return a;
                        switch (o = 0, a && (n = [2 & n[0], a.value]), n[0]) {
                            case 0:
                            case 1:
                                a = n;
                                break;
                            case 4:
                                return r.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, o = n[1], n = [0];
                                continue;
                            case 7:
                                n = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!(a = (a = r.trys).length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                    r.label = n[1];
                                    break
                                }
                                if (6 === n[0] && r.label < a[1]) {
                                    r.label = a[1], a = n;
                                    break
                                }
                                if (a && r.label < a[2]) {
                                    r.label = a[2], r.ops.push(n);
                                    break
                                }
                                a[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        n = t.call(e, r)
                    } catch (s) {
                        n = [6, s], o = 0
                    } finally {
                        i = a = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Main = void 0;
        var l = e("./App"),
            p = e("./Common/GameType"),
            c = e("./Data/GameData"),
            h = e("./GameUI"),
            u = cc._decorator,
            d = u.ccclass,
            _ = (u.property, function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._gameUI = null, t.background = null, t.releaseInterval = 180, t.lastReleaseTime = 0, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    l.App.util.isWeChatBrowser(), l.App.ironsource.GameReady(), this._gameUI = this.node.getChildByName("GameUI").getComponent(h.GameUI), this.background = this.node.Find("background"), this._Initialization(), window.tryAgain = this.tryAgain.bind(this), window.resurrection = this.resurrections.bind(this), window.backStart = this.backStart.bind(this), window.addEventListener("message", function (e) {
                        var t = e.data;
                        if (t && "object" == typeof t && "inActivity" in t) {
                            var i = t.inActivity;
                            if (window.parent.postMessage({
                                    stopSend: !0
                                }, "*"), i) {
                                var o = t.isLogin;
                                l.App.gameData.isActivity = !0, l.App.gameData.isLoginType = !!o
                            } else l.App.gameData.isActivity = !1;
                            switch (t.action) {
                                case "resurrection":
                                    l.App.event.emit(p.EGameEvent.ON_RESURRECTIONS);
                                    break;
                                case "tryAgain":
                                    l.App.util.StartGame();
                                    break;
                                case "backStart":
                                    l.App.ui.Show("Select")
                            }
                        }
                        if (console.error("\u89e6\u53d1message\u4e8b\u4ef6"), t && "object" == typeof t && "channel" in t) {
                            var a = t.channel;
                            "qq" == a ? l.App.gameData.isQQ = !0 : "wx" == a && (l.App.gameData.isWx = !0)
                        }
                    });
                    var e = navigator.userAgent.toLowerCase(); - 1 !== e.indexOf("micromessenger") ? l.App.gameData.isWx = !0 : -1 === e.indexOf("mqqbrowser") && -1 === e.indexOf("qq") || (l.App.gameData.isQQ = !0), console.log("\u662f\u5426\u5904\u5728\u6d3b\u52a8\u65f6\u95f4\u5185", window.inActivity)
                }, t.prototype._Initialization = function () {
                    l.App.util.Log("initialization"), this._InitGameUI()
                }, t.prototype.isLandscape = function () {
                    var e = cc.view.getFrameSize();
                    return e.width > e.height
                }, t.prototype._OnLoadFirstUiComplete = function () {}, t.prototype._InitGameUI = function () {
                    return r(this, void 0, Promise, function () {
                        return s(this, function () {
                            return c.GameData.gameScene = this._gameUI, l.App.Initialization(this._OnLoadFirstUiComplete), [2]
                        })
                    })
                }, t.prototype.tryAgain = function () {
                    l.App.util.StartGame()
                }, t.prototype.resurrections = function () {
                    l.App.event.emit(p.EGameEvent.ON_RESURRECTIONS)
                }, t.prototype.backStart = function () {
                    l.App.ui.Show("Select")
                }, n([d], t)
            }(cc.Component));
        i.Main = _, cc._RF.pop()
    }, {
        "./App": "App",
        "./Common/GameType": "GameType",
        "./Data/GameData": "GameData",
        "./GameUI": "GameUI"
    }],
    MonsterHelper: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "39d0dqD809HopZ4cF/WHu+X", "MonsterHelper"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.MonsterHelper = void 0;
        var o = e("../App"),
            a = e("../Common/GameType"),
            n = e("../Data/CfgMng"),
            r = e("../Data/GameData"),
            s = function () {
                function e() {
                    this._updateTime = 0, this._levelData = null
                }
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.onInit = function () {
                    var e = this,
                        t = o.App.gameData.gameSkillID[30] || {
                            id: 30,
                            grade: 1,
                            data: {
                                ID: 30,
                                name: "\u5916\u661f\u4eba\u5b50\u5f39",
                                des: "\u666e\u901a\u5916\u661f\u4eba\u53d1\u51fa\u7684\u5b50\u5f39",
                                resName: "skill_monsterBt_1",
                                skillType: 3,
                                cd: [1],
                                harm: [1],
                                property: [1],
                                scale: [1],
                                speed: [3],
                                atkCount: [],
                                open: 1
                            },
                            red: !1
                        };
                    o.App.gameData.gameSkillID[30] = t, o.App.skillHelper.onSkill(30);
                    var i = o.App.gameData.gameSkillID[31] || {
                        id: 31,
                        grade: 1,
                        data: {
                            ID: 31,
                            name: "\u9996\u9886\u5916\u661f\u4eba\u5b50\u5f39",
                            des: "\u9996\u9886\u5916\u661f\u4eba\u53d1\u51fa\u7684\u5b50\u5f39",
                            resName: "skill_monsterBt_2",
                            skillType: 3,
                            cd: [1],
                            harm: [1],
                            property: [4],
                            scale: [1],
                            speed: [3],
                            atkCount: [],
                            open: 1
                        },
                        red: !1
                    };
                    o.App.gameData.gameSkillID[31] = i, o.App.skillHelper.onSkill(31), this._updateTime = 0, this._levelData = n.default.getCfgLevel(r.GameData.present);
                    for (var a = 0; a < 10; ++a) setTimeout(function () {
                        e.createMonster(!0)
                    }, 10 * a)
                }, e.prototype.update = function (e) {
                    if (r.GameData.startGame && !r.GameData.endGame && !r.GameData.pauseGame) {
                        this._updateTime += e;
                        var t = r.GameData.gameScene.node.Find("Game/Monster");
                        this._updateTime >= r.GameData.createMonsterTime && (t.childrenCount < this.getMonsterNum() || r.GameData.monsterCome) && (this._updateTime = 0, this.createMonster())
                    }
                }, e.prototype.createMonster = function (e, t) {
                    void 0 === e && (e = !1), void 0 === t && (t = a.MonsterList.None);
                    var i = r.GameData.gameScene.node.Find("Game/Monster"),
                        s = i ? i.childrenCount : 0;
                    if (!(r.GameData.pauseGame || r.GameData.endGame || !r.GameData.monsterCome && s >= this.getMonsterNum()) || e) {
                        var l = o.App.util.getShowMonsterID(),
                            p = t > a.MonsterList.None ? t : this.getMonsterID(l),
                            c = n.default.getCfgMonster(p),
                            h = o.App.pool.GetNode(o.App.res.GetPrefab(a.PREFABS.Monster), i),
                            u = o.App.pool.getScriptClass(a.PREFABS.Monster, a.PREFABS.Monster, h),
                            d = this.getPos();
                        u.node.setPosition(d), u.node.parent = i;
                        var _ = String(r.GameData.monsterNum++);
                        u.name = _, u.script.onCustomEnable(), r.GameData.monsterClass.push(u), u.script.onInit(c.ID, _)
                    }
                }, e.prototype.onClearAll = function () {
                    for (var e = 0; e < r.GameData.monsterClass.length; ++e) {
                        var t = r.GameData.monsterClass[e].script;
                        t.onBeAssaulted(t.monsterHP, 0, !0)
                    }
                }, e.prototype.getPos = function () {
                    var e = function (e) {
                            var t = 200 * Math.random();
                            return Number((e >= 0 ? e + t : e - t).toFixed(2))
                        },
                        t = 0,
                        i = 0;
                    return Math.random() >= .5 ? (t = Number((Math.abs(-300) - Math.random() * Math.abs(-300) * 2).toFixed(2)), i = Math.random() >= .5 ? e(500) : e(-500)) : (t = Math.random() >= .5 ? e(-300) : e(300), i = Number((Math.abs(500) - Math.random() * Math.abs(500) * 2).toFixed(2))), new cc.Vec2(t, i).add(r.GameData.playerPos)
                }, e.prototype.getMonsterID = function (e) {
                    var t = 0,
                        i = [],
                        o = 0;
                    e.forEach(function (e) {
                        var t = n.default.getCfgMonster(e).weight;
                        i.push(t), o += t
                    });
                    for (var a = Math.random() * o, r = 0; r < i.length; ++r)
                        if ((a -= i[r]) < 0) {
                            t = r;
                            break
                        } return e[t]
                }, e.prototype.getMonsterNum = function () {
                    for (var e = 0, t = 0, i = this._levelData.maxTime; t < i.length; t++) {
                        var o = i[t];
                        r.GameData.gameTime >= o && (e += 1)
                    }
                    return this._levelData.monsterMax[Math.min(e, this._levelData.monsterMax.length - 1)]
                }, e._instance = null, e
            }();
        i.MonsterHelper = s, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../Data/GameData": "GameData"
    }],
    Monster: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "5ae449Gqj9MpZgphlKokvHt", "Monster");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Monster = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("../Data/CfgMng"),
            p = e("../Data/GameData"),
            c = e("../GameApi"),
            h = cc._decorator.ccclass,
            u = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.imgNode = null, t.dieNode = null, t.bornNode = null, t._updateTime = 0, t._className = "", t._monsterID = 1, t._monsterState = s.LifeState.Accrue, t._monsterData = l.default.getCfgMonster(t._monsterID), t._levelData = l.default.getCfgLevel(p.GameData.present), t._vectorPos = cc.Vec2.ZERO.clone(), t._hp = 0, t.HpCount = 0, t._AtkHarm = 0, t._MoveSpeedInit = 0, t._MoveSpeed = 0, t._CD = 0, t._HitCD = 0, t._AtkCD = 0, t._AniName = s.AniName.RUN, t._frame = 0, t._hitData = {
                        harm: 0,
                        time: 0
                    }, t._difficulty = 1, t._AniBornFrameNum = 6, t._AniBornFrame = 0, t._BossUpFrame = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "monsterHP", {
                    get: function () {
                        return this.HpCount
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "MonsterData", {
                    get: function () {
                        return this._monsterData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.imgNode = this.node.Find("img"), this.dieNode = this.node.Find("die"), this.bornNode = this.node.Find("born"), this.spineData = this.dieNode.getComponent(sp.Skeleton), this.spineData.setCompleteListener(this.onComplete.bind(this)), this.spineData.setEventListener(this.onEventListener.bind(this))
                }, t.prototype.onComplete = function () {
                    this.dieNode.active = !1
                }, t.prototype.onEventListener = function () {
                    this.imgNode.active = !1;
                    for (var e = Math.trunc(r.App.util.secondsFormat2(p.GameData.gameTime)), t = Math.pow(1.1, e), i = Math.trunc(30 * t), o = [], a = Math.ceil(Math.sqrt(i + 2)), n = a, l = a, c = cc.v2(this.node.x - 30 * n / 2, this.node.y - 30 * l / 2), h = 0; h < n * l; ++h) o.push(cc.v2(c.x + h % n * 30, c.y + 30 * Math.floor(h / n)));
                    for (h = 0; h < i; ++h) {
                        var u = o.splice(Math.floor(Math.random() * o.length), 1)[0];
                        r.App.event.emit(s.EGameEvent.ON_CREATE_COIN, {
                            nodePos: u
                        })
                    }
                    r.App.skillHelper.createPropHp(s.SkillList.Hp, o.splice(Math.floor(Math.random() * o.length), 1)[0]), r.App.skillHelper.createPropHp(s.SkillList.Magnet, o.splice(Math.floor(Math.random() * o.length), 1)[0])
                }, t.prototype.onInit = function (e, t) {
                    this.node.active = !0, this._updateTime = 0, this.imgNode.active = !0, this.dieNode.active = !1, this._BossUpFrame = 0, this._AniBornFrame = 0, this._AniName = s.AniName.RUN, this._frame = 0, this._hitData = {
                        harm: 0,
                        time: 0
                    }, this._monsterID = e, this._className = t, this._monsterState = s.LifeState.Accrue, this._monsterData = l.default.getCfgMonster(this._monsterID), this._MoveSpeedInit = this._monsterData.speed, this._MoveSpeed = this._MoveSpeedInit, this._updateAngle(), this._levelData = l.default.getCfgLevel(p.GameData.present), this._difficulty = this._levelData.difficulty;
                    var i = Math.trunc(r.App.util.secondsFormat2(p.GameData.gameTime)),
                        o = 0,
                        a = 0;
                    if (i >= 8) {
                        var n = i - 7;
                        o = Math.pow(1.1, 7), a = Math.pow(1.15, n)
                    } else o = Math.pow(1.1, i), a = Math.pow(1.15, 0);
                    var c = Math.trunc(this._monsterData.hp * o),
                        h = Math.trunc(c * a);
                    this.HpCount = h, this._hp = this.HpCount, this._AtkHarm = Math.trunc(this._monsterData.harm), this._HitCD = 0, this._CD = this._monsterData.atkCd, this._AtkCD = 0, this.onRefreshAni(), this.onRefreshHpBar(), this.setMonsterSize()
                }, t.prototype.update = function (e) {
                    var t = this;
                    if (p.GameData.startGame && !p.GameData.endGame && !p.GameData.pauseGame && (this._updateTime += 1, this._updateTime >= 6 && (this._updateTime = 0, this.onRefreshAni()), this._monsterState == s.LifeState.Accrue && this._AniBornFrame >= this._AniBornFrameNum)) {
                        if (this._hitData.time > 0) {
                            var i = Math.max(0, Math.min(1, this._hitData.time - e));
                            this._hitData.time = i
                        }
                        this._HitCD -= e, this._AtkCD -= e, this._updateAngle();
                        var o = new cc.Vec2(this.node.x, this.node.y),
                            a = cc.Vec2.len(o.clone().subtract(p.GameData.playerPos));
                        if (a >= r.App.gameData.outOfRange && this._monsterData.type != s.MonsterType.Boss) return void this.onClear();
                        var n = Math.min(this.node.width / 2, this.node.height / 2),
                            l = Math.min(50, n);
                        if (this._AtkCD <= 0 && (this._AtkCD = this._CD, this._monsterData.type == s.MonsterType.Elite ? r.App.event.emit(s.EGameEvent.ON_REMOTE_ATK_PLAYER, {
                                harm: this._AtkHarm,
                                pos: o
                            }) : this._monsterData.type == s.MonsterType.Boss && (this._AniName = s.AniName.ATK, this.scheduleOnce(function () {
                                t._AniName == s.AniName.ATK && (t._AniName = s.AniName.RUN)
                            }, 1.5), r.App.event.emit(s.EGameEvent.ON_BOSS_REMOTE_ATK_PLAYER, {
                                harm: this._AtkHarm,
                                pos: o
                            }))), a >= l && this._AniName != s.AniName.ATK) {
                            var c = new cc.Vec2(1 - Math.abs(this._vectorPos.x), 1 - Math.abs(this._vectorPos.y));
                            c = new cc.Vec2(this._vectorPos.x, this._vectorPos.y), this.node.scaleX = c.x >= 0 ? 1 : -1;
                            var h = -1 * (p.GameData.monsterCome ? this._MoveSpeed + p.GameData.addMonsterSpeed : this._MoveSpeed),
                                u = o.clone().add(new cc.Vec2(c.x * h, c.y * h));
                            this.node.setPosition(u)
                        }
                        a < n && r.App.event.emit(s.EGameEvent.ON_ATK_PLAYER, {
                            harm: this._AtkHarm
                        })
                    }
                }, t.prototype.onEnd = function () {
                    this._monsterState == s.LifeState.Accrue && (this._monsterState = s.LifeState.Die, r.App.monsterHelper.createMonster())
                }, t.prototype._updateAngle = function () {
                    var e = new cc.Vec2(this.node.x, this.node.y).clone().subtract(p.GameData.playerPos);
                    cc.Vec2.normalize(this._vectorPos, e)
                }, t.prototype.onBeAssaulted = function (e, t, i) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === i && (i = !1), this._hp <= 0) return !1;
                    if (this._hitData.time > 0 && t != s.SkillList.Force && e != this.monsterHP) return !1;
                    var o = t == s.SkillList.Force;
                    if (o && this._HitCD > 0) return !1;
                    if (o && (this._HitCD = 1), !o && (this._hitData = {
                            harm: e,
                            time: .3
                        }), this._hp = Math.max(0, this._hp - e), e > 0 && !i && this.showBruiseTxt(e), !i && this.onRefreshHpBar(), this._hp <= 0) {
                        if (this._monsterState = s.LifeState.Die, p.GameData.killsNum += 1, p.GameData.killsBossNum += this._monsterData.type == s.MonsterType.Boss ? 1 : 0, r.App.event.emit(s.EGameEvent.ON_REFRESH_KILLSNUM), this._monsterData.type != s.MonsterType.Boss) {
                            for (var a = [], n = cc.v2(this.node.x - 42, this.node.y - 42), l = 0; l < 9; ++l) a.push(cc.v2(n.x + l % 3 * 28, n.y + 28 * Math.floor(l / 3)));
                            r.App.event.emit(s.EGameEvent.ON_CREATE_COIN, {
                                nodePos: a.splice(Math.floor(Math.random() * a.length), 1)[0]
                            });
                            var h = Math.floor((new Date).getTime() / 1e3);
                            0 == r.App.gameData.createMagnetTime && (r.App.gameData.createMagnetTime = h), h - r.App.gameData.createMagnetTime > 30 && (r.App.gameData.createMagnetTime = h, r.App.gameData.propClass.length < 2 && r.App.skillHelper.createProp(s.SkillList.Magnet, a.splice(Math.floor(Math.random() * a.length), 1)[0]));
                            var u = r.App.gameData.killsNum;
                            u > 0 && u - r.App.gameData.creatHpProp == 0 && (r.App.gameData.creatHpProp += 600, r.App.skillHelper.createPropHp(s.SkillList.Hp, a.splice(Math.floor(Math.random() * a.length), 1)[0]))
                        }
                        if (this._AniName = s.AniName.DEATH, this._monsterData.type != s.MonsterType.Boss ? (this.imgNode.width = 64, this.imgNode.height = 64) : (this.dieNode.active = !0, this.spineData.setAnimation(0, "animation", !1)), this._monsterData.type == s.MonsterType.Boss) {
                            var d = Math.trunc(r.App.gameData.gameTime);
                            r.App.gameData.isActivity && c.GameApi.sendMessageToParent("gameLottery", ["boss", d])
                        }
                    } else this._AniName != s.AniName.ATK && (this._AniName = s.AniName.HIT);
                    return this.showHitAction(), this._frame = 0, this.onRefreshAni(), !0
                }, t.prototype.showBruiseTxt = function (e) {
                    r.App.ui.showBruiseTxt(!1, e, new cc.Vec2(this.node.x, this.node.y))
                }, t.prototype.onClear = function () {
                    this._monsterData.type, s.MonsterType.Boss, this._monsterState = s.LifeState.Die;
                    var e = -1;
                    for (var t in p.GameData.monsterClass)
                        if (p.GameData.monsterClass[t].name == this._className) {
                            e = Number(t);
                            break
                        } if (e >= 0) {
                        var i = p.GameData.monsterClass.splice(e, 1)[0];
                        r.App.pool.putScriptClass(i)
                    } else r.App.pool.putNode(this.node);
                    r.App.monsterHelper.createMonster()
                }, t.prototype.setMonsterSize = function () {
                    var e = r.App.ani.monsterConfig[this._monsterID],
                        t = Math.trunc(e.w * this._monsterData.scale),
                        i = Math.trunc(e.h * this._monsterData.scale);
                    this.node.width = t, this.imgNode.width = t, this.node.height = i, this.imgNode.height = i, this.bornNode.height = i, this.bornNode.width = i / 2, this.onAlterMaterial()
                }, t.prototype.onRefreshAni = function () {
                    if (this._AniName != s.AniName.HIT && !this.dieNode.active) {
                        this._updateTime = 0;
                        var e = r.App.ani.monsterConfig[this._monsterID][this._AniName];
                        this._frame >= e && (this._frame = 0, this._AniName == s.AniName.DEATH && this.onClear()), this._AniName != s.AniName.DEATH ? this.imgNode.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/monster_" + this._monsterID + "_" + this._AniName + "_" + ++this._frame) : this._AniName == s.AniName.DEATH && (this.imgNode.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/eff_die_" + ++this._frame)), this.bornNode.active = this._AniBornFrame < this._AniBornFrameNum, this.bornNode.active && (this.bornNode.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/eff_born_" + this._AniBornFrame++))
                    }
                }, t.prototype.onRefreshHpBar = function () {
                    this._monsterData.type == s.MonsterType.Boss && r.App.event.emit(s.EGameEvent.ON_REFRESH_BOSSBAR, {
                        count: this.HpCount,
                        now: this._hp
                    })
                }, t.prototype.showHitAction = function () {
                    var e = this;
                    this._AniName == s.AniName.HIT && (this.onAlterMaterial(!1), this.scheduleOnce(function () {
                        e._AniName != s.AniName.ATK && e._monsterState == s.LifeState.Accrue && (e._AniName = s.AniName.RUN), e.onRefreshAni(), e.onAlterMaterial()
                    }, .1))
                }, t.prototype.onAlterMaterial = function (e) {
                    void 0 === e && (e = !0), r.App.util.onAlterMaterial(this.imgNode, e ? cc.Material.getBuiltinMaterial(cc.Material.BUILTIN_NAME.SPRITE.toString()) : r.App.res._whiteM)
                }, n([h], t)
            }(cc.Component);
        i.Monster = u, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../Data/GameData": "GameData",
        "../GameApi": "GameApi"
    }],
    NativeManager: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "140dbQb965NmK/d9NXxfMVN", "NativeManager");
        var o = this && this.__decorate || function (e, t, i, o) {
            var a, n = arguments.length,
                r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
            return n > 3 && r && Object.defineProperty(t, i, r), r
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.NativeMgr = void 0;
        var a = e("../Data/GameData"),
            n = cc._decorator.ccclass,
            r = function () {
                function e() {}
                var t;
                return t = e, Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new t), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function () {
                    window.quitGame = function () {
                        cc.sys.isNative && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "QuitGame", "()V"), cc.director.end(), cc.game.end()
                    }, window.OnLogin = function () {
                        a.GameData.isLogin = !0
                    }, window.OnGamePause = function () {
                        cc.director.pause()
                    }, window.OnGameResume = function () {
                        cc.director.resume()
                    }, cc.sys.isNative ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "InitGame", "()V") : window.OnLogin()
                }, e.prototype.GetUserName = function () {
                    return cc.sys.isNative ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "GetUserName", "(Ljava/lang/String;)Ljava/lang/String;", "") : "test_g9"
                }, e.prototype.GetUserLvState = function () {
                    return cc.sys.isNative ? ~~jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "GetUserLvState", "(Ljava/lang/String;)Ljava/lang/String;", "") : 1
                }, e.prototype.CheckCanPay = function (e) {
                    return !cc.sys.isNative || jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "CheckCanPay", "(Ljava/lang/String;)Z", "" + e)
                }, e._instance = null, t = o([n], e)
            }();
        i.NativeMgr = r, cc._RF.pop()
    }, {
        "../Data/GameData": "GameData"
    }],
    OtherBruiseTxt: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "153a9pUIwdJKYez8Bpm+INW", "OtherBruiseTxt");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.OtherBruiseTxt = void 0;
        var r = e("../App"),
            s = e("../Data/GameData"),
            l = cc._decorator.ccclass,
            p = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.textTxt = null, t._tween = null, t._className = "", t
                }
                return a(t, e), t.prototype.onCustomEnable = function () {
                    this.textTxt = this.node.Find("text", cc.Label)
                }, t.prototype.onInit = function (e, t, i, o) {
                    void 0 === o && (o = !1), this._className = e, this.node.setPosition(i), this.node.opacity = 255, this.textTxt.node.color = o ? cc.Color.GREEN : cc.Color.ORANGE, this.textTxt.string = o ? "+" + t : "-" + t, this.onPlayAction(i)
                }, t.prototype.onEnd = function () {
                    this.node.stopAllActions()
                }, t.prototype.onPlayAction = function (e) {
                    var t = this,
                        i = e.y + 30;
                    this.node.stopAllActions(), cc.tween(this.node).to(.4, {
                        y: i,
                        opacity: 0
                    }).call(function () {
                        t.onClear(), t._tween = null
                    }).start()
                }, t.prototype.onClear = function () {
                    var e = -1;
                    for (var t in s.GameData.bruiseTxtClass)
                        if (s.GameData.bruiseTxtClass[t].name == this._className) {
                            e = Number(t);
                            break
                        } if (e >= 0) {
                        var i = s.GameData.bruiseTxtClass.splice(e, 1)[0];
                        r.App.pool.putScriptClass(i)
                    } else r.App.pool.putNode(this.node)
                }, n([l], t)
            }(cc.Component);
        i.OtherBruiseTxt = p, cc._RF.pop()
    }, {
        "../App": "App",
        "../Data/GameData": "GameData"
    }],
    Player: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "80abcgtdUNKGoZUHiR3nsMU", "Player");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Player = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("../Data/CfgMng"),
            p = e("../Data/GameData"),
            c = cc._decorator.ccclass,
            h = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.HpNode = null, t.BarNode = null, t.CdNode = null, t._updateTime = 0, t._AniName = s.AniName.IDLE, t._frame = 0, t._playerData = l.default.getCfgPlayer(p.GameData.playerID), t._hp = 0, t.HpCount = 0, t._hitData = {
                        harm: 0,
                        time: 0
                    }, t.HpMax = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "playerScaleX", {
                    get: function () {
                        return this.node.scaleX
                    },
                    set: function (e) {
                        this.node.scaleX = e, this.HpNode.scaleX = e, p.GameData.playerDir = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "playerHP", {
                    get: function () {
                        return this.HpCount
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "playerMaxHP", {
                    get: function () {
                        return this.HpMax
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "residueHp", {
                    get: function () {
                        return this._hp
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "playerCD", {
                    set: function (e) {
                        this.CdNode.scaleX = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onLoad = function () {
                    this.HpNode = this.node.Find("hp"), this.BarNode = this.HpNode.Find("bar"), this.CdNode = this.HpNode.Find("cd"), this.CdNode.active = !1, r.App.event.on(s.EGameEvent.PLAYER_DIE, this.onPlayerDie, this), r.App.event.on(s.EGameEvent.ON_RESURRECTIONS, this.resurrections, this)
                }, t.prototype.update = function (e) {
                    if (!p.GameData.endGame && (this._updateTime += 1, this._updateTime >= p.GameData.aniFrame && (this._updateTime = 0, this.onRefreshAni()), this._hitData.time > 0)) {
                        var t = Math.max(0, Math.min(1, this._hitData.time - e));
                        this._hitData.time = t
                    }
                }, t.prototype.onInit = function (e) {
                    this.CdNode.scaleX = 0, this._playerData = e;
                    var t = l.default.getCfgLevel(p.GameData.present);
                    this.HpCount = Math.trunc(this._playerData.hp[p.GameData.playerGrade - 1] * t.playerHp / 100 * p.GameData.hpCoefficient), this._hp = this.HpCount, this._hitData = {
                        harm: 0,
                        time: 0
                    }, this.onRefreshHpBar()
                }, t.prototype.playAnimation = function (e) {
                    this._hp <= 0 || (this._updateTime = 0, this._AniName = e, this._frame = 0, this.onRefreshAni())
                }, t.prototype.onRefreshAni = function () {
                    var e = r.App.ani.playerConfig[p.GameData.playerID][this._AniName];
                    this._frame >= e && (this._frame = 0, this._AniName == s.AniName.HIT && (this._AniName = s.AniName.RUN)), this.node.getComponent(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/player_" + p.GameData.playerID + "_" + this._AniName + "_" + ++this._frame)
                }, t.prototype.onRefreshHpBar = function () {
                    var e = Math.max(0, Math.min(1, this._hp / this.HpCount));
                    this.HpNode.active = e > 0, this.BarNode.scaleX = e
                }, t.prototype.onUpgrade = function () {
                    var e = Math.max(0, Math.min(1, this._hp / this.HpCount)),
                        t = l.default.getCfgLevel(p.GameData.present),
                        i = this.HpCount;
                    this._playerData.hp[p.GameData.playerGrade - 1] && (i = Math.trunc(this._playerData.hp[p.GameData.playerGrade - 1] * t.playerHp / 100 * p.GameData.hpCoefficient)), this.HpCount = Math.trunc(i * p.GameData.HpLimitUpNum + i), this._hp = Math.trunc(this.HpCount * e), this.onRefreshHpBar()
                }, t.prototype.onUpDateHpLimit = function (e) {
                    var t = Math.max(0, Math.min(1, this._hp / this.HpCount)),
                        i = l.default.getCfgLevel(p.GameData.present),
                        o = this.HpCount;
                    this._playerData.hp[p.GameData.playerGrade - 1] && (o = Math.trunc(this._playerData.hp[p.GameData.playerGrade - 1] * i.playerHp / 100 * p.GameData.hpCoefficient)), this.HpCount = Math.trunc(o * e + o), this._hp = Math.trunc(this.HpCount * t), this.onRefreshHpBar()
                }, t.prototype.onCure = function (e) {
                    void 0 === e && (e = 1), this._hp = Math.min(this.HpCount, this._hp + e), this.onRefreshHpBar(), this.showBruiseTxt(e, !0)
                }, t.prototype.onCurePercent = function (e) {
                    void 0 === e && (e = 1);
                    var t = this.HpCount * e;
                    this._hp = Math.min(this.HpCount, this._hp + t), this.onRefreshHpBar(), this.showBruiseTxt(t, !0)
                }, t.prototype.onBeAssaulted = function (e) {
                    void 0 === e && (e = 0), p.GameData.endGame || p.GameData.isRoleDie || this._hp <= 0 || this._hitData.time > 0 || (e = Math.round(e * r.App.gameData.preventHarmPct / 100), this._hitData = {
                        harm: e,
                        time: .2
                    }, this._hp = Math.max(0, this._hp - e), this.onRefreshHpBar(), e > 0 && this.showBruiseTxt(e), this._hp <= 0 ? this.roleDie() : this.playAnimation(s.AniName.HIT))
                }, t.prototype.roleDie = function () {
                    p.GameData.endGame = !0, r.App.ui.Hide("chooseSkill"), r.App.event.emit(s.EGameEvent.ON_GAME_OVER, {
                        win: !1
                    })
                }, t.prototype.resurrections = function () {
                    var e = "cocos_resurrection",
                        t = Date.now(),
                        i = JSON.parse(localStorage.getItem(e) || "{}");
                    i.date && this.isSameDay(i.date, t) || (i = {
                        date: t,
                        count: 0
                    }), i.count >= 2 || (i.count += 1, i.date = t, localStorage.setItem(e, JSON.stringify(i)), r.App.gameData.startGame = !0, r.App.gameData.pauseGame = !1, p.GameData.endGame = !1, this._hp = this.HpCount, this.onRefreshHpBar(), r.App.event.emit(s.EGameEvent.ON_RESUME_RESULT))
                }, t.prototype.isSameDay = function (e, t) {
                    var i = new Date(e),
                        o = new Date(t);
                    return i.getFullYear() === o.getFullYear() && i.getMonth() === o.getMonth() && i.getDate() === o.getDate()
                }, t.prototype.onPlayerDie = function () {
                    var e = this;
                    p.GameData.endGame = !0, this._AniName = s.AniName.DEATH, this._frame = 0;
                    for (var t = r.App.ani.playerConfig[p.GameData.playerID][s.AniName.DEATH], i = 1, o = 0; o < t; ++o) this.scheduleOnce(function () {
                        e._AniName = s.AniName.DEATH, e.onRefreshAni(), ++i == t - 1 && r.App.event.emit(s.EGameEvent.ON_GAME_OVER, {
                            win: !1
                        })
                    }, 7 * o / 60)
                }, t.prototype.showBruiseTxt = function (e, t) {
                    void 0 === t && (t = !1), r.App.ui.showBruiseTxt(!0, e, cc.Vec2.ZERO, t)
                }, n([c], t)
            }(cc.Component);
        i.Player = h, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../Data/GameData": "GameData"
    }],
    Pool: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8c0cbAgddNH8Jw7tkbyX9Wa", "Pool"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.PoolMgr = void 0;
        var o = function () {
            function e() {
                this._dictPool = {}, this._scriptClass = []
            }
            return Object.defineProperty(e, "instance", {
                get: function () {
                    return null === this._instance && (this._instance = new e), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.GetNode = function (e, t) {
                var i = e.name,
                    o = null,
                    a = this._dictPool[i] || [];
                return (o = a.length > 0 ? a.pop() : cc.instantiate(e)).parent = t, 0 == i.indexOf("skill") ? (o.opacity = 0, setTimeout(function () {
                    o && (o.opacity = 255)
                }, 47)) : o.opacity = 255, o.active = !0, o
            }, e.prototype.putNode = function (e) {
                if (e) {
                    e.parent && e.parent.removeChild(e), !e.GetVisible() && e.SetVisible(!1), e.active && (e.active = !1);
                    var t = e.name;
                    this._dictPool.hasOwnProperty(t) || (this._dictPool[t] = []), this._dictPool[t].push(e)
                }
            }, e.prototype.clearPool = function (e) {
                this._dictPool.hasOwnProperty(e) && this._dictPool[e].clear()
            }, e.prototype.getScriptClass = function (e, t, i) {
                void 0 === t && (t = ""), t = "" == t ? e : t;
                var o = this._scriptClass[e] || [];
                return o.length > 0 ? o.pop() : {
                    name: e,
                    script: i.addComponent(t),
                    node: i
                }
            }, e.prototype.putScriptClass = function (e) {
                if (e.node) {
                    var t = e.node.name;
                    this._scriptClass[t] || (this._scriptClass[t] = []), e.script.onEnd && e.script.onEnd(), this.putNode(e.node), this._scriptClass[t].push(e)
                }
            }, e.prototype.clearAll = function () {
                for (var e in this._dictPool) {
                    var t = this._dictPool[e];
                    Array.isArray(t) && t.forEach(function (e) {
                        e.destroy && e.destroy()
                    })
                }
                for (var e in this._dictPool = {}, this._scriptClass) {
                    var i = this._scriptClass[e];
                    Array.isArray(i) && i.forEach(function (e) {
                        e.node && e.node.destroy && e.node.destroy(), e.script = null, e.node = null
                    })
                }
                this._scriptClass = {}
            }, e._instance = null, e
        }();
        i.PoolMgr = o, cc._RF.pop()
    }, {}],
    Resource: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "61da0ZXscJNTLXettoPIX2k", "Resource"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ResourceMgr = void 0;
        var o = e("../Common/GameType"),
            a = e("../Data/CfgMng"),
            n = function () {
                function e() {
                    this._bundleMap = new Map, this._prefabs = new Array, this._images = new Array, this._whiteM = null
                }
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.InitConfig = function () {
                    return new Promise(function (e, t) {
                        cc.resources.load("Data/Json/CfgJson", cc.JsonAsset, function (i, o) {
                            i ? t(i) : (a.default.initConfig(o.json), e())
                        })
                    })
                }, e.prototype.InitConfig2 = function () {
                    return new Promise(function (e, t) {
                        cc.resources.load("Data/Json/CfgJson_new", cc.JsonAsset, function (i, o) {
                            i ? t(i) : (a.default.initConfig2(o.json), e())
                        })
                    })
                }, e.prototype.LoadMaterials = function () {
                    var e = this;
                    return new Promise(function (t, i) {
                        cc.resources.load("materials/white", cc.Material, function (o, a) {
                            o ? i(o) : (e._whiteM = a, t())
                        })
                    })
                }, e.prototype.LoadBundle = function (e) {
                    var t = this;
                    return new Promise(function (i, o) {
                        cc.assetManager.loadBundle(e, function (a, n) {
                            a ? o("load bundle " + e + " failed, err => " + a) : (t._bundleMap.set(e, n), i())
                        })
                    })
                }, e.prototype.LoadPrefabs = function () {
                    var e = this;
                    return new Promise(function (t, i) {
                        e._prefabs = new Array;
                        var a = [];
                        for (var n in o.PREFABS) a.push(o.PREFABS[n]);
                        var r = [];
                        if (a.length > 0) {
                            for (var s in a) r.push("Other/" + a[s]);
                            e._bundleMap.get("Prefabs").load(r, cc.Prefab, function (o, n) {
                                o && i(o);
                                for (var s = 0; s < r.length; ++s) e._prefabs[a[s]] = n[s];
                                t()
                            })
                        } else t()
                    })
                }, e.prototype.LoadImages = function () {
                    var e = this;
                    return new Promise(function (t, i) {
                        var a = [];
                        for (var n in o.SPRITE_FRAMES) a.push(o.SPRITE_FRAMES[n]);
                        var r = [];
                        if (a.length > 0) {
                            for (var s in a) r.push("" + a[s]);
                            console.log(r), e._bundleMap.get("Images").load(r, cc.SpriteFrame, function (o, n) {
                                o && i(o);
                                for (var s = 0; s < r.length; ++s) e._images[a[s]] = n[s];
                                t()
                            })
                        } else t()
                    })
                }, e.prototype.ReleaseBundle = function (e) {
                    var t = this._bundleMap.get(e);
                    t.releaseAll(), cc.assetManager.removeBundle(t)
                }, e.prototype.LoadFirstUI = function () {
                    var e = this;
                    return new Promise(function (t, i) {
                        e._bundleMap.get("Loading").load("Prefab/Loading", cc.Prefab, function (e, o) {
                            e ? i(e) : t(o)
                        })
                    })
                }, e.prototype.LoadUI = function (e) {
                    var t = this;
                    return "Select" == e ? new Promise(function (e, i) {
                        t._bundleMap.get("Select") && t._bundleMap.get("Select").load("Prefab/Select", cc.Prefab, function (t, o) {
                            t ? i(t) : e(o)
                        })
                    }) : new Promise(function (i, o) {
                        t._bundleMap.get("Prefabs") && t._bundleMap.get("Prefabs").load("Views/" + e, cc.Prefab, function (e, t) {
                            e ? o(e) : i(t)
                        })
                    })
                }, e.prototype.GetPrefab = function (e) {
                    return this._prefabs[e]
                }, e.prototype.GetImage = function (e) {
                    return this._images[e]
                }, e.prototype.LoadAudioManager = function () {
                    var e = this;
                    return new Promise(function (t, i) {
                        e._bundleMap.get("Audios") && e._bundleMap.get("Audios").load("AudioManager", cc.Prefab, function (e, o) {
                            e ? i(e) : t(o)
                        })
                    })
                }, e._instance = null, e
            }();
        i.ResourceMgr = n, cc._RF.pop()
    }, {
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng"
    }],
    Result: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c52b2nq3alLQbIRFs2NMKhW", "Result");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Result = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./ViewBase"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.win = null, t.fail = null, t._fingerNode = null, t.rankNum = null, t._audioBtn = null, t.closeBtn = null, t.restartBtn = null, t._rulerBtn = null, t._isWin = !1, t.survivalTime = null, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this.win = this.node.Find("win"), this.fail = this.node.Find("fail"), this._fingerNode = this.node.Find("finger"), this.rankNum = this.node.Find("rankNum", cc.Label), this.survivalTime = this.node.Find("time", cc.Label), this._rulerBtn = this.node.Find("rulerBtn"), this._audioBtn = this.node.Find("audioBtn"), this.closeBtn = this.node.Find("closeBtn"), this.restartBtn = this.node.Find("restartBtn"), this.QQImage = this.node.Find("QQImage"), this.WXImage = this.node.Find("WXImage"), this._audioBtn.on("click", this._OnClickAudioBtn, this), this.closeBtn.on("click", this._OnClickCloseBtn, this), this.restartBtn.on("click", this._OnClickRestartBtn, this), this._rulerBtn.on("click", this._OnclickRulerBtn, this), this.Adaptive()
                }, t.prototype.Adaptive = function () {
                    var e = this.node.Find("block");
                    e.width = r.App.gameData.FrameSize.w, e.height = r.App.gameData.FrameSize.h
                }, t.prototype.OnShow = function (e) {
                    r.App.util.isWeChatBrowser(), r.App.gameData.pauseGame = !0, r.App.event.emit(s.EGameEvent.ON_PAUSE_ALLACTION), this._isWin = e.win, this.rankNum.string = "" + r.App.gameData.killsNum, this.win.active = this._isWin, this.fail.active = !this._isWin, this.survivalTime.string = r.App.util.secondsFormat(Math.trunc(r.App.gameData.gameTime), !1), this.updateLabel(this._isWin), r.App.event.emit(s.EGameEvent.ON_HIDE_PLAYERINFO), this.showAudioBtn(), r.App.gameData.isQQ ? (this.QQImage.active = !0, this.WXImage.active = !1) : r.App.gameData.isWx && (this.QQImage.active = !1, this.WXImage.active = !0)
                }, t.prototype.OnHide = function () {}, t.prototype.updateLabel = function (e) {
                    e ? (this.rankNum.node.color = cc.color(250, 241, 55, 255), this.survivalTime.node.color = cc.color(250, 241, 55, 255)) : (this.rankNum.node.color = cc.color(148, 221, 252, 255), this.survivalTime.node.color = cc.color(68, 213, 255, 255))
                }, t.prototype.getRankNum = function () {}, t.prototype.showAudioBtn = function () {
                    var e = 1 == r.App.gameData.audioSwitchList[1];
                    this._audioBtn.getChildByName("off").active = e, this._audioBtn.getChildByName("on").active = !e
                }, t.prototype._OnClickAudioBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), 1 == r.App.gameData.audioSwitchList[0] ? (r.App.gameData.audioSwitchList[0] = 0, r.App.gameData.audioSwitchList[1] = 0) : (r.App.gameData.audioSwitchList[0] = 1, r.App.gameData.audioSwitchList[1] = 1), r.App.audio.onAudioChange(), this.showAudioBtn()
                }, t.prototype.onClickDownBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.util.UA(s.UAType.DOWNLOAD, "1")
                }, t.prototype._OnclickRulerBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click)
                }, t.prototype._OnClickRestartBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.event.emit(s.EGameEvent.ON_SHOW_PLAYERINFO), r.App.ui.Hide("Result"), r.App.util.StartGame(), r.App.util.UA(s.UAType.TIMING, "email")
                }, t.prototype._OnClickCloseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.event.emit(s.EGameEvent.ON_SHOW_PLAYERINFO), r.App.ui.Show("Select"), r.App.ui.Hide("Result")
                }, t.prototype.onGoShare = function () {
                    r.App.ui.Hide("Result")
                }, n([p], t)
            }(l.ViewBase);
        i.Result = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./ViewBase": "ViewBase"
    }],
    Rocker: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8e0d3OreMlKspb+CfFR0Dhy", "Rocker");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Rocker = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = cc._decorator.ccclass,
            p = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.mainNode = null, t.poleNode = null, t._angle = 0, t._vector = cc.Vec2.ZERO.clone(), t._node = null, t._rockerPos = cc.Vec2.ZERO.clone(), t._polePos = cc.v2(0, 0), t._touchStartLocation = cc.Vec2.ZERO.clone(), t._touchMoveLocation = cc.Vec2.ZERO.clone(), t.isMoving = !1, t._checkInterval = 40, t._startMouse = !1, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this.mainNode = this.node.Find("main"), this.mainNode.active = !1, this.poleNode = this.mainNode.Find("pole"), this._rockerPos = r.App.gameData.rockerMainPos, this.onInit(), this.node.on(cc.Node.EventType.TOUCH_START, this.MouseStartEvent, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.MouseMoveEvent, this), this.node.on(cc.Node.EventType.TOUCH_END, this.MouseOutEvent, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.MouseOutEvent, this)
                }, t.prototype.update = function () {
                    this.isMoving && r.App.event.emit(s.EGameEvent.PLAYER_EVENT, {
                        event: s.PlayerEvent.MOVE,
                        angle: this._angle,
                        vector: this._vector.clone()
                    })
                }, t.prototype.onInit = function () {
                    this.mainNode.setPosition(this._rockerPos.x, this._rockerPos.y), this.poleNode.setPosition(this._polePos.x, this._polePos.y), this._startMouse = !1, this.isMoving = !1
                }, t.prototype.MouseStartEvent = function (e) {
                    if (!(r.App.gameData.pauseGame || r.App.gameData.endGame || this._startMouse || r.App.gameData.OperateType != s.OperateType.None)) {
                        this._startMouse = !0, r.App.gameData.OperateType = s.OperateType.TOUCH;
                        var t = cc.v2(this.node.convertToNodeSpaceAR(e.touch.getLocation()));
                        this._touchStartLocation = t.clone(), this.mainNode.setPosition(t.x, t.y)
                    }
                }, t.prototype.MouseMoveEvent = function (e) {
                    if (0 != this._startMouse && r.App.gameData.OperateType == s.OperateType.TOUCH)
                        if (r.App.gameData.pauseGame || r.App.gameData.endGame) this.isMoving && this.MouseOutEvent(e);
                        else {
                            var t = cc.v2(this.node.convertToNodeSpaceAR(e.touch.getLocation()));
                            this._touchMoveLocation = cc.v2(t.x, t.y);
                            var i = this._touchMoveLocation.subtract(this._touchStartLocation),
                                o = cc.Vec2.len(i);
                            this.isMoving = !0;
                            var a = cc.Vec2.ZERO.clone(),
                                n = cc.Vec2.ZERO.clone();
                            if (96 > o) n = i, a = this._polePos.add(n);
                            else {
                                var l = Math.atan2(i.y, i.x),
                                    p = 96 * Math.cos(l),
                                    c = 96 * Math.sin(l);
                                n = cc.v2(p, c), a = this._polePos.add(n)
                            }
                            this.poleNode.setPosition(a.x, a.y), this._angle = -Math.round(180 * Math.atan2(n.x, n.y) / Math.PI), cc.Vec2.normalize(this._vector, n)
                        }
                }, t.prototype.MouseOutEvent = function () {
                    0 != this._startMouse && r.App.gameData.OperateType == s.OperateType.TOUCH && (this.isMoving && r.App.event.emit(s.EGameEvent.PLAYER_EVENT, {
                        event: s.PlayerEvent.IDLE
                    }), r.App.gameData.OperateType = s.OperateType.None, this.onInit())
                }, n([l], t)
            }(cc.Component);
        i.Rocker = p, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType"
    }],
    Ruler: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "0ce37faG65AtaPybOgHSBSN", "Ruler");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./ViewBase"),
            p = cc._decorator,
            c = p.ccclass,
            h = (p.property, function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._blockNode = null, t._closeBtn = null, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    this._blockNode = this.node.Find("block"), this._closeBtn = this.node.Find("ConfirmBtn"), this._closeBtn.on("click", this._OnClickCloseBtn, this), this._blockNode.width = r.App.gameData.FrameSize.w, this._blockNode.height = r.App.gameData.FrameSize.h
                }, t.prototype.start = function () {}, t.prototype.OnHide = function () {}, t.prototype.OnShow = function (e) {
                    e.isRuler ? this.node.Find("Title", cc.Sprite).spriteFrame = r.App.res.GetImage("Ruler/title_ruler") : this.node.Find("Title", cc.Sprite).spriteFrame = r.App.res.GetImage("Ruler/title_tips"), this.node.Find("Tips", cc.Label).string = " "
                }, t.prototype._OnClickCloseBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.ui.Hide("Ruler")
                }, n([c], t)
            }(l.ViewBase));
        i.default = h, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./ViewBase": "ViewBase"
    }],
    Select: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c57f3mwf7hPfLGdbMCsabtd", "Select");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Select = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("../GameApi"),
            p = e("./ViewBase"),
            c = cc._decorator.ccclass,
            h = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._blockNode = null, t._startBtn1 = null, t._startBtn2 = null, t._startBtn3 = null, t._downloadBtn1 = null, t._downloadBtn2 = null, t._downloadBtn3 = null, t._fingerNode = null, t._videoNode = null, t.videoPlayer = null, t._loginBtn = null, t._lockerBtn = null, t._gachaBtn = null, t._rankBtn = null, t._rewardRecordBtn = null, t._audioBtn = null, t._bg1Node = null, t._bg2Node = null, t._bg3Node = null, t._updateTime = 0, t._AniName = s.AniName.IDLE, t._frame = 0, t.randomNum = 1, t.currentSpeed = 1, t.BG1_ruleButton = null, t.BG2_ruleButton = null, t.BG3_ruleButton = null, t.BG1_QQImage = null, t.BG1_WXImage = null, t.BG2_QQImage = null, t.BG2_WXImage = null, t.BG3_QQImage = null, t.BG3_WXImage = null, t
                }
                return a(t, e), t.prototype.onLoad = function () {
                    var e = this;
                    cc.macro.ENABLE_TRANSPARENT_CANVAS = !0, this._blockNode = this.node.Find("block"), this._loginBtn = this.node.Find("loginBtn"), this._lockerBtn = this.node.Find("lockerBtn"), this._gachaBtn = this.node.Find("gachaBtn"), this._rankBtn = this.node.Find("rankBtn"), this._rewardRecordBtn = this.node.Find("rewardRecordBtn"), this._bg1Node = this.node.Find("Bg1"), this._bg2Node = this.node.Find("Bg2"), this._bg3Node = this.node.Find("Bg3"), this._fingerNode = this.node.Find("bg2/finger"), this._videoNode = this._bg1Node.children[0], this.videoPlayer = this._videoNode.getComponent(cc.VideoPlayer), this.videoPlayer.mute = !0, this.videoPlayer.isFullscreen = !1, this._audioBtn = this.node.Find("audioBtn"), this._startBtn1 = this.node.Find("bg1/startBtn"), this._startBtn2 = this.node.Find("bg2/startBtn"), this._startBtn3 = this.node.Find("bg3/startBtn"), this._downloadBtn1 = this.node.Find("bg1/downloadBtn"), this._downloadBtn2 = this.node.Find("bg2/downloadBtn"), this._downloadBtn3 = this.node.Find("bg3/downloadBtn"), this.BG1_ruleButton = this.node.Find("Bg1/RuleButton"), this.BG2_ruleButton = this.node.Find("Bg2/RuleButton"), this.BG3_ruleButton = this.node.Find("Bg3/RuleButton"), this.BG1_QQImage = this.node.Find("Bg1/QQImage"), this.BG1_WXImage = this.node.Find("Bg1/WXImage"), this.BG2_QQImage = this.node.Find("Bg2/QQImage"), this.BG2_WXImage = this.node.Find("Bg2/WXImage"), this.BG3_QQImage = this.node.Find("Bg3/QQImage"), this.BG3_WXImage = this.node.Find("Bg3/WXImage"), this._audioBtn.on("click", this._OnClickAudioBtn, this), this._startBtn1.on("click", this._OnClickStartBtn, this), this._startBtn2.on("click", this._OnClickStartBtn, this), this._startBtn3.on("click", this._OnClickStartBtn, this), this._downloadBtn1.on("click", this._OnClickDownloadBtn, this), this._downloadBtn2.on("click", this._OnClickDownloadBtn, this), this._downloadBtn3.on("click", this._OnClickDownloadBtn, this), this._loginBtn.on("click", this._OnClickLoginBtn, this), this._lockerBtn.on("click", this._OnClickLockerBtn, this), this._gachaBtn.on("click", this._OnClickGachaBtn, this), this._rankBtn.on("click", this._OnClickRankBtn, this), this._rewardRecordBtn.on("click", this._OnClickRewardRecordBtn, this), this.BG1_ruleButton.on("click", this._OnClickRuleButton), this.BG2_ruleButton.on("click", this._OnClickRuleButton), this.BG3_ruleButton.on("click", this._OnClickRuleButton), this._blockNode.width = r.App.gameData.FrameSize.w, this._blockNode.height = r.App.gameData.FrameSize.h, this.videoPlayer && this.setupInlinePlayback(), cc.find("Canvas").on("touchstart", function () {
                        e.videoPlayer.play()
                    }, this), r.App.gameData.isActivity ? (this._lockerBtn.active = !0, this._gachaBtn.active = !0, this._rankBtn.active = !0, this._rewardRecordBtn.active = !0, r.App.gameData.isLoginType && (this._loginBtn.active = !1)) : (this._loginBtn.active = !1, this._lockerBtn.active = !1, this._gachaBtn.active = !1, this._rankBtn.active = !1, this._rewardRecordBtn.active = !1)
                }, t.prototype.OnShow = function () {
                    this.showMain(), r.App.ui.Hide("Game"), this.showAudioBtn(), r.App.util.isWeChatBrowser(), r.App.gameData.isLoginType && (this._loginBtn.active = !1)
                }, t.prototype.OnHide = function () {
                    1 == this.randomNum && (this._videoNode.off("completed"), this.videoPlayer.stop())
                }, t.prototype.isWeChatBrowser = function () {
                    var e = navigator.userAgent.toLowerCase();
                    return /micromessenger/.test(e)
                }, t.prototype.isQQBrowser = function () {
                    if ("undefined" == typeof navigator) return !1;
                    var e = navigator.userAgent.toLowerCase();
                    return /mqqbrowser/.test(e) || /qq\//.test(e)
                }, t.prototype.isEnvirOk = function () {
                    return !!window.cc && cc.sys.platform == cc.sys.WECHAT_GAME
                }, t.prototype.setupWeChatVideo = function () {
                    var e = document.getElementsByTagName("video");
                    if (e.length > 0) {
                        var t = e[0];
                        t.setAttribute("x5-video-player-type", "h5"), t.setAttribute("x5-video-player-fullscreen", "true"), t.setAttribute("x5-video-ignore-metadata", "true")
                    }
                }, t.prototype.setupInlinePlayback = function () {
                    var e = this,
                        t = document.getElementsByTagName("video");
                    if (t.length > 0) {
                        var i = t[0];
                        this.applyInlineAttributes(i), (this.isEnvirOk() || this.isWeChatBrowser()) && this.setupWeChatVideo()
                    } else this.scheduleOnce(function () {
                        return e.setupInlinePlayback()
                    }, .1)
                }, t.prototype.applyInlineAttributes = function (e) {
                    e.setAttribute("playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.setAttribute("x5-playsinline", "true"), e.setAttribute("webkit-playsinline", "true"), e.setAttribute("preload", "auto"), e.setAttribute("x5-video-orientation", "true"), e.setAttribute("webkit-playsinline", "true"), (this.isEnvirOk() || this.isWeChatBrowser()) && (e.setAttribute("x5-video-ignore-metadata", "true"), e.setAttribute("x5-video-player-type", "x5"), e.setAttribute("x5-video-player-fullscreen", "true")), console.log("\u5185\u8054\u64ad\u653e\u5c5e\u6027\u8bbe\u7f6e\u5b8c\u6210")
                }, t.prototype.update = function () {
                    this._videoNode.getComponent(cc.VideoPlayer).isPlaying ? cc.log("\u89c6\u9891\u64ad\u653e\u6210\u529f") : this._videoNode.getComponent(cc.VideoPlayer).play()
                }, t.prototype.showMain = function () {
                    this.isWeChatBrowser() || this.isQQBrowser() ? this.randomNum = [2, 3][Math.floor(2 * Math.random())] : this.randomNum = [1, 2, 3][Math.floor(3 * Math.random())], 0 !== r.App.gameData.SelectType && (this.randomNum = r.App.gameData.SelectType), 1 == this.randomNum ? (r.App.gameData.SelectType = 1, this._bg1Node.active = !0, this._bg2Node.active = !1, this._bg3Node.active = !1, this.tryPlayVideo(0), this._videoNode.on("completed", function () {
                        this._videoNode.getComponent(cc.VideoPlayer).play()
                    }, this), r.App.gameData.isQQ ? (this.BG1_QQImage.active = !0, this.BG1_WXImage.active = !1) : r.App.gameData.isWx && (this.BG1_QQImage.active = !1, this.BG1_WXImage.active = !0)) : 2 == this.randomNum ? (r.App.gameData.SelectType = 2, this._bg1Node.active = !1, this._bg2Node.active = !0, this._bg3Node.active = !1, cc.Tween.stopAllByTarget(this._fingerNode), cc.tween(this._fingerNode).to(.4, {
                        scale: .9
                    }).to(.4, {
                        scale: 1
                    }).union().repeatForever().start(), r.App.gameData.isQQ ? (this.BG2_QQImage.active = !0, this.BG2_WXImage.active = !1) : r.App.gameData.isWx && (this.BG2_QQImage.active = !1, this.BG2_WXImage.active = !0)) : 3 == this.randomNum && (r.App.gameData.SelectType = 3, this._bg1Node.active = !1, this._bg2Node.active = !1, this._bg3Node.active = !0, r.App.gameData.isQQ ? (this.BG3_QQImage.active = !0, this.BG3_WXImage.active = !1) : r.App.gameData.isWx && (this.BG3_QQImage.active = !1, this.BG3_WXImage.active = !0))
                }, t.prototype.tryPlayVideo = function (e) {
                    var t = this,
                        i = this._videoNode.getComponent(cc.VideoPlayer);
                    i.mute = !0, i.play(), this.scheduleOnce(function () {
                        i.isPlaying ? cc.log("\u89c6\u9891\u64ad\u653e\u6210\u529f") : e < 3 && t.tryPlayVideo(e + 1)
                    }, .3)
                }, t.prototype.showAudioBtn = function () {
                    var e = 1 == r.App.gameData.audioSwitchList[1];
                    this._audioBtn.getChildByName("off").active = e, this._audioBtn.getChildByName("on").active = !e
                }, t.prototype.onRefreshAni = function () {
                    var e = r.App.ani.playerConfig[r.App.gameData.playerID][this._AniName];
                    this._frame >= e && (this._frame = 0, this._AniName == s.AniName.HIT && (this._AniName = s.AniName.RUN)), this.node.Find("bg/img/ani", cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/player_" + r.App.gameData.playerID + "_" + this._AniName + "_" + ++this._frame)
                }, t.prototype._OnClickStartBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), r.App.gameData.isActivity && l.GameApi.sendMessageToParent("reportEvent", ["startGame"]), this.scheduleOnce(function () {
                        r.App.util.StartGame(), r.App.util.UA(s.UAType.TIMING, "email")
                    }, .3)
                }, t.prototype._OnClickAudioBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), 1 == r.App.gameData.audioSwitchList[0] ? (r.App.gameData.audioSwitchList[0] = 0, r.App.gameData.audioSwitchList[1] = 0) : (r.App.gameData.audioSwitchList[0] = 1, r.App.gameData.audioSwitchList[1] = 1), r.App.audio.onAudioChange(), this.showAudioBtn()
                }, t.prototype._OnClickDownloadBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("downLoad", [])
                }, t.prototype._OnClickLoginBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("login", [])
                }, t.prototype._OnClickLockerBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("giftLog", [1, 3])
                }, t.prototype._OnClickGachaBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("TGDialogS", ["raffle"])
                }, t.prototype._OnClickRankBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("rank", ["all", "now"])
                }, t.prototype._OnClickRewardRecordBtn = function () {
                    r.App.audio.playEffect(s.EAUDIOPATH.click), l.GameApi.sendMessageToParent("giftLog", [1, 0])
                }, t.prototype._OnClickRuleButton = function () {
                    console.log(111), l.GameApi.sendMessageToParent("showRule", [])
                }, n([c], t)
            }(p.ViewBase);
        i.Select = h, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "../GameApi": "GameApi",
        "./ViewBase": "ViewBase"
    }],
    SkillHelper: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "489f1ESRW9KRqouVMduQ3zz", "SkillHelper"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.SkillHelper = void 0;
        var o = e("../Common/GameType"),
            a = e("../Data/CfgMng"),
            n = e("../Data/GameData"),
            r = e("../Manager/Event"),
            s = e("../Manager/Pool"),
            l = e("../Manager/Resource"),
            p = e("../Manager/SkillMgr"),
            c = e("../Util/Util"),
            h = function () {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.onSkill = function (e) {
                    var t = n.GameData.gameSkillID[e];
                    if (t)
                        if (t.id < 30) {
                            var i = a.default.getCfgSkill(t.id);
                            if (i.skillType == o.SkillType.Accord) {
                                var s = "skill_" + t.id;
                                !(u = n.GameData.gameScene.node.Find(this.getParentName(t.id) + "/" + s)) && this.createSkill(t), u && this.UpgradeSkill(t)
                            } else if (i.skillType == o.SkillType.Passive) {
                                switch (t.id) {
                                    case o.SkillList.Absorb:
                                        n.GameData.expDrawScope = c.Util.instance.getGameInfo(o.GameInfoType.Absorb);
                                        break;
                                    case o.SkillList.Drink:
                                        n.GameData.recoverHp = c.Util.instance.getGameInfo(o.GameInfoType.RecoverHp);
                                        break;
                                    case o.SkillList.Sneaker:
                                        r.EventMgr.instance.emit(o.EGameEvent.ON_PLAYER_SPEED);
                                        break;
                                    case o.SkillList.UpLimitHp:
                                        var l = c.Util.instance.getGameInfo(o.GameInfoType.UpLimitHp);
                                        r.EventMgr.instance.emit(o.EGameEvent.ON_PLAYER_UPLIMITHP, {
                                            pct: l
                                        })
                                }
                                for (var p in n.GameData.gameSkillID) {
                                    var h = n.GameData.gameSkillID[p];
                                    h && this.UpgradeSkill(h)
                                }
                            }
                        } else {
                            var u;
                            s = "skill_" + t.id, !(u = n.GameData.gameScene.node.Find(this.getParentName(t.id) + "/" + s)) && this.createSkill(t)
                        }
                }, e.prototype.createSkill = function (e) {
                    var t = n.GameData.gameScene.node.Find("" + this.getParentName(e.id)),
                        i = "Skill_" + e.id,
                        o = s.PoolMgr.instance.GetNode(l.ResourceMgr.instance.GetPrefab(i), t),
                        a = s.PoolMgr.instance.getScriptClass(i, "Skill_" + e.id, o);
                    a.node.parent = t, a.node.name = i, a.script.onCustomEnable(), n.GameData.skillClass.push(a), a.script.onInit(e.id)
                }, e.prototype.UpgradeSkill = function (e) {
                    var t = "Skill_" + e.id;
                    for (var i in n.GameData.skillClass) {
                        var o = n.GameData.skillClass[i];
                        if (o && o.node && o.node.name == t) {
                            o.script.onUpgradeSkill();
                            break
                        }
                    }
                }, e.prototype.createProp = function (e, t) {
                    void 0 === t && (t = null);
                    var i = a.default.getCfgSkill(e),
                        r = n.GameData.gameScene.node.Find("Game/Prop"),
                        h = s.PoolMgr.instance.GetNode(l.ResourceMgr.instance.GetPrefab(o.PREFABS.prop), r),
                        u = p.SkillMgr.instance.SkillConfig[i.ID].normal;
                    h.width = u.width, h.height = u.height, c.Util.instance.SetNodeState(h);
                    var d = h.Find("img");
                    d.width = u.width, d.height = u.height, d.Find(cc.Sprite).spriteFrame = l.ResourceMgr.instance.GetImage("Monster/" + i.resName);
                    var _ = Math.max(100, n.GameData.sceneSize.w - 170),
                        m = cc.Vec2.ZERO.clone();
                    if (t) m = t;
                    else {
                        var f = _ / 2 - Math.floor(Math.random() * _),
                            g = 500 - Math.floor(1e3 * Math.random());
                        m = n.GameData.playerPos.clone().add(cc.v2(f, g))
                    }
                    h.setPosition(m);
                    var y = {
                        index: i.ID,
                        dir: cc.Vec2.ZERO.clone(),
                        red: !1,
                        collideNum: 0,
                        sendPos: cc.Vec2.ZERO.clone(),
                        boom: i.ID != o.SkillList.Bomb,
                        node: h
                    };
                    n.GameData.propClass.push(y)
                }, e.prototype.createPropHp = function (e, t) {
                    void 0 === t && (t = null);
                    var i = a.default.getCfgSkill(e),
                        r = n.GameData.gameScene.node.Find("Game/Prop"),
                        h = s.PoolMgr.instance.GetNode(l.ResourceMgr.instance.GetPrefab(o.PREFABS.prop), r),
                        u = p.SkillMgr.instance.SkillConfig[i.ID].normal;
                    h.width = u.width, h.height = u.height, c.Util.instance.SetNodeState(h);
                    var d = h.Find("img");
                    d.width = u.width, d.height = u.height, d.Find(cc.Sprite).spriteFrame = l.ResourceMgr.instance.GetImage("Monster/" + i.resName);
                    var _ = Math.max(100, n.GameData.sceneSize.w - 170),
                        m = cc.Vec2.ZERO.clone();
                    if (t) m = t;
                    else {
                        var f = _ / 2 - Math.floor(Math.random() * _),
                            g = 500 - Math.floor(1e3 * Math.random());
                        m = n.GameData.playerPos.clone().add(cc.v2(f, g))
                    }
                    h.setPosition(m);
                    var y = {
                        index: i.ID,
                        dir: cc.Vec2.ZERO.clone(),
                        red: !1,
                        collideNum: 0,
                        sendPos: cc.Vec2.ZERO.clone(),
                        boom: i.ID != o.SkillList.Bomb,
                        node: h
                    };
                    n.GameData.propClass2.push(y)
                }, e.prototype.onTriggerMomentSkill = function (e) {
                    var t = a.default.getCfgSkill(e).harm[0] || 0;
                    switch (e) {
                        case o.SkillList.Hp:
                            r.EventMgr.instance.emit(o.EGameEvent.ON_CURE_PLAYER, {
                                pct: t
                            });
                            break;
                        case o.SkillList.Magnet:
                            r.EventMgr.instance.emit(o.EGameEvent.ON_DRAW_ALLEXP);
                            break;
                        case o.SkillList.Bomb:
                            for (var i = 0; i < n.GameData.monsterClass.length; ++i) {
                                var s = n.GameData.monsterClass[i].script,
                                    l = a.default.getCfgSkill(o.SkillList.Bomb).harm[0] || 1,
                                    p = s.MonsterData.type != o.MonsterType.Boss ? s.monsterHP : Math.trunc(s.monsterHP * l / 100);
                                s.onBeAssaulted(p)
                            }
                    }
                }, e.prototype.getParentName = function (e) {
                    var t = "game/Skill";
                    return e == o.SkillList.Shotgun && (t = "game/bottomSkill"), t
                }, e._instance = null, e
            }();
        i.SkillHelper = h, cc._RF.pop()
    }, {
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../Data/GameData": "GameData",
        "../Manager/Event": "Event",
        "../Manager/Pool": "Pool",
        "../Manager/Resource": "Resource",
        "../Manager/SkillMgr": "SkillMgr",
        "../Util/Util": "Util"
    }],
    SkillMgr: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "24608HaGBJGyK9xeJr6tiCt", "SkillMgr"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.SkillMgr = void 0;
        var o = function () {
            function e() {
                this.SkillConfig = {
                    1: {
                        normal: {
                            width: 32,
                            height: 32
                        }
                    },
                    2: {
                        normal: {
                            width: 45,
                            height: 45
                        }
                    },
                    3: {
                        normal: {
                            width: 32,
                            height: 32
                        }
                    },
                    4: {
                        normal: {
                            width: 202,
                            height: 232
                        }
                    },
                    5: {
                        normal: {
                            width: 26,
                            height: 32
                        }
                    },
                    6: {
                        normal: {
                            width: 128,
                            height: 128
                        }
                    },
                    7: {
                        normal: {
                            width: 46,
                            height: 46
                        }
                    },
                    15: {
                        normal: {
                            width: 34,
                            height: 34
                        }
                    },
                    16: {
                        normal: {
                            width: 32,
                            height: 32
                        }
                    },
                    17: {
                        normal: {
                            width: 67,
                            height: 66
                        }
                    },
                    18: {
                        normal: {
                            width: 53,
                            height: 50
                        }
                    },
                    19: {
                        normal: {
                            width: 23,
                            height: 39
                        }
                    },
                    20: {
                        normal: {
                            width: 8,
                            height: 34
                        }
                    },
                    21: {
                        normal: {
                            width: 100,
                            height: 100
                        }
                    },
                    23: {
                        normal: {
                            width: 8,
                            height: 34
                        }
                    },
                    30: {
                        normal: {
                            width: 20,
                            height: 20
                        }
                    },
                    31: {
                        normal: {
                            width: 24,
                            height: 24
                        }
                    }
                }, this.weaponConfig = {
                    19: {
                        x: 23,
                        y: -8,
                        anckorX: .5,
                        anckorY: .5,
                        width: 11,
                        height: 19,
                        rotation: 50
                    },
                    20: {
                        x: 16,
                        y: -7,
                        anckorX: .5,
                        anckorY: .5,
                        width: 17,
                        height: 17,
                        rotation: 0
                    },
                    21: {
                        x: 18,
                        y: -15,
                        anckorX: .5,
                        anckorY: 0,
                        width: 13,
                        height: 43,
                        rotation: 0
                    },
                    23: {
                        x: 16,
                        y: -7,
                        anckorX: .5,
                        anckorY: .5,
                        width: 17,
                        height: 17,
                        rotation: 0
                    }
                }
            }
            return Object.defineProperty(e, "instance", {
                get: function () {
                    return null === this._instance && (this._instance = new e), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), e._instance = null, e
        }();
        i.SkillMgr = o, cc._RF.pop()
    }, {}],
    Skill_19: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "aa46dHKtFtIaLYL8El4GJiK", "Skill_19");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_19 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._skillCD = 0, t._updateTime = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(t.x, t.y);
                    for (var i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i],
                            a = o.dir,
                            n = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            l = new cc.Vec2(o.node.x, o.node.y),
                            p = s.Vec2.ZERO.clone();
                        p = l.add(new cc.Vec2(a.x * n, a.y * n)), o.node.setPosition(p.x, p.y);
                        var c = r.App.gameData.playerPos.clone();
                        cc.Vec2.len(p.clone().subtract(c)) > r.App.gameData.outOfRange && this.onDestroyNode(o.index)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - (r.App.util.getGameInfo(s.GameInfoType.Energy) || 0)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = 0; i < t; ++i) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            r.App.audio.playEffect("skill_" + e._SkillData.id);
                            var t = r.App.gameData.playerPos.clone(),
                                i = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_19_0), e.node);
                            i.setPosition(t.x, t.y);
                            var o = r.App.skillMgr.SkillConfig[e._skillID].normal,
                                a = e._SkillData.data.scale[e._subIndex] || 1,
                                n = Math.trunc(o.width * a),
                                l = Math.trunc(o.height * a);
                            i.width = Math.max(n, l), i.height = Math.max(n, l);
                            var p = i.Find("img");
                            p.width = n, p.height = l;
                            var c = e.getCollideVector(t),
                                h = -Math.round(180 * Math.atan2(c.x, c.y) / Math.PI);
                            i.angle = h;
                            var u = {
                                index: e._skillIndex++,
                                dir: c,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: s.Vec2.ZERO.clone(),
                                boom: !1,
                                node: i
                            };
                            e._skillNode.push(u)
                        }
                    }, 200 * i)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getCollideVector = function (e) {
                    for (var t = r.App.gameData.sceneSize.h, i = s.Vec2.ZERO.clone(), o = r.App.gameData.sceneSize.w / 2, a = r.App.gameData.sceneSize.h / 2, n = 0; n < r.App.gameData.monsterClass.length; ++n) {
                        var l = r.App.gameData.monsterClass[n].node,
                            p = new cc.Vec2(l.x, l.y),
                            c = p.clone().subtract(r.App.gameData.playerPos);
                        if (Math.abs(c.x) < o || Math.abs(c.y) < a) {
                            var h = cc.Vec2.len(p.clone().subtract(e.clone()));
                            h < t && (t = h, cc.Vec2.normalize(i, p.clone().subtract(e.clone())))
                        }
                    }
                    return t >= r.App.gameData.sceneSize.h && cc.Vec2.normalize(i, r.App.gameData.playerMoverDir.clone()), i
                }, n([p], t)
            }(l.Skill);
        i.Skill_19 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_1: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "132e6C7OrFDOLpyfz+n7joI", "Skill_1");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_1 = void 0;
        var r = e("../App"),
            s = e("./Skill"),
            l = cc._decorator.ccclass,
            p = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillPos = cc.v2(0, 0), t._roSpeed = 0, t._subIndex = 0, t._imgFrames = 0, t._bunchNum = 5, t._numDista = 40, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.node.setPosition(this._skillPos)
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[this._skillID], this._subIndex = this._SkillData.grade - 1, this.onRefreshSkill()
                }, t.prototype.customUpdate = function () {
                    this._imgFrames += 1, this._imgFrames > 3 && (this._imgFrames = 0);
                    for (var e = 0; e < this.node.childrenCount; ++e) {
                        var t = this.node.children[e],
                            i = t.angle + this._roSpeed;
                        t.angle = i;
                        var o = this.getPos(i, e % this._bunchNum * this._numDista);
                        t.setPosition(o), t.Find("img").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/skill_1" + (this.SkillData.grade > 1 ? "_up" : "") + "_" + this._imgFrames)
                    }
                }, t.prototype.onEnd = function () {}, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onRefreshSkill = function () {
                    this._imgFrames = 0, this._roSpeed = this._SkillData.data.speed[this._subIndex] || 1, this.node.children.forEach(function (e) {
                        r.App.util.SetNodeState(e, !1)
                    });
                    var e = this._SkillData.data.property[this._subIndex] || 1,
                        t = 360 / e,
                        i = r.App.skillMgr.SkillConfig[this._skillID].normal,
                        o = this._SkillData.data.scale[this._subIndex] || 1,
                        a = Math.trunc(i.width * o),
                        n = Math.trunc(i.height * o);
                    this._numDista = a + 8;
                    for (var s = 0; s < e * this._bunchNum; ++s) {
                        var l = this.node.children[s];
                        null == l && (l = r.App.pool.GetNode(r.App.res.GetPrefab("Skill_1_0"), this.node)), l.width = a, l.height = n;
                        var p = 10 + Math.floor(20 * Math.random()),
                            c = 1 == this._SkillData.grade ? 360 / this._bunchNum * s + p : t * Math.floor(s / this._bunchNum);
                        l.angle = Math.floor(c), r.App.util.SetNodeState(l);
                        var h = l.Find("img");
                        h.angle = 0, h.width = a, h.height = n, h.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/skill_1" + (this.SkillData.grade > 1 ? "_up" : "") + "_" + this._imgFrames);
                        var u = this.getPos(l.angle, s % this._bunchNum * this._numDista);
                        l.setPosition(u)
                    }
                }, t.prototype.getPos = function (e, t) {
                    var i = cc.Vec2.ZERO.clone().add(cc.v2(0, r.App.gameData.playerSize + t));
                    return r.App.util.rotatePoint(i, cc.Vec2.ZERO.clone(), e)
                }, n([l], t)
            }(s.Skill);
        i.Skill_1 = p, cc._RF.pop()
    }, {
        "../App": "App",
        "./Skill": "Skill"
    }],
    Skill_20: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "15cd2/8c6pPkLPfGFbheCf6", "Skill_20");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_20 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._skillCD = 0, t._updateTime = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    this._updateTime += e, r.App.event.emit(s.EGameEvent.ON_REFRESH_PLAYER_CD, {
                        plan: Math.max(0, Math.min(1, this._updateTime / this._skillCD))
                    }), this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(t.x, t.y);
                    for (var i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i],
                            a = o.dir,
                            n = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            l = new cc.Vec2(o.node.x, o.node.y),
                            p = s.Vec2.ZERO.clone();
                        p = l.add(new cc.Vec2(a.x * n, a.y * n)), o.node.setPosition(p.x, p.y);
                        var c = r.App.gameData.playerPos.clone();
                        cc.Vec2.len(p.clone().subtract(c)) > 400 && this.onDestroyNode(o.index)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - (r.App.util.getGameInfo(s.GameInfoType.Energy) || 0)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        e.node.name = s.PREFABS.skill_20_0, r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    var e = this,
                        t = this._SkillData.data.property[this._subIndex],
                        i = (r.App.gameData.playerMoverDir.clone(), .25);
                    4 == t ? i = .3 : 5 == t && (i = .35);
                    var o = i * (t - 1) / 2;
                    r.App.audio.playEffect("skill_" + this._SkillData.id);
                    for (var a = r.App.skillMgr.SkillConfig[this._skillID].normal, n = this._SkillData.data.scale[this._subIndex] || 1, l = Math.trunc(a.width * n), p = Math.trunc(a.height * n), c = 0; c < t; ++c)
                        for (var h = 0; h < 1; ++h) setTimeout(function (t) {
                            var a = r.App.gameData.playerPos.clone(),
                                n = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_20_0), e.node);
                            n.name = String(e._skillIndex), n.setPosition(a.x, a.y), n.width = Math.min(l, p), n.height = Math.min(l, p);
                            var c = n.Find("img");
                            c.width = l, c.height = p;
                            var h = s.Vec2.ZERO.clone(),
                                u = i * t - o,
                                d = r.App.gameData.playerMoverDirLast.clone();
                            0 == d.x && 0 == d.y && (d = cc.v2(0, 1)), cc.Vec2.normalize(h, r.App.util.changeAngle(d.x, d.y, u));
                            var _ = -Math.round(180 * Math.atan2(h.x, h.y) / Math.PI);
                            n.angle = _;
                            var m = {
                                index: e._skillIndex++,
                                dir: h,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: s.Vec2.ZERO.clone(),
                                boom: !1,
                                node: n
                            };
                            e._skillNode.push(m)
                        }, 100 * h, c)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        o.node.name = s.PREFABS.skill_20_0, r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getCollideVector = function (e) {
                    for (var t = r.App.gameData.sceneSize.h, i = s.Vec2.ZERO.clone(), o = r.App.gameData.sceneSize.w / 2, a = r.App.gameData.sceneSize.h / 2, n = 0; n < r.App.gameData.monsterClass.length; ++n) {
                        var l = r.App.gameData.monsterClass[n].node,
                            p = new cc.Vec2(l.x, l.y),
                            c = p.clone().subtract(r.App.gameData.playerPos);
                        if ((Math.abs(c.x) < o || Math.abs(c.y) < a) && (r.App.gameData.playerDir > 0 && p.x >= e.x || r.App.gameData.playerDir < 0 && p.x <= e.x)) {
                            var h = cc.Vec2.len(p.clone().subtract(e.clone()));
                            h < t && (t = h, cc.Vec2.normalize(i, p.clone().subtract(e.clone())))
                        }
                    }
                    return t >= r.App.gameData.sceneSize.h && cc.Vec2.normalize(i, r.App.gameData.playerMoverDirLast.clone()), i
                }, n([p], t)
            }(l.Skill);
        i.Skill_20 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_21: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "89c64Y7AD1A55ZRhQT15xTm", "Skill_21");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_21 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._skillCD = 0, t._updateTime = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    void 0 === e && (e = .017), this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(t.x, t.y);
                    for (var i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i],
                            a = o.dir,
                            n = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            l = new cc.Vec2(o.node.x, o.node.y),
                            p = s.Vec2.ZERO.clone();
                        p = l.add(new cc.Vec2(a.x * n, a.y * n)), o.node.setPosition(p.x, p.y), o.sendPos.x += 1, o.sendPos.x >= 4 && (o.sendPos.x = 0, o.collideNum >= 7 ? this.onDestroyNode(o.index) : o.node.Find("img").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/skill_21_eff" + (this.SkillData.grade > 1 ? "_up" : "") + "_" + ++o.collideNum))
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - (r.App.util.getGameInfo(s.GameInfoType.Energy) || 0)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = 0; i < t; ++i) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            r.App.audio.playEffect("skill_" + e._SkillData.id);
                            var t = r.App.gameData.playerPos.clone(),
                                i = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_21_0), e.node);
                            i.setPosition(t.x, t.y), i.SetVisible(!0), e.customUpdate();
                            var o = r.App.skillMgr.SkillConfig[e._skillID].normal,
                                a = e._SkillData.data.scale[e._subIndex] || 1,
                                n = Math.trunc(o.width * a),
                                l = Math.trunc(o.height * a);
                            i.width = l, i.height = n;
                            var p = i.Find("img");
                            p.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/skill_21_eff" + (e.SkillData.grade > 1 ? "_up" : "") + "_0");
                            var c = -Math.round(180 * Math.atan2(r.App.gameData.playerMoverDir.x, r.App.gameData.playerMoverDir.y) / Math.PI);
                            i.angle = c, p.scaleY = c >= 0 ? -1 : 1;
                            var h = s.Vec2.ZERO.clone();
                            cc.Vec2.normalize(h, r.App.gameData.playerMoverDir.clone());
                            var u = {
                                index: e._skillIndex++,
                                dir: h,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: s.Vec2.ZERO.clone(),
                                boom: !1,
                                node: i
                            };
                            e._skillNode.push(u)
                        }
                    }, 200 * i)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, n([p], t)
            }(l.Skill);
        i.Skill_21 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_23: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "6b8d3b0oDhFcpQx17EdWySS", "Skill_23");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_23 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._skillCD = 0, t._updateTime = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    void 0 === e && (e = .017), this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(t.x, t.y);
                    for (var i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i],
                            a = o.dir,
                            n = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            l = new cc.Vec2(o.node.x, o.node.y),
                            p = s.Vec2.ZERO.clone();
                        p = l.add(new cc.Vec2(a.x * n, a.y * n)), o.node.setPosition(p.x, p.y);
                        var c = r.App.gameData.playerPos.clone();
                        cc.Vec2.len(p.clone().subtract(c)) > r.App.gameData.outOfRange && this.onDestroyNode(o.index)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - (r.App.util.getGameInfo(s.GameInfoType.Energy) || 0)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = 0; i < t; ++i) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            r.App.audio.playEffect("skill_" + e._SkillData.id);
                            var t = r.App.gameData.playerPos.clone(),
                                i = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_23_0), e.node);
                            i.SetVisible(!0), e.customUpdate();
                            var o = r.App.skillMgr.SkillConfig[e._skillID].normal,
                                a = e._SkillData.data.scale[e._subIndex] || 1,
                                n = Math.trunc(o.width * a),
                                l = Math.trunc(o.height * a);
                            i.width = l, i.height = n;
                            var p = i.Find("img");
                            p.width = n, p.height = l;
                            var c = -Math.round(180 * Math.atan2(r.App.gameData.playerMoverDirLast.x, r.App.gameData.playerMoverDirLast.y) / Math.PI);
                            i.angle = c;
                            var h = s.Vec2.ZERO.clone(),
                                u = r.App.gameData.playerMoverDirLast.clone();
                            0 == u.x && 0 == u.y && (u = cc.v2(0, 1)), cc.Vec2.normalize(h, u.clone()), console.log(h), t = t.clone().add(new cc.Vec2(60 * h.x, 60 * h.y)), i.setPosition(t.x, t.y);
                            var d = {
                                index: e._skillIndex++,
                                dir: h,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: s.Vec2.ZERO.clone(),
                                boom: !1,
                                node: i
                            };
                            e._skillNode.push(d)
                        }
                    }, 200 * i)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, n([p], t)
            }(l.Skill);
        i.Skill_23 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_2: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "eed4bktrq5IwbfTW/F2iQfx", "Skill_2");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_2 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._initPos = cc.v2(), t._skillNode = [], t._skillCD = 0, t._updateTime = 0, t._skillIndex = 0, t._subIndex = 0, t._rangeNum = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0, this._initPos = r.App.gameData.playerPos.clone()
                }, t.prototype.customUpdate = function (e) {
                    this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    for (var t = 0; t < this._skillNode.length; ++t) {
                        var i = this._skillNode[t],
                            o = this._SkillData.data.speed[this._subIndex] + (r.App.util.getGameInfo(s.GameInfoType.AddSpeed) || 0);
                        i.node.angle += o, i.dir.x += 0 == i.dir.y ? o : -o;
                        var a = this.getPos(i.node.angle, i.dir.x);
                        i.node.setPosition(a.x, a.y), 0 == i.dir.y && i.dir.x > this._rangeNum && (i.dir.y = 1), 0 != i.dir.y && i.dir.x <= 20 && this.onDestroyNode(i.index)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._rangeNum = this._SkillData.grade > 1 ? 600 : 360, this._subIndex = this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - (r.App.util.getGameInfo(s.GameInfoType.Energy) || 0)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = r.App.skillMgr.SkillConfig[this._skillID].normal, o = this._SkillData.data.scale[this._subIndex] || 1, a = Math.trunc(i.width * o), n = Math.trunc(i.height * o), l = 0; l < t; ++l) setTimeout(function () {
                        var t = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_2_0), e.node),
                            i = r.App.gameData.playerPos.clone().subtract(e._initPos);
                        t.setPosition(i.x, i.y), t.width = Math.max(a, n), t.height = Math.max(a, n), t.Find("img").scale = o;
                        var l = cc.Vec2.ZERO.clone(),
                            p = {
                                index: e._skillIndex++,
                                dir: l,
                                red: !1,
                                collideNum: 0,
                                sendPos: i.clone(),
                                boom: !1,
                                node: t
                            };
                        e._skillNode.push(p)
                    }, 1e3 * l, l)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getPos = function (e, t) {
                    var i = cc.Vec2.ZERO.clone().add(cc.v2(0, t));
                    return r.App.util.rotatePoint(i, cc.Vec2.ZERO.clone(), e)
                }, n([p], t)
            }(l.Skill);
        i.Skill_2 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_30: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "39aeaE2Z0ZI2YXq5pu1oNWF", "Skill_30");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_30 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._harm = 1, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "harm", {
                    get: function () {
                        return this._harm
                    },
                    set: function (e) {
                        this._harm = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, r.App.event.on(s.EGameEvent.ON_REMOTE_ATK_PLAYER, this._OnRemoteAtk, this)
                }, t.prototype._OnRemoteAtk = function (e) {
                    this._harm = e.harm, this._OnShoot(e.pos)
                }, t.prototype.customUpdate = function () {
                    var e = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(e.x, e.y);
                    for (var t = 0; t < this._skillNode.length; ++t) {
                        var i = this._skillNode[t],
                            o = i.dir,
                            a = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            n = new cc.Vec2(i.node.x, i.node.y),
                            l = s.Vec2.ZERO.clone();
                        l = n.add(new cc.Vec2(o.x * a, o.y * a)), i.node.setPosition(l.x, l.y);
                        var p = r.App.gameData.playerPos.clone();
                        cc.Vec2.len(l.clone().subtract(p)) > r.App.gameData.outOfRange && this.onDestroyNode(i.index)
                    }
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        e.node.name = s.PREFABS.skill_30_0, r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype._OnShoot = function (e) {
                    for (var t = this, i = this._SkillData.data.property[this._subIndex], o = 0; o < i; ++o) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            var i = e.clone(),
                                o = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_30_0), t.node);
                            ++t._skillIndex, o.name = String(t._skillIndex), o.setPosition(i.x, i.y);
                            var a = r.App.skillMgr.SkillConfig[t._skillID].normal,
                                n = t._SkillData.data.scale[t._subIndex] || 1,
                                l = Math.trunc(a.width * n),
                                p = Math.trunc(a.height * n);
                            o.width = Math.max(l, p), o.height = Math.max(l, p);
                            var c = t.getCollideVector(i),
                                h = -Math.round(180 * Math.atan2(c.x, c.y) / Math.PI);
                            o.angle = h;
                            var u = {
                                index: t._skillIndex,
                                dir: c,
                                red: t._SkillData.red,
                                collideNum: 0,
                                sendPos: s.Vec2.ZERO.clone(),
                                boom: !1,
                                node: o
                            };
                            t._skillNode.push(u)
                        }
                    }, 200 * o)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        o.node.name = s.PREFABS.skill_30_0, r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getCollideVector = function (e) {
                    var t = r.App.gameData.sceneSize.h,
                        i = s.Vec2.ZERO.clone(),
                        o = r.App.gameData.sceneSize.w / 2,
                        a = r.App.gameData.sceneSize.h / 2,
                        n = new cc.Vec2(r.App.gameData.playerPos.x, r.App.gameData.playerPos.y),
                        l = n.clone().subtract(e);
                    if (Math.abs(l.x) < o || Math.abs(l.y) < a) {
                        var p = cc.Vec2.len(n.clone().subtract(e.clone()));
                        p < t && (t = p, cc.Vec2.normalize(i, n.clone().subtract(e.clone())))
                    }
                    return t >= r.App.gameData.sceneSize.h && cc.Vec2.normalize(i, r.App.gameData.playerMoverDir.clone()), i
                }, n([p], t)
            }(l.Skill);
        i.Skill_30 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_31: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "7e17eLkIP5JoqaUqmEDbRBJ", "Skill_31");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_31 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._harm = 1, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "harm", {
                    get: function () {
                        return this._harm
                    },
                    set: function (e) {
                        this._harm = e
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, r.App.event.on(s.EGameEvent.ON_BOSS_REMOTE_ATK_PLAYER, this._OnRemoteAtk, this)
                }, t.prototype._OnRemoteAtk = function (e) {
                    this._harm = e.harm, this._OnShoot(e.pos)
                }, t.prototype.customUpdate = function () {
                    var e = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(e.x, e.y);
                    for (var t = 0; t < this._skillNode.length; ++t) {
                        var i = this._skillNode[t],
                            o = i.dir,
                            a = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            n = new cc.Vec2(i.node.x, i.node.y),
                            l = s.Vec2.ZERO.clone();
                        l = n.add(new cc.Vec2(o.x * a, o.y * a)), i.node.setPosition(l.x, l.y);
                        var p = r.App.gameData.playerPos.clone();
                        cc.Vec2.len(l.clone().subtract(p)) > r.App.gameData.outOfRange && this.onDestroyNode(i.index)
                    }
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        e.node.name = s.PREFABS.skill_31_0, r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype._OnShoot = function (e) {
                    for (var t = this, i = this._SkillData.data.property[this._subIndex], o = 0; o < i; ++o) {
                        if (r.App.gameData.endGame || !r.App.ui.IsShow("game")) return;
                        setTimeout(function () {
                            for (var i = 0; i < 12; ++i) {
                                var o = e.clone(),
                                    a = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_31_0), t.node);
                                ++t._skillIndex, a.name = String(t._skillIndex), a.setPosition(o.x, o.y);
                                var n = r.App.skillMgr.SkillConfig[t._skillID].normal,
                                    l = t._SkillData.data.scale[t._subIndex] || 1,
                                    p = Math.trunc(n.width * l),
                                    c = Math.trunc(n.height * l);
                                a.width = Math.max(p, c), a.height = Math.max(p, c);
                                var h = a.Find("img");
                                h.width = p, h.height = c;
                                var u = t.getPos(30 * i),
                                    d = new cc.Vec2(a.x, a.y),
                                    _ = t.getPos(30 * i, 100),
                                    m = d.add(new cc.Vec2(_.x, _.y));
                                a.setPosition(m.x, m.y);
                                var f = -Math.round(180 * Math.atan2(u.x, u.y) / Math.PI);
                                a.angle = f;
                                var g = {
                                    index: t._skillIndex,
                                    dir: u,
                                    red: t._SkillData.red,
                                    collideNum: 0,
                                    sendPos: s.Vec2.ZERO.clone(),
                                    boom: !1,
                                    node: a
                                };
                                t._skillNode.push(g)
                            }
                        }, 200 * o)
                    }
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        o.node.name = s.PREFABS.skill_31_0, r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getPos = function (e, t) {
                    void 0 === t && (t = 1);
                    var i = cc.v2(0, t);
                    return r.App.util.rotatePoint(i, cc.Vec2.ZERO.clone(), e)
                }, n([p], t)
            }(l.Skill);
        i.Skill_31 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_3: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "5ceb5/CEu9JA7n7DxZS/oaR", "Skill_3");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_3 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillIndex = 0, t._subIndex = 0, t._maxWidth = 0, t._maxHeight = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0, this._maxWidth = r.App.gameData.FrameSize.w / 2, this._maxHeight = r.App.gameData.FrameSize.h / 2
                }, t.prototype.customUpdate = function () {
                    var e = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(e.x, e.y);
                    for (var t = 0; t < this._skillNode.length; ++t) {
                        var i = this._skillNode[t],
                            o = i.dir,
                            a = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            n = new cc.Vec2(i.node.x, i.node.y),
                            l = s.Vec2.ZERO.clone();
                        l = n.add(new cc.Vec2(o.x * a, o.y * a)), i.node.setPosition(l.x, l.y), this.onTurn(i)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this.onClear(), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this._SkillData.data.property[this._subIndex], t = this.node.childrenCount; t < e; ++t) {
                        if (r.App.gameData.endGame || !r.App.ui.IsShow("game")) return;
                        var i = r.App.gameData.playerPos.clone(),
                            o = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_3_0), this.node);
                        o.setPosition(i.x, i.y);
                        var a = function () {
                                return 20 - 40 * Math.random()
                            },
                            n = r.App.skillMgr.SkillConfig[this._skillID].normal,
                            l = this._SkillData.data.scale[this._subIndex] || 1,
                            p = Math.trunc(n.width * l),
                            c = Math.trunc(n.height * l);
                        o.width = Math.max(p, c), o.height = Math.max(p, c);
                        var h = o.Find("img");
                        h.width = p, h.height = c, h.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/skill_3");
                        var u = a(),
                            d = a(),
                            _ = new cc.Vec2(u, d);
                        o.angle = this.getAngle(_);
                        var m = s.Vec2.ZERO.clone();
                        cc.Vec2.normalize(m, _);
                        var f = {
                            index: this._skillIndex++,
                            dir: m,
                            red: this._SkillData.red,
                            collideNum: 0,
                            sendPos: i.clone(),
                            boom: !1,
                            node: o
                        };
                        this._skillNode.push(f)
                    }
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, t.prototype.onTurn = function (e) {
                    var t = new cc.Vec2(e.node.x, e.node.y).subtract(r.App.gameData.playerPos.clone()),
                        i = this._maxWidth + -1,
                        o = this._maxHeight + -1;
                    Math.abs(t.x) >= i ? e.dir.x = t.x > 0 ? -Math.abs(e.dir.x) : Math.abs(e.dir.x) : Math.abs(t.y) >= o && (e.dir.y = t.y > 0 ? -Math.abs(e.dir.y) : Math.abs(e.dir.y));
                    var a = this.getAngle(e.dir);
                    a != e.node.angle && (e.node.angle = a, e.collideNum += 1)
                }, t.prototype.getAngle = function (e) {
                    return -Math.round(180 * Math.atan2(e.x, e.y) / Math.PI)
                }, n([p], t)
            }(l.Skill);
        i.Skill_3 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_4: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "5100dLgNb1GlKEm/Oil9GV9", "Skill_4");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_4 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillCD = 0, t._updateTime = 0, t._skillIndex = 0, t._aniFPS = 0, t._actionFPS = 5, t._effFps = 4, t._subIndex = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    for (var t = 0; t < this._skillNode.length; ++t) {
                        var i = (a = this._skillNode[t]).sendPos.clone().add(a.dir.clone().subtract(r.App.gameData.playerPos));
                        a.node.setPosition(i.x, i.y)
                    }
                    if (this._aniFPS += 1, this._aniFPS >= 5) {
                        this._aniFPS = 0;
                        for (var o = 0; o < this._skillNode.length; ++o) {
                            var a;
                            if ((a = this._skillNode[o]).collideNum - 1 >= this._actionFPS) this.onDestroyNode(a.index);
                            else {
                                a.node.Find("img").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (this._SkillData.red ? "skill_4_red_" + a.collideNum : "skill_4_" + a.collideNum));
                                var n = a.collideNum < this._effFps,
                                    s = a.node.Find("eff");
                                n && (s.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (this._SkillData.red ? "skill_4_red_eff_" + a.collideNum : "skill_4_eff_" + a.collideNum))), a.collideNum += 1
                            }
                        }
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.red ? r.App.gameData.skillMaxGrade : this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - r.App.util.getGameInfo(s.GameInfoType.Energy)), this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = r.App.gameData.FrameSize.w - 70, o = 0; o < t; ++o) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            var t = i / 2 - Math.floor(Math.random() * i),
                                o = 600 - Math.floor(1200 * Math.random()),
                                a = new cc.Vec2(t, o),
                                n = e._SkillData.red ? r.App.skillMgr.SkillConfig[e._skillID].red : r.App.skillMgr.SkillConfig[e._skillID].normal,
                                l = e._SkillData.data.scale[e._subIndex] || 1,
                                p = Math.trunc(n.width * l),
                                c = Math.trunc(n.height * l),
                                h = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_4_0), e.node);
                            h.setPosition(a.x, a.y), h.width = 170 * l, h.height = 170 * l;
                            var u = h.Find("img");
                            u.width = 122 * l, u.height = 1285 * l, u.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (e._SkillData.red ? "skill_4_red_0" : "skill_4_0"));
                            var d = h.Find("eff");
                            d.width = p, d.height = c, d.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (e._SkillData.red ? "skill_4_red_eff_0" : "skill_4_eff_0"));
                            var _ = {
                                index: e._skillIndex++,
                                dir: r.App.gameData.playerPos.clone(),
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: a.clone(),
                                boom: !1,
                                node: h
                            };
                            e._skillNode.push(_)
                        }
                    }, o * r.App.gameData.skillDelayTime)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        r.App.pool.putNode(o.node)
                    }
                }, n([p], t)
            }(l.Skill);
        i.Skill_4 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_5: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "dc17cuoSBBE7qgWwBRda1tF", "Skill_5");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_5 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillCD = 0, t._updateTime = 0, t._skillIndex = 0, t._aniFrame = 5, t._aniFPS = 0, t._effFPS = 4, t._boomFPS = 4, t._subIndex = 0, t._flyDist = [], t._frame = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    if (this.node.setPosition(t.x, t.y), this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill()), this._frame += 1, this._aniFPS += 1, this._aniFPS >= this._aniFrame) {
                        this._aniFPS = 0;
                        for (var i = 0; i < this._skillNode.length; ++i) {
                            (a = this._skillNode[i]).collideNum += 1;
                            var o = a.boom ? this._boomFPS : this._effFPS;
                            a.collideNum >= o && (a.collideNum = 0, a.boom && this.onDestroyNode(a.index)), a.boom && (a.node.Find("boom").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/" + (this._SkillData.red, "eff_boom_" + a.collideNum)))
                        }
                    }
                    for (i = 0; i < this._skillNode.length; ++i) {
                        var a;
                        if (0 == (a = this._skillNode[i]).boom) {
                            var n = a.dir,
                                l = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                                p = new cc.Vec2(a.node.x, a.node.y),
                                c = s.Vec2.ZERO.clone();
                            c = p.add(new cc.Vec2(n.x * l, n.y * l)), a.node.setPosition(c.x, c.y);
                            var h = a.red ? a.sendPos.clone() : r.App.gameData.playerPos.clone(),
                                u = cc.Vec2.len(c.clone().subtract(h));
                            u >= this._flyDist[a.index] && this.onBoom(a.index), u > r.App.gameData.outOfRange && this.onDestroyNode(a.index)
                        }
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.red ? r.App.gameData.skillMaxGrade : this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - r.App.util.getGameInfo(s.GameInfoType.Energy)), this._flyDist = [], this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        e.node.name = s.PREFABS.skill_5_0, r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = 0; i < t; ++i) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            var t = r.App.gameData.playerPos.clone(),
                                i = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_5_0), e.node);
                            i.name = String(e._skillIndex), i.setPosition(t.x, t.y);
                            var o = function () {
                                    return 20 - 40 * Math.random()
                                },
                                a = e._SkillData.red ? r.App.skillMgr.SkillConfig[e._skillID].red : r.App.skillMgr.SkillConfig[e._skillID].normal,
                                n = e._SkillData.data.scale[e._subIndex] || 1,
                                l = Math.trunc(a.width * n),
                                p = Math.trunc(a.height * n);
                            i.width = Math.max(l, p), i.height = Math.max(l, p);
                            var c = i.Find("img");
                            r.App.util.SetNodeState(c), c.width = l, c.height = p, c.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/" + (e._SkillData.red, "skill_5_red"));
                            var h = i.Find("boom");
                            r.App.util.SetNodeState(h, !1), h.width = 116, h.height = 116;
                            var u = o(),
                                d = o(),
                                _ = new cc.Vec2(u, d);
                            i.angle = e.getAngle(_);
                            var m = s.Vec2.ZERO.clone();
                            cc.Vec2.normalize(m, _);
                            var f = {
                                index: e._skillIndex++,
                                dir: m,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: t.clone(),
                                boom: !1,
                                node: i
                            };
                            e._flyDist[f.index] = r.App.util.random(100, 300), e._skillNode.push(f)
                        }
                    }, i * r.App.gameData.skillDelayTime)
                }, t.prototype.getAngle = function (e) {
                    return -Math.round(180 * Math.atan2(e.x, e.y) / Math.PI)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        o.node.name = s.PREFABS.skill_5_0, r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getRed = function (e) {
                    for (var t = !1, i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i];
                        if (o.index == e) {
                            t = o.red;
                            break
                        }
                    }
                    return t
                }, t.prototype.getBoomState = function (e) {
                    for (var t = !1, i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i];
                        if (o.index == e) {
                            t = o.boom;
                            break
                        }
                    }
                    return t
                }, t.prototype.onBoom = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode[t],
                            a = this._SkillData.data.scale[this._subIndex] || 1;
                        o.node.width = 170 * a, o.node.height = 170 * a;
                        var n = o.node.Find("img");
                        r.App.util.SetNodeState(n, !1);
                        var s = o.node.Find("boom");
                        r.App.util.SetNodeState(s), s.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (this._SkillData.red, "eff_boom_0")), o.collideNum = 0, o.boom = !0
                    }
                }, n([p], t)
            }(l.Skill);
        i.Skill_5 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_6: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "d1df1OxTWpHtIvubypHuGNb", "Skill_6");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_6 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._imgFrames = 0, t._subIndex = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {}, t.prototype.customUpdate = function () {
                    this._imgFrames += 1, this._imgFrames > 9 && (this._imgFrames = 0);
                    for (var e = 0; e < this.node.childrenCount; ++e) this.node.children[e].Find("img").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/skill_6_" + this._imgFrames)
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.grade - 1, this.onSetSkill()
                }, t.prototype.onEnd = function () {}, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    this._imgFrames = 0, this.node.children.forEach(function (e) {
                        r.App.util.SetNodeState(e, !1)
                    });
                    for (var e = this._SkillData.data.scale[this._subIndex] || 1, t = 0; t < 1; ++t) {
                        var i = s.Vec2.ZERO.clone(),
                            o = this.node.children[t];
                        null == o && (o = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_6_0), this.node)), o.setPosition(i.x, i.y), r.App.util.SetNodeState(o), o.scale = e, o.Find("img").Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Monster/skill_6_" + this._imgFrames)
                    }
                }, n([p], t)
            }(l.Skill);
        i.Skill_6 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill_7: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "46140bT3ZJADaMARUnwL+bO", "Skill_7");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill_7 = void 0;
        var r = e("../App"),
            s = e("../Common/GameType"),
            l = e("./Skill"),
            p = cc._decorator.ccclass,
            c = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._skillID = 0, t._SkillData = null, t._skillNode = [], t._skillCD = 0, t._updateTime = 0, t._atkCount = 0, t._skillIndex = 0, t._subIndex = 0, t
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {
                        return this._SkillData
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onCustomEnable = function () {
                    this.onClear(), this._skillIndex = 0
                }, t.prototype.customUpdate = function (e) {
                    var t = s.Vec2.ZERO.clone().subtract(r.App.gameData.playerPos);
                    this.node.setPosition(t.x, t.y), this._updateTime += e, this._updateTime > this._skillCD && (this._updateTime = 0, this.onSetSkill());
                    for (var i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i],
                            a = o.dir,
                            n = this._SkillData.data.speed[this._subIndex] + r.App.util.getGameInfo(s.GameInfoType.AddSpeed),
                            l = new cc.Vec2(o.node.x, o.node.y),
                            p = s.Vec2.ZERO.clone();
                        p = l.add(new cc.Vec2(a.x * n, a.y * n)), o.node.setPosition(p.x, p.y), this.onTurn(o), o.collideNum > this._atkCount && this.onDestroyNode(o.index)
                    }
                }, t.prototype.onInit = function (e) {
                    this._skillID = e, this._SkillData = r.App.gameData.gameSkillID[e], this._subIndex = this._SkillData.red ? r.App.gameData.skillMaxGrade : this._SkillData.grade - 1, this._updateTime = 0, this._skillCD = Math.max(0, this._SkillData.data.cd[this._subIndex] - r.App.util.getGameInfo(s.GameInfoType.Energy)), this._atkCount = this._SkillData.data.atkCount[this._subIndex], this.onSetSkill()
                }, t.prototype.onEnd = function () {
                    this.onClear()
                }, t.prototype.onClear = function () {
                    for (; this._skillNode.length > 0;) {
                        var e = this._skillNode.pop();
                        e.node.name = s.PREFABS.skill_7_0, r.App.pool.putNode(e.node)
                    }
                }, t.prototype.onUpgradeSkill = function () {
                    this.onInit(this._skillID)
                }, t.prototype.onSetSkill = function () {
                    for (var e = this, t = this._SkillData.data.property[this._subIndex], i = 0; i < t; ++i) setTimeout(function () {
                        if (!r.App.gameData.endGame && r.App.ui.IsShow("game")) {
                            var t = r.App.gameData.playerPos.clone(),
                                i = r.App.pool.GetNode(r.App.res.GetPrefab(s.PREFABS.skill_7_0), e.node);
                            i.name = String(e._skillIndex), i.setPosition(t.x, t.y);
                            var o = function () {
                                    return 20 - 40 * Math.random()
                                },
                                a = e._SkillData.red ? r.App.skillMgr.SkillConfig[e._skillID].red : r.App.skillMgr.SkillConfig[e._skillID].normal,
                                n = e._SkillData.data.scale[e._subIndex] || 1,
                                l = Math.trunc(a.width * n),
                                p = Math.trunc(a.height * n);
                            i.width = Math.max(l, p), i.height = Math.max(l, p);
                            var c = i.Find("img");
                            c.width = l, c.height = p, c.Find(cc.Sprite).spriteFrame = r.App.res.GetImage("Skill/" + (e._SkillData.red ? "skill_7_red" : "skill_7"));
                            var h = s.Vec2.ZERO.clone(),
                                u = e.getCollideVector(t);
                            if (!e._SkillData.red && u.dist < r.App.gameData.FrameSize.h) h = u.vector;
                            else {
                                var d = o(),
                                    _ = o(),
                                    m = new cc.Vec2(d, _);
                                cc.Vec2.normalize(h, m)
                            }
                            var f = {
                                index: e._skillIndex++,
                                dir: h,
                                red: e._SkillData.red,
                                collideNum: 0,
                                sendPos: t.clone(),
                                boom: !1,
                                node: i
                            };
                            e._skillNode.push(f)
                        }
                    }, i * r.App.gameData.skillDelayTime)
                }, t.prototype.onDestroyNode = function (e) {
                    for (var t = -1, i = 0; i < this._skillNode.length; ++i)
                        if (this._skillNode[i].index == e) {
                            t = i;
                            break
                        } if (t >= 0) {
                        var o = this._skillNode.splice(t, 1)[0];
                        o.node.name = s.PREFABS.skill_7_0, r.App.pool.putNode(o.node)
                    }
                }, t.prototype.getCollideVector = function (e) {
                    for (var t = r.App.gameData.FrameSize.h, i = [], o = r.App.gameData.FrameSize.w / 2, a = r.App.gameData.FrameSize.h / 2, n = 0; n < r.App.gameData.monsterClass.length; ++n) {
                        var l = r.App.gameData.monsterClass[n].node,
                            p = new cc.Vec2(l.x, l.y),
                            c = p.clone().subtract(r.App.gameData.playerPos);
                        if (Math.abs(c.x) < o || Math.abs(c.y) < a) {
                            var h = cc.Vec2.len(p.clone().subtract(e.clone()));
                            h < t && (t = h);
                            var u = s.Vec2.ZERO.clone();
                            cc.Vec2.normalize(u, p.clone().subtract(e.clone())), i.push(u)
                        }
                    }
                    return {
                        dist: t,
                        vector: i.length > 0 ? i[Math.floor(Math.random() * i.length)] : s.Vec2.ZERO.clone()
                    }
                }, t.prototype.onTurn = function (e) {
                    var t = new cc.Vec2(e.node.x, e.node.y),
                        i = r.App.gameData.FrameSize.w / 2 + 0,
                        o = r.App.gameData.FrameSize.h / 2 + 0,
                        a = r.App.gameData.playerPos.x - i,
                        n = r.App.gameData.playerPos.x + i,
                        s = r.App.gameData.playerPos.y - o,
                        l = r.App.gameData.playerPos.y + o;
                    if (t.x <= a || t.x >= n || t.y <= s || t.y >= l) {
                        e.collideNum += 1;
                        var p = this.getCollideVector(t);
                        p.dist < r.App.gameData.FrameSize.h ? e.dir = p.vector : t.x <= a || t.x >= n ? e.dir.x *= -1 : (t.y <= s || t.y >= l) && (e.dir.y *= -1)
                    }
                }, t.prototype.getRed = function (e) {
                    for (var t = !1, i = 0; i < this._skillNode.length; ++i) {
                        var o = this._skillNode[i];
                        if (o.index == e) {
                            t = o.red;
                            break
                        }
                    }
                    return t
                }, t.prototype.onCollision = function (e) {
                    if (!this._SkillData.red)
                        for (var t = 0; t < this._skillNode.length; ++t) {
                            var i = this._skillNode[t];
                            if (i.index == e) {
                                i.collideNum += 1;
                                var o = this.getCollideVector(new cc.Vec2(i.node.x, i.node.y));
                                o.dist < r.App.gameData.FrameSize.h && (i.dir = o.vector);
                                break
                            }
                        }
                }, n([p], t)
            }(l.Skill);
        i.Skill_7 = c, cc._RF.pop()
    }, {
        "../App": "App",
        "../Common/GameType": "GameType",
        "./Skill": "Skill"
    }],
    Skill: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "c9f7c2G0wpIj7iyEs7tJ7lt", "Skill");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Skill = void 0;
        var r = cc._decorator.ccclass,
            s = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return a(t, e), Object.defineProperty(t.prototype, "SkillData", {
                    get: function () {},
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.onInit = function () {}, t.prototype.onCustomEnable = function () {}, t.prototype.customUpdate = function () {}, t.prototype.onUpgradeSkill = function () {}, t.prototype.onEnd = function () {}, t.prototype.onSetSkill = function () {}, t.prototype.getRed = function () {
                    return !1
                }, t.prototype.getBoomState = function () {
                    return !1
                }, t.prototype.onBoom = function () {}, t.prototype.onCollision = function () {}, t.prototype.onDestroyNode = function () {}, n([r], t)
            }(cc.Component);
        i.Skill = s, cc._RF.pop()
    }, {}],
    StorageManager: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "369d6doUl9BMKsOREfNltms", "StorageManager"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.StorageMgr = void 0;
        var o = e("../Data/UserData"),
            a = function () {
                function e() {}
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Save = function () {
                    cc.sys.localStorage.setItem(o.UserData.account, JSON.stringify(o.UserData))
                }, e.prototype.Load = function () {
                    var e = cc.sys.localStorage.getItem(o.UserData.account);
                    e && "" != e || (2 == o.UserData.lvState && (o.UserData.level = 16, o.UserData.playerLv = 15, o.UserData.exp = 1750, o.UserData.equipLv = [15, 15, 15, 15, 15, 15, 15, 15, 15], o.UserData.equipLv1 = [2, 2, 2, 2, 2, 2, 2, 2, 2], o.UserData.talentLv = 16, o.UserData.bookUnlockList = [1, 2, 3, 4, 5, 6, 7, 35, 36]), 3 == o.UserData.lvState && (o.UserData.level = 50, o.UserData.playerLv = 50, o.UserData.exp = 99999, o.UserData.gold = 99999, o.UserData.stone = 999, o.UserData.gem = 9999, o.UserData.equipLv = [40, 40, 40, 40, 40, 40, 40, 40, 40], o.UserData.equipLv1 = [4, 4, 4, 4, 4, 4, 4, 4, 4], o.UserData.talentLv = 36, o.UserData.bookUnlockList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40], o.UserData.skinList = [1, 1, 1, 1, 1], o.UserData.giftLimit = {
                        14: 1
                    }, o.UserData.survivalTime = [3600, 3600, 3600], o.UserData.survivalGift = [7, 7, 7]), this.Save(), e = cc.sys.localStorage.getItem(o.UserData.account));
                    var t = JSON.parse(e);
                    for (var i in o.UserData) o.UserData[i] = t[i];
                    var a = Date.now(),
                        n = a - o.UserData.logintime;
                    Math.floor(n / 864e5) >= 1 && (o.UserData.shopLimit = {}), o.UserData.logintime = a
                }, e._instance = null, e
            }();
        i.StorageMgr = a, cc._RF.pop()
    }, {
        "../Data/UserData": "UserData"
    }],
    UI: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "7e37942a1tGkrmesYlFV8P/", "UI"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.UIMgr = void 0;
        var o = e("../Common/GameType"),
            a = e("../Data/GameData"),
            n = e("../Views/ChooseSkill"),
            r = e("../Views/Ending"),
            s = e("../Views/FloatTip"),
            l = e("../Views/Game"),
            p = e("../Views/Loading"),
            c = e("../Views/Result"),
            h = e("../Views/Ruler"),
            u = e("../Views/Select"),
            d = e("../Views/ViewBase"),
            _ = e("./Pool"),
            m = e("./Resource"),
            f = function () {
                function e() {
                    this._views = new Map, this.uiConfig = new Map([
                        ["Select", {
                            order: 3,
                            script: u.Select
                        }],
                        ["Game", {
                            order: 2,
                            script: l.Game
                        }],
                        ["ChooseSkill", {
                            order: 5,
                            script: n.ChooseSkill
                        }],
                        ["Result", {
                            order: 6,
                            script: c.Result
                        }],
                        ["Ending", {
                            order: 7,
                            script: r.Ending
                        }],
                        ["Ruler", {
                            order: 12,
                            script: h.default
                        }],
                        ["FloatTip", {
                            order: 50,
                            script: s.FloatTip
                        }]
                    ]), this._loadingView = null
                }
                return Object.defineProperty(e, "instance", {
                    get: function () {
                        return null === this._instance && (this._instance = new e), this._instance
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.LoadFirstUI = function (e) {
                    var t = this;
                    m.ResourceMgr.instance.LoadFirstUI().then(function (i) {
                        t._loadingView = cc.instantiate(i);
                        var o = t._loadingView.addComponent(p.Loading);
                        t._loadingView.parent = cc.find("Canvas"), t._loadingView.name = "Loading", e && e(o)
                    }).catch(function (e) {
                        console.error(e)
                    })
                }, e.prototype.DestroyFirstUI = function () {
                    this._loadingView.destroy()
                }, e.prototype.Show = function (e) {
                    for (var t = this, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
                    var n = e.substring(0, 1).toLocaleUpperCase(),
                        r = e.substring(1);
                    return e = n + r, new Promise(function (o) {
                        var n;
                        null != t._views.get(e) ? (t._views.get(e).active = !0, t._views.get(e).SetVisible(!0), null === (n = t._views.get(e).getComponent(d.ViewBase)) || void 0 === n || n.OnShow.apply(n, i), o()) : m.ResourceMgr.instance.LoadUI(e).then(function (n) {
                            var r = cc.instantiate(n);
                            r.parent = a.GameData.gameScene.node;
                            var s = t.uiConfig.get(e),
                                l = r.addComponent(s.script);
                            l.viewLevel = s.order, t._views.set(e, r), t._RefreshSiblingIndex(), r.active = !0, r.SetVisible(!0), (null == l ? void 0 : l.register) && (null == l || l.register()), null == l || l.OnShow.apply(l, i), o()
                        })
                    })
                }, e.prototype.IsShow = function (e) {
                    var t = e.substring(0, 1).toLocaleUpperCase(),
                        i = e.substring(1);
                    return e = t + i, !!this._views.get(e) && this._views.get(e).active
                }, e.prototype.Hide = function (e) {
                    for (var t, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
                    var a = e.substring(0, 1).toLocaleUpperCase(),
                        n = e.substring(1);
                    e = a + n, null != this._views.get(e) && (this._views.get(e).active = !1, this._views.get(e).SetVisible(!1), null === (t = this._views.get(e).getComponent(d.ViewBase)) || void 0 === t || t.OnHide(i))
                }, e.prototype.HideAll = function () {
                    this._views.forEach(function (e) {
                        e.active = !1, e.SetVisible(!1)
                    })
                }, e.prototype.ShowFloatTip = function (e) {
                    null == e && (e = ""), this.Show("FloatTip", {
                        content: e
                    })
                }, e.prototype._RefreshSiblingIndex = function () {
                    var e = [];
                    this._views.forEach(function (t) {
                        e.push({
                            view: t,
                            level: t.getComponent(d.ViewBase).viewLevel
                        })
                    }), e.sort(function (e, t) {
                        return e.level - t.level
                    });
                    for (var t = 0; t < e.length; ++t) e[t].view.setSiblingIndex(t + 1)
                }, e.prototype.dialogShow = function (e, t) {
                    return void 0 === t && (t = null), e.opacity = 0, e.scale = 0, cc.tween(e).to(.3, {
                        opacity: 255,
                        scale: 1
                    }, {
                        easing: "backOut"
                    }).call(function () {
                        return t && t()
                    }).start()
                }, e.prototype.showBruiseTxt = function (e, t, i, n) {
                    void 0 === n && (n = !1);
                    var r = e ? "UITxt" : "MonsterTxt",
                        s = a.GameData.gameScene.node.Find("Game/" + r),
                        l = _.PoolMgr.instance.GetNode(m.ResourceMgr.instance.GetPrefab(o.PREFABS.bruiseTxt), s),
                        p = _.PoolMgr.instance.getScriptClass(o.PREFABS.bruiseTxt, o.PREFABS.bruiseTxt, l);
                    p.node.parent = s;
                    var c = String(a.GameData.bruiseTxtNum++);
                    p.name = c, p.script.onCustomEnable(), a.GameData.bruiseTxtClass.push(p), p.script.onInit(c, t, i, n)
                }, e._instance = null, e
            }();
        i.UIMgr = f, cc._RF.pop()
    }, {
        "../Common/GameType": "GameType",
        "../Data/GameData": "GameData",
        "../Views/ChooseSkill": "ChooseSkill",
        "../Views/Ending": "Ending",
        "../Views/FloatTip": "FloatTip",
        "../Views/Game": "Game",
        "../Views/Loading": "Loading",
        "../Views/Result": "Result",
        "../Views/Ruler": "Ruler",
        "../Views/Select": "Select",
        "../Views/ViewBase": "ViewBase",
        "./Pool": "Pool",
        "./Resource": "Resource"
    }],
    UserData: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "68737AtRcpGiKZ1+owo+F0d", "UserData"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.UserData = void 0, i.UserData = {
            account: "test_g",
            password: "",
            lvState: 1,
            channel: "",
            openid: "",
            level: 1,
            gold: 0,
            stone: 0,
            gem: 0,
            exp: 0,
            playerLv: 1,
            online: !1,
            logintime: 0,
            offlinetime: 0,
            name: "\u6e38\u5ba2",
            skin: 1,
            gender: 0,
            country: "",
            province: "",
            city: "",
            isAuth: !1,
            equipLv: [1, 0, 0, 0, 0, 0, 0, 0, 0],
            equipLv1: [1, 1, 1, 1, 1, 1, 1, 1, 1],
            weapon: 1,
            talentLv: 0,
            taskActive: [0, 0, 0, 0, 0, 0],
            taskRewards: [0, 0, 0],
            signRewards: [0, 0, 0, 0, 0, 0, 0],
            shopLimit: {},
            giftLimit: {},
            skinList: [1, 0, 0, 0, 0],
            survivalTime: [0, 0, 0],
            survivalGift: [0, 0, 0],
            bookRewardList: [],
            bookUnlockList: []
        }, cc._RF.pop()
    }, {}],
    Util: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "94a4eVAnhxFKqAGPW900BO3", "Util");
        var o = this;
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.Util = void 0;
        var a = e("../Common/GameType"),
            n = e("../Data/CfgMng"),
            r = e("../Data/GameData"),
            s = e("../Data/UserData"),
            l = e("../Manager/UI");
        cc.Node.prototype.Find = function (e, t) {
            if (void 0 === t && (t = null), "string" == typeof e || "number" == typeof e) {
                "number" == typeof e && (e = e.toString());
                var i = e.split("/");
                if ("string" == typeof e)
                    for (var o = 0; o < i.length; ++o) {
                        var a = i[o].substring(0, 1).toLocaleUpperCase(),
                            n = i[o].substring(1);
                        i[o] = a + n
                    }
                var r = this,
                    s = this;
                for (o = 0; o < i.length; ++o) s = r.getChildByName(i[o]), r = s;
                return null != t ? s.getComponent(t) : s
            }
            if (null === t) return this.getComponent(e)
        }, cc.Node.prototype.SetVisible = function (e) {
            o.opacity = e ? 255 : 0
        }, cc.Node.prototype.GetVisible = function () {
            return o.active
        };
        var p = function () {
            function e() {}
            return Object.defineProperty(e, "instance", {
                get: function () {
                    return null === this._instance && (this._instance = new e), this._instance
                },
                enumerable: !1,
                configurable: !0
            }), e.prototype.Log = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                console.log.apply(console, e)
            }, e.prototype.SetNodeState = function (e, t) {
                void 0 === t && (t = !0), e.active = t
            }, e.prototype.ClearTween = function (e) {
                null !== e && (e.stop(), e = null)
            }, e.prototype.onAlterMaterial = function (e, t) {
                var i;
                null === (i = e.Find(cc.Sprite)) || void 0 === i || i.setMaterial(0, t)
            }, e.prototype.rotatePoint = function (e, t, i) {
                var o = t.x,
                    a = t.y,
                    n = e.x,
                    r = e.y,
                    s = o + (n - o) * Math.cos(i * Math.PI / 180) - (r - a) * Math.sin(i * Math.PI / 180),
                    l = a + (n - o) * Math.sin(i * Math.PI / 180) + (r - a) * Math.cos(i * Math.PI / 180);
                return cc.v2(s, l)
            }, e.prototype.getGameInfo = function (e) {
                if (e == a.GameInfoType.PlayerSpeed) {
                    var t = n.default.getCfgPlayer(r.GameData.playerID).speed,
                        i = t * this.getPasvSkill(a.SkillList.Sneaker) + t;
                    return Math.floor(10 * i) / 10
                }
                if (e == a.GameInfoType.AtkScope) return this.getPasvSkill(a.SkillList.Fuel);
                if (e == a.GameInfoType.AddSpeed) return this.getPasvSkill(a.SkillList.Bullet);
                if (e == a.GameInfoType.Energy) return this.getPasvSkill(a.SkillList.Energy);
                if (e == a.GameInfoType.Absorb) {
                    var o = r.GameData.expDefScope * this.getPasvSkill(a.SkillList.Absorb) + r.GameData.expDefScope;
                    return Math.floor(10 * o) / 10
                }
                return e == a.GameInfoType.RecoverHp ? this.getPasvSkill(a.SkillList.Drink) : e == a.GameInfoType.UpLimitHp ? this.getPasvSkill(a.SkillList.UpLimitHp) : 0
            }, e.prototype.getSkillID = function (e) {
                return r.GameData.gameSkillID.hasOwnProperty(e)
            }, e.prototype.getPasvSkill = function (e) {
                var t = 0;
                if (this.getSkillID(e)) {
                    var i = r.GameData.gameSkillID[e];
                    t = i.data.property[i.grade - 1] || 0
                }
                return t
            }, e.prototype.getShowMonsterID = function () {
                var e = [],
                    t = Object.keys(n.default.getCfgMonsterList());
                for (var i in t) {
                    var o = Number(t[i]),
                        s = n.default.getCfgMonster(t[i]);
                    r.GameData.gameTime >= s.showTime && s.type != a.MonsterType.Boss && e.push(o)
                }
                return e
            }, e.prototype.getSkillList = function (e) {
                var t = [];
                for (var i in r.GameData.gameSkillID)
                    if (~~i < 30) {
                        var o = n.default.getCfgSkill(i);
                        o.skillType == e && t.push(o.ID)
                    } return t
            }, e.prototype.randomFloat = function (e, t) {
                return Math.random() * (t - e) + e
            }, e.prototype.random = function (e, t) {
                return Math.floor(this.randomFloat(e, t))
            }, e.prototype.changeAngle = function (e, t, i) {
                var o = e,
                    a = t,
                    n = i,
                    r = Math.sqrt(o * o + a * a),
                    s = o / r,
                    l = a / r,
                    p = Math.cos(n),
                    c = Math.sin(n),
                    h = l * p + s * c,
                    u = Number((r * (s * p - l * c)).toFixed(2)),
                    d = Number((r * h).toFixed(2));
                return cc.v2(u, d)
            }, e.prototype.countMapQuadrant = function (e, t) {
                var i = a.MapQuadrant.None;
                return e.x > t.x && e.y > t.y ? i = a.MapQuadrant.One : e.x < t.x && e.y > t.y ? i = a.MapQuadrant.Two : e.x < t.x && e.y < t.y ? i = a.MapQuadrant.Three : e.x > t.x && e.y < t.y && (i = a.MapQuadrant.Four), i
            }, e.prototype.secondsFormat = function (e, t) {
                void 0 === t && (t = !0);
                var i = Math.floor(e / 3600),
                    o = Math.floor((e - 3600 * i) / 60),
                    a = e - 3600 * i - 60 * o,
                    n = o < 10 ? "0" + o : "" + o,
                    r = a < 10 ? "0" + a : "" + a;
                return t ? (i < 10 ? "0" + i : "" + i) + ":" + n + ":" + r : n + ":" + r
            }, e.prototype.secondsFormat2 = function (e) {
                return Math.ceil(e / 60)
            }, e.prototype.getRandomSkill = function (e, t) {
                void 0 === t && (t = -1);
                for (var i = [], o = [], s = [], l = [], p = 0, c = Object.keys(n.default.getCfgSkillList()); p < c.length; p++) {
                    var h = c[p],
                        u = n.default.getCfgSkill(h);
                    1 != u.ID && 1 == u.open && (u.skillType == a.SkillType.Accord ? o.push(u.ID) : u.skillType == a.SkillType.Passive ? s.push(u.ID) : u.skillType == a.SkillType.General && l.push(u.ID))
                }
                var d = o,
                    _ = s,
                    m = t >= 0 ? t == a.SkillType.Accord ? d : t == a.SkillType.Passive ? _ : l : d.concat(_),
                    f = [];
                for (var g in m) {
                    var y = m[g];
                    (this.getSkillID(y) ? r.GameData.gameSkillID[y].grade : 0) < r.GameData.skillMaxGrade && f.push(y)
                }
                if (f.length <= 2 && f.push(a.SkillList.Hp), f.length > e)
                    for (var k = 0; k < e; ++k) {
                        var A = Math.floor(Math.random() * f.length),
                            v = f.splice(A, 1)[0];
                        i.push(v)
                    } else i = f;
                return i.length <= 0 && i.push(a.SkillList.Hp), i
            }, e.prototype.GetArrayElement = function (e, t, i) {
                var o = null;
                return 0 == e.length ? o : (e.forEach(function (e) {
                    e[t] && e[t] == i && (o = e)
                }), o)
            }, e.prototype.Time2HHMMSS = function (e) {
                var t, i = Math.floor(e % 60),
                    o = i < 10 ? "0" + i : i + "";
                return t = Math.floor(e / 60) % 60, Math.floor(e / 3600) + ":" + (t < 10 ? "0" + t : t + "") + ":" + o
            }, e.prototype.StartGame = function (e) {
                var t = e || s.UserData.level;
                r.GameData.level = t, r.GameData.hpCoefficient = 1, r.GameData.present = t, r.GameData.isRoleDie = !1, r.GameData.endGame = !1, r.GameData.HpLimitUpNum = 0, l.UIMgr.instance.Hide("Select"), l.UIMgr.instance.Show("Game")
            }, e.prototype.UA = function (e, t) {
                void 0 === t && (t = ""), window.onEventSendUA && window.onEventSendUA(e, t, "minigame")
            }, e.prototype.isEnvirOk = function () {
                return !!window.cc && cc.sys.platform == cc.sys.WECHAT_GAME
            }, e.prototype.isWeChatBrowser = function () {
                var e = navigator.userAgent.toLowerCase();
                return /micromessenger/.test(e)
            }, e._instance = null, e
        }();
        i.Util = p, cc._RF.pop()
    }, {
        "../Common/GameType": "GameType",
        "../Data/CfgMng": "CfgMng",
        "../Data/GameData": "GameData",
        "../Data/UserData": "UserData",
        "../Manager/UI": "UI"
    }],
    ViewBase: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "8ff9eN6XwVIX7j2yNfQ9k7X", "ViewBase");
        var o, a = this && this.__extends || (o = function (e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    })(e, t)
            }, function (e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function (e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(a = e[s]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ViewBase = void 0;
        var r = cc._decorator.ccclass,
            s = function (e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.viewLevel = 0, t
                }
                return a(t, e), t.prototype.register = function () {}, t.prototype.OnShow = function () {}, t.prototype.OnHide = function () {}, n([r], t)
            }(cc.Component);
        i.ViewBase = s, cc._RF.pop()
    }, {}],
    cocosDemo: [function (e, t) {
        "use strict";
        cc._RF.push(t, "0271aK9YIhJtaqgCXLFmJlJ", "cocosDemo"), cc._RF.pop()
    }, {}],
    config: [function (e, t) {
        "use strict";
        cc._RF.push(t, "f120crK1VhBFbvkzs/w8ZNK", "config"), window.IRONSOURCE = !1, window.FACEBOOK = !1, window.UNITY = !1, cc._RF.pop()
    }, {}],
    ironsource: [function (e, t, i) {
        "use strict";
        cc._RF.push(t, "5dfdbuCqHFI64GZNhDcxyyV", "ironsource"), Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var o = function () {
            function e() {}
            return e.prototype.openStoreUrl = function () {
                window.dapi && window.dapi.openStoreUrl()
            }, e.prototype.GameReady = function () {
                window.dapi && (dapi.isReady() ? a() : dapi.addEventListener("ready", a))
            }, e
        }();

        function a() {
            dapi.removeEventListener("ready", a), dapi.getAudioVolume(), dapi.getScreenSize(), dapi.addEventListener("audioVolumeChange", n)
        }

        function n(e) {
            e ? window.startAudio() : window.pauseAudio()
        }
        i.default = new o, cc._RF.pop()
    }, {}],
    "load-external-js": [function (e, t) {
        "use strict";
        cc._RF.push(t, "4084b/lJzJMAYd2fo4BN4wV", "load-external-js"), cc._RF.pop()
    }, {}],
    wechat: [function (e, t) {
        "use strict";
        cc._RF.push(t, "81668PRybFFWLZMWUhkPh04", "wechat"), cc._RF.pop()
    }, {}]
}, {}, ["App", "GameType", "config", "CfgMng", "GameData", "UserData", "Define", "GameApi", "GameUI", "Main", "Ani", "AudioManager", "ColliderManager", "Event", "NativeManager", "Pool", "Resource", "SkillMgr", "StorageManager", "UI", "ironsource", "Keyboard", "Monster", "MonsterHelper", "OtherBruiseTxt", "Player", "Rocker", "Skill", "SkillHelper", "Skill_1", "Skill_19", "Skill_2", "Skill_20", "Skill_21", "Skill_23", "Skill_3", "Skill_30", "Skill_31", "Skill_4", "Skill_5", "Skill_6", "Skill_7", "GameConstant", "Util", "ChooseSkill", "Ending", "FloatTip", "Game", "Loading", "Result", "Ruler", "Select", "ViewBase", "cocosDemo", "load-external-js", "wechat"]);