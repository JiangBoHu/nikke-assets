var Ir = Object.defineProperty;
var Sr = (e, t, n) => t in e ? Ir(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n;
var B = (e, t, n) => Sr(e, typeof t != "symbol" ? t + "" : t, n);
import {
  r as Ds,
  q as De,
  d as Ve,
  g as q,
  i as nt,
  s as we,
  v as Tr,
  n as Jn,
  a as Ls,
  I as yr,
  c as Vt,
  b as Or,
  e as Pr,
  f as Cr,
  h as A,
  j as Rr,
  k as Dr,
  l as Lr,
  m as It,
  o as X,
  p as P,
  t as H,
  u as ee,
  w as te,
  x as St,
  y as b,
  z as je,
  A as ve,
  B as ie,
  C as D,
  G as wr,
  D as ae,
  E as z,
  F as br,
  H as xr,
  J as G,
  K as Ur,
  L as Me,
  M as W,
  N as Be,
  O as Nr,
  P as ws,
  Q as it,
  R as ct,
  S as bs,
  T as ke,
  U as ft,
  V as xs,
  W as fn,
  X as qt,
  Y as Gr,
  Z as kr,
  _ as vn,
  $ as Mr,
  a0 as Vr,
  a1 as be,
  a2 as Xn,
  a3 as Fr,
  a4 as Ft,
  a5 as Br,
  a6 as Hr,
  a7 as $r,
  a8 as Yr,
  a9 as qr,
  aa as zr,
  ab as Tt,
  ac as jr,
  ad as Wr,
  ae as Us,
  af as Kr,
  ag as Qn,
  ah as Jr,
  ai as Xr,
  aj as Qr,
  ak as Zr,
  al as ea,
  am as yt,
  an as ta,
  ao as Ns,
  ap as Ye,
  aq as na,
  ar as vt,
  as as Zn,
  at as sa,
  au as oa,
  av as yn,
  aw as an,
  ax as Ot,
  ay as On,
  az as ra,
  aA as aa,
  aB as ia,
  aC as ca,
  aD as _a
} from "./vendor-DaP1Mbb7.js";

function ap() {
  import.meta.url, import("_").catch(() => 1), async function* () {}().next()
}(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver(o => {
    for (const r of o)
      if (r.type === "childList")
        for (const a of r.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && s(a)
  }).observe(document, {
    childList: !0,
    subtree: !0
  });

  function n(o) {
    const r = {};
    return o.integrity && (r.integrity = o.integrity), o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? r.credentials = "include" : o.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r
  }

  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const r = n(o);
    fetch(o.href, r)
  }
})();
window.STANDALONE_SITE_VERSION = "2.1.2-v4";
window.ERROR_OPERATION_INTERCEPTE_MESSAGE = "Exception operation was intercepted";
window.APP_BUILD_TIME = 1767584775675;
window.setCSSRootVHVariable = () => {
  const e = window.innerHeight / 100;
  document.documentElement.style.setProperty("--vh", e + "px")
};
window.setCSSRootVHVariable();
const la = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
la || window.addEventListener("resize", window.setCSSRootVHVariable);
const ua = (e, t) => {
  if (!(!e || !e.length || !t)) return e.includes(t)
};

function da(e) {
  const t = /[?&](?:(?:lang|language|lang_type|sLanguage|s_language)|lang[^=]*)=([^&]+)/,
    n = e.match(t);
  if (n) return n[1];
  const s = document.cookie.match(/(?:^|;\s*)__ss_storage_cookie_cache_lang__=([^;]*)/);
  return s ? s[1] : "en"
}
const Gs = da(location.href);
document.documentElement.setAttribute("lang", Gs);
const ma = ["ar", "20"];
document.documentElement.setAttribute("dir", ua(ma, Gs) ? "rtl" : "ltr");
const pa = "production";
window.aegis = new Aegis({
  id: "DvZ6rUEwoWdZO2RkO4",
  reportApiSpeed: !0,
  reportAssetSpeed: !0,
  version: window.STANDALONE_SITE_VERSION,
  env: pa,
  spa: !0,
  hostUrl: "https://rumt-sg.com",
  api: {
    apiDetail: !0
  },
  beforeReport: e => e,
  beforeRequest: function (e) {
    if (e.logType === "log" && e.logs) {
      const t = e.logs.msg,
        n = e.logs.errorMsg,
        s = e.logs.level;
      if (t.indexOf(window.ERROR_OPERATION_INTERCEPTE_MESSAGE) > -1 || t.indexOf("must be called with a user gesture") > -1) return !1;
      typeof n > "u" && ["16", "1024"].includes(s) && (e.logs.errorMsg = "")
    }
    return e
  },
  onBeforeRequest: e => e
});
const ga = "modulepreload",
  fa = function (e) {
    return "https://www.blablalink.com/assets/nikke/version/default/" + e
  },
  es = {},
  c = function (t, n, s) {
    return !n || n.length === 0 ? t() : (document.getElementsByTagName("link"), Promise.all(n.map(o => {
      if (o = fa(o), o in es) return;
      es[o] = !0;
      const r = o.endsWith(".css"),
        a = r ? '[rel="stylesheet"]' : "";
      if (document.querySelector('link[href="'.concat(o, '"]').concat(a))) return;
      const i = document.createElement("link");
      if (i.rel = r ? "stylesheet" : ga, r || (i.as = "script", i.crossOrigin = ""), i.href = o, document.head.appendChild(i), r) return new Promise((_, g) => {
        i.addEventListener("load", _), i.addEventListener("error", () => g(new Error("Unable to preload CSS for ".concat(o))))
      })
    })).then(() => t()).catch(o => {
      const r = new Event("vite:preloadError", {
        cancelable: !0
      });
      if (r.payload = o, window.dispatchEvent(r), !r.defaultPrevented) throw o
    }))
  },
  Q = Ds({
    mode: ks(),
    event: void 0,
    state: void 0,
    prompt: va,
    invokable: "onbeforeinstallprompt" in window,
    detectable: "getInstalledRelatedApps" in navigator && navigator.userAgent.toLowerCase().indexOf("android") > -1,
    promptable: !1
  });

function ks() {
  if (document.referrer.startsWith("android-app://")) return "twa";
  if (navigator.standalone) return "standalone";
  const e = ["browser", "standalone", "minimal-ui", "fullscreen", "window-controls-overlay"];
  for (const t of e)
    if (window.matchMedia("(display-mode: ".concat(t, ")")).matches) return t
}
async function va() {
  if (!Q.invokable || !Q.event || Q.state !== "ready") return !1;
  try {
    Q.state = "pending", await Q.event.prompt()
  } catch (t) {
    throw Q.state = "ready", t
  }
  const {
    outcome: e
  } = await Q.event.userChoice;
  return Q.state = e, Q.promptable = !1, e === "accepted"
}
const Ea = Q.invokable && !Q.detectable && window.setTimeout(zt, 600) || -1;

function ha(e) {
  window.clearTimeout(Ea), e.preventDefault(), Q.event = e, Q.state = "ready", Q.promptable = !!Q.event.prompt
}

function zt() {
  Q.state = "installed", Q.promptable = !1
}

function Aa() {
  Q.mode = ks(), Q.mode === "standalone" && zt()
}
Q.invokable && (window.addEventListener("beforeinstallprompt", ha), window.addEventListener("appinstalled", zt));
var Rs;
Q.detectable && ((Rs = navigator.getInstalledRelatedApps) == null || Rs.call(navigator).then(e => {
  e != null && e.length && zt()
}));
window.matchMedia("(display-mode: standalone)").addEventListener("change", Aa);
const En = window.aegis || window.console,
  tt = "lang",
  Re = "gameid",
  Ia = "role_id",
  Sa = "zone_id",
  kt = "area_id",
  Ta = "encodeparam",
  ya = "channelid",
  Oa = {
    lang: tt,
    language: tt,
    lang_type: tt,
    sLanguage: tt,
    s_language: tt,
    gameid: Re,
    gameId: Re,
    game_id: Re
  },
  T = {
    en: "en",
    2: "en",
    vi: "vi",
    11: "vi",
    th: "th",
    10: "th",
    ko: "ko",
    4: "ko",
    fr: "fr",
    6: "fr",
    de: "de",
    7: "de",
    ru: "ru",
    12: "ru",
    tr: "tr",
    13: "tr",
    es: "es-US",
    esUS: "es-US",
    es_us: "es-US",
    "es-US": "es-US",
    8: "es-US",
    16: "es-US",
    eslt: "es-US",
    es_lt: "es-US",
    it: "it",
    9: "it",
    nl: "nl",
    17: "nl",
    ms: "ms",
    my: "ms",
    18: "ms",
    id: "id",
    19: "id",
    ar: "ar",
    20: "ar",
    ja: "ja",
    jp: "ja",
    3: "ja",
    ur: "ur",
    bn: "bn",
    hi: "hi",
    21: "hi",
    zh: "zh",
    zh_cn: "zh",
    zh_hans: "zh",
    "zh-CN": "zh",
    "zh-Hans": "zh",
    CHS: "zh",
    1: "zh",
    "zh-Hans-SG": "zh",
    "zh-HK": "zh-HK",
    zhHK: "zh-HK",
    zh_hk: "zh-HK",
    hk: "zh-HK",
    "zh-hk": "zh-HK",
    "zh-TW": "zh-TW",
    zhTW: "zh-TW",
    zh_tw: "zh-TW",
    tw: "zh-TW",
    CHT: "zh-TW",
    "zh-tw": "zh-TW",
    5: "zh-TW",
    "zh-Hant": "zh-TW",
    pt: "pt-BR",
    "pt-br": "pt-BR",
    pt_br: "pt-BR",
    ptbr: "pt-BR",
    14: "pt-BR",
    15: "pt-BR",
    ptAll: "pt-all",
    uz: "uz"
  },
  Pn = [T.tw, T.en, T.ja, T.ko],
  Pa = {
    [T.zh]: "zh-Hans",
    [T.tw]: "zh-TW",
    [T.en]: "en",
    [T.ja]: "ja",
    [T.ko]: "ko",
    [T.th]: "th",
    [T.es]: "es",
    [T.pt]: "pt",
    [T.tr]: "tr",
    [T.ru]: "ru",
    [T.ar]: "ar",
    [T.id]: "id",
    [T.ms]: "ms"
  },
  Ca = {
    [T.zh]: "zh-Hans",
    [T.tw]: "zh-Hant",
    [T.en]: "en",
    [T.ja]: "ja",
    [T.ko]: "ko",
    [T.th]: "th",
    [T.es]: "es",
    [T.pt]: "pt",
    [T.tr]: "tr",
    [T.ru]: "ru",
    [T.ar]: "ar",
    [T.id]: "id",
    [T.ms]: "ms"
  };
T.tw + "", T.en + "", T.ja + "", T.ko + "", T.th + "", T.es + "", T.tr + "", T.ru + "", T.ar + "", T.id + "", T.pt + "", T.ms + "", T.zh + "";
T.zh + "", T.tw + "", T.en + "", T.ja + "", T.ko + "", T.th + "", T.es + "", T.pt + "", T.tr + "", T.ru + "", T.ar + "", T.id + "", T.ms + "";
T.ja + "", T.ko + "";
const cp = {
    [T.zh]: "zh-cn",
    [T.tw]: "zh-tw",
    [T.en]: "en",
    [T.ja]: "ja",
    [T.ko]: "ko",
    [T.th]: "th",
    [T.es]: "es",
    [T.pt]: "pt",
    [T.tr]: "tr",
    [T.ru]: "ru",
    [T.ar]: "ar",
    [T.id]: "id",
    [T.ms]: "ms"
  },
  de = "__ss_storage_ls_cache",
  Cn = "__ss_storage_window_cache",
  Pt = "__ss_storage_indexdb_cache",
  Ms = "__ss_storage_cookie_cache",
  Ra = "__ss_index_db_name",
  _t = "__ss_object_store_name",
  Et = "".concat(de, "_login_meta__"),
  _p = "".concat(de, "_game_check_in__"),
  Da = "".concat(de, "_game_id__"),
  La = "".concat(de, "_lang__"),
  lp = "".concat(de, "_shiftyhint_v4__"),
  up = "".concat(de, "_shiftylist_hint_v2__"),
  dp = "".concat(de, "_post_detail_comment_sort__"),
  mp = "".concat(de, "_post_compose_union_card_new__"),
  wa = "".concat(de, "_lru__"),
  pp = "".concat(de, "_new_tips__"),
  gp = "".concat(de, "_lip_showed_add_to_screen__"),
  fp = "".concat(de, "_local_saved_regions__"),
  ba = "".concat(de, "_tlog_events_queue__"),
  vp = "".concat(de, "_district_red_dot__"),
  Ep = "".concat(de, "_general_red_dot__"),
  hp = "".concat(de, "_push_notification_interaction_record__"),
  Ap = "".concat(de, "_push_notification_active_popup_record__"),
  Ip = "".concat(de, "_post_compose_switch_letter_paper_red_dot__"),
  Vs = "".concat(Pt, "_cdn_configs__"),
  xa = "".concat(Pt, "_i18n_configs__"),
  Ua = "".concat(Pt, "_version_configs__"),
  Sp = "".concat(Pt, "_history_emojis__"),
  cn = "".concat(Pt, "_history_image_info__"),
  Fs = "".concat(Cn, "_cdn_configs__"),
  Bs = "".concat(Cn, "_i18n_configs__"),
  Na = "".concat(Cn, "_version_configs__"),
  Rn = "".concat(Ms, "_game_id__"),
  Hs = "".concat(Ms, "_lang__"),
  Ga = "lip-user-info",
  ka = e => e.replace(/\?/gi, "&").replace(/^&/, ""),
  Ma = e => e.replace(/#\/.*\?/, ""),
  Va = (e = location.search) => (e.match(/\?/g) || []).length > 1,
  $s = e => {
    const t = decodeURIComponent(e);
    return ka(Ma(t))
  },
  ue = (e = window.location.search) => {
    const t = new URLSearchParams($s(e));
    let n = {};
    return t.forEach((s, o) => {
      n[o] || (n[o] = s)
    }), n
  },
  Fa = e => {
    const t = new URLSearchParams(window.location.search);
    for (const s in e) t.set(s, e[s]);
    const n = "?".concat(t.toString());
    window.history.state.current = window.location.pathname + n, history.replaceState(window.history.state, "", n)
  },
  Ba = e => {
    const t = window.location.href;
    try {
      const n = new URL(t),
        s = De.parse(n.search);
      Object.assign(s, e);
      const o = De.stringify(s);
      n.search = o, window.history.replaceState({}, "", n.toString())
    } catch (n) {}
  },
  Tp = e => {
    const t = new URL(window.location.href),
      n = new URLSearchParams(t.search);
    for (const s in e) e[s] !== void 0 ? n.set(s, e[s].toString()) : n.delete(s);
    return t.search = n.toString(), t.toString()
  },
  Ct = "development",
  Pe = "test",
  We = "pre",
  qe = "prod",
  ts = "https://test-api.blablalink.com",
  Ha = "https://pre-api.blablalink.com",
  $a = "https://api.blablalink.com",
  Ae = e => t => "".concat(e).concat(t),
  Rt = Ae("/user"),
  Ya = Ae("/system"),
  y = Ae("/ugc/proxy/standalonesite"),
  k = Ae("/ugc/direct/standalonesite"),
  rt = Ae("/lip/proxy/lipass/Points"),
  qa = Ae("/lip/direct/lipass/Points"),
  jt = Ae("/lip/proxy/commodity/Commodity"),
  Ys = Ae("/lip/direct/commodity/Commodity"),
  K = Ae("/game/proxy/Game"),
  Dn = Ae("/game/direct/Game"),
  za = Ae("/lip/direct/commodity/Game"),
  qs = Ae("/act/proxy/present/Lipass"),
  Wt = Ae("/game/proxy/Tools"),
  ja = Rt("/Login"),
  Wa = Rt("/Logout"),
  Ka = Rt("/CheckLogin"),
  zs = Rt("/CheckHasLipAccount"),
  Ja = Rt("/GetGameLoginInfo"),
  yp = k("/Dynamics/GetPlateList"),
  Op = k("/Dynamics/GetTagList"),
  Pp = k("/Dynamics/GetDistrictList"),
  js = y("/Dynamics/CreatePost"),
  Ws = y("/Dynamics/CreatePostNew"),
  Cp = y("/Dynamics/UpdatePost"),
  Rp = k("/Dynamics/GetPostList"),
  Dp = k("/Dynamics/GetActivityCollectionList"),
  Lp = k("/Dynamics/GetActivityTime"),
  wp = k("/Dynamics/GetPost"),
  bp = y("/Dynamics/DeletePost"),
  xp = y("/Dynamics/GetPostStar"),
  Ks = y("/Dynamics/PostStar"),
  Up = y("/Dynamics/GetPostCollection"),
  Js = y("/Dynamics/PostCollection"),
  Xa = y("/Dynamics/GetCosSts"),
  Np = y("/Dynamics/GetVideoInfoByURL"),
  Gp = k("/Dynamics/GetPostComments"),
  kp = k("/Dynamics/GetPostCommentsV2"),
  Mp = k("/Dynamics/BatchGetPostCommentReplies"),
  Vp = k("/Dynamics/GetPostCommentReplies"),
  Fp = k("/Dynamics/GetPostComment"),
  Bp = y("/Dynamics/DeletePostComment"),
  Hp = y("/Dynamics/SetCommentTopOrBottom"),
  $p = y("/Dynamics/PostChangeTagBind"),
  Yp = y("/Dynamics/UpdateStatement"),
  Xs = y("/Dynamics/PostComment"),
  qp = k("/Dynamics/GetAllEmoticons"),
  Qs = y("/Dynamics/CommentStar"),
  zp = k("/Dynamics/GetTag"),
  Zs = y("/Dynamics/PostForward"),
  jp = k("/Dynamics/GetUserCommentList"),
  Wp = k("/Dynamics/GetUserPostList"),
  Kp = k("/Dynamics/GetUserPostCollectionList"),
  eo = y("/Dynamics/ContentReport"),
  Jp = y("/Dynamics/MovePost"),
  Xp = k("/Dynamics/SearchTag"),
  Qp = k("/Dynamics/PostPicClickBrowse"),
  Zp = y("/Dynamics/GetActivityPostTags"),
  eg = y("/Dynamics/BatchParseLinks"),
  Qa = y("/Dynamics/GetUserChristmasEgg"),
  Za = k("/Dynamics/GetUserChristmasMaterial"),
  ei = y("/Dynamics/DressUserChristmasMaterial"),
  ti = y("/Dynamics/SaveUserChristmasLayout"),
  ni = y("/Dynamics/GetUserChristmasLayout"),
  si = k("/Dynamics/GetChristmasDailyTask"),
  oi = k("/Dynamics/GetChristmasMaterialAndRewards"),
  ri = k("/Dynamics/GetSecondStageStart"),
  ai = y("/Dynamics/UserGetChristmasEgg"),
  ii = y("/Dynamics/GetSecondTaskCompleted"),
  ci = y("/Dynamics/UserSecondTaskReward"),
  Ln = y("/User/UserCollection"),
  tg = k("/User/GetUserLinks"),
  ng = y("/User/SetUserLinks"),
  sg = k("/User/GetUserPrivacySetting"),
  og = y("/User/SetUserShiftyspadPrivacy"),
  rg = y("/User/UserPrivacySet"),
  ag = y("/User/SetUserMood"),
  _i = k("/User/GetUserFollow"),
  li = k("/User/GetUserFans"),
  ui = k("/User/GetUserProfile"),
  to = y("/User/GetUserInfoNew"),
  di = y("/User/GetIntlGameUserStatus"),
  mi = y("/User/ModifyInfo"),
  pi = y("/User/GetMessage"),
  gi = y("/User/ReadMessageAll"),
  fi = y("/User/UnReadMessage"),
  ig = y("/User/ReadMessage"),
  vi = y("/User/GetUserAvatars"),
  Ei = y("/User/SignPrivacyProtocol"),
  hi = y("/User/GetUserAvatarPendantList"),
  Ai = y("/User/SetUserAvatarPendant"),
  Ii = y("/User/GetUserCoverPhotoList"),
  Si = y("/User/SetUserCoverPhoto"),
  Ti = k("/User/GetUserGamePlayerInfo"),
  yi = y("/User/SetUserGameTag"),
  Oi = k("/User/SearchUser"),
  cg = y("/User/GetUserCommentBubbleList"),
  _g = y("/User/SetUserCommentBubble"),
  lg = k("/Dynamics/GetAllCommentBubbleList"),
  Pi = y("/User/SetBlackUser"),
  Ci = y("/User/GetBlackUserList"),
  Ri = y("/User/SetUserRegions"),
  ug = k("/Dynamics/GetPostShareHtml"),
  dg = k("/Dynamics/TranslateContent"),
  mg = k("/Dynamics/GetCreatorHubTaskList"),
  pg = y("/User/GetCreatorHubUserInfo"),
  gg = k("/Dynamics/GetRecentTasks"),
  fg = y("/User/ChangeSyncStatus"),
  vg = y("/Dynamics/GetMySubmission"),
  Eg = y("/User/BindCreatorHubAccount"),
  hg = y("/User/CreateCreatorCertificationAudit"),
  Ag = k("/User/GetCertificationCondition"),
  Ig = y("/User/GetCreatorAuditList"),
  Sg = k("/User/GetCreatorCertificationList"),
  Tg = y("/User/GetUserRights"),
  yg = y("/Dynamics/SendFriendRequest"),
  Og = K("/SendFriendRequestWithPrivacyPermission"),
  Pg = Dn("/GetCdkRedemption"),
  Cg = K("/GetCdkRedemption"),
  Rg = y("/Dynamics/GetUserBrowserSubscription"),
  Dg = y("/Dynamics/CreateUserBrowserSubscription"),
  Lg = y("/Dynamics/UpdateUserSubscriptionStatus"),
  wg = y("/Dynamics/GetPostDraftList"),
  bg = y("/Dynamics/CreatePostDraft"),
  xg = y("/Dynamics/UpdatePostDraft"),
  Ug = y("/Dynamics/DeletePostDraft"),
  Ng = y("/Dynamics/DeleteUserAllPostDraft"),
  Gg = y("/Dynamics/GetPostDraftDetail"),
  kg = rt("/GetUserPointsList"),
  Di = rt("/GetUserTotalPoints"),
  Li = rt("/DailyCheckIn"),
  wi = rt("/GetUserCollection"),
  bi = rt("/UserCompleteCollection"),
  Mg = Ys("/GetCommodityList"),
  Vg = jt("/GetUserCommodityList"),
  Fg = Ys("/GetCommodityData"),
  xi = jt("/ExchangeCommodity"),
  Bg = jt("/CheckUserCanExchange"),
  Hg = jt("/GetOrderDetail"),
  Ui = K("/ShiftypadBindGameMissionStatus"),
  Ni = K("/OnboardingMissionGiftCollection"),
  Gi = K("/GetRoleList"),
  ki = K("/GetSavedRoleInfo"),
  $g = K("/GetCdkRedemptionHistory"),
  Yg = K("/RecordCdkRedemption"),
  Mi = za("/GetRegionList"),
  qg = Ya("/server_timestamp"),
  Vi = qs("/GetLipBindPresentInfo"),
  Fi = qs("/GetLipBindPresent"),
  Bi = Wt("/GetUserSavedRoleInfo"),
  no = K("/GetUserCharacterDetails"),
  so = K("/GetUserCharacters"),
  Hi = Wt("/GetUserNikkesOrder"),
  $i = Wt("/SaveNikkesOrder"),
  Yi = Wt("/GetNikkesOrder"),
  oo = K("/GetUserProfileBasicInfo"),
  ro = K("/GetUserDailyContentsProgress"),
  ao = K("/GetUserProfileOutpostInfo"),
  qi = K("/GetUnionRaidData"),
  zi = K("/GetUnionRaidLevelInfo"),
  ji = K("/GetUnionRaidDataOfGuildSeason"),
  Wi = K("/GetUnionRaidLevelDataOfGuildSeason"),
  Ki = K("/HasFinishOnboardingMissionList"),
  Ji = K("/AddFinishOnboardingMission"),
  Xi = K("/OnboardingMissionGiftCollection"),
  Qi = qa("/GetTaskListV2"),
  Zi = rt("/GetTaskListWithStatusV2"),
  ec = k("/Dynamics/GetFollowTaskOfficialAccounts"),
  tc = y("/Dynamics/QuicklyFollowAllOfficialAccounts"),
  zg = y("/Dynamics/GetPollOriginalData"),
  jg = k("/Dynamics/GetPollDetail"),
  Wg = y("/Dynamics/UserSelectPollOption"),
  Kg = Dn("/QueryGuildCardsByTourist"),
  Jg = K("/QueryGuildCards"),
  Xg = K("/GetMyGuildInfo"),
  Qg = K("/GetGuildDetail"),
  Zg = K("/JoinGuild"),
  ef = K("/PublishGuildCard"),
  tf = K("/SupportGuild"),
  nf = K("/GetGuildMembers"),
  sf = Dn("/QueryGuildCardSupportersByTourist"),
  of = k("/Dynamics/GetGuildHotPost"),
  rf = y("/User/GetAchievementDetail"),
  af = k("/User/GetUserAchievements"),
  cf = k("/User/GetAchievementTypeList"),
  _f = y("/User/EquipAchievement"),
  lf = k("/User/GetUserEquipAchievement"),
  uf = y("/User/GetUserPostLetterPapers"),
  df = y("/User/SetUserPostLetterPaper"),
  mf = y("/Dynamics/GetTopicPostLetterList"),
  pf = y("/Dynamics/GetUserEasterEggList"),
  gf = y("/Dynamics/TriggerUserEasterEgg"),
  ff = k("/Dynamics/GetCalendarDetail"),
  vf = y("/Dynamics/GetUserSubscribeState"),
  Ef = y("/Dynamics/SetUserSubscribeState"),
  nc = "li-sg",
  sc = "sg",
  ht = "sg",
  ot = "aws-na",
  Ke = "29157",
  Je = "29080",
  oc = "30004",
  rc = "6e1ae55093e18e25695e11433548099e",
  ac = "153011f55ca99902901dbea68fc00cb0",
  ic = "09af79d65d6e4fdf2d2569f0d365739d",
  cc = ["facebook", "google", "apple", "twitter", "line"];
var io = (e => (e.image = "public/image", e.avatar = "public/avatar", e))(io || {}),
  hn = (e => (e.youtu = "youtube", e.youtube = "youtube", e.facebook = "facebook", e.twitch = "twitch", e.twitter = "twitter", e.tiktok = "tiktok", e.youtubeshort = "youtubeshort", e.discord = "discord", e.instagram = "instagram", e.reddit = "reddit", e.line = "line", e.whatsapp = "whatsapp", e))(hn || {}),
  _c = (e => (e.tencent = "tencentcloud", e.awss3 = "awss3", e))(_c || {}),
  Fe = (e => (e.close = "close", e.cancel = "cancel", e.confirm = "confirm", e))(Fe || {}),
  lc = (e => (e.sm = "sm", e.md = "md", e.lg = "lg", e.xl = "xl", e.xxl = "xxl", e))(lc || {}),
  uc = (e => (e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom", e))(uc || {}),
  dc = (e => (e.default = "default", e.primary = "primary", e.warning = "warning", e.danger = "danger", e.success = "success", e))(dc || {}),
  mc = (e => (e.square = "square", e.normal = "normal", e.round = "round", e.mark = "mark", e))(mc || {}),
  pc = (e => (e.undo = "undo", e.loading = "loading", e.error = "error", e.success = "success", e))(pc || {}),
  gc = (e => (e.recommend = "recommend", e.outpost = "outpost", e.nikkeart = "nikkeart", e.creatorhub = "creatorhub", e.event = "event", e.official = "official", e.guides = "guides", e))(gc || {});
const fc = e => new Promise(t => setTimeout(t, e)),
  co = e => {
    if (e) try {
      return JSON.parse(e)
    } catch (t) {
      return
    }
  },
  hf = () => document.documentElement.getAttribute("dir") === "rtl",
  Af = () => /^((?!chrome|android|crios).)*safari/i.test(navigator.userAgent),
  If = () => /^firefox/i.test(navigator.userAgent) || /fxios/i.test(navigator.userAgent),
  _o = e => e ? new URL(e).origin === window.location.origin : !1,
  lo = (e, t) => {
    try {
      return JSON.parse(e)
    } catch (n) {
      return t || e
    }
  },
  vc = () => "indexedDB" in window,
  Ec = (e, t) => ({
    [Ct]: t ? "".concat(ts, "/api/") : "/api/",
    [Pe]: "".concat(ts, "/api/"),
    [We]: "".concat(Ha, "/api/"),
    [qe]: "".concat($a, "/api/")
  })[e || Kt()],
  wn = () => {
    var e;
    return ((e = window.navigator) == null ? void 0 : e.userAgent.toLowerCase().indexOf("intlbrowser")) >= 0
  },
  Ee = () => {
    const e = navigator.userAgent;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
  },
  _n = () => Ee() && window.matchMedia("(orientation: landscape)").matches,
  Sf = () => {
    const e = navigator.userAgent;
    return /iPad|iPhone|iPod/.test(e)
  },
  uo = () => {
    const e = navigator.userAgent;
    return Ee() ? /Android/i.test(e) ? "Android" : /iPhone|iPad|iPod/i.test(e) ? "iOS" : e : "pc_web"
  },
  hc = (e, t, n) => {
    const s = n || "id";
    return (t == null ? void 0 : t.filter(r => !e.some(a => a[s] === r[s]))) || []
  },
  Kt = () => {
    let e = ""; {
      if (location.hostname.match(/^test[\.-]/)) return Pe;
      if (location.hostname.match(/^pre[\.-]/)) return We;
      let [t, n] = window.location.hostname.split("-");
      n || (t = qe), e = t
    }
    return e
  },
  Ac = async (e, t, n) => e ? (t = t || document.head, new Promise((s, o) => {
    const r = document.createElement("script");
    r.src = e, r.onload = s, r.onerror = o, t.appendChild(r)
  })) : "href empty!", Tf = async e => {
    if (!e) return "style empty!";
    const t = document.createElement("style");
    t.setAttribute("type", "text/css"), document.head.appendChild(t), t.appendChild(document.createTextNode(e))
  };

function Ic() {
  const e = t => !!t.find(n => n.test(navigator.userAgent));
  return e([/fbav/i, /fban/i]) ? "facebook" : e([/naver/i, /fban/i]) ? "naver" : e([/bytelo/i, /bytedance/i]) ? "tictok" : e([/microm/i, /wechat/i]) ? "wechat" : e([/vivobrowser/i, /vivo/i]) ? "vivo" : e([/mibrowser/i, /xiaomi/i, /miui/i]) ? "mi" : e([/discord/i]) ? "discord" : e([/kakao/i, /kakaotalk/i]) ? "kakao" : e([/line/i]) ? "line" : e([/instagram/i]) ? "ins" : ""
}
const yf = () => {
    const e = Ic(),
      t = Ee();
    return ["facebook", "line", "ins", "kakao", "naver"].includes(e) ? [] : cc.filter(n => t ? n !== "line" : !0)
  },
  Sc = e => Ve(e * 1e3).format("YYYY-MM-DD"),
  Of = e => {
    const t = Math.floor(e / 3600).toString().padStart(2, "0"),
      n = Math.floor(e % 3600 / 60).toString().padStart(2, "0"),
      s = Math.floor(e % 60).toString().padStart(2, "0");
    return t === "00" ? "".concat(n, ":").concat(s) : "".concat(t, ":").concat(n, ":").concat(s)
  },
  Pf = (e, t) => {
    if (!e) return "0";
    let n = e,
      s = "" + e;
    const o = Math.pow(10, t || 2),
      r = ["K", "M", "B", "T"];
    for (let a = r.length - 1; a >= 0; a--) {
      const i = Math.pow(10, (a + 1) * 3);
      if (i <= n) {
        n = Math.round(n * o / i) / o, n == 1e3 && a < r.length - 1 && (n = 1, a++), s = n + "" + r[a];
        break
      }
    }
    return s
  },
  ns = e => (Object.keys(e).forEach(t => {
    e[t] == null && delete e[t]
  }), e);
var Mt = (e => (e.IN_GAME = "in_game", e.WEB_CREDENTIAL = "web_credential", e.NORMAL = "normal", e))(Mt || {});
const xe = () => {
    const e = ue();
    return wn() && (e[Re] || e.openid && e.token)
  },
  mo = () => {
    const e = ue();
    return xe() ? "in_game" : e.web_credential ? "web_credential" : "normal"
  },
  po = () => mo() === "in_game",
  Cf = e => {
    let t = null;
    try {
      const {
        host: n
      } = new URL(e);
      return Object.keys(hn).forEach(s => {
        n.indexOf(s) > -1 && !t && (t = hn[s])
      }), t
    } catch (n) {
      return t
    }
  },
  Rf = (e, t = /\n/g) => e ? e.replace(t, "<br/>") : "";

function Df(e) {
  const t = [/https:\/\/(?:www|t)\.tiktok\.com\/video\/(\w+)/, /https:\/\/(?:www|t)\.tiktok\.com\/[^\/]+\/video\/(\w+)/, /https:\/\/(?:www|t)\.tiktok\.com\/share\/video\/(\w+)/, /https:\/\/(?:www|t)\.tiktok\.com\/i18n\/share\/video\/(\w+)/];
  for (const n of t) {
    const [, s] = e.match(n) || [];
    if (s) return s
  }
}
async function Lf(e) {
  return await (await fetch("https://www.tiktok.com/oembed?url=".concat(e))).json()
}
const wf = (e, t, n) => {
    const s = q(e, t),
      o = typeof n == "string" ? [n] : n,
      r = o.map(a => ({
        key: a,
        value: q(e, a)
      }));
    return nt(q(e, t)) && we(e, t, !1), we(e, t, !q(e, t)), o.forEach(a => {
      nt(q(e, a)) && we(e, a, 0), we(e, a, q(e, t) ? +q(e, a) + 1 : Math.max(+q(e, a) - 1, 0))
    }), {
      undo: () => {
        nt(s) ? we(e, t, void 0) : we(e, t, s), r.forEach(({
          key: a,
          value: i
        }) => {
          nt(i) ? we(e, a, void 0) : we(e, a, i)
        })
      }
    }
  },
  Tc = e => {
    const t = atob(e.split(",")[1]),
      n = e.split(",")[0].split(":")[1].split(";")[0],
      s = new ArrayBuffer(t.length),
      o = new Uint8Array(s);
    for (let r = 0; r < t.length; r++) o[r] = t.charCodeAt(r);
    return new Blob([s], {
      type: n
    })
  },
  bf = (e, t) => {
    if (t === e.length - 1) return !1;
    const n = e[t],
      s = t + 1;
    return e[s].content_type !== n.content_type
  },
  xf = e => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/[^\s]*)?$/i.test(e),
  yc = async e => {
    const t = [];
    for (const n of e) try {
      const s = await n();
      t.push(s)
    } catch (s) {
      t.push({
        error: s
      })
    }
    return t
  }, Oc = () => navigator.languages != null ? navigator.languages[0] : navigator.language, Uf = e => {
    const t = De.parseUrl(location.href);
    return Object.assign(t.query, {
      from: "share"
    }, e), De.stringifyUrl(t)
  };
async function Pc(e) {
  if (!e) throw new Error("[loadImage] image url is required!");
  return new Promise((t, n) => {
    const s = new Image;
    s.src = e, s.onload = () => t(s), s.onerror = o => n(o)
  })
}
const go = async e => {
  if (!e) throw new Error("image url is required!");
  const t = await Pc(e);
  return {
    width: t.width,
    height: t.height
  }
}, fo = async (e, t = 1) => {
  try {
    return await go(e)
  } catch (n) {
    if (t > 0) return await new Promise(s => setTimeout(s, 100)), fo(e, t - 1);
    throw n
  }
}, vo = e => {
  if (!e) throw new Error("url is required!");
  return e.replace(/\/+$/, "")
}, Nf = (e, t) => {
  if (!e) return t;
  const n = vo(e),
    s = t.startsWith("/") ? t : "/".concat(t);
  return "".concat(n).concat(s)
}, Eo = e => {
  if (!e) throw new Error("url is required!");
  const t = window.location.protocol;
  return /^https?:\/\//i.test(e) ? e : /^\/\//.test(e) ? t + e : t + "//" + e
}, Cc = e => {
  if (!e) return !1;
  e = Eo(e);
  try {
    return new URL(e).origin === window.location.origin
  } catch (t) {
    return !1
  }
}, bn = e => Cc(e) ? "_self" : "_blank", ho = (e, t = bn(e), n = "noopener,noreferrer") => {
  window.open(e, t, n)
}, Gf = (e, t = "light") => {
  const n = p => {
      if (p.startsWith("#")) {
        const m = p.replace("#", "");
        if (m.length === 8) return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16), parseInt(m.slice(6, 8), 16) / 255];
        if (m.length === 6) return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16), 1]
      }
      const d = p.match(/\d*\.?\d+/g);
      if (!d) return [255, 255, 255, 0];
      const f = d.map(Number);
      return f.length === 3 && f.push(1), f[3] > 1 && (f[3] = f[3] / 255), f
    },
    [s, o, r, a] = n(e),
    i = t === "light" ? 255 : 0,
    _ = (p, d) => Math.round(p * d + i * (1 - d)),
    g = _(s, a),
    l = _(o, a),
    v = _(r, a);
  return (g * 299 + l * 587 + v * 114) / 1e3 >= 128 ? "black" : "white"
}, kf = (e, t, n) => {
  if (t < 0 || t >= e.length || n < 0 || n >= e.length) throw new Error("Invalid index");
  const [s] = e.splice(t, 1);
  return e.splice(n, 0, s), e
};

function Mf(e) {
  if (e = Number(e), typeof e != "number" || Number.isNaN(e) || !e) return "";
  const s = Math.floor(e);
  if (s === 0) return "0";
  if (s >= 1e3 * 1e6) return "999m+";
  if (s >= 10 * 1e6) return "".concat(Math.floor(s / 1e6), "m");
  if (s >= 1e6) {
    const o = Math.floor(s / 1e5) / 10;
    return "".concat(o.toFixed(1).endsWith(".0") ? o.toFixed(0) : o.toFixed(1), "m")
  } else {
    if (s >= 10 * 1e3) return "".concat(Math.floor(s / 1e3), "k");
    if (s >= 1e3) {
      const o = Math.floor(s / 100) / 10;
      return "".concat(o.toFixed(1).endsWith(".0") ? o.toFixed(0) : o.toFixed(1), "k")
    } else return "".concat(s)
  }
}
const Rc = e => e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'"),
  Dc = () => {
    var e, t, n, s;
    if (window.getSelection) return !!((e = window.getSelection()) != null && e.toString());
    if (document.getSelection) return !!((t = document.getSelection()) != null && t.toString()); {
      const o = (n = document.selection) == null ? void 0 : n.createRange();
      return !!((s = o == null ? void 0 : o.text) != null && s.toString())
    }
  },
  Vf = async () => {
    try {
      return (await navigator.mediaDevices.enumerateDevices()).some(n => n.kind === "videoinput")
    } catch (e) {
      return !1
    }
  };

function Lc(e, t) {
  if (e === null || t === null) return e === t;
  if (typeof e != typeof t) return !1;
  if (typeof e != "object" || typeof t != "object") return typeof e == typeof t;
  if (Array.isArray(e) !== Array.isArray(t)) return !1;
  const n = r => r instanceof Date ? "Date" : r instanceof RegExp ? "RegExp" : Object.prototype.toString.call(r).slice(8, -1);
  if (n(e) !== n(t)) return !1;
  const s = Object.keys(e),
    o = Object.keys(t);
  return s.length !== o.length ? !1 : s.every(r => r in t ? Lc(e[r], t[r]) : !1)
}
const Ff = () => Tr().split("-").join(""),
  Bf = () => {
    const e = Ve().format("ZZ"),
      t = e[0],
      n = parseInt(e.substring(1, 3), 10).toString();
    return "".concat(t).concat(n)
  },
  wc = e => t => {
    let n = t;
    for (const s of e) try {
      n = s(n)
    } catch (o) {
      throw new Error("Sync pipeline execution failed: ".concat(o instanceof Error ? o.message : String(o)))
    }
    return n
  },
  Hf = e => wc([...e].reverse()),
  Jt = () => {
    const e = r => localStorage.getItem(r),
      t = (r, a) => localStorage.setItem(r, a),
      n = r => localStorage.removeItem(r);
    return {
      getStorage: e,
      setStorage: t,
      removeStorage: n,
      setItemWithExpiry: (r, a, i) => {
        const _ = {
          value: a,
          expiry: i.getTime()
        };
        t(r, JSON.stringify(_))
      },
      getItemWithExpiry: r => {
        const a = e(r);
        if (!a) return null;
        const i = JSON.parse(a);
        return new Date().getTime() > i.expiry ? (n(r), null) : i.value
      }
    }
  },
  xn = () => {
    const {
      getStorage: e,
      setStorage: t
    } = Jt(), n = a => {
      t(Et, typeof a == "string" ? a : JSON.stringify(a)), t(Ga, typeof a == "string" ? a : JSON.stringify(a))
    }, s = () => {
      const a = e(Et);
      return a ? lo(a, {}) : {}
    };
    return {
      setLoginMeta: n,
      getLoginMeta: s,
      getOpenID: () => {
        const a = s();
        return (a == null ? void 0 : a.openid) || (a == null ? void 0 : a.open_id)
      },
      getToken: () => s().token
    }
  },
  Un = (e = Ra) => {
    const t = async a => new Promise((i, _) => {
      const g = indexedDB.open(a);
      g.onupgradeneeded = () => {
        const v = g.result.createObjectStore(_t, {
          keyPath: "id",
          autoIncrement: !0
        });
        v.createIndex("key", "key", {
          unique: !0
        }), v.createIndex("value", "value", {
          unique: !1
        }), v.createIndex("create_time", "create_time", {
          unique: !1
        })
      }, g.onsuccess = () => {
        i(g.result)
      }, g.onerror = () => {
        _(g.error)
      }
    }), n = async a => {
      const i = await t(e);
      return new Promise((_, g) => {
        const u = i.transaction(_t, "readwrite").objectStore(_t).index("key").get(a);
        u.onsuccess = p => {
          const d = p.target.result;
          _(d)
        }, u.onerror = p => {
          g(p)
        }
      })
    }, s = async a => {
      const i = await n(a.key);
      i != null && i.id && Object.assign(a, {
        id: i.id
      }), o(a)
    }, o = async a => {
      (await t(e)).transaction(_t, "readwrite").objectStore(_t).put(Object.assign({
        create_time: Date.now()
      }, a))
    };
    return {
      getCache: n,
      setCache: o,
      updateCache: s,
      staleWhileRevalidate: (a, i) => {
        const {
          handler: _,
          callback: g,
          interval: l
        } = Object.assign({
          handler: Jn,
          callback: Jn,
          interval: 5e3
        }, i);
        return async (...v) => {
          if (!vc()) return await _(...v);
          const u = await n(a),
            p = async () => {
              const m = await _(...v),
                h = {
                  key: a,
                  value: m,
                  create_time: Date.now(),
                  app_version: window.STANDALONE_SITE_VERSION,
                  app_build_time: window.APP_BUILD_TIME
                };
              return u != null && u.id && Object.assign(h, {
                id: u.id
              }), await o(h), m
            };
          return !!(u != null && u.id) && (u == null ? void 0 : u.app_version) === window.STANDALONE_SITE_VERSION && (u == null ? void 0 : u.app_build_time) === window.APP_BUILD_TIME ? (setTimeout(() => {
            p()
          }, l), g(u.value), u.value) : await p()
        }
      }
    }
  },
  {
    getStorage: Ao
  } = Jt();
let ln = "";
const Nn = e => Ls.get(e),
  Io = (e, t, n) => Ls.set(e, t, Object.assign({
    path: "/",
    domain: location.host,
    expires: 365
  }, n)),
  So = e => {
    const t = ue();
    let n = "";
    return Object.entries(Oa).filter(o => o[1] === e).forEach(o => {
      const r = o[0] || "",
        a = (r == null ? void 0 : r.toLowerCase()) || "";
      !n && r && (n = t[r] || t[a])
    }), n
  },
  To = () => {
    const e = So(tt),
      t = e == null ? void 0 : e.toLowerCase();
    return T[t] || T[e]
  },
  _e = e => {
    if (e = e || Pn, ln) return ln;
    const t = To() || Nn(Hs) || Ao(La) || xc() || T.en;
    return ln = e != null && e.includes(t) ? t : T.en
  },
  bc = () => So(Re),
  Le = () => bc() || Nn(Rn) || Ao(Da) || "",
  xc = () => T[Oc()];

function Uc() {
  if (typeof window > "u") return !1;
  const e = document.createElement("canvas");
  if (e.width = 1, e.height = 1, e.toDataURL && e.toDataURL("image/webp").indexOf("data:image/webp") == 0) return !0;
  let t = navigator.userAgent.match(/(Edg|Firefox)\/(\d+)\./);
  if (t) return t[1] === "Firefox" && t[2] >= 65 || t[1] === "Edge" && t[2] >= 18;
  if (t = navigator.userAgent.match(new RegExp("OS X\\s?(?<os>\\d+)?.+ Version\\/(?<v>\\d+\\.\\d+)")), t) {
    const n = window.Intl || {};
    return t.groups.v >= 14 && ((t.groups.os || 99) >= 11 || n.ListFormat != null)
  }
  return !1
}
const Nc = (e, t) => new Promise(n => {
    const s = new Image;
    s.src = "data:image/".concat(e, ";base64,").concat(t), s.onload = () => {
      n(!0)
    }, s.onerror = () => {
      n(!1)
    }
  }),
  Gc = () => Nc("avif", "AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=");
var Gn = (e => (e[e.info = 0] = "info", e[e.banner = 1] = "banner", e[e.announcement = 2] = "announcement", e))(Gn || {});
const ss = "t-sg-community.playerinfinite.com",
  kc = "pre-sg-community.playerinfinite.com",
  Mc = "sg-community.playerinfinite.com",
  $f = "Rewards",
  Yf = "FAQ",
  qf = "RewardsBanner",
  zf = "CheckInBanner",
  yo = "30054",
  Vc = "global",
  Fc = "nikke_stand_alone_site",
  jf = "Home",
  Wf = "Head",
  Bc = "Mission",
  Hc = "Banner",
  os = "16",
  $c = {
    [Ke]: {
      game_id: os,
      area_id: "tw"
    },
    [Je]: {
      game_id: os,
      area_id: "global"
    }
  },
  Yc = e => e === qe ? "https://".concat(Mc) : e === We ? "https://".concat(kc) : "https://".concat(ss),
  qc = e => {
    if (!_o(e)) return e;
    const t = De.parseUrl(e, {
        parseFragmentIdentifier: !0
      }),
      n = ue();
    return Object.assign(t.query, n), De.stringifyUrl(t)
  },
  zc = (e, t) => {
    const {
      jump_link_info: n,
      content_id: s,
      content_type: o,
      video_info: r,
      content_source: a,
      is_group_content: i
    } = e, {
      jump_url: _ = "",
      jump_type: g
    } = n || q(e, "jump_link", {}), l = [5, 6].includes(o) && !!r, v = (a == null ? void 0 : a.source_name) || "";
    if (_ && g === 2 && !l && !["YouTube", "Twitter"].includes(v)) {
      const u = "noopener,noreferrer",
        p = qc(_);
      return (t != null ? t : ho)(p, void 0, u), {
        jump_url: _,
        external_link: !0
      }
    }
    if (g === 3) {
      const [u, p] = _.split("=").map(f => "".concat(f).trim());
      return !u || !p ? {
        content_id: s,
        is_group_content: i
      } : {
        is_group_content: i,
        [u === "parentId" ? "father_content_id" : "content_id"]: p
      }
    }
    return g === 4 ? {
      not_jump: !0
    } : {
      content_id: s,
      is_group_content: i
    }
  },
  jc = e => Object.assign({
    cms_gameid: yo,
    cms_areaid: Vc,
    source_type: Fc,
    cms_lang: _e(),
    custom_cms_url: Yc(Kt())
  }, e),
  Kf = () => {
    const {
      usecookie: e
    } = ue();
    return !!([Ct, Pe, We].includes(Kt()) && !e)
  },
  Oo = e => {
    var s, o;
    const t = wn(),
      n = co(e.ext_info);
    return n ? !(t && !((s = n.game_inner_range) != null && s.find(r => r.value == e.game_id)) || n.game_outer_range && !((o = n.game_outer_range) != null && o.find(r => r.value == e.lang))) : !t
  },
  Po = e => {
    const t = window;
    e = e || (t == null ? void 0 : t.aegis);
    const n = a => a ? "Error: ".concat(JSON.stringify(a), "\nStack: ").concat(a.stack, "\n") : "",
      s = (a, i) => {
        e && e.report({
          msg: a,
          level: e.LogType.AJAX_ERROR,
          ext1: n(i)
        })
      };
    let o;
    return {
      aegis: e || {},
      sendPv: () => {
        if (!e) return;
        const {
          pvUrl: a,
          id: i
        } = e.config, _ = t.location.href + i;
        !a || !_ || _ === o || (e.sendPipeline([(g, l) => {
          l({
            url: "".concat(a),
            type: "pv"
          })
        }], "pv")(null), o = _)
      },
      logAndReportError: s
    }
  },
  Jf = "https://syndication.twitter.com/srv/timeline-profile/screen-name",
  Xf = {
    en: "en",
    ja: "japan",
    ko: "kr"
  },
  Qf = 20,
  Zf = 10,
  ev = 1e3,
  tv = 1e4,
  nv = 60,
  sv = 60,
  Wc = "imgtype=emoji",
  ov = "imgtype=poll",
  rv = 24,
  Kc = 20,
  Oe = {
    EncodedUid: "uid",
    OpenId: "openid",
    NikkeId: "nikke",
    NikkeSkin: "skin_index",
    PageSource: "from",
    PageType: "type",
    Id: "id",
    Index: "index",
    RecommendationType: "recommendation_type",
    PlateType: "plate_type",
    WidgetType: "widget_type"
  },
  av = [...Object.values(Oe)];
var fe = (e => (e.HOME = "/", e.USER = "/user", e.USER_FOLLOWER = "/user/follower", e.USER_FOLLOWING = "/user/following", e.USER_LINK_MANAGE = "/user/links-manage", e.USER_EDIT_LINK = "/user/edit-link", e.USER_EDIT_ACCOUNT = "/user/edit-account", e.USER_EDIT_AVATAR = "/user/edit-avatar", e.USER_EDIT_AVATARFRAME = "/user/edit-avatarframe", e.USER_EDIT_NICKNAME = "/user/edit-nickname", e.USER_EDIT_SIGNATURE = "/user/edit-signature", e.USER_PERSONALIZED = "/user/personalized", e.USER_EDIT_COMMENT_BUBBLE = "/user/edit-comment-bubble", e.USER_ACHIEVEMENTS = "/user/achievements", e.USER_COVERPHOTO = "/user/coverphoto", e.USER_LETTER_PAPER = "/user/letter-paper", e.POST = "/post", e.POST_DETAIL = "/post/detail", e.POST_DETAIL_PREVIEW = "/post/detail/preview", e.POST_COMMENTS = "/post/comments", e.POST_COMPOSE = "/post/compose", e.DRAFTBOX = "/draftbox", e.POINTS = "/points", e.POINTS_FAQ = "/points/faq", e.POINTS_HOME = "/points/home", e.POINTS_RECORD = "/points/record", e.POINTS_ORDER = "/points/order", e.SEARCH = "/search", e.SEARCH_RESULT = "/search/result", e.SETTING = "/setting", e.SETTING_ACCOUNT = "/setting/account", e.SETTING_ABOUT = "/setting/about", e.SETTING_LANGUAGES = "/setting/languages", e.SETTING_BLOCKING = "/setting/blocking", e.SETTING_PRIVATE = "/setting/private", e.SETTING_SHIFTYSPAD_PRIVATE = "/setting/shiftyspad/private", e.SETTING_NOTIFICATIONS = "/setting/notifications", e.NOTIFICATION = "/notification", e.TOPIC = "/topic", e.TOPIC_MANAGE = "/topic/manage", e.LOGIN = "/login", e.LOGOUT = "/logout", e.CDK = "/cdk", e.MISSION = "/mission", e.CHRISTMAS_TREE = "/christmas-tree", e.SQUARE = "/unionrecruitment", e.CREATOR_HUB = "/creatorhub", e.CREATOR_HUB_BIND = "/creatorhub/bind", e.CREATOR_HUB_APPLY = "/creatorhub/apply", e.CREATOR_HUB_RECORDS = "/creatorhub/records", e.LABORATORY = "/laboratory", e.ERROR = "/:pathMatch(.*)*", e.ERROR_NOT_FOUND = "/error/404", e.ERROR_LOGIN_TIPS = "/login/tips", e.UI = "/ui", e.SHIFTYSPAD = "/shiftyspad", e.SHIFTYSPAD_ROOT = "/shiftyspad/home", e.SHIFTYSPAD_NIKKE_DETAIL = "/shiftyspad/nikke", e.DEPRECATED_SHIFTYSPAD_NIKKE_DETAIL = "/shiftyspad/nikke/:id", e.SHIFTYSPAD_UNION_RAID = "/shiftyspad/union-raid", e.SHIFTYSPAD_EDIT_NIKKE_LIST = "/shiftyspad/edit-nikke-list", e.SHIFTYSPAD_NIKKE_LIST = "/shiftyspad/nikke-list", e.SHIFTYSPAD_NIKKE_LIST_ALL = "/shiftyspad/nikke-list/all", e.SHIFTYSPAD_NIKKE_LIST_PLAYER = "/shiftyspad/nikke-list/player", e.SHIFTYSPAD_SCENE = "/shiftyspad/scene-list", e.SHIFTYSPAD_SCENE_MAIN = "/shiftyspad/scene-list/main", e.SHIFTYSPAD_SCENE_SUDDEN = "/shiftyspad/scene-list/sudden", e.SHIFTYSPAD_SCENE_ARCHIVE = "/shiftyspad/scene-list/archive", e.SHIFTYSPAD_SCENE_MAIN_DETAIL = "/shiftyspad/scene-list/main/list", e.SHIFTYSPAD_SCENE_SUDDEN_DETAIL = "/shiftyspad/scene-list/sudden/list", e.SHIFTYSPAD_SCENE_ARCHIVE_LIST = "/shiftyspad/scene-list/archive/list", e.SHIFTYSPAD_SCENE_ATTRACTIVE = "/shiftyspad/scene-list/attractive/:id", e.SHIFTYSPAD_SECTION = "/shiftyspad/scene-list/section/:id", e.UNAUTHORIZED = "/shiftyspad/unauthorized", e.NOTFOUND = "/notfound", e.INFO_DETAIL = "/info/detail", e.INFO_GROUPS = "/info/groups", e.SHIFTYSPAD_NIKKE_COLLECT = "/shiftyspad/collect", e.CALENDAR = "/activity-calendar", e.CALENDAR_SUBSCRIBE = "/activity-calendar/subscribe", e.WIDGET = "/widget", e))(fe || {}),
  me = (e => (e.HOME = "HOME", e.USER = "USER", e.USER_FOLLOWER = "USER_FOLLOWER", e.USER_FOLLOWING = "USER_FOLLOWING", e.USER_LINK_MANAGE = "USER_LINK_MANAGE", e.USER_EDIT_LINK = "USER_EDIT_LINK", e.USER_EDIT_ACCOUNT = "USER_EDIT_ACCOUNT", e.USER_EDIT_AVATAR = "USER_EDIT_AVATAR", e.USER_EDIT_AVATARFRAME = "USER_EDIT_AVATARFRAME", e.USER_EDIT_NICKNAME = "USER_EDIT_NICKNAME", e.USER_EDIT_SIGNATURE = "USER_EDIT_SIGNATURE", e.USER_PERSONALIZED = "USER_PERSONALIZED", e.USER_EDIT_COMMENT_BUBBLE = "USER_EDIT_COMMENT_BUBBLE", e.USER_ACHIEVEMENTS = "/user/achievements", e.USER_COVERPHOTO = "/user/coverphoto", e.USER_LETTER_PAPER = "/user/letter-paper", e.POST = "POST", e.POST_DETAIL = "POST_DETAIL", e.POST_DETAIL_PREVIEW = "POST_DETAIL_PREVIEW", e.POST_COMMENTS = "POST_COMMENTS", e.POST_COMPOSE = "POST_COMPOSE", e.DRAFTBOX = "DRAFTBOX", e.POINTS = "POINTS", e.POINTS_FAQ = "POINTS_FAQ", e.POINTS_HOME = "POINTS_HOME", e.POINTS_RECORD = "POINTS_RECORD", e.POINTS_ORDER = "POINTS_ORDER", e.SEARCH = "SEARCH", e.SEARCH_RESULT = "SEARCH_RESULT", e.SETTING = "SETTING", e.SETTING_ACCOUNT = "SETTING_ACCOUNT", e.SETTING_ABOUT = "SETTING_ABOUT", e.SETTING_LANGUAGES = "SETTING_LANGUAGES", e.SETTING_SHIFTYSPAD_PRIVATE = "SETTING_SHIFTYSPAD_PRIVATE", e.SETTING_PRIVATE = "SETTING_PRIVATE", e.SETTING_NOTIFICATIONS = "SETTING_NOTIFICATIONS", e.SETTING_BLOCKING = "SETTING_BLOCKING", e.NOTIFICATION = "NOTIFICATION", e.TOPIC = "TOPIC", e.TOPIC_MANAGE = "TOPIC_MANAGE", e.LOGIN = "LOGIN", e.LOGOUT = "LOGOUT", e.CDK = "CDK", e.MISSION = "MISSION", e.CHRISTMAS_TREE = "CHRISTMAS_TREE", e.SQUARE = "SQUARE", e.CREATOR_HUB = "CREATOR_HUB", e.CREATOR_HUB_BIND = "CREATOR_HUB_BIND", e.CREATOR_HUB_APPLY = "CREATOR_HUB_APPLY", e.CREATOR_HUB_RECORDS = "CREATOR_HUB_RECORDS", e.ERROR = "ERROR", e.ERROR_NOT_FOUND = "ERROR_NOT_FOUND", e.ERROR_LOGIN_TIPS = "ERROR_LOGIN_TIPS", e.LABORATORY = "LABORATORY", e.UI = "UI", e.SHIFTYSPAD = "SHIFTYSPAD", e.SHIFTYSPAD_ROOT = "SHIFTYSPAD_ROOT", e.SHIFTYSPAD_NIKKE_DETAIL = "SHIFTYSPAD_NIKKE_DETAIL", e.DEPRECATED_SHIFTYSPAD_NIKKE_DETAIL = "DEPRECATED_SHIFTYSPAD_NIKKE_DETAIL", e.SHIFTYSPAD_EDIT_NIKKE_LIST = "SHIFTYSPAD_EDIT_NIKKE_LIST", e.SHIFTYSPAD_UNION_RAID = "/shiftyspad/union-raid", e.SHIFTYSPAD_NIKKE_LIST = "SHIFTYSPAD_NIKKE_LIST", e.SHIFTYSPAD_NIKKE_LIST_ALL = "SHIFTYSPAD_NIKKE_LIST_ALL", e.SHIFTYSPAD_NIKKE_LIST_PLAYER = "SHIFTYSPAD_NIKKE_LIST_PLAYER", e.SHIFTYSPAD_SCENE = "SHIFTYSPAD_SCENE", e.SHIFTYSPAD_SCENE_MAIN = "SHIFTYSPAD_SCENE_MAIN", e.SHIFTYSPAD_SCENE_SUDDEN = "SHIFTYSPAD_SCENE_SUDDEN", e.SHIFTYSPAD_SCENE_ARCHIVE = "SHIFTYSPAD_SCENE_ARCHIVE", e.SHIFTYSPAD_SCENE_MAIN_DETAIL = "SHIFTYSPAD_SCENE_MAIN_DETAIL", e.SHIFTYSPAD_SCENE_SUDDEN_DETAIL = "SHIFTYSPAD_SCENE_SUDDEN_DETAIL", e.SHIFTYSPAD_SCENE_ARCHIVE_LIST = "SHIFTYSPAD_SCENE_ARCHIVE_LIST", e.SHIFTYSPAD_SCENE_ATTRACTIVE = "SHIFTYSPAD_SCENE_ATTRACTIVE", e.SHIFTYSPAD_SECTION = "SHIFTYSPAD_SECTION", e.UNAUTHORIZED = "UNAUTHORIZED", e.NOTFOUND = "NOTFOUND", e.INFO_DETAIL = "INFO_DETAIL", e.INFO_GROUPS = "INFO_GROUPS", e.SHIFTYSPAD_NIKKE_COLLECT = "/shiftyspad/collect", e.CALENDAR = "/activity-calendar", e.CALENDAR_SUBSCRIBE = "/activity-calendar/subscribe", e.WIDGET = "WIDGET", e))(me || {});
const rs = {
    "/": {
      name: "HOME",
      path: "/",
      component: () => c(() => import("./index-HZgF5A8b.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73]))
    },
    "/points": {
      path: "/points",
      children: [{
        name: "POINTS",
        path: "",
        component: () => c(() => import("./index-Dshn4Blu.js"), __vite__mapDeps([74, 75, 1, 5, 6, 76, 4, 7, 8, 9, 22, 23, 24, 55, 54, 33, 21, 43, 44, 15, 77]))
      }, {
        name: "POINTS_HOME",
        path: "/points/home",
        component: () => c(() => import("./index-Dshn4Blu.js"), __vite__mapDeps([74, 75, 1, 5, 6, 76, 4, 7, 8, 9, 22, 23, 24, 55, 54, 33, 21, 43, 44, 15, 77]))
      }, {
        name: "POINTS_FAQ",
        path: "/points/faq",
        component: () => c(() => import("./index-m9B7NraO.js"), __vite__mapDeps([78, 75, 1]))
      }, {
        name: "POINTS_RECORD",
        path: "/points/record",
        component: () => c(() => import("./index-CUiVZ5Zc.js"), __vite__mapDeps([79, 75, 1, 71, 66, 65, 55, 54, 33]))
      }, {
        name: "POINTS_ORDER",
        path: "/points/order",
        component: () => c(() => import("./index-YHO4HpkE.js"), __vite__mapDeps([80, 75, 1]))
      }]
    },
    "/post": {
      path: "/post",
      children: [{
        name: "POST_DETAIL",
        path: "/post/detail",
        component: () => c(() => import("./index-_FNkf0sh.js"), __vite__mapDeps([81, 75, 1, 10, 82, 48, 3, 49, 50, 41, 27, 83, 84, 85, 35, 19, 20, 21, 22, 23, 24, 36, 86, 37, 56, 87, 88, 89, 90, 40, 91, 7, 64, 65, 92, 93, 42, 13, 38, 39, 32, 33, 26, 34, 94, 95, 45, 5, 6, 46, 47, 51, 96, 58, 30, 97, 98, 68, 99, 100, 101, 102, 54, 55, 59, 60, 61, 72, 62, 43, 44, 15, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 29, 117, 118, 119]))
      }, {
        name: "POST_DETAIL_PREVIEW",
        path: "/post/detail/preview",
        component: () => c(() => import("./preview-DY8aV8oA.js"), __vite__mapDeps([120, 75, 1, 83, 84, 85, 35, 19, 20, 21, 22, 23, 24, 36, 86, 37, 27, 56, 87, 88, 89, 90, 40, 91, 7, 64, 65, 92, 93, 42, 13, 38, 39, 32, 33, 26, 34, 94, 95, 29]))
      }, {
        name: "POST_COMPOSE",
        path: "/post/compose",
        component: () => c(() => import("./index-CKj6qh7r.js"), __vite__mapDeps([121, 75, 1, 41, 7, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 91, 84, 86, 64, 65, 122, 32, 33, 100, 103, 104, 105, 117, 118, 54, 123, 124, 125]))
      }, {
        name: "POST_COMMENTS",
        path: "/post/comments",
        component: () => c(() => import("./index-DaAMKfLT.js"), __vite__mapDeps([126, 75, 1, 96, 58, 30, 6, 84, 85, 35, 19, 20, 21, 22, 23, 24, 36, 86, 97, 98, 10, 27, 47, 45, 7, 5, 46, 48, 3, 49, 50, 51, 90, 68, 99, 37, 88, 89, 40, 100, 41, 101, 102, 54, 33, 55]))
      }, {
        name: "DRAFTBOX",
        path: "/draftbox",
        component: () => c(() => import("./index-D1QDUEbr.js"), __vite__mapDeps([127, 1, 75, 128, 55, 54, 33, 107, 68, 27, 114, 52]))
      }]
    },
    "/user": {
      path: "/user",
      children: [{
        name: "USER",
        path: "",
        component: () => c(() => import("./index-DLDU6eU0.js"), __vite__mapDeps([129, 1, 54, 33, 82, 48, 3, 49, 50, 7, 5, 6, 130, 10, 19, 20, 21, 22, 23, 24, 104, 66, 65, 67, 55, 37, 101, 28, 29, 27, 30, 31, 32, 34, 35, 36, 38, 39, 40, 26, 41, 42, 43, 44, 15, 45, 46, 47, 51, 52, 53, 56, 57, 99, 131, 63, 132, 72, 133, 128, 107, 68, 114, 134]))
      }, {
        name: "USER_EDIT_ACCOUNT",
        path: "/user/edit-account",
        component: () => c(() => import("./index-DMOnQEBw.js"), __vite__mapDeps([135, 75, 1, 136, 10]))
      }, {
        name: "USER_EDIT_AVATAR",
        path: "/user/edit-avatar",
        component: () => c(() => import("./index-B5Wv9CNn.js"), __vite__mapDeps([137, 75, 1, 41, 10, 45, 7, 5, 6, 46, 47, 48, 3, 49, 50, 51, 35, 19, 20, 21, 22, 23, 24, 36, 138]))
      }, {
        name: "USER_EDIT_AVATARFRAME",
        path: "/user/edit-avatarframe",
        component: () => c(() => import("./index-CvHnMJeQ.js"), __vite__mapDeps([139, 1, 75, 41, 7, 10, 101, 55, 54, 33]))
      }, {
        name: "USER_EDIT_NICKNAME",
        path: "/user/edit-nickname",
        component: () => c(() => import("./index-Cp6Z9ray.js"), __vite__mapDeps([140, 1, 75, 41]))
      }, {
        name: "USER_EDIT_SIGNATURE",
        path: "/user/edit-signature",
        component: () => c(() => import("./index-DUrIMVPV.js"), __vite__mapDeps([141, 75, 1, 142, 41]))
      }, {
        name: "USER_FOLLOWING",
        path: "/user/following",
        component: () => c(() => import("./index-C9zBTCEy.js"), __vite__mapDeps([143, 55, 54, 33, 1, 75, 144, 41, 10, 48, 3, 49, 50, 68]))
      }, {
        name: "USER_FOLLOWER",
        path: "/user/follower",
        component: () => c(() => import("./index-DG17wFcM.js"), __vite__mapDeps([145, 55, 54, 33, 1, 75, 144, 41, 10, 19, 20, 21, 22, 23, 24, 48, 3, 49, 50, 68]))
      }, {
        name: "USER_LINK_MANAGE",
        path: "/user/links-manage",
        component: () => c(() => import("./index-C5hR9MuS.js"), __vite__mapDeps([146, 1, 75, 130, 48, 3, 49, 50]))
      }, {
        name: "USER_EDIT_LINK",
        path: "/user/edit-link",
        component: () => c(() => import("./index-DzVM1-Ao.js"), __vite__mapDeps([147, 75, 1, 41, 142, 48, 3, 49, 50]))
      }, {
        name: "/user/achievements",
        path: "/user/achievements",
        component: () => c(() => import("./index-CIOP_pJ1.js"), __vite__mapDeps([148, 75, 1, 10, 46, 45, 7, 5, 6, 47, 48, 3, 49, 50, 51, 35, 19, 20, 21, 22, 23, 24, 36, 54, 33, 43, 44, 15, 149]))
      }, {
        name: "/user/coverphoto",
        path: "/user/coverphoto",
        component: () => c(() => import("./index-fhwlKLhF.js"), __vite__mapDeps([150, 1, 75, 41, 133, 7, 101, 55, 54, 33]))
      }, {
        name: "/user/letter-paper",
        path: "/user/letter-paper",
        component: () => c(() => import("./index-BHzTv1-I.js"), __vite__mapDeps([151, 1, 75, 41, 7, 108, 20, 21, 101, 55, 54, 33, 123, 117, 118, 124]))
      }]
    },
    "/search": {
      path: "/search",
      children: [{
        path: "",
        name: "SEARCH",
        component: () => c(() => import("./index-VWmRBXHJ.js"), __vite__mapDeps([152, 1, 11, 12, 13, 7, 39, 40]))
      }, {
        name: "SEARCH_RESULT",
        path: "/search/result",
        component: () => c(() => import("./index-D2AcC3AA.js"), __vite__mapDeps([153, 1, 11, 12, 13, 7, 62, 59, 60, 61, 113, 58, 30, 6, 10, 39, 40, 90, 34, 114, 66, 65, 67, 54, 33, 55, 37, 56, 41, 93, 42, 57]))
      }]
    },
    "/notification": {
      name: "NOTIFICATION",
      path: "/notification",
      component: () => c(() => import("./index-glRg4Lnh.js"), __vite__mapDeps([154, 1, 75, 66, 65, 67, 155, 55, 54, 33, 16, 17, 5, 6, 14, 7, 15, 101, 10, 58, 30, 41, 68, 89, 45, 46, 47, 48, 3, 49, 50, 51, 35, 19, 20, 21, 22, 23, 24, 36, 99, 156])),
      beforeEnter: (e, t, n) => {
        t.name === "HOME" && (e.meta.shouldRefresh = !0), n()
      }
    },
    "/setting": {
      path: "/setting",
      children: [{
        path: "",
        name: "SETTING",
        component: () => c(() => import("./index-bwtBiUv6.js"), __vite__mapDeps([157, 75, 1, 136, 158]))
      }, {
        name: "SETTING_ABOUT",
        path: "/setting/about",
        component: () => c(() => import("./index-BeKNqh_d.js"), __vite__mapDeps([159, 17, 75, 1, 136, 160]))
      }, {
        name: "SETTING_BLOCKING",
        path: "/setting/blocking",
        component: () => c(() => import("./index-DlgMsEkQ.js"), __vite__mapDeps([161, 55, 54, 33, 1, 75, 41, 10, 132, 101, 48, 3, 49, 50]))
      }, {
        name: "SETTING_ACCOUNT",
        path: "/setting/account",
        component: () => c(() => import("./index-DnxwekRT.js"), __vite__mapDeps([162, 1, 75, 160, 23, 24]))
      }, {
        name: "SETTING_PRIVATE",
        path: "/setting/private",
        component: () => c(() => import("./index-B-n0cS6d.js"), __vite__mapDeps([163, 1, 75, 164, 64, 65, 2, 3]))
      }, {
        path: "/setting/shiftyspad/private",
        name: "SETTING_SHIFTYSPAD_PRIVATE",
        component: () => c(() => import("./index-C7VpB1yd.js"), __vite__mapDeps([165, 2, 3, 1, 59, 60, 61, 62, 164, 64, 65, 75]))
      }, {
        name: "SETTING_NOTIFICATIONS",
        path: "/setting/notifications",
        component: () => c(() => import("./index-DMEFmW2I.js"), __vite__mapDeps([166, 1, 75, 164, 64, 65, 2, 3, 16, 17, 5, 6, 14, 7, 15]))
      }, {
        name: "SETTING_LANGUAGES",
        path: "/setting/languages",
        component: () => c(() => import("./index-C6PvgrIj.js"), __vite__mapDeps([167, 1, 75, 12, 13, 41]))
      }]
    },
    "/topic": {
      name: "TOPIC",
      path: "/topic",
      component: () => c(() => import("./index-BW2pmuvS.js"), __vite__mapDeps([168, 1, 75, 59, 60, 61, 62, 28, 29, 27, 10, 30, 6, 31, 32, 33, 34, 35, 19, 20, 21, 22, 23, 24, 36, 37, 38, 39, 40, 26, 41, 42, 43, 7, 44, 15, 45, 5, 46, 47, 48, 3, 49, 50, 51, 52, 53, 54, 92, 93, 13, 55, 56, 57, 169]))
    },
    "/topic/manage": {
      name: "TOPIC_MANAGE",
      path: "/topic/manage",
      component: () => c(() => import("./index-C-jRt7z1.js"), __vite__mapDeps([170, 75, 1, 41, 54, 33]))
    },
    "/ui": {
      name: "UI",
      path: "/ui",
      component: () => c(() => import("./index-CWSCJCmL.js"), __vite__mapDeps([171, 64, 1, 65, 60, 61, 66, 67, 155, 71, 172, 173, 174]))
    },
    "/shiftyspad": {
      path: "/shiftyspad",
      component: () => c(() => import("./App-Cn73EAEQ.js"), __vite__mapDeps([175, 176, 1, 110, 46, 111, 112, 49, 50, 177, 178, 115, 179, 180, 181, 182, 183, 43, 7, 44, 15, 184, 104, 10, 41, 109, 54, 33, 105, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 113, 58, 30, 6, 39, 34, 114, 56, 3, 116, 185, 186, 187, 75, 188, 189, 190, 191])),
      children: [{
        path: "",
        name: "SHIFTYSPAD",
        component: () => c(() => import("./index-DvcS8W3r.js"), __vite__mapDeps([192, 109, 1, 49, 50, 54, 33, 110, 46, 111, 112, 104, 7, 105, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 113, 58, 30, 6, 10, 39, 34, 114, 56, 41, 115, 3, 116, 184, 44, 185, 188, 189, 193, 191]))
      }, {
        path: "/shiftyspad/home",
        name: "SHIFTYSPAD_ROOT",
        component: () => c(() => import("./index-DvcS8W3r.js"), __vite__mapDeps([192, 109, 1, 49, 50, 54, 33, 110, 46, 111, 112, 104, 7, 105, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 113, 58, 30, 6, 10, 39, 34, 114, 56, 41, 115, 3, 116, 184, 44, 185, 188, 189, 193, 191]))
      }, {
        path: "/shiftyspad/nikke",
        name: "SHIFTYSPAD_NIKKE_DETAIL",
        meta: {
          title: "Nikke detail"
        },
        component: () => c(() => import("./index-MjuI4Ix7.js").then(e => e.i), __vite__mapDeps([194, 1, 94, 195, 177, 178, 112, 115, 179, 49, 50, 180, 186, 196, 197, 188, 189, 198, 191]))
      }, {
        path: "/shiftyspad/nikke/:id",
        name: "DEPRECATED_SHIFTYSPAD_NIKKE_DETAIL",
        redirect: e => ({
          query: {
            [Oe.NikkeId]: e.params.id
          },
          name: "SHIFTYSPAD_NIKKE_DETAIL"
        })
      }, {
        path: "/shiftyspad/edit-nikke-list",
        name: "SHIFTYSPAD_EDIT_NIKKE_LIST",
        component: () => c(() => import("./index-CUnFS7Bz.js"), __vite__mapDeps([199, 1, 181, 49, 50, 178, 112, 115, 179, 111, 46, 182, 75, 41, 200]))
      }, {
        path: "/shiftyspad/nikke-list/all",
        name: "SHIFTYSPAD_NIKKE_LIST_ALL",
        component: () => c(() => import("./index-BmM116-S.js"), __vite__mapDeps([201, 1, 177, 178, 112, 115, 179, 49, 50, 180, 111, 64, 65, 62, 196, 181, 46, 182, 176, 110, 183, 202]))
      }, {
        path: "/shiftyspad/union-raid",
        name: "/shiftyspad/union-raid",
        component: () => c(() => import("./index-CNRY13SC.js"), __vite__mapDeps([203, 109, 1, 49, 50, 54, 33, 110, 46, 111, 112, 104, 7, 105, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 113, 58, 30, 6, 10, 39, 34, 114, 56, 41, 115, 3, 116, 75, 70]))
      }, {
        path: "/shiftyspad/nikke-list",
        name: "SHIFTYSPAD_NIKKE_LIST",
        component: () => c(() => import("./index-BmM116-S.js"), __vite__mapDeps([201, 1, 177, 178, 112, 115, 179, 49, 50, 180, 111, 64, 65, 62, 196, 181, 46, 182, 176, 110, 183, 202]))
      }, {
        path: "/shiftyspad/collect",
        name: "/shiftyspad/collect",
        component: () => c(() => import("./index-Dvo99PaZ.js"), __vite__mapDeps([204, 1, 75, 181, 49, 50, 178, 112, 115, 179, 111, 46, 182, 200]))
      }, {
        path: "/shiftyspad/nikke-list/player",
        name: "SHIFTYSPAD_NIKKE_LIST_PLAYER",
        component: () => c(() => import("./index-BmM116-S.js"), __vite__mapDeps([201, 1, 177, 178, 112, 115, 179, 49, 50, 180, 111, 64, 65, 62, 196, 181, 46, 182, 176, 110, 183, 202]))
      }, {
        path: "/shiftyspad/scene-list",
        name: "SHIFTYSPAD_SCENE",
        component: () => c(() => import("./index-CjDdYl1h.js"), __vite__mapDeps([205, 1, 200, 206, 49, 50, 207, 71, 66, 65, 188, 189, 208, 20, 21, 209])),
        children: [{
          path: "/shiftyspad/scene-list/main",
          name: "SHIFTYSPAD_SCENE_MAIN",
          component: () => c(() => import("./index-CjDdYl1h.js"), __vite__mapDeps([205, 1, 200, 206, 49, 50, 207, 71, 66, 65, 188, 189, 208, 20, 21, 209]))
        }, {
          path: "/shiftyspad/scene-list/sudden",
          name: "SHIFTYSPAD_SCENE_SUDDEN",
          component: () => c(() => import("./index-CjDdYl1h.js"), __vite__mapDeps([205, 1, 200, 206, 49, 50, 207, 71, 66, 65, 188, 189, 208, 20, 21, 209]))
        }, {
          path: "/shiftyspad/scene-list/archive",
          name: "SHIFTYSPAD_SCENE_ARCHIVE",
          component: () => c(() => import("./index-CjDdYl1h.js"), __vite__mapDeps([205, 1, 200, 206, 49, 50, 207, 71, 66, 65, 188, 189, 208, 20, 21, 209]))
        }]
      }, {
        path: "/shiftyspad/scene-list/main/list",
        name: "SHIFTYSPAD_SCENE_MAIN_DETAIL",
        props: e => ({
          id: e.query[Oe.Id]
        }),
        component: () => c(() => import("./index-YBezZucM.js"), __vite__mapDeps([210, 206, 1, 49, 50, 200, 195, 94, 211, 188, 189, 212, 191]))
      }, {
        path: "/shiftyspad/scene-list/sudden/list",
        name: "SHIFTYSPAD_SCENE_SUDDEN_DETAIL",
        props: e => ({
          id: e.query[Oe.Id]
        }),
        component: () => c(() => import("./index-8tc8p_-N.js"), __vite__mapDeps([213, 207, 1, 50, 195, 94, 211, 214, 191]))
      }, {
        path: "/shiftyspad/scene-list/archive/list",
        name: "SHIFTYSPAD_SCENE_ARCHIVE_LIST",
        props: e => ({
          id: e.query[Oe.Id]
        }),
        component: () => c(() => import("./index-BwQr1yjX.js"), __vite__mapDeps([215, 1, 208, 20, 21, 50, 54, 33, 216]))
      }, {
        path: "/shiftyspad/scene-list/attractive/:id",
        name: "SHIFTYSPAD_SCENE_ATTRACTIVE",
        meta: {
          title: "todo"
        },
        props: e => ({
          id: e.params.id
        }),
        component: () => c(() => import("./index-CmUeOQ1S.js"), __vite__mapDeps([217, 1, 197, 186, 112, 188, 189, 218]))
      }, {
        path: "/shiftyspad/scene-list/section/:id",
        name: "SHIFTYSPAD_SECTION",
        meta: {
          title: "todo"
        },
        props: e => ({
          id: e.params.id
        }),
        component: () => c(() => import("./index-JyH2ZNmv.js"), __vite__mapDeps([219, 206, 1, 49, 50, 186, 112, 197, 187, 188, 189, 208, 20, 21, 207, 220]))
      }, {
        path: "/shiftyspad/unauthorized",
        meta: {
          title: "route.Unauthorized"
        },
        component: () => c(() => import("./401-B-ZI0YAR.js"), __vite__mapDeps([221, 200, 1]))
      }]
    },
    "/login": {
      name: "LOGIN",
      path: "/login",
      component: () => c(() => import("./index-CPQPlNCQ.js"), __vite__mapDeps([222, 1, 172, 173, 75, 24, 122, 223]))
    },
    "/logout": {
      name: "LOGOUT",
      path: "/logout",
      component: () => c(() => import("./index-CeCi_mMq.js"), __vite__mapDeps([224, 1]))
    },
    "/cdk": {
      name: "CDK",
      path: "/cdk",
      component: () => c(() => import("./index-BxWAFDUa.js"), __vite__mapDeps([225, 75, 1, 54, 33, 55, 142, 226, 41, 10, 104, 19, 20, 21, 22, 23, 24, 43, 7, 44, 15, 227]))
    },
    "/user/personalized": {
      name: "USER_PERSONALIZED",
      path: "/user/personalized",
      component: () => c(() => import("./index-BduM7EDc.js"), __vite__mapDeps([228, 75, 1]))
    },
    "/user/edit-comment-bubble": {
      name: "USER_EDIT_COMMENT_BUBBLE",
      path: "/user/edit-comment-bubble",
      component: () => c(() => import("./index-Dab6UWoE.js"), __vite__mapDeps([229, 1, 55, 54, 33, 75, 10, 97, 98, 41, 7, 101, 47]))
    },
    "/mission": {
      name: "MISSION",
      path: "/mission",
      component: () => c(() => import("./index-DSIV2d2_.js"), __vite__mapDeps([230, 75, 1, 18, 5, 6, 19, 20, 21, 22, 23, 24, 14, 7, 15, 10, 41, 104, 76, 4, 8, 9]))
    },
    "/christmas-tree": {
      name: "CHRISTMAS_TREE",
      path: "/christmas-tree",
      component: () => c(() => import("./index-Dg9DT5gi.js").then(e => e.i), __vite__mapDeps([231, 1, 75, 43, 7, 44, 15, 19, 20, 21, 22, 23, 24, 48, 3, 49, 50, 10, 51, 35, 36, 4, 5, 6, 8, 9, 232])),
      meta: {
        noBottomPadding: !0
      }
    },
    "/unionrecruitment": {
      name: "SQUARE",
      path: "/unionrecruitment",
      component: () => c(() => import("./index-Dd1m9Man.js"), __vite__mapDeps([233, 75, 1, 226, 41, 10, 104, 109, 49, 50, 54, 33, 110, 46, 111, 112, 7, 105, 106, 90, 27, 37, 107, 40, 93, 26, 92, 42, 13, 108, 20, 21, 85, 35, 19, 22, 23, 24, 36, 87, 113, 58, 30, 6, 39, 34, 114, 56, 115, 3, 116, 59, 60, 61, 62, 55, 43, 44, 15, 101]))
    },
    "/creatorhub": {
      name: "CREATOR_HUB",
      path: "/creatorhub",
      component: () => c(() => import("./index-DihZEot2.js"), __vite__mapDeps([234, 55, 54, 33, 1, 75, 101, 131, 63, 41, 64, 65, 31, 32, 34, 35, 19, 20, 21, 22, 23, 24, 36, 37, 38, 39, 40, 26, 27, 106, 90, 107, 93, 92, 42, 13, 108, 85, 87, 223, 188, 189, 235]))
    },
    "/creatorhub/bind": {
      name: "CREATOR_HUB_BIND",
      path: "/creatorhub/bind",
      component: () => c(() => import("./bind-B2jRcjNv.js"), __vite__mapDeps([236, 1, 75, 63, 131, 223]))
    },
    "/creatorhub/apply": {
      name: "CREATOR_HUB_APPLY",
      path: "/creatorhub/apply",
      component: () => c(() => import("./apply-CZ1-_StJ.js"), __vite__mapDeps([237, 75, 1, 7, 63, 131, 188, 189]))
    },
    "/creatorhub/records": {
      name: "CREATOR_HUB_RECORDS",
      path: "/creatorhub/records",
      component: () => c(() => import("./records-DQSRH4RU.js"), __vite__mapDeps([238, 75, 1, 55, 54, 33, 63, 68]))
    },
    "/laboratory": {
      name: "LABORATORY",
      path: "/laboratory",
      component: () => c(() => import("./index-D10Iss-7.js"), __vite__mapDeps([239, 75, 1, 54, 33, 15, 158]))
    },
    "/info/detail": {
      name: "INFO_DETAIL",
      path: "/info/detail",
      component: () => c(() => import("./detail-RFXndni0.js"), __vite__mapDeps([240, 1]))
    },
    "/info/groups": {
      name: "INFO_GROUPS",
      path: "/info/groups",
      component: () => c(() => import("./groups-CmBOP4bP.js"), __vite__mapDeps([241, 1, 55, 54, 33]))
    },
    "/activity-calendar": {
      name: "/activity-calendar",
      path: "/activity-calendar",
      component: () => c(() => import("./index-CUvnoO7_.js"), __vite__mapDeps([242, 1, 75, 49, 50, 7, 8, 43, 44, 15, 243, 54, 33, 244]))
    },
    "/activity-calendar/subscribe": {
      name: "/activity-calendar/subscribe",
      path: "/activity-calendar/subscribe",
      component: () => c(() => import("./subscibe-uD8sANfn.js"), __vite__mapDeps([245, 75, 1, 10, 64, 65, 48, 3, 49, 50, 16, 17, 5, 6, 14, 7, 15, 243]))
    },
    "/widget": {
      name: "WIDGET",
      path: "/widget",
      component: () => c(() => import("./index-C0c31ReJ.js"), __vite__mapDeps([246, 1, 28, 29, 27, 10, 30, 6, 31, 32, 33, 34, 35, 19, 20, 21, 22, 23, 24, 36, 37, 38, 39, 40, 26, 41, 42, 43, 7, 44, 15, 45, 5, 46, 47, 48, 3, 49, 50, 51, 52, 53, 25, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 13, 64, 65, 66, 67, 68, 69, 2, 247]))
    },
    "/error/404": {
      name: "ERROR_NOT_FOUND",
      path: "/error/404",
      component: () => c(() => import("./not-found-Cl7-kkfg.js"), __vite__mapDeps([248, 75, 1]))
    },
    "/login/tips": {
      name: "ERROR_LOGIN_TIPS",
      path: "/login/tips",
      component: () => c(() => import("./login-tips-DFWrMFtW.js"), __vite__mapDeps([249, 75, 1]))
    },
    "/:pathMatch(.*)*": {
      name: "ERROR",
      path: "/:pathMatch(.*)*",
      redirect: "/error/404"
    }
  },
  Jc = Object.keys(rs).map(function (t) {
    return rs[t]
  }),
  Xc = ["HOME", "TOPIC", "NOTIFICATION", "SEARCH_RESULT", "USER", "TOPIC", "POST_DETAIL", "POST_DETAIL_PREVIEW"],
  Co = 20,
  Qc = Co * 1024 * 1024,
  Zc = 20,
  Ro = ["image/png", "image/jpeg", "image/gif", "image/webp"],
  iv = ["image/svg+xml", "image/bmp", "image/tiff", "image/x-icon", "image/vnd.adobe.photoshop", "application/pdf", "image/heic", "image/avif"],
  e_ = Ro.map(e => ".".concat(e.split("/")[1])),
  Do = 5,
  t_ = Do * 1024 * 1024,
  Lo = ["image/webp", "image/png", "image/jpeg", "image/jpg"],
  n_ = Lo.map(e => ".".concat(e.split("/")[1])),
  s_ = ["role_id", "role_name", "area_id", "zone_id", "channelid", "user_name", "os", "ts", "sdk_version", "seq", "encodeparam", "theme", "lang", "gameid", "is_log", "had_reloaded_page", "webid", "version", "nomock"],
  cv = 10;
var kn = (e => (e.router = "router", e.location = "location", e))(kn || {});
const wo = () => {
  const e = n => {
    const s = ue();
    s_.forEach(r => {
      s[r] && !n.query[r] && Object.assign(n.query, {
        [r]: s[r]
      })
    })
  };
  return {
    ensure: (...n) => {
      const [s, o] = n;
      if (s === "location" && o) {
        if (!_o(o)) return o;
        const r = De.parseUrl(o),
          a = Object.assign({
            query: {}
          });
        return Object.assign(a.query, r.query), e(a), Object.assign(r.query, a.query), De.stringifyUrl(r)
      }
      if (s === "router") return e(o), o;
      throw new Error("ensure type error")
    },
    ensureUrlKeepWhiteList: e
  }
};

function o_(e) {
  return e === void 0 ? void 0 : btoa(encodeURIComponent(e))
}

function r_(e) {
  return e === void 0 ? void 0 : decodeURIComponent(atob(e))
}

function a_(e) {
  return e ? !!e.match(/^[0-9]{5}-[0-9]{9,30}$/) : !0
}
const i_ = ["error", "warn", "log", "info"];

function bo(e, ...t) {}

function Xt(e) {
  return i_.reduce((t, n) => (t[n] = bo.bind(console, n, e), t), {})
}
Xt.level = e => {};
bo.level = Xt.level;
const xo = ue(),
  as = e => {
    const {
      gameid: t,
      env: n
    } = e;
    let s = n || xo.env;
    s === Ct && (s = Pe);
    const o = {
      [Je]: {
        [Pe]: "224ae6b9-8327-48e0-a1fe-4c824c00707b",
        [We]: "0e02c79c-da29-468a-9b63-a2b6a7624a44",
        [qe]: "0e02c79c-da29-468a-9b63-a2b6a7624a44"
      },
      [Ke]: {
        [Pe]: "2a1212cb-a7d1-4226-ab3e-c955a7c74039",
        [We]: "a417cc07-98a5-42f8-b6e1-6ab44bb06c5c",
        [qe]: "a417cc07-98a5-42f8-b6e1-6ab44bb06c5c"
      }
    } [t];
    return q(o, s, q(o, qe))
  },
  Uo = () => ({
    [ot]: {
      env: is(ot),
      gameID: Je,
      appID: ic,
      webID: as({
        gameid: Je
      })
    },
    [ht]: {
      env: is(ht),
      gameID: Ke,
      appID: ac,
      webID: as({
        gameid: Ke
      })
    },
    [nc]: {
      env: sc,
      gameID: oc,
      appID: rc
    }
  }),
  No = e => {
    const t = Uo();
    for (const [n, s] of Object.entries(t))
      if (s.gameID === e) return s;
    return t[ot]
  },
  _v = e => Uo()[e || ot],
  is = e => {
    let t = xo.env;
    if (t) return t;
    const n = Kt();
    return t = e === ht ? ht : ot, {
      [Pe]: t,
      [We]: t,
      [qe]: t
    } [n] || t
  };

function Go(e) {
  const t = async () => {
    window.IntlgameAccountApi || await Ac("https://common-web.intlgame.com/sdk-cdn/account-api/latest/index.umd.js")
  };
  return {
    getAccountSdk: async s => {
      await t();
      const o = Object.assign({}, e, s, {
        gameID: Number(e.gameID)
      });
      return new Or(o)
    }
  }
}
var c_ = (e => (e.loading = "loading", e.rendered = "rendered", e.logined = "logined", e.registered = "registered", e))(c_ || {});
const lv = e => {
    let t = e;
    return {
      login: async (o, r) => {
        const a = _e(),
          i = new yr(Vt(t));
        r("rendered", null), i.on("onRegister", v => {
          r("registered", v)
        });
        const {
          sdk: _
        } = await i.loadSDK(), g = t.config.langType || Pa[a];
        _.changeLanguage(g);
        const l = await i.login(o);
        r("logined", l)
      },
      setLoginPopConfig: o => {
        Object.assign(t, o)
      }
    }
  },
  Qt = (e = ue()) => ({
    to: location.pathname,
    ...e
  }),
  __ = Xt("[router:logger]"),
  {
    ensure: l_
  } = wo(),
  le = Pr({
    history: Cr(),
    routes: Jc
  }),
  u_ = le.back,
  d_ = le.push;
let An = [1, 2].includes(history.length) ? 1 : history.length,
  In = A(!1);
le.push = async e => (An++, d_(e));
le.back = () => {
  const {
    back: e
  } = le.options.history.state;
  if (__.log("back", e), An--, An && e) return u_();
  le.push({
    name: me.HOME
  })
};
const m_ = e => {
  const {
    url_game_id: t,
    cache_game_id: n
  } = e;
  return t && n ? t === n : !0
};
le.beforeEach((e, t, n) => {
  e.meta.from = t, In.value || (e.meta.needRefresh = !0), In.value = !1;
  const s = {
      ...e.query
    },
    o = s[Re],
    r = Nn(Rn);
  if (!po() && !m_({
      url_game_id: o,
      cache_game_id: r
    }) && e.name !== me.LOGIN) return n({
    path: fe.LOGIN,
    query: Qt(s)
  });
  l_(kn.router, e);
  const a = [Oe.EncodedUid, Oe.OpenId];
  if (e.matched.find(i => i.path === fe.SHIFTYSPAD) && a.forEach(i => {
      var _;
      (_ = t.query) != null && _[i] && e.query && (e.query[i] = t.query[i])
    }), a.forEach(i => {
      var _, g;
      (_ = e.query) != null && _[i] && typeof ((g = e.query) == null ? void 0 : g[i]) == "string" && a_(e.query[i]) && (e.query[i] = o_(e.query[i]))
    }), !Rr(s, e.query)) return n(e);
  n()
});
le.options.history.listen((e, t, n) => {
  In.value = n.direction === "back"
});

function p_(e) {
  const t = Dr();
  t && Object.assign(t.proxy, e)
}
const ko = _e(Pn),
  g_ = (e, t) => {
    (Array.isArray(t) ? t : [t]).forEach(({
      name: s,
      value: o
    }) => {
      e.setAttribute(s, o)
    })
  },
  Mo = e => {
    const t = document.querySelector("html");
    g_(t, e)
  },
  f_ = () => ["ar"].includes(ko) ? "rtl" : "ltr",
  v_ = () => {
    Mo({
      name: "lang",
      value: ko
    })
  },
  E_ = () => {
    Mo({
      name: "dir",
      value: f_()
    })
  },
  uv = (e, t) => {
    const s = Zt(e).querySelectorAll("img"),
      o = [];
    return s.forEach(r => {
      t && r.closest(".".concat(t)) || o.push(r.getAttribute("src") || "")
    }), o.filter(Boolean)
  },
  dv = e => {
    const t = document.createElement("div");
    return t.innerHTML = e, t.innerText || t.textContent || ""
  },
  mv = (e, t) => {
    const s = new DOMParser().parseFromString(e, "text/html");
    return s.querySelectorAll(t.toLocaleLowerCase()).forEach(r => r.remove()), s.body.innerHTML
  };

function pv(e) {
  return /^data:image\/[^;]+;base64,/.test(e)
}

function gv(e) {
  return e === "//:0" || e.startsWith("file:") || !!e.match(/^[a-zA-Z]:\\/)
}

function Vo(e) {
  const t = /^data:image\/([a-zA-Z0-9]+);base64,/.exec(e);
  return t && t[1] && t[1].toLowerCase() || ""
}

function Zt(e) {
  return new DOMParser().parseFromString(e, "text/html")
}

function fv(e, t = "<p></p>") {
  const n = Zt(e);
  return n.querySelectorAll("img").forEach(o => {
    const r = document.createRange().createContextualFragment(t);
    for (; r.firstChild;) o.replaceWith(r.firstChild)
  }), n.body.innerHTML
}
const vv = (e, t = "p") => {
    const n = Zt(e);
    return n.querySelectorAll(t).forEach(o => {
      o.innerHTML === "" && o.remove()
    }), n.body.innerHTML
  },
  Ev = e => e.replace(/(&nbsp;)+/g, function (t) {
    return t.length > 6 ? t.slice(0, -6) + " " : " "
  }),
  h_ = e => {
    const t = Vo(e) || "",
      n = Tc(e);
    return new File([n], "".concat(Math.random(), ".").concat(t), {
      type: "image/".concat(t)
    })
  },
  Fo = window,
  Mn = _e(Pn),
  A_ = "".concat(xa).concat(Mn),
  {
    staleWhileRevalidate: I_
  } = Un(),
  S_ = I_(A_, {
    async handler(e) {
      e = e || Mn;
      const t = () => c(() => import("./en-655U4svQ.js"), __vite__mapDeps([])),
        n = () => c(() => import("./ja-BKrMO85-.js"), __vite__mapDeps([])),
        s = () => c(() => import("./ko-u29MmMfG.js"), __vite__mapDeps([])),
        o = () => c(() => import("./zh-iIuqBJO-.js"), __vite__mapDeps([])),
        r = () => c(() => import("./zh-TW-BxTZtm7K.js"), __vite__mapDeps([])),
        a = {
          [T.en]: t,
          [T.ja]: n,
          [T.zh]: o,
          [T.tw]: r,
          [T.ko]: s
        } [e] || t,
        [i] = await Promise.all([a()]);
      return Object.assign(i.default)
    },
    callback(e) {
      Fo[Bs] = e
    }
  }),
  T_ = async (e, t) => {
    const n = Mn,
      s = Fo[Bs] || await S_(n);
    e.global.setLocaleMessage(n, s), e.global.locale.value = n, v_(), E_()
  }, Vn = Lr({
    legacy: !1,
    locale: _e(),
    silentTranslationWarn: !0,
    missingWarn: !1,
    globalInjection: !0,
    warnHtmlMessage: !1
  });
T_(Vn);
const w = Vn.global.t,
  y_ = {
    mounted(e) {
      const t = e.parentNode;
      if (!t) return;
      const n = t.getBoundingClientRect().width;
      if (!n) return;
      const s = e.offsetWidth;
      let o = n / s;
      o = Math.min(o, 1);
      const i = window.getComputedStyle(e).fontSize.replace("px", ""),
        _ = Number(i);
      if (!isNaN(_)) {
        const g = _ * o;
        g < 12 ? e.style.zoom = o * .9 : e.style.fontSize = g + "px"
      }
    }
  },
  O_ = It("loading", () => {
    const e = A(!0),
      t = A("loading...");

    function n(s, o) {
      e.value = s, t.value = o || "".concat(w("loading"), "...")
    }
    return {
      loading: e,
      content: t,
      showLoading: n
    }
  }),
  P_ = {
    mounted(e) {
      const t = e.parentNode;
      if (!t) return;
      const n = t.getBoundingClientRect().height;
      if (!n) return;
      const s = e.offsetHeight;
      let o = n / s;
      o = Math.min(o, 1);
      const i = window.getComputedStyle(e).fontSize.replace("px", ""),
        _ = Number(i);
      if (!isNaN(_)) {
        const g = _ * o;
        g <= 12 ? e.style.transform = "scale(".concat(o * .9, ")") : e.style.fontSize = g + "px"
      }
    }
  },
  C_ = {
    mounted(e) {
      e.addEventListener("click", () => {
        $e.log("levelup");
        const t = document.createElement("span");
        t.className = "level-up", t.style.position = "absolute";
        const n = document.documentElement.scrollTop || document.body.scrollTop,
          s = e.getBoundingClientRect();
        t.style.top = s.top - s.height * .5 + n + "px", t.style.left = s.left + s.width * .2 + "px", document.body.appendChild(t), setTimeout(() => {
          document.body.removeChild(t)
        }, 1200)
      })
    }
  },
  R_ = {
    mounted(e) {
      e.addEventListener("click", () => {
        $e.log("levelup");
        const t = document.createElement("span");
        t.className = "level-down", t.style.position = "absolute";
        const n = document.documentElement.scrollTop || document.body.scrollTop,
          s = e.getBoundingClientRect();
        t.style.top = s.top - s.height * .5 + n + "px", t.style.left = s.left + s.width * .2 + "px", document.body.appendChild(t), setTimeout(() => {
          document.body.removeChild(t)
        }, 1200)
      })
    }
  },
  D_ = {
    mounted(e, t) {
      if (_e() !== "en") {
        let n = 2;
        typeof t.value == "number" && !isNaN(t.value) && (n = t.value), e.classList.add("pt-[".concat(n, "px]"))
      }
    }
  };

function L_(e) {
  e.directive("autofontsize", y_), e.directive("autofontsizeheight", P_), e.directive("levelup", C_), e.directive("leveldown", R_), e.directive("fontfix", D_)
}
const w_ = "https://www.blablalink.com/assets/nikke/version/default/assets/icon-ellipse-XO7ZPQYO.png",
  b_ = {
    key: 0,
    src: w_,
    class: "w-[25px] h-[25px] object-contain common-rotate"
  },
  He = X({
    __name: "index",
    props: {
      ghost: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      type: {
        default: "secondary"
      },
      shape: {
        default: "default"
      },
      size: {
        default: "md"
      },
      linear: {
        type: Boolean,
        default: !1
      },
      loading: {
        type: Boolean,
        default: !1
      }
    },
    emits: ["click"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        s = t,
        o = P(() => n.disabled ? "text-[color:var(--text-4)] bg-[color:var(--fill-2)]" : n.type === "primary" ? "text-[color:var(--color-white)] bg-[color:var(--brand-1)]" : n.type === "secondary" ? "text-[var(--brand-1)] bg-[color:var(--op-fill-white)]" : n.type === "error" ? "text-[color:var(--color-white)] bg-[color:var(--error)]" : "text-[var(--text-3)]");
      return (r, a) => (b(), H("div", {
        class: ee(["flex cursor-pointer justify-center h-[40px] p-[5px] text-[length:14px] leading-[16px] font-bold items-center", o.value]),
        onClick: a[0] || (a[0] = i => s("click"))
      }, [r.loading ? (b(), H("img", b_)) : te("", !0), St(r.$slots, "default")], 2))
    }
  }),
  x_ = (e, t) => {
    const n = e[t];
    return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((s, o) => {
      (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, new Error("Unknown variable dynamic import: " + t)))
    })
  },
  U_ = ["innerHTML"],
  Dt = X({
    __name: "svg-icon",
    props: {
      name: {
        type: String,
        required: !0
      },
      color: {
        type: String,
        default: "var(--color-white)"
      }
    },
    emits: ["click"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        s = t,
        o = async a => (await x_(Object.assign({
          "../../assets/svg/bg-mask.svg": () => c(() => import("./bg-mask-BEs43Ge7.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-act-status-bg.svg": () => c(() => import("./icon-act-status-bg-BCNEUEsv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-active-button.svg": () => c(() => import("./icon-active-button-B5pZ-UIm.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-add.svg": () => c(() => import("./icon-add-CXb-o08c.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-addtion.svg": () => c(() => import("./icon-addtion-L0P5UU2a.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-ai.svg": () => c(() => import("./icon-ai-DyO2p0ol.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-archives.svg": () => c(() => import("./icon-archives-BvhNBLUd.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-circle.svg": () => c(() => import("./icon-arrow-circle-qi1w7I7y.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-down.svg": () => c(() => import("./icon-arrow-down-HKT2qJy0.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-down1.svg": () => c(() => import("./icon-arrow-down1-D134S5-K.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-down2.svg": () => c(() => import("./icon-arrow-down2-DTfrUvOQ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-left1.svg": () => c(() => import("./icon-arrow-left1-B9Q_Cd4V.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-left4.svg": () => c(() => import("./icon-arrow-left4-BM8CIf6T.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-right.svg": () => c(() => import("./icon-arrow-right-73MUzxof.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-right1.svg": () => c(() => import("./icon-arrow-right1-jx4opcjz.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-right2.svg": () => c(() => import("./icon-arrow-right2-BNKEMOwT.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-right3.svg": () => c(() => import("./icon-arrow-right3-wjAUpxIw.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-right4.svg": () => c(() => import("./icon-arrow-right4-CQj1qgxJ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-sum.svg": () => c(() => import("./icon-arrow-sum-Cc6g2X6R.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-top.svg": () => c(() => import("./icon-arrow-top-CRykAgpU.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow-up.svg": () => c(() => import("./icon-arrow-up-DuEM5GrA.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow.svg": () => c(() => import("./icon-arrow-DbO6Iotu.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow2-left.svg": () => c(() => import("./icon-arrow2-left-BoVjjfqt.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-arrow2-right.svg": () => c(() => import("./icon-arrow2-right-C9HwYw-x.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-authoring-statement.svg": () => c(() => import("./icon-authoring-statement-MwU0Kct_.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-avatar-frames.svg": () => c(() => import("./icon-avatar-frames-CCl8kIt5.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-back.svg": () => c(() => import("./icon-back-DS5EYstr.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-battle-hard.svg": () => c(() => import("./icon-battle-hard-UIHiezAL.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-battle-normal.svg": () => c(() => import("./icon-battle-normal-DNmxBfUy.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-bells.svg": () => c(() => import("./icon-bells-B7ECGCKo.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-binding.svg": () => c(() => import("./icon-binding-BNTzI08L.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-both-side-followed.svg": () => c(() => import("./icon-both-side-followed-MuqOH1G-.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-bottom.svg": () => c(() => import("./icon-bottom-G-a2CRhQ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-calendar.svg": () => c(() => import("./icon-calendar-Ca-RFhX2.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-camera.svg": () => c(() => import("./icon-camera-D3EnNJZ4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-card-line.svg": () => c(() => import("./icon-card-line-0xo35EOD.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-card-line2.svg": () => c(() => import("./icon-card-line2-CdB8_Fhr.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-checked.svg": () => c(() => import("./icon-checked-BdbutHOJ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-chrome.svg": () => c(() => import("./icon-chrome-DNksgp0V.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-chzzk.svg": () => c(() => import("./icon-chzzk-YW6P_WxB.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-circle-close.svg": () => c(() => import("./icon-circle-close-BT3r76Xp.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-close.svg": () => c(() => import("./icon-close-BTHf1akY.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-close2.svg": () => c(() => import("./icon-close2-CDYL7Ze8.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-close3.svg": () => c(() => import("./icon-close3-CpKtuGsH.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-close4.svg": () => c(() => import("./icon-close4-C9S4vRPx.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-coll-black.svg": () => c(() => import("./icon-coll-black-BynreXiO.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-coll-cur.svg": () => c(() => import("./icon-coll-cur-CoEylil3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-coll-cur2.svg": () => c(() => import("./icon-coll-cur2-CoEylil3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-coll.svg": () => c(() => import("./icon-coll-PsbAJ2Wv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection-atmo-cur.svg": () => c(() => import("./icon-collection-atmo-cur-DXGuSnck.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection-atmo.svg": () => c(() => import("./icon-collection-atmo-BAhEc1gy.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection-cur.svg": () => c(() => import("./icon-collection-cur-GHFpyAMt.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection-sum-cur.svg": () => c(() => import("./icon-collection-sum-cur-B9cSModJ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection-sum.svg": () => c(() => import("./icon-collection-sum-D8aSyNq_.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-collection.svg": () => c(() => import("./icon-collection-Cb76ZkM6.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-comment-more.svg": () => c(() => import("./icon-comment-more-CNUiZDU6.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-comment.svg": () => c(() => import("./icon-comment-BQkcG7eK.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-config.svg": () => c(() => import("./icon-config-CAlQnbeX.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-cooltime.svg": () => c(() => import("./icon-cooltime-HMMMciau.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-copy.svg": () => c(() => import("./icon-copy-CYSftu6R.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-costumes.svg": () => c(() => import("./icon-costumes-D1pUOJgq.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-data.svg": () => c(() => import("./icon-data-91YFEJ0Z.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-decrease.svg": () => c(() => import("./icon-decrease-CeuIcCy1.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-delete.svg": () => c(() => import("./icon-delete-BbNIC_AP.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-download.svg": () => c(() => import("./icon-download-DvEzxhbw.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-draftbox.svg": () => c(() => import("./icon-draftbox-DWP4ypXb.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-dy.svg": () => c(() => import("./icon-dy-B1ZomVCy.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-edge.svg": () => c(() => import("./icon-edge-DSVcCAVg.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-edit.svg": () => c(() => import("./icon-edit-Bq2JrrRu.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-editing.svg": () => c(() => import("./icon-editing-DaqLtYft.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-ellipsis.svg": () => c(() => import("./icon-ellipsis-bubcjzw5.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-encounter.svg": () => c(() => import("./icon-encounter-sZ9atYj3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-error.svg": () => c(() => import("./icon-error-DritifqU.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-expression.svg": () => c(() => import("./icon-expression-D2ufgJY6.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-eye-open-white.svg": () => c(() => import("./icon-eye-open-white-CfwrxunG.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-eye-open.svg": () => c(() => import("./icon-eye-open-v5WZRE7Y.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-eye.svg": () => c(() => import("./icon-eye-Crv3ROVv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-facebook.svg": () => c(() => import("./icon-facebook-C3Gfn5rd.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-fact-check.svg": () => c(() => import("./icon-fact-check-C8dV1uaR.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-firefox.svg": () => c(() => import("./icon-firefox-DEnVuepy.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-follow.svg": () => c(() => import("./icon-follow-rd-jbo5u.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-followed-sum.svg": () => c(() => import("./icon-followed-sum-iW5RICp7.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-followed.svg": () => c(() => import("./icon-followed-BU-jNi9V.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-follower.svg": () => c(() => import("./icon-follower-CNp90Zap.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-friend-card.svg": () => c(() => import("./icon-friend-card-ZrEbh2wE.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-gift-mask.svg": () => c(() => import("./icon-gift-mask-BCGqoUOl.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-gift.svg": () => c(() => import("./icon-gift-lpWZXSDe.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-goback.svg": () => c(() => import("./icon-goback-BmRAXDgf.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-graphics-text.svg": () => c(() => import("./icon-graphics-text-9bAODH0Z.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-guides.svg": () => c(() => import("./icon-guides-BlLhZ0s4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-hashtag.svg": () => c(() => import("./icon-hashtag-BrkR8uuN.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-head-picture.svg": () => c(() => import("./icon-head-picture-CNjnpxRk.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-history-clock.svg": () => c(() => import("./icon-history-clock-CypWuGc4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-history-full.svg": () => c(() => import("./icon-history-full-B6JgFeuA.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-history.svg": () => c(() => import("./icon-history-B0Wld9UD.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-home-tab-active.svg": () => c(() => import("./icon-home-tab-active-BBO63G8a.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-home-tab.svg": () => c(() => import("./icon-home-tab-DzQDJScU.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-home.svg": () => c(() => import("./icon-home-NuTVrins.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-img.svg": () => c(() => import("./icon-img-CWNjWVAE.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-img2.svg": () => c(() => import("./icon-img2-q-BjrueE.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-info.svg": () => c(() => import("./icon-info-BxyXt6wr.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-instagram.svg": () => c(() => import("./icon-instagram-DeXB7mXm.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-iphone.svg": () => c(() => import("./icon-iphone-C9EJCU06.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-join-union-disabled.svg": () => c(() => import("./icon-join-union-disabled-D2TXN4jO.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-join-union.svg": () => c(() => import("./icon-join-union-CPM_hdk3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-keyboard.svg": () => c(() => import("./icon-keyboard-CtHizvTM.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-label.svg": () => c(() => import("./icon-label-xSncEmye.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-language.svg": () => c(() => import("./icon-language-DRxpWDUm.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-letter-paper.svg": () => c(() => import("./icon-letter-paper-CofFEn7n.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-like.svg": () => c(() => import("./icon-like-JfDGVfu7.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-comments.svg": () => c(() => import("./icon-line-comments-BHzfXznv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-follower.svg": () => c(() => import("./icon-line-follower-BsU72dD3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-head.svg": () => c(() => import("./icon-line-head-THeqoRqY.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-left.svg": () => c(() => import("./icon-line-left-B3Em6izr.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-like-cur.svg": () => c(() => import("./icon-line-like-cur-D3rgVRWa.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-like.svg": () => c(() => import("./icon-line-like-B-dWXzee.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-notification.svg": () => c(() => import("./icon-line-notification-CLKWVdz3.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-notification2.svg": () => c(() => import("./icon-line-notification2-BZDQbiKa.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-reduce-shallow.svg": () => c(() => import("./icon-line-reduce-shallow-Br5lyOST.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-line-reduce.svg": () => c(() => import("./icon-line-reduce-1IWK_G4Y.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-link-share.svg": () => c(() => import("./icon-link-share-CYRYud6M.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-link.svg": () => c(() => import("./icon-link-BUnoIAry.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-list-friend.svg": () => c(() => import("./icon-list-friend-BDVbOAh5.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-list-union.svg": () => c(() => import("./icon-list-union-hkm0oCkw.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-list-vote.svg": () => c(() => import("./icon-list-vote-CY0xVBbj.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-loading-large.svg": () => c(() => import("./icon-loading-large-CoqYHIvO.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-loading.svg": () => c(() => import("./icon-loading-BKZRlp00.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-loading2.svg": () => c(() => import("./icon-loading2-B36CKyIa.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-lock.svg": () => c(() => import("./icon-lock-DE7OMowW.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-lock1.svg": () => c(() => import("./icon-lock1-BlcucsDX.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-lock3.svg": () => c(() => import("./icon-lock3-BiKtaVXu.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-lt.svg": () => c(() => import("./icon-lt-CSe9ZTHe.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-manage.svg": () => c(() => import("./icon-manage-i0rfOKzq.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-members.svg": () => c(() => import("./icon-members-BQGPEhKQ.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-menu.svg": () => c(() => import("./icon-menu-Dj9hDAW0.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-more.svg": () => c(() => import("./icon-more-Ce__x-BG.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-move.svg": () => c(() => import("./icon-move-uVY8U9og.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-music-play.svg": () => c(() => import("./icon-music-play-CNGQv5dG.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-music-playing.svg": () => c(() => import("./icon-music-playing-DyJ3hJMb.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-nikkeart.svg": () => c(() => import("./icon-nikkeart-DidzF8EP.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-nikkes.svg": () => c(() => import("./icon-nikkes-CCzBlL01.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-no-follower.svg": () => c(() => import("./icon-no-follower-BTqBnSjI.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-official.svg": () => c(() => import("./icon-official-CGVyazvv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-outpost.svg": () => c(() => import("./icon-outpost-BYlxaeG6.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-p.svg": () => c(() => import("./icon-p--6R8_4y1.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-passed.svg": () => c(() => import("./icon-passed-BJqE0x6V.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-personalized.svg": () => c(() => import("./icon-personalized-7GBB1_5N.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-pics.svg": () => c(() => import("./icon-pics-BELWq7Z9.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-picture.svg": () => c(() => import("./icon-picture-RuKg7Rvg.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-picture2.svg": () => c(() => import("./icon-picture2-Bl97AC9u.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-play.svg": () => c(() => import("./icon-play-CTD5A-y5.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-poll.svg": () => c(() => import("./icon-poll-apfmFS5R.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-polygon.svg": () => c(() => import("./icon-polygon-CYc1dAdI.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-pop-close.svg": () => c(() => import("./icon-pop-close-COZw0xnt.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-pop-line.svg": () => c(() => import("./icon-pop-line-DBBSVRk4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-post.svg": () => c(() => import("./icon-post-BicnFmTT.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-post2.svg": () => c(() => import("./icon-post2-DRxOv-W9.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-privacy.svg": () => c(() => import("./icon-privacy-NT6T4zJf.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-prohibit.svg": () => c(() => import("./icon-prohibit-DwYd9fXz.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-question.svg": () => c(() => import("./icon-question-BeaXY2r9.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-record.svg": () => c(() => import("./icon-record-CoAF5pfv.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-records-list.svg": () => c(() => import("./icon-records-list-DXmfqtMT.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-red-dot.svg": () => c(() => import("./icon-red-dot-CLg6YmbF.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-reduce.svg": () => c(() => import("./icon-reduce-HeO8jmWE.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-rejected.svg": () => c(() => import("./icon-rejected-OvXL3hNN.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-reporting.svg": () => c(() => import("./icon-reporting-S5jv4ktc.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-repost.svg": () => c(() => import("./icon-repost-CYrlXVNY.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-rotate.svg": () => c(() => import("./icon-rotate-BjjKZKDS.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-rotate2.svg": () => c(() => import("./icon-rotate2-Cy17AUQ4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-safari.svg": () => c(() => import("./icon-safari-B5lGfnXy.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-search.svg": () => c(() => import("./icon-search-BxQMCSXC.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-select-line.svg": () => c(() => import("./icon-select-line-BVNPAOtz.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-selected.svg": () => c(() => import("./icon-selected-DoLSSoB2.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-setting.svg": () => c(() => import("./icon-setting-Cqi6JEVl.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-setting2.svg": () => c(() => import("./icon-setting2-BeVFIj6Y.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-share-ios.svg": () => c(() => import("./icon-share-ios-Dh9-Lq94.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-share-link.svg": () => c(() => import("./icon-share-link-BzaKfjbg.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-share.svg": () => c(() => import("./icon-share-CPTEZ91q.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-sold-out.svg": () => c(() => import("./icon-sold-out-BApC7_gp.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-soop.svg": () => c(() => import("./icon-soop-CnfBnOPS.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-start-sharpcorner.svg": () => c(() => import("./icon-start-sharpcorner-COHQq9fD.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-start.svg": () => c(() => import("./icon-start-D_Y2sz5f.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-story.svg": () => c(() => import("./icon-story-B3a0Z9_Y.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-success-large.svg": () => c(() => import("./icon-success-large-CyF-JQWa.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-success.svg": () => c(() => import("./icon-success-nqZtJ7yn.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-success1.svg": () => c(() => import("./icon-success1-D0i3-Fx4.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-switch.svg": () => c(() => import("./icon-switch-3oVi4hfC.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-switch2.svg": () => c(() => import("./icon-switch2-DVAzklq7.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-switch3.svg": () => c(() => import("./icon-switch3-BmEcDRVA.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-text.svg": () => c(() => import("./icon-text-Cr9HeYJs.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-three-triangle.svg": () => c(() => import("./icon-three-triangle-DJE5ooYx.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-top.svg": () => c(() => import("./icon-top-DEm3k_6P.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-tower.svg": () => c(() => import("./icon-tower-BuqDMNNh.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-translate.svg": () => c(() => import("./icon-translate-2knwO9uk.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-transport.svg": () => c(() => import("./icon-transport-C1WB3_WC.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-trovo.svg": () => c(() => import("./icon-trovo-V7ai6xET.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-true.svg": () => c(() => import("./icon-true-BcLVSqgD.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-true2.svg": () => c(() => import("./icon-true2-BdyD98Gd.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-twitch.svg": () => c(() => import("./icon-twitch-5U7QtzSM.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-under-review.svg": () => c(() => import("./icon-under-review-CH9769jk.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-union.svg": () => c(() => import("./icon-union-B5LobFD9.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-version-switch.svg": () => c(() => import("./icon-version-switch-Bad-Jw6k.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-video.svg": () => c(() => import("./icon-video-CBHd89Ee.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-view-card.svg": () => c(() => import("./icon-view-card-DIQUKpHF.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-view-pro.svg": () => c(() => import("./icon-view-pro-DW5StQZW.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-view.svg": () => c(() => import("./icon-view-D5bT6WNe.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-voice.svg": () => c(() => import("./icon-voice-C_xZbyID.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-wait.svg": () => c(() => import("./icon-wait-FncfBWm6.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-warn.svg": () => c(() => import("./icon-warn-BRWDgZxc.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-warn2.svg": () => c(() => import("./icon-warn2-Da1UwEtV.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-x.svg": () => c(() => import("./icon-x-BV89bs98.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-youtube-text.svg": () => c(() => import("./icon-youtube-text-C6k1RlTa.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-youtube.svg": () => c(() => import("./icon-youtube-BmhyfNXj.js"), __vite__mapDeps([])),
          "../../assets/svg/icon-youtube2.svg": () => c(() => import("./icon-youtube2-BBpLcrDu.js"), __vite__mapDeps([])),
          "../../assets/svg/iocn-follower-cur.svg": () => c(() => import("./iocn-follower-cur-CTXYhxQH.js"), __vite__mapDeps([])),
          "../../assets/svg/iocn-follower-sum-cur.svg": () => c(() => import("./iocn-follower-sum-cur-BJw1qmRW.js"), __vite__mapDeps([]))
        }), "../../assets/svg/".concat(a, ".svg"))).default, r = A();
      return je(() => n.name, async () => {
        r.value = await o(n.name)
      }, {
        immediate: !0
      }), (a, i) => (b(), H("span", {
        class: "fill-current",
        style: ve({
          color: e.color
        }),
        onClick: i[0] || (i[0] = _ => s("click")),
        innerHTML: r.value
      }, null, 12, U_))
    }
  }),
  N_ = {
    class: "absolute -top-[26px] left-0 w-full h-[28px]"
  },
  en = X({
    __name: "index",
    props: {
      paddingX: {
        default: 31
      },
      hide_close: {
        type: Boolean
      },
      title: {},
      content: {},
      hide_cancel: {
        type: Boolean
      },
      confirm_text: {},
      cancel_text: {},
      z_index: {},
      confirmType: {},
      cancelType: {},
      show: {
        type: Boolean
      },
      callback: {},
      wrapper_style: {},
      content_style: {},
      mask_style: {},
      motion: {
        type: Boolean
      },
      mask_visible: {
        type: Boolean
      }
    },
    emits: ["confirm", "cancel", "close"],
    setup(e, {
      emit: t
    }) {
      const n = t,
        s = () => {
          n("close")
        },
        o = () => {
          n("cancel")
        },
        r = () => {
          n("confirm")
        };
      return (a, i) => (b(), ie(D(wr), {
        open: a.show
      }, {
        default: ae(() => [z(D(Nr), null, {
          default: ae(() => [z(D(br), {
            style: ve({
              "z-index": a.z_index || 50
            }),
            class: "fixed inset-0 bg-[var(--color-black-55)] !duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            onClick: s
          }, null, 8, ["style"]), z(D(xr), {
            style: ve({
              "z-index": a.z_index || 50
            }),
            class: ee(["w-[289px] min-h-[189px] bg-[var(--op-fill-white)] py-[12px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-z-0 !duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-75 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] outline-none [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale] [backface-visibility:hidden]"])
          }, {
            default: ae(() => [G("div", N_, [z(Dt, {
              name: "icon-pop-line",
              color: "var(--op-fill-white)"
            })]), z(D(Ur), {
              class: "text-center font-bold text-[length:18px] px-[31px] text-[color:var(--text-1)] leading-[22px] capitalize break-words"
            }, {
              default: ae(() => [Me(W(a.title), 1)]),
              _: 1
            }), G("div", {
              class: ee(["mt-[16px] min-h-[32px] text-[length:13px] text-[color:var(--text-1)] text-center leading-[16px]"]),
              style: ve({
                paddingLeft: "".concat(a.paddingX, "px"),
                paddingRight: "".concat(a.paddingX, "px")
              })
            }, [a.content ? (b(), H(Be, {
              key: 0
            }, [Me(W(a.content), 1)], 64)) : St(a.$slots, "default", {
              key: 1
            })], 4), G("div", {
              style: ve({
                paddingLeft: "".concat(a.paddingX, "px"),
                paddingRight: "".concat(a.paddingX, "px")
              })
            }, [a.confirm_text ? (b(), ie(He, {
              key: 0,
              type: a.confirmType || "primary",
              class: "mb-[6px] mt-[9px]",
              onClick: r
            }, {
              default: ae(() => [Me(W(a.confirm_text), 1)]),
              _: 1
            }, 8, ["type"])) : te("", !0), a.cancel_text ? (b(), ie(He, {
              key: 1,
              type: a.cancelType || "secondary",
              class: "mt-[6px]",
              onClick: o
            }, {
              default: ae(() => [Me(W(a.cancel_text), 1)]),
              _: 1
            }, 8, ["type"])) : te("", !0)], 4)]),
            _: 3
          }, 8, ["style"])]),
          _: 3
        })]),
        _: 3
      }, 8, ["open"]))
    }
  }),
  G_ = ["disabled", "readonly"],
  k_ = X({
    __name: "checkbox",
    props: {
      label: {},
      value: {},
      modelValue: {
        type: Boolean,
        default: !1
      },
      indeterminate: {
        type: Boolean
      },
      size: {
        default: "default"
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      readonly: {
        type: Boolean,
        default: !1
      },
      show_input_btn: {
        type: Boolean,
        default: !0
      }
    },
    emits: ["update:modelValue", "change"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        s = t,
        o = it("checklist", void 0),
        r = it("updateChecklist", void 0),
        a = it("checkboxGroupDisabled", void 0),
        i = it("checkboxGroupReadonly", void 0),
        _ = it("checkboxGroupMaxReached", void 0),
        g = P(() => !!o),
        l = P(() => {
          const d = (a == null ? void 0 : a.value) || n.disabled;
          return g.value && (_ != null && _.value) && !u.value ? !0 : d
        }),
        v = P(() => (i == null ? void 0 : i.value) || n.readonly),
        u = P(() => {
          var d;
          return g.value ? n.value ? (d = o == null ? void 0 : o.value) == null ? void 0 : d.includes(n.value) : !1 : n.modelValue
        }),
        p = d => {
          if (d.stopPropagation(), !(l.value || v.value)) {
            if (g.value) return r == null ? void 0 : r(n.value);
            s("update:modelValue", !u.value), s("change", !u.value)
          }
        };
      return (d, f) => (b(), H("label", {
        class: ee(["mb-[6px] inline-flex items-center", {
          "cursor-not-allowed": l.value,
          "cursor-default": v.value
        }])
      }, [d.show_input_btn ? (b(), H("span", {
        key: 0,
        class: ee(["checkbox-input relative mr-[8px] inline-flex h-[var(--height)] w-[var(--width)] outline-none", {
          "cursor-pointer": !l.value && !v.value,
          "cursor-not-allowed": l.value,
          "cursor-default": v.value
        }])
      }, [G("input", {
        class: ee(["absolute bottom-0 left-0 right-0 top-0 z-[1] opacity-0", {
          "cursor-pointer": !l.value && !v.value,
          "cursor-not-allowed": l.value,
          "cursor-default": v.value
        }]),
        type: "checkbox",
        disabled: l.value,
        readonly: v.value,
        onClick: ws(p, ["stop"])
      }, null, 10, G_), G("span", {
        class: ee({
          "checkbox-inner relative inline-block h-[var(--height)] w-[var(--width)] rounded-sm bg-[var(--bg-color)]": !0,
          "is-checked": u.value,
          "is-indeterminate": d.indeterminate,
          "bg-[var(--color-5)]": !u.value && l.value
        })
      }, null, 2)], 2)) : te("", !0), St(d.$slots, "label", {}, () => [G("span", {
        class: ee(["text-[12px] text-left", {
          "cursor-pointer": !l.value && !v.value,
          "cursor-not-allowed": l.value,
          "cursor-default": v.value
        }])
      }, W(d.label), 3)], !0)], 2))
    }
  }),
  Lt = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, o] of t) n[s] = o;
    return n
  },
  cs = Lt(k_, [
    ["__scopeId", "data-v-96bd068a"]
  ]),
  M_ = X({
    __name: "checkbox-group",
    props: {
      modelValue: {},
      disabled: {
        type: Boolean,
        default: !1
      },
      readonly: {
        type: Boolean,
        default: !1
      },
      max: {
        default: void 0
      }
    },
    emits: ["update:modelValue", "change"],
    setup(e, {
      emit: t
    }) {
      const n = e,
        s = t,
        o = P({
          get: () => n.modelValue,
          set: a => {
            s("update:modelValue", a), s("change", a)
          }
        });
      ct("checklist", o);
      const r = P(() => n.max !== void 0 && o.value.length >= n.max);
      return ct("checkboxGroupDisabled", A(n.disabled)), ct("checkboxGroupReadonly", A(n.readonly)), ct("checkboxGroupMaxReached", r), ct("updateChecklist", a => {
        if (n.disabled || n.readonly) return;
        const i = [...o.value];
        if (o.value.includes(a)) {
          const g = o.value.indexOf(a);
          i.splice(g, 1)
        } else {
          if (n.max !== void 0 && o.value.length >= n.max) return;
          i.push(a)
        }
        o.value = i
      }), (a, i) => (b(), H("div", null, [St(a.$slots, "default")]))
    }
  }),
  Z = {
    EVENT_NOT_STARTED: 200006,
    EVENT_ENDED: 200007,
    NO_PERMISSION: 210002,
    GAME_NOT_LOGIN: 300001,
    NOT_BOUND_LIP: 303013,
    HISTORICAL_DIRTY_DATA: 400018,
    POINTS_NOT_ENOUGH: 503001,
    GIFT_CARD_RECEIVE_LIMIT: 503002,
    GIFT_CARD_EXHAUSTED: 400013,
    GIFT_CARD_EXHAUSTED_2: 400016,
    ServerNotCorrect: 1100036,
    NewAvatarAuditPending: 110003,
    CaptchaCheckFailed: 1100039,
    ErrCodeUserEasterEggTriggeredCurrentDay: 110004,
    ErrCodeUserEasterEggTriggeredOverLimit: 110005,
    ErrCodeUserEasterEggNotInRange: 110006,
    ErrCodeUserEasterEggNotInRangeInDay: 110007,
    ErrCodeUserEasterEggNotExists: 110008,
    ErrCodeUserEasterEggTriggered: 110009,
    DefaultErr: 1200001,
    TweetContentCheckErr: 1200002,
    CreatePostAuditErr: 1200003,
    UpdatePostAuditErr: 1200004,
    HTTPResponseEmptyError: 1200005,
    HTTPResponseError: 1200006,
    HTTPResponseCodeError: 1200007,
    GetXCommonParamsIsEmptyErr: 1200008,
    GetXCommonParamsDeCodeErr: 1200009,
    RichTextParseError: 1200010,
    CreateFailedTitleOverstepLimit: 1200011,
    CreateFailedContextOverstepLimit: 1200012,
    CreateFailedContextOverstepLimit1000: 1200013,
    CreateFailedIMGOverstepLimit: 1200014,
    RichTextContainIllegalImg: 1200015,
    CheckAuditPermissionErr: 1200016,
    CreateFailedAuditPass: 1200017,
    UserCreatePostLimitMinuteError: 1200018,
    UserCreatePostLimitHourError: 1200019,
    UserCreatePostLimitDayError: 1200020,
    NewDocumentFromReaderErr: 1200021,
    GetPostsFailed: 1200022,
    CreatePostFailed: 1200023,
    GetPostDetailFailed: 1200024,
    DeletePostFailed: 1200025,
    GetUserInfoFailed: 1200026,
    DeleteFailedNotPermission: 1200027,
    GetCommunityDataHttpError: 1200028,
    GetCommunityDataInvalidParams: 1200029,
    ReviewCommentInvalidResp: 1200030,
    BatchReviewCommentInvalidResp: 1200031,
    DeleteCommunityCommentInvalidResp: 1200032,
    UpdateCommunityCommentInvalidResp: 1200033,
    AddCommunityCommentInvalidResp: 1200034,
    GetCommunityCommentsInvalidResp: 1200035,
    GetCommunityCommentInvalidResp: 1200036,
    CMSUpdatePostError: 1200037,
    GetOfficialGameUserError: 1200038,
    DeleteMessageByPostIDFailed: 1200039,
    DeleteMessageByFeedIDsFailed: 1200040,
    UpdateCommunityParseExtInfoError: 1200041,
    GetCreatorHubDataInvalidParams: 1200042,
    GetCreatorHubDataHttpError: 1200043,
    GetCreatorHubDataInvalidResp: 1200044,
    GetUserTotalPointsInvalidResp: 1200045,
    GetUserTotalPointsReturnError: 1200046,
    GetLipPointsInvalidParams: 1200047,
    GetLipPointsDataHttpError: 1200048,
    COSConfigIsEmptyError: 1200049,
    IllegalCloudObjectType: 1200050,
    InvalidParamsErr: 1200051,
    NoPermissionVisitShiftyspad: 1301002,
    NoPermission: 1200052,
    VisblePostFailed: 1200053,
    GetPostAuditFailed: 1200054,
    GetPostContentsFailed: 1200055,
    GetIndexPostFailed: 1200056,
    GetTagFailed: 1200057,
    CreateTagCollectionFailed: 1200058,
    DeleteTagCollectionFailed: 1200059,
    GetUserPosCollectionFailed: 1200060,
    PostNotReviewStarFailed: 1200061,
    CreatePostCollectionFailed: 1200062,
    DeletePostCollectionFailed: 1200063,
    UserCollectPostFrequentLimit: 1200064,
    GetPostListMyIsCollectionFailed: 1200065,
    GetPostListMyIsCommentFailed: 1200066,
    GetPostStarFailed: 1200067,
    CreatePostStarFailed: 1200068,
    DeletePostStarFailed: 1200069,
    UserStarPostFrequentLimit: 1200070,
    CreateTagError: 1200071,
    CreateTagAuditError: 1200072,
    GetUserCollectionListError: 1200073,
    NoExistUsername: 1200074,
    GetUserFollowFailed: 1200075,
    CreateUserCollectionFailed: 1200076,
    DeleteUserCollectionFailed: 1200077,
    UserFollowOtherFrequentLimit: 1200078,
    GetUserBindTitleFailed: 1200079,
    TooManyWhisperNum: 1200080,
    GetUserFirstAddPointsMsgErr: 1200081,
    AddMsgInvalidExtInfo: 1200082,
    GetPostFailed: 1200083,
    GetCommentFailed: 1200084,
    InvalidPostReportContentType: 1200085,
    NoNeedToReportSelfPost: 1200086,
    CreatePostReportError: 1200087,
    UserCreateCommentLimitMinuteError: 1200088,
    UserCreateCommentLimitHourError: 1200089,
    UserCreateCommentLimitDayError: 1200090,
    CreateCommentFailed: 1200091,
    CreatePostCommentFailedAuditIng: 1200092,
    MaxCommentCount: 1200093,
    CreateReplyFailed: 1200094,
    CreatePostCommentReplyFailedAuditIng: 1200095,
    CreatePostCommentReplyReplyFailedAuditIng: 1200096,
    CommentNotReviewStarFailed: 1200097,
    GetCommentStarFailed: 1200098,
    CreateCommentStarFailed: 1200099,
    DeleteCommentStarFailed: 1200100,
    UserStarCommentFrequentLimit: 1200101,
    GetCommunityCommentEmpty: 1200102,
    InvalidParams: 1200103,
    GetUserWhiteListInfoError: 1200104,
    GetUserPermissionAuditInfoError: 1200105,
    GetUserInfoError: 1200106,
    GetUserIsFirstRegisterError: 1200107,
    UpdateUserSignProtocolError: 1200108,
    GetUserTitleError: 1200109,
    MaxCreateUsernameError: 1200110,
    CreateUsernameError: 1200111,
    AvatarGetListFailed: 1200112,
    UserRegisterFailed: 1200113,
    UpdateUserInfoErr: 1200114,
    UpdateUsernameError: 1200115,
    CreateUserNameAuditNotOpenidFailed: 1200116,
    UpdateUsernameAuditExistsError: 1200117,
    CreateUserRemarkAuditNotOpenidFailed: 1200118,
    UpdateUserRemarkAuditExistsError: 1200119,
    UsernameHasExisted: 1200120,
    NicknameLengthLimit: 1200121,
    MathchUserNameFailed: 1200122,
    UserIsNotAdultFailed: 1200123,
    GetUserAuditInfoListFailed: 1200124,
    UpdateUserInfoError: 1200125,
    UpdateUserRemarkFailed: 1200126,
    InvalidAvatarUrlError: 1200127,
    AvatarGetListFailedToJsonDecode: 1200128,
    AvatarGetBindingGameListFailed: 1200129,
    GetCommentContentFailed: 1200130,
    GetCommentReplyListFailed: 1200131,
    SiteMsgJsonDecodeFailed: 1200132,
    SiteMsgJsonCodeFailed: 1200133,
    SiteMsgWriteToQueueFailed: 1200134,
    SiteMsgGetCacheFailed: 1200135,
    GetSiteMessageInfoFailed: 1200136,
    CreateSiteMessageFailed: 1200137,
    SiteMessageStatusFailed: 1200138,
    PushTypeNotExists: 1200139,
    SiteMsgCreatedDataStatusFailed: 1200140,
    NoTableName: 1200141,
    GetAllUserListFailed: 1200142,
    ReadSiteMessageNumberPackageFailed: 1200143,
    FileDownloadFailed: 1200144,
    SiteMessageProducerErr: 1200145,
    UpdateDynamicUpvoteCountFailed: 1200146,
    GetCOSConfigError: 1200147,
    GetMessageFailed: 1200148,
    UserPrivacySwitchJsonDecodeFailed: 1200149,
    GetUserPrivacySwitchFailed: 1200150,
    UserPrivacySwitchTypeFailed: 1200151,
    DelCacheByKeyErr: 1200152,
    RedisLockErr: 1200153,
    RedisUnlockErr: 1200154,
    ParseVideoUrlError: 1200155,
    GetVideoUrlError: 1200156,
    ParseVideoUrlEmpty: 1200157,
    GetDistrictListError: 1200158,
    GetEmoticonListError: 1200159,
    GetEmoticonIconGroupRelationError: 1200160,
    SetUserMoodError: 1200161,
    UserReCollectionFailed: 1200162,
    PostReCollectionFailed: 1200163,
    PostUpvoteMapParseError: 1200164,
    GetPostUpvoteMapError: 1200165,
    CMSSetMuteUserInfoError: 1200166,
    CMSDelMuteUserInfoError: 1200167,
    CMSSetAdminUserInfoError: 1200168,
    CMSDelAdminUserInfoError: 1200169,
    CMSSetAuthUserInfoError: 1200170,
    CMSDelAuthUserInfoError: 1200171,
    RepeatedReportError: 1200172,
    UpdatePostContentError: 1200173,
    UpdateContentReportError: 1200174,
    UpdateUserAuditInfoError: 1200175,
    MovePostErr: 1200176,
    InvalidLanguageParams: 1200177,
    GetUserPlayerBasicInfoError: 1200178,
    GetUserDisableGameCardError: 1200179,
    SetUserGameTagError: 1200180,
    CreateFailedNeedPicError: 1200181,
    UpdateDynamicUpvoteCountJsonFailed: 1200182,
    CommentAlreadyReviewed: 1200183,
    PostAlreadyReviewed: 1200184,
    GetPlateFailed: 1200185,
    EventJsonCodeFailed: 1200186,
    PagingCursorIsInvalidS: 1200187,
    PagingCursorIsInvalidI: 1200188,
    GetAllSiteMessageMapFailed: 1200189,
    GetCreatorHubListFailed: 1200190,
    GetCreatorHubLanguageListFailed: 1200191,
    GetCreatorHubRankListFailed: 1200192,
    CallAIGCTranslateApiFailed: 1200193,
    ParseAIGCTranslateApiResultFailed: 1200194,
    CacheGeTranslateDataErr: 1200195,
    TranslateTextCountNotMatchErr: 1200196,
    GetAllPlateLanguageMapFailed: 1200197,
    CanNotForwardUnapprovedPost: 1200198,
    AddAvatarPendantToUserFailed: 1200199,
    AvatarPendansGetListFailedToJsonDecode: 1200200,
    AvatarPendantGetListFailed: 1200201,
    SetAvatarPendantToUserFailed: 1200202,
    AvatarPendantNotAvalible: 1200203,
    GetAvatarPendantFailed: 1200204,
    NotBindCreatorHub: 1200303,
    CreatorHubApiError: 1200304,
    ChangeCreatorHubSubmissionError: 1200305,
    CreatorHubBindError: 1200306,
    CreatorHubAccountHasBound: 1200307,
    CreatorHubAccountNotRegistered: 1200308,
    CreatorHubAccountAuditing: 1200309,
    CreatorHubAccountAbnormal: 1200310,
    ChannelNotSupport: 1200311,
    StandloneSiteHasBound: 1200312,
    InvalidToken: 1200313,
    CreatorHubAccountRejected: 1200314,
    CreatorHubAccountFrozen: 1200315,
    CreatorHubAccountParentAuth: 1200316,
    UserMuted: 1200319,
    CreatorHubAccountFrozenBind: 1200322,
    UserHasBlockedYou: 1200354,
    GiftAlreadyReceived: 1300013,
    CdkeyParamsWrong: 1302002,
    CdkeyCodeInvalid: 1302003,
    CdkeyGameidWrong: 1302004,
    CdkeyOpenidWrong: 1302005,
    CdkeyRoleIdWrong: 1302006,
    CdkeySystemWrong: 1302007,
    CdkeyNoAuth: 1302008,
    CdkeyNotInTime: 1302009,
    CdkeyActivityNotAvailableInThisArea: 1302010,
    CdkeyActivityNotAvailableInThisCountry: 1302011,
    CdkeyActivityNotAvailableInThisPlatform: 1302012,
    CdkeyMRMSFailed: 1302013,
    CdkeyCodeIsUsed: 1302014,
    CdkeyCodeDoesNotExist: 1302015,
    CdkeyUserAlreadyUsed: 1302016,
    CdkeyUserExceedsMaxLimit: 1302017,
    CdkeyUserTooFrequent: 1302018,
    CdkeyNetworkError: 1302019,
    CdkeyIncorrectMultipleTimes: 1302020,
    GetUserRoleInfoFailed: 1302021,
    CannotAddMyselfFriendCard: 1200235,
    UserNotExist2: 1200256,
    BlockUserFailed: 1200349,
    UserAlreadyBlocked: 1200348,
    UserNotBlocked: 1200352,
    UnblockUserFailed: 1200353,
    AddFriendCardFailed: 1302102,
    ApiCallReturnException: 1302103,
    RequestOverflow: 1302104,
    ReceiveOverflow: 1302105,
    FriendOverflow: 1302106,
    FriendReceived: 1302107,
    FriendNotExist: 1302108,
    FriendException: 1302109,
    ServiceInMaintenanceError: 1302120,
    TranslateError: 1200262,
    NotBindGameRole: 1302101,
    DuplicateAddFriendException: 1302116,
    AddFriendNotEnabled: 1302122,
    AddFriendNotInCurrentArea: 1302123,
    FriendAlreadyAdded: 1302124,
    InvalidParam: 1303001,
    SystemError: 1303002,
    GuildIdNotExist: 1303003,
    RoleIdNotExist: 1303004,
    UserNotYetBindRoleId: 1303005,
    GuildCardPublished: 1303006,
    GuildCardNotPublished: 1303007,
    UserBindRoleIdNotMatch: 1303008,
    UserHasNoJoinGuild: 1303009,
    UserHasNoJoinThisGuild: 1303010,
    JoinGuildNotTheSameArea: 1303011,
    JoinGuildUnderMaintenance: 1303012,
    JoinGuildInvalidLevel: 1303013,
    JoinGuildRequestFull: 1303014,
    JoinGuildReject: 1303015,
    JoinGuildFull: 1303016,
    JoinGuildAlreadyRequested: 1303017,
    JoinGuildUnableJoin: 1303018,
    JoinGuildNeedApproval: 1303019,
    JoinGuildAlreadyJoined: 1303020,
    GuildCardUUIDNotExist: 1303021,
    UserGuildNotMatchRequestGuildId: 1303022,
    GuildUnderMaintenance: 1303023,
    UserGuildNotExist: 1303024,
    UserNotAllowShowGuildInShiftypad: 1303025,
    UserBanned: 1300019,
    ApiTimeoute: 101,
    ApiTimeout: 102,
    TopicNotExist: 1200280,
    UserNotExist: 1200261,
    OperationTooFast: 212e3,
    OperationTooFast2: 212001,
    ErrCodeUserNotAdult: 1200316,
    ErrSetCommentTopButtom: 1200325,
    ErrSetCommentTopButtomNoPermissoin: 1200326,
    ErrCommentAlreadyTopButtom: 1200327,
    ErrSetCommentTopButtomNoPost: 1200328,
    ErrSetCommentTopButtomNoComment: 1200329,
    UserHadVoted: 1200368,
    ErrPollEndTimeLessThanCurrentTime: 1200380,
    ErrPostPollCountLimit: 1200381,
    ErrPollEnded: 1200382,
    GetCreatorAuditConditionFailed: 1200390,
    GetCreatorAuditConditionCacheFailed: 1200391,
    CreatorAuditParamsEmptyError: 1200392,
    CreatorAuditFansCountNotMeetError: 1200393,
    CreatorAuditPostCountNotMeetError: 1200394,
    CreatorAuditUpvoteCountNotMeetError: 1200395,
    CreatorAuditGetPostListError: 1200396,
    CreatorAuditGetPostStatsError: 1200397,
    CreatorAuditCreateError: 1200398,
    CreatorAuditGetUserStateError: 1200399,
    CMSSetCertificationStatusError: 1200400,
    ErrCodeCreatorHubUnBindError: 1200401,
    ErrCodeUserIsAdminAuth: 1200402,
    ErrCodeUserIsAgencyAuth: 1200403,
    ErrCodeUserHasApplyCertification: 1200404,
    ErrCodeCreatorHubAccountStatusAbnormal: 1200406,
    ErrCodeUsernameIsEmpty: 1200409,
    ErrCodeUserHasApplyCertificationLimit: 1200412,
    CheckGameHasOpenidErr: 1200421,
    GetChristmasMaterialMaxDailyLimit: 1200443,
    UserChristmasMaterialHasNotGot: 1200444,
    ChristmasMaterialNotExist: 1200445,
    ChristmasEventNotStart: 1200446,
    DailySpecialTaskIdEmpty: 1200447,
    GetDailySpecialTaskFailed: 1200448,
    DailySpecialTaskSendRewardFailed: 1200449,
    GetSecondStageTaskFailed: 1200450,
    SecondStageTaskAlreadyDone: 1200451,
    SecondStageTaskSendRewardFailed: 1200452,
    ErrCodeHasOwnedDecorate: 1200454,
    InvalidDecorateType: 1200453,
    ErrCodeNoPermissionToUseDecorate: 1200456
  },
  V_ = [Z.GetTagFailed, Z.GetPostsFailed, Z.GetPostFailed, Z.NoExistUsername, Z.GetUserPrivacySwitchFailed, Z.GetCommentFailed],
  F_ = [Z.NOT_BOUND_LIP, Z.HISTORICAL_DIRTY_DATA, Z.GAME_NOT_LOGIN, Z.NotBindGameRole, Z.NoPermissionVisitShiftyspad],
  B_ = e => "api_code_".concat(e),
  st = Object.values(Z).reduce((e, t) => ({
    ...e,
    [t]: B_(t)
  }), {});

function tn(e, t) {
  let n = async () => {};
  const {
    unmount: s
  } = jo(X({
    setup() {
      const r = A(!1),
        a = A(!1),
        i = A(!1),
        _ = A(t);
      ke(() => {
        r.value = !0
      });
      const g = async v => {
        var u;
        a.value = !0, await ((u = t == null ? void 0 : t.onFinish) == null ? void 0 : u.call(t, v)), a.value = !1, r.value = !1, await ft(), s()
      }, l = async () => {
        var v;
        i.value = !0, await ((v = t == null ? void 0 : t.onCancel) == null ? void 0 : v.call(t)), i.value = !1, r.value = !1, await ft(), s()
      };
      return n = async () => {
        await l()
      }, {
        visible: r,
        data: _,
        is_finishing: a,
        is_cancelling: i,
        finish: g,
        cancel: l
      }
    },
    render: function () {
      return bs(e, {
        ...this.data,
        visible: this.visible,
        is_finishing: this.is_finishing,
        is_cancelling: this.is_cancelling,
        finish: this.finish,
        cancel: this.cancel
      })
    }
  }));
  return {
    close: n,
    unmount: s
  }
}
const Bo = () => {
  let e;
  return {
    show: n => e = tn(en, Object.assign(n, {
      open: !0,
      onConfirm: () => {
        n.callback({
          value: Fe.confirm,
          close: e.unmount
        })
      },
      onCancel: async () => {
        n.callback({
          value: Fe.cancel,
          close: e.unmount
        })
      },
      onClose: () => {
        n.callback({
          value: Fe.close,
          close: e.unmount
        })
      }
    }))
  }
};
var At = (e => (e.unlogin = "login", e.logined = "logined", e.token_expired = "token_expired", e))(At || {}),
  Sn = (e => (e[e.official = 1] = "official", e[e.creator = 2] = "creator", e[e.institution = 3] = "institution", e))(Sn || {}),
  Fn = (e => (e[e.not_adult = -1] = "not_adult", e[e.not_set = 0] = "not_set", e[e.adult = 1] = "adult", e))(Fn || {}),
  Bn = (e => (e[e.parent_rejected = -1] = "parent_rejected", e[e.parent_not_set = 0] = "parent_not_set", e[e.parent_passed = 1] = "parent_passed", e[e.parent_authing = 10] = "parent_authing", e))(Bn || {}),
  H_ = (e => (e.disabled = "disabled", e.canrequest = "canrequest", e.requested = "requested", e))(H_ || {}),
  $_ = (e => (e.disabled = "disabled", e.canrequest = "canrequest", e))($_ || {});
const Y_ = [Ks, Ln, Js, Zs, Xs, js, Ws, Qs, eo, zs, Xa, xi],
  q_ = () => ({
    checkPermission: async t => {
      var l;
      const n = he(),
        {
          show: s
        } = Qe(),
        {
          show: o
        } = Bo(),
        {
          code: r,
          api: a,
          config: i
        } = t,
        _ = ue();
      if (r === Z.UserNotExist && a === to && !_.had_reloaded_page) return Ba({
        had_reloaded_page: "1"
      }), window.location.reload(), !1;
      if (r === Z.GAME_NOT_LOGIN && ![fe.LOGOUT, fe.LOGIN].includes(location.pathname) && Y_.includes(a)) return xe() ? (s({
        text: w(st[Z.UserNotExist]),
        type: "error",
        interval: 5e3
      }), !1) : (n.setLoginStatus(At.unlogin), o({
        title: w("warning"),
        content: w("invalid_login_token_tips"),
        confirm_text: w("confirm"),
        cancel_text: w("cancel"),
        z_index: 100,
        async callback(v) {
          const {
            value: u,
            close: p
          } = v;
          u === Fe.confirm && le.push({
            name: me.LOGIN,
            query: Qt()
          }), p()
        }
      }), !1);
      if (Z.NO_PERMISSION === r) return n.user_info.fe_user_no_permission = !0, s({
        text: w(st[r]),
        type: "error"
      }), le.replace({
        name: me.ERROR_LOGIN_TIPS
      }), !1;
      const g = ((l = lo(q(i, "data"))) == null ? void 0 : l.fe_ignore_not_found_jump) || (i == null ? void 0 : i.fe_ignore_not_found_jump);
      return V_.includes(r) && ![fe.LOGIN].includes(location.pathname) && !g ? (le.push({
        name: me.ERROR_NOT_FOUND
      }), !1) : !0
    }
  }),
  {
    checkPermission: z_
  } = q_(),
  {
    show: j_
  } = Qe(),
  W_ = xe(),
  _s = uo(),
  Ie = xs.create({
    withCredentials: !0,
    baseURL: Ec("prod")
  }),
  K_ = Ie.request,
  J_ = async e => {
    const {
      axiosRequestInterceptor: t
    } = $n();
    return await t(e), K_(e)
  };
Ie.request = J_;
Ie.interceptors.request.use(e => {
  const t = Le(),
    n = _e();
  if (e.headers) {
    const s = q($c, t, {
        game_id: "",
        area_id: ""
      }),
      o = {
        game_id: s.game_id,
        area_id: s.area_id,
        source: _s,
        intl_game_id: t,
        language: n,
        env: "prod",
        data_statistics_scene: W_ ? "inner_game" : "outer",
        data_statistics_page_id: location.href,
        data_statistics_client_type: _s,
        data_statistics_lang: n
      };
    e.headers["x-common-params"] = JSON.stringify(o), e.headers["x-language"] = n, e.headers["x-channel-type"] = "2"
  }
  return e
});
Ie.interceptors.response.use(async e => {
  var _;
  const t = e.data,
    n = e.config,
    s = e.data.code,
    o = he();
  if (t.code === 0) return t.data;
  if (n.use_non_zero_ret) return Object.assign({}, t.data, {
    code: t.code
  });
  if (!await z_({
      code: s,
      api: n.url,
      config: n
    })) throw {
    ...t,
    message: t.msg
  };
  s === Z.NOT_BOUND_LIP && o.user_had_bound_lip && (o.user_had_bound_lip = !1);
  const r = n == null ? void 0 : n.ignore_toast,
    a = (n == null ? void 0 : n.default_error_tip_key) || "default_error_tips",
    i = typeof r == "function" ? r(t, (_ = co(n.data)) != null ? _ : {}) : r != null ? r : !1;
  throw !(F_.includes(s) || i) && j_({
    text: st[s] && st[s] !== w(st[s]) && w(st[s]) || w(a),
    type: "error"
  }), {
    ...t,
    message: t.msg
  }
}, e => Promise.reject(e));
let Ut = null,
  lt = null;
const X_ = async () => {
  if (Ut) return Ut;
  if (lt) return await lt;
  lt = (async () => {
    const {
      Client: e
    } = await c(() => import("./index-CCnFl2aO.js"), __vite__mapDeps([250, 1]));
    return Ut = new e(Ie), Ut
  })();
  try {
    return await lt
  } finally {
    lt = null
  }
};

function Q_(e, t = {}) {
  const {
    deep: n = !0,
    immediate: s = !0
  } = t, o = A(Vt(e.data.value));
  return je(() => {
    var r;
    return [e.data.value, (r = t.dataUpdatedAt) == null ? void 0 : r.value]
  }, () => {
    o.value = Vt(e.data.value)
  }, {
    immediate: s,
    deep: n
  }), o
}

function Ho() {
  return typeof window > "u" ? !1 : new URLSearchParams(window.location.search).has("nomock")
}

function N(e, t) {
  const n = async (r, a) => {
    var v;
    const i = {
      ...t == null ? void 0 : t.default_params,
      ...r != null ? r : {}
    };
    if (typeof e.mock == "function" && !Ho()) return await new Promise(u => {
      var p;
      return setTimeout(u, (p = e.mock_delay) != null ? p : 100)
    }), e.mock(i);
    const _ = fn(e, ["mock"]),
      g = {
        ..._,
        use_non_zero_ret: t == null ? void 0 : t.use_non_zero_ret,
        default_error_tip_key: t == null ? void 0 : t.default_error_tip_key,
        ignore_toast: (a == null ? void 0 : a.ignore_toast) || (t == null ? void 0 : t.ignore_toast) || void 0,
        fe_ignore_not_found_jump: (a == null ? void 0 : a.fe_ignore_not_found_jump) || (t == null ? void 0 : t.fe_ignore_not_found_jump) || void 0
      };
    return (typeof _.method == "string" ? _.method.toLowerCase() : "get") === "get" ? g.params = i : g.data = i, ((v = t == null ? void 0 : t.axios) != null ? v : Ie).request(g)
  }, s = Symbol(), o = (r, a) => {
    var g, l, v, u, p, d;
    const i = P(() => JSON.stringify(D(r))),
      _ = qt({
        queryKey: [s, e.url, e.method, i],
        queryFn: f => n({
          ...t == null ? void 0 : t.default_params,
          ...D(r)
        }),
        ...a,
        staleTime: (v = (l = a && "value" in a ? (g = a.value) == null ? void 0 : g.staleTime : null) != null ? l : t == null ? void 0 : t.staleTime) != null ? v : void 0,
        gcTime: (d = (p = a && "value" in a ? (u = a.value) == null ? void 0 : u.gcTime : null) != null ? p : t == null ? void 0 : t.gcTime) != null ? d : void 0
      });
    return a != null && a.editable ? {
      ..._,
      data: Q_(_)
    } : _
  };
  return o.run = n, o.symbol = s, o
}

function ne(e, t) {
  const s = Z_(async (r, a) => {
      var g, l;
      const i = {
        ...t == null ? void 0 : t.default_params,
        ...fn(r != null ? r : {}, ["_headers"])
      };
      if (typeof e.mock == "function" && !Ho()) return await new Promise(v => {
        var u;
        return setTimeout(v, (u = e.mock_delay) != null ? u : 100)
      }), e.mock(i);
      const _ = fn(e, ["mock", "mock_delay"]);
      return ((g = t == null ? void 0 : t.axios) != null ? g : Ie).request({
        ..._,
        data: i,
        headers: {
          ..._.headers,
          ...(l = r == null ? void 0 : r._headers) != null ? l : {}
        },
        ignore_toast: (a == null ? void 0 : a.ignore_toast) || (t == null ? void 0 : t.ignore_toast) || void 0,
        fe_ignore_not_found_jump: (a == null ? void 0 : a.fe_ignore_not_found_jump) || (t == null ? void 0 : t.fe_ignore_not_found_jump) || void 0
      })
    }, {
      duration: 500,
      name: e.url,
      default_debounce: !0
    }),
    o = r => {
      const a = Gr();
      return kr({
        mutationFn: s,
        ...r,
        onSuccess: (...i) => {
          var g;
          (g = r == null ? void 0 : r.onSuccess) == null || g.call(r, ...i);
          const _ = typeof (t == null ? void 0 : t.refetch) == "function" ? t == null ? void 0 : t.refetch() : t == null ? void 0 : t.refetch;
          _ == null || _.forEach(l => a.invalidateQueries({
            queryKey: [l.symbol]
          }))
        }
      })
    };
  return o.run = s, o
}

function Z_(e, t) {
  const {
    duration: n,
    name: s
  } = t, o = new Map;
  return async (r, a) => {
    var g, l;
    if (!((g = a == null ? void 0 : a.debounce) != null ? g : t.default_debounce)) return e(r, a);
    const i = JSON.stringify(r);
    if (o.get(i)) throw new Error("frequency mutation: ".concat(s));
    o.set(i, {
      start: Date.now()
    });
    try {
      const v = await e(r, a);
      return o.set(i, {
        start: (l = o.get(i)) == null ? void 0 : l.start,
        end: Date.now()
      }), window.setTimeout(() => o.delete(i), n), v
    } catch (v) {
      throw o.delete(i), v
    }
  }
}
const el = N({
    method: "post",
    url: di
  }),
  tl = N({
    method: "post",
    url: Ei
  }),
  hv = N({
    method: "post",
    url: _i
  }),
  Av = N({
    method: "post",
    url: li
  }),
  nn = N({
    method: "post",
    url: ui
  }, {
    staleTime: 60 * 1e3
  }),
  Hn = N({
    method: "post",
    url: to
  }),
  nl = ne({
    method: "post",
    url: mi
  }, {
    refetch: [nn]
  });
N({
  method: "post",
  url: pi
});
const Iv = ne({
    method: "post",
    url: gi
  }, {
    refetch: []
  }),
  Sv = ne({
    method: "post",
    url: fi
  }, {
    refetch: []
  }),
  Tv = N({
    method: "post",
    url: vi
  }),
  yv = N({
    method: "post",
    url: Ja
  }, {
    ignore_toast: !0
  }),
  Ov = ne({
    method: "post",
    url: Ln
  }, {
    refetch: [nn]
  }),
  Pv = N({
    method: "post",
    url: hi
  }),
  Cv = ne({
    method: "post",
    url: Ai
  }, {
    refetch: [nn, Hn]
  }),
  Rv = N({
    method: "post",
    url: Oi
  }),
  Dv = ne({
    method: "post",
    url: Pi
  }),
  Lv = N({
    method: "post",
    url: Ci
  }),
  wv = ne({
    method: "post",
    url: Ri
  }),
  bv = N({
    method: "post",
    url: Ii
  }),
  xv = ne({
    method: "post",
    url: Si
  }, {
    refetch: [nn, Hn]
  }),
  $o = () => typeof location == "object" ? location.hostname : "www.blablalink.com",
  sl = ["en", "ja", "zh", "ko", "zh-TW"],
  Yo = e => sl.includes(e) ? e : "en",
  ol = () => "https://nikke-en.com/privacypolicy/",
  rl = e => "https://".concat($o(), "/compliance/termsofservice/").concat(Yo(e), ".html"),
  al = e => "https://".concat($o(), "/compliance/communityguidelines/").concat(Yo(e), ".html"),
  Uv = () => "https://pass.levelinfinite.com/app/terms-of-service.html",
  Nv = () => "https://account.levelinfinite.com/privacypolicy.html",
  il = {
    class: "flex flex-col items-start"
  },
  cl = ["href"],
  _l = {
    class: "text-[color:var(--text-1)]"
  },
  ll = X({
    __name: "index",
    props: {
      show: {
        type: Boolean
      }
    },
    emits: ["close"],
    setup(e, {
      emit: t
    }) {
      const n = t,
        {
          show: s
        } = Qe(),
        o = A(!1),
        r = A([]),
        a = A(!1),
        i = P(() => [{
          name: w("nikke_end_user_license_agreement"),
          value: "termsofservice",
          href: rl(_e())
        }, {
          name: w("nikke_privacy_policy"),
          value: "privacypolicy",
          href: ol()
        }, {
          name: w("communityguidelines"),
          value: "communityguidelines",
          href: al(_e())
        }]),
        _ = async () => {
          if (!a.value) return;
          await tl.run({});
          const p = he();
          p.user_info.has_sign_privacy = !0, s({
            text: w("sign_successfully"),
            type: "success"
          }), n("close")
        }, g = p => {
          r.value = p
        }, l = p => {
          a.value = p
        }, v = p => {
          r.value = p ? i.value.map(d => d.value) : [], o.value = !1
        }, u = p => {
          const d = p.length;
          a.value = d === i.value.length, o.value = d > 0 && d < i.value.length
        };
      return (p, d) => (b(), ie(en, {
        show: p.show,
        title: D(w)("additional_information")
      }, {
        default: ae(() => [G("div", il, [z(D(cs), {
          label: D(w)("have_agree_agreement"),
          "model-value": a.value,
          indeterminate: o.value,
          class: "text-[color:var(--text-1)] !items-start",
          "onUpdate:modelValue": l,
          onChange: v
        }, null, 8, ["label", "model-value", "indeterminate"]), z(D(M_), {
          class: "ml-[12px] flex flex-col items-start",
          "model-value": r.value,
          "onUpdate:modelValue": g,
          onChange: u
        }, {
          default: ae(() => [(b(!0), H(Be, null, vn(i.value, (f, m) => (b(), ie(D(cs), {
            key: m,
            value: f.value
          }, {
            label: ae(() => [G("a", {
              class: "text-[color:var(--text-1)] text-[12px] text-left underline",
              href: f.href,
              target: "_blank"
            }, W(f.name), 9, cl)]),
            _: 2
          }, 1032, ["value"]))), 128))]),
          _: 1
        }, 8, ["model-value"])]), z(He, {
          type: "primary",
          disabled: !a.value,
          class: "w-full !mt-[12px]",
          onClick: _
        }, {
          default: ae(() => [Me(W(D(w)("confirm")), 1)]),
          _: 1
        }, 8, ["disabled"]), z(He, {
          type: "secondary",
          class: "w-full !mt-[12px]",
          onClick: d[0] || (d[0] = f => n("close"))
        }, {
          default: ae(() => [G("span", _l, W(D(w)("cancel")), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["show", "title"]))
    }
  }),
  ul = () => {
    const e = A();
    return {
      show: n => new Promise(s => e.value = tn(ll, Object.assign(n, {
        show: !0,
        onClose: async () => {
          s(Fe.close), e.value.unmount()
        }
      }))),
      dialog: e
    }
  },
  dl = {
    class: "relative w-full"
  },
  ml = ["placeholder", "maxlength"],
  pl = {
    class: "absolute right-[12px] top-1/2 -translate-y-1/2 font-normal text-[length:11px] leading-[13px] text-[color:var(--text-3)]"
  },
  gl = ["placeholder"],
  fl = X({
    __name: "index",
    props: Mr({
      maxLength: {},
      placeholder: {}
    }, {
      modelValue: {
        required: !0
      },
      modelModifiers: {}
    }),
    emits: ["update:modelValue"],
    setup(e) {
      const t = Vr(e, "modelValue");
      return (n, s) => (b(), H("div", dl, [n.maxLength ? (b(), H(Be, {
        key: 0
      }, [be(G("input", {
        "onUpdate:modelValue": s[0] || (s[0] = o => t.value = o),
        type: "text",
        placeholder: n.placeholder,
        class: "inline-block w-full h-[34px] rounded-[1px] bg-[color:var(--fill-3)] !border-[0.5px] border-solid border-[color:var(--line-1)] focus:border focus:border-solid focus:border-[color:var(--line-1)] font-normal text-[13px] leading-[16px] text-[color:var(--text-1)] appearance-none m-0 p-0 pl-[12px] pr-[48px] box-border",
        maxlength: n.maxLength
      }, null, 8, ml), [
        [Xn, t.value]
      ]), G("span", pl, W(t.value.length) + "/" + W(n.maxLength), 1)], 64)) : be((b(), H("input", {
        key: 1,
        "onUpdate:modelValue": s[1] || (s[1] = o => t.value = o),
        type: "text",
        placeholder: n.placeholder,
        class: "inline-block w-full h-[34px] rounded-[1px] bg-[color:var(--fill-3)] !border-[0.5px] border-solid border-[color:var(--line-1)] focus:border focus:border-solid focus:border-[color:var(--line-1)] font-normal text-[13px] leading-[16px] text-[color:var(--text-1)] appearance-none m-0 p-0 px-[12px] box-border"
      }, null, 8, gl)), [
        [Xn, t.value]
      ])]))
    }
  }),
  vl = {
    class: "text-[color:var(--text-1)]"
  },
  El = X({
    __name: "index",
    props: {
      show: {
        type: Boolean
      }
    },
    emits: ["close"],
    setup(e, {
      emit: t
    }) {
      const n = t,
        {
          show: s
        } = Qe(),
        o = A(""),
        r = async () => {
          o.value && (await nl.run({
            username: o.value
          }), s({
            text: w("modify_successfully"),
            type: "success"
          }), n("close"))
        };
      return (a, i) => (b(), ie(en, {
        show: a.show,
        title: D(w)("modify_username")
      }, {
        default: ae(() => [z(fl, {
          modelValue: o.value,
          "onUpdate:modelValue": i[0] || (i[0] = _ => o.value = _),
          placeholder: D(w)("please_enter"),
          "max-length": D(Kc)
        }, null, 8, ["modelValue", "placeholder", "max-length"]), z(He, {
          type: "primary",
          disabled: !o.value,
          class: "w-full !mt-[12px]",
          onClick: r
        }, {
          default: ae(() => [Me(W(D(w)("confirm")), 1)]),
          _: 1
        }, 8, ["disabled"]), z(He, {
          type: "secondary",
          class: "w-full !mt-[12px]",
          onClick: i[1] || (i[1] = _ => n("close"))
        }, {
          default: ae(() => [G("span", vl, W(D(w)("cancel")), 1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["show", "title"]))
    }
  }),
  hl = () => {
    const e = A();
    return {
      show: n => new Promise(s => e.value = tn(El, Object.assign(n, {
        show: !0,
        onClose: () => {
          s(Fe.close), e.value.unmount()
        }
      }))),
      dialog: e
    }
  },
  Al = [oo, ao, ro, so, no],
  Il = [Ks, Ln, Js, Zs, Xs, js, Ws, Qs, eo],
  Nt = e => "".concat(window.ERROR_OPERATION_INTERCEPTE_MESSAGE, ": ").concat(e),
  $n = () => {
    const {
      show: e
    } = ul(), {
      show: t
    } = hl(), {
      show: n
    } = Qe(), s = he(), o = P(() => {
      const u = he();
      return {
        is_login: u.is_login,
        user_info: u.user_info
      }
    }), r = async () => o.value.is_login ? Promise.resolve() : (le.push({
      path: fe.LOGIN,
      query: Qt()
    }), Promise.reject(Nt("login"))), a = async () => o.value.is_login && o.value.user_info.is_mute ? (n({
      text: w("violation_tips"),
      type: "error"
    }), Promise.reject(Nt("muted"))) : Promise.resolve(), i = async () => o.value.is_login && !o.value.user_info.has_sign_privacy ? (await e({}), Promise.reject(Nt("sign_privacy"))) : Promise.resolve(), _ = async () => o.value.is_login && !o.value.user_info.had_modified_username ? (await t({}), Promise.reject(Nt("modify_username"))) : Promise.resolve();
    return {
      needLoginInterceptor: r,
      muteInterceptor: a,
      signPrivacyInterceptor: i,
      axiosRequestInterceptor: async u => Il.includes(u.url) ? Promise.all([r, a, i]) : Al.includes(u.url) ? Promise.all([r, i]) : Promise.resolve(),
      afterLoginInterceptor: async () => yc([i, _]),
      checkUserAdultInterceptor: async () => {
        if (o.value.is_login) {
          const {
            adult_check_status: u,
            parent_certificate_status: p
          } = s.intl_user_status;
          u !== Fn.adult && Bn.parent_passed
        }
        return Promise.resolve()
      }
    }
  },
  Sl = (e, t) => {
    const {
      value: n,
      modifiers: s
    } = t, {
      stop: o,
      prevent: r,
      capture: a,
      passive: i,
      once: _,
      need_login: g,
      mute: l,
      sign_privacy: v,
      check_user_adult: u
    } = s || {}, p = async d => {
      if (Dc()) return;
      o && d.stopPropagation(), r && d.preventDefault();
      const {
        needLoginInterceptor: f,
        muteInterceptor: m,
        signPrivacyInterceptor: h,
        checkUserAdultInterceptor: S
      } = $n();
      g && await f(), l && await m(), v && await h(), u && await S(), (() => {
        Fr(n) && n(d)
      })()
    };
    e.addEventListener("click", p, {
      capture: a,
      passive: i,
      once: _
    }), e.__click_interceptor__ = p
  },
  Tl = e => {
    e.removeEventListener("click", e.__click_interceptor__), delete e.__click_interceptor__
  },
  yl = {
    beforeMount: Sl,
    beforeUnmount: Tl
  },
  ls = _e(),
  Ol = (e, t) => {
    const {
      langs: n,
      style: s
    } = t.value || {};
    n != null && n.includes(ls) && s && Object.assign(e.style, s), t.value && Object.keys(t.value).filter(o => !["langs", "style"].includes(o)).forEach(o => {
      o === ls && Object.assign(e.style, t.value[o])
    })
  },
  Pl = () => {},
  Cl = {
    mounted: Ol,
    unmounted: Pl
  },
  Rl = (e, t) => {
    const {
      value: n,
      modifiers: s
    } = t, {
      merge: o
    } = s;
    o ? (e.__pre_exist_el__ = e.innerHTML, e.innerHTML = e.__pre_exist_el__ + Ft.sanitize(n)) : e.innerHTML = Ft.sanitize(n)
  },
  Dl = (e, t) => {
    const {
      value: n,
      modifiers: s
    } = t, {
      merge: o
    } = s;
    if (o) {
      e.innerHTML !== e.__pre_exist_el__ + n && (e.innerHTML = e.__pre_exist_el__ + Ft.sanitize(n));
      return
    }
    if (e.innerHTML !== n) {
      e.innerHTML = Ft.sanitize(n);
      return
    }
  },
  Ll = e => {
    e && "__pre_exist_el__" in e && (e.__pre_exist_el__ = null, delete e.__pre_exist_el__)
  },
  wl = {
    beforeMount: Rl,
    onBeforeUnmount: Ll,
    updated: Dl
  },
  us = e => {
    const t = e.parentNode;
    if (!t) return;
    const n = t.getBoundingClientRect().width;
    if (!n) return;
    const s = e.offsetWidth;
    s > n && (t.classList.add("marquee"), e.classList.add("marquee-inner"), e.style.top = "", e.style.transform = "", e.style.animationDuration = Math.max(s / 800 * 25, 15) + "s")
  },
  bl = {
    updated(e) {
      us(e)
    },
    mounted(e) {
      us(e)
    }
  },
  Ue = {
    "click-interceptor": "click-interceptor",
    "style-adjust": "style-adjust",
    "safe-html": "safe-html",
    automarquee: "automarquee"
  },
  sn = (e, t) => !!e._context.directives[Ue[t]],
  xl = e => {
    !sn(e, Ue.automarquee) && (e == null || e.directive(Ue.automarquee, bl))
  },
  Ul = e => {
    !sn(e, Ue["click-interceptor"]) && (e == null || e.directive(Ue["click-interceptor"], yl))
  },
  Nl = e => {
    !sn(e, Ue["style-adjust"]) && (e == null || e.directive(Ue["style-adjust"], Cl))
  },
  Gl = e => {
    !sn(e, Ue["safe-html"]) && (e == null || e.directive(Ue["safe-html"], wl))
  },
  qo = e => {
    Ul(e), Nl(e), Gl(e), xl(e)
  },
  kl = {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 3e3,
          retry: !1,
          refetchOnWindowFocus: !1
        }
      }
    }
  },
  Ml = $r(),
  zo = () => ({
    installAppPlugins: (t, n = {}) => (t.use(Br).use(Hr, kl).use(Vn).use(le).use(Ml).use(Yr, {
      dispatchEvent: !0
    }).use(qr).use(L_).use(qo).use({
      install(s) {
        s.mixin({
          mounted() {
            var i, _;
            const {
              name: o,
              __name: r
            } = this.$options, a = o || r;
            a && ((_ = (i = this.$el) == null ? void 0 : i.setAttribute) == null || _.call(i, "data-cname", a))
          }
        })
      }
    }), n.is_main_app ? t.use(zr({
      selectors: {
        "#layout-content": !0
      }
    })) : t)
  }),
  {
    installAppPlugins: Vl
  } = zo();
let ds = 1e4;
const Gv = (e, t) => {
  let n = null;
  return e ? typeof e == "string" ? n = {
    content: e
  } : n = {
    ...e
  } : n = {}, t && Object.assign(n, t), n
};

function kv(e) {
  ds++;
  const t = Ds({
      show: !1,
      z_index: ds,
      ...e
    }),
    n = r => {
      t.show = r
    },
    s = r => {
      Object.assign(t, r), n(!0)
    },
    o = () => n(!1);
  return p_({
    open: s,
    close: o,
    toggle: n
  }), {
    open: s,
    close: o,
    state: t,
    toggle: n
  }
}

function Mv(e) {
  const t = Tt(e),
    n = document.createElement("div");
  document.body.appendChild(n);
  const s = t.mount(n);
  return {
    unmount() {
      t.unmount(), document.body.removeChild(n)
    },
    instance: s,
    app: t
  }
}

function jo(e, t = {}) {
  const n = Tt(e, t);
  Vl(n);
  const s = document.createElement("div");
  document.body.appendChild(s);
  const o = n.mount(s);
  return {
    unmount() {
      n.unmount(), document.body.removeChild(s)
    },
    instance: o,
    app: n
  }
}
const Fl = (e, t) => {
    const n = document.createElement("div");
    document.body.appendChild(n);
    const s = Tt(e, t != null ? t : null);
    return {
      instance: s.mount(n),
      app: s,
      unmount() {
        s.unmount(), document.body.removeChild(n)
      }
    }
  },
  Bl = {
    class: "fixed top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2 z-[1000]"
  },
  Hl = X({
    __name: "index",
    props: {
      text: {},
      interval: {
        default: 2e3
      },
      type: {
        default: "default"
      },
      auto_close: {
        type: Boolean,
        default: !0
      },
      align: {
        default: "left"
      }
    },
    emits: ["hide"],
    setup(e, {
      expose: t,
      emit: n
    }) {
      const s = e,
        o = n,
        r = A(!1),
        a = A(s.text),
        i = A(s.interval),
        _ = A(s.type),
        g = A(s.align),
        l = A();
      let v;
      const u = P(() => {
          switch (_.value) {
            case "success":
              return {
                name: "icon-success-large", color: "var(--brand-1)"
              };
            case "error":
              return {
                name: "icon-error", color: "var(--error)"
              };
            case "info":
              return {
                name: "icon-info", color: "var(--color-white)"
              };
            case "warning":
              return {
                name: "icon-warn", color: "var(--color-white)"
              };
            case "loading":
              return {
                name: "icon-loading-large", color: "var(--color-white)"
              };
            default:
              return {
                name: "", color: ""
              }
          }
        }),
        p = ({
          text: f,
          interval: m,
          type: h,
          auto_close: S,
          align: E
        }) => {
          f && (a.value = f), m && (i.value = m), h && (_.value = h), E && (g.value = E), r.value = !0, S !== !1 && (v = setTimeout(() => {
            d(), o("hide")
          }, i.value))
        },
        d = () => {
          r.value = !1, v && clearTimeout(v)
        };
      return t({
        show: p,
        hide: d
      }), jr(l, Wr), (f, m) => (b(), H("div", Bl, [r.value ? (b(), H("div", {
        key: 0,
        ref_key: "toast_content_ref",
        ref: l,
        class: ee(["flex items-center px-[12px] py-[10px] bg-[var(--color-black-85)] min-w-[125px] w-max max-w-[298px]", _.value === "success" || _.value === "loading" || _.value === "error" ? "flex-col" : "flex-row", f.align === "center" ? "justify-center" : ""])
      }, [u.value.name ? (b(), H("span", {
        key: 0,
        class: ee(["p-[2px] box-content", [_.value === "success" || _.value === "loading" || _.value === "error" ? "w-[50px] h-[50px]" : "w-[20px] h-[20px] mr-[8px]"]])
      }, [z(Dt, {
        class: ee(_.value === "loading" ? "block icon-loading" : ""),
        name: u.value.name,
        color: u.value.color
      }, null, 8, ["class", "name", "color"])], 2)) : te("", !0), G("div", {
        class: ee(["flex-1 font-normal text-[length:13px] leading-[16px] text-[color:var(--color-white)] hyphens-auto break-words", g.value === "center" ? "text-center" : ""])
      }, W(a.value), 3)], 2)) : te("", !0)]))
    }
  });

function Qe() {
  return {
    show: t => {
      const {
        instance: n,
        unmount: s
      } = Fl(Hl, {
        onHide: () => {
          s()
        }
      });
      n.show(t)
    }
  }
}
const $l = N({
    method: "post",
    url: Ki
  }, {
    ignore_toast: !0
  }),
  Yl = ne({
    method: "post",
    url: Ji
  }, {
    refetch: []
  }),
  ql = ne({
    method: "post",
    url: Xi
  }, {
    refetch: []
  });
var zl = (e => (e.LOGIN = "1", e.BIND_LIPASS = "2", e.SHIFTYPAD_BIND_GAME = "3", e.ADD_TO_DESKTOP = "4", e.FOLLOW_NIKKE = "5", e))(zl || {}),
  jl = (e => (e[e.UNFINISHED = 0] = "UNFINISHED", e[e.FINISHED = 1] = "FINISHED", e[e.COLLECTED = 2] = "COLLECTED", e))(jl || {});
const Wo = N({
    method: "get",
    url: Qi
  }),
  Ko = N({
    method: "get",
    url: Zi
  }),
  Vv = N({
    method: "get",
    url: ec
  }),
  Fv = ne({
    method: "post",
    url: tc
  }),
  Wl = () => Ie.get(Di, {
    ignore_toast: !0
  }),
  Bv = e => {
    const t = Le();
    return (e ? Ko : Wo).run({
      get_top: !0,
      intl_game_id: t
    }).then(n => ({
      tasks: n.tasks.map(s => {
        var o;
        return {
          ...s,
          ...(o = s.reward_infos) == null ? void 0 : o[0]
        }
      })
    }))
  },
  Hv = N({
    method: "post",
    url: Li
  }, {
    ignore_toast: !0
  }),
  $v = e => Ie.get(wi, {
    params: e
  }),
  Yv = e => Ie.post(bi, e),
  qv = N({
    method: "post",
    url: Fi
  }),
  zv = N({
    method: "post",
    url: Vi
  }, {
    ignore_toast: !0
  }),
  ms = ne({
    method: "post",
    url: ja
  }),
  Kl = ne({
    method: "post",
    url: Wa
  }),
  Jl = N({
    method: "post",
    url: Ka
  }, {
    ignore_toast: !0
  }),
  Xl = N({
    method: "post",
    url: zs
  }, {
    ignore_toast: !0
  }),
  Jo = N({
    method: "post",
    url: Ti
  }, {
    ignore_toast: !0,
    staleTime: 60 * 1e3
  }),
  jv = ne({
    method: "post",
    url: yi
  }, {
    refetch: []
  }),
  he = It("user", () => {
    const {
      cms_helper: e
    } = on(), {
      mutateAsync: t
    } = ms(), {
      setStorage: n
    } = Jt(), s = A(!0), o = A(!1), r = A(0), a = A(0), i = A(!0), _ = A(!0), g = A({}), l = A(At.unlogin), v = A({}), u = A({
      adult_check_status: Fn.not_set,
      parent_certificate_status: Bn.parent_not_set
    }), p = async () => {
      Object.assign(u.value, await el.run({}))
    }, d = O => {
      const F = g.value[O.intl_openid];
      return nt(F) ? O.is_follow : F
    }, f = O => {
      Object.assign(g.value, {
        [O.intl_openid]: nt(g.value[O.intl_openid]) ? !O.is_follow : !g.value[O.intl_openid]
      })
    }, {
      data: m,
      refetch: h
    } = qt({
      queryKey: ["mood_status_list"],
      queryFn: async () => (await e.getCommonLibrary({
        page_seq: 1,
        page_size: 100,
        library_name: "nikke站状态管理"
      })).data.data_list.map(Y => ({
        library_data_id: Y.library_data_id + "",
        ...Ql(Y.json_data)
      }))
    }), {
      data: S,
      isLoading: E,
      refetch: I
    } = Hn({}, {
      enabled: P(() => o.value)
    }), C = A({});
    je(() => S.value, async O => {
      O && O.info && (C.value = Kr(O.info), window.aegis.setConfig({
        uin: C.value.intl_openid
      }), x(), L.forEach(F => F(O.info)), L.length = 0)
    }, {
      immediate: !0
    });
    const M = O => o.value = O,
      U = O => l.value = O,
      V = async () => {
        s.value = !0, await Jl.run({}, {
          ignore_toast: !0
        }).catch(O => {
          throw i.value = !1, O
        }).finally(() => {
          s.value = !1, Te.forEach(O => O(o.value)), Te.length = 0
        }), M(!0), U(At.logined), j()
      }, j = async () => {
        i.value = !0;
        try {
          const {
            has_lip_account: O
          } = await Xl.run({});
          _.value = O
        } catch (O) {
          _.value = !1
        } finally {
          i.value = !1
        }
      }, x = async O => {
        if (typeof O == "number") {
          a.value = r.value, r.value = Math.max(O, 0);
          return
        }
        const F = await Wl();
        r.value = Number(q(F, "total_points", 0)), a.value = r.value
      }, se = async () => {
        const O = ue(),
          F = await t({
            game_openid: q(O, "openid"),
            game_token: q(O, "token"),
            game_channelid: +q(O, ya),
            game_encodeparam: q(O, Ta),
            game_id: q(O, Re),
            game_user_name: O.role_name || O.user_name
          });
        Io(Rn, q(O, Re)), n(Et, JSON.stringify(F))
      }, pe = async () => {
        var bt, jn, Wn, Kn;
        const O = ue();
        if (!O.web_credential) throw new Error("web_credential is required");
        const F = No(q(O, Re)),
          {
            getAccountSdk: Y
          } = Go(F),
          oe = await Y({
            accountPlatType: 131
          });
        O.web_credential;
        const re = _e(),
          at = Ca[re],
          Se = await oe.credentialFromApp({
            captchaOption: {
              userLanguage: at
            }
          });
        if (q(Se, "channel_info.channelId", "") || we(Se, "channel_info.channelId", 131), Se.ret === 0) {
          await ms.run({
            game_channelid: (bt = Se.channel_info) == null ? void 0 : bt.channelId,
            game_openid: (jn = Se.channel_info) == null ? void 0 : jn.openid,
            game_token: (Wn = Se.channel_info) == null ? void 0 : Wn.token,
            game_id: F.gameID,
            game_expire_time: (Kn = Se.channel_info) == null ? void 0 : Kn.expire_ts
          }), n(Et, JSON.stringify(Se));
          const xt = De.parseUrl(window.location.href);
          delete xt.query.web_credential;
          const Ar = De.stringifyUrl(xt);
          window.location.replace(Ar)
        } else {
          const {
            show: xt
          } = Qe();
          throw xt({
            text: "web_credential 登录失败: ".concat(Se.msg),
            type: "error",
            interval: 4e3
          }), new Error("login failed")
        }
      }, Te = [], Ze = async () => s.value ? new Promise(O => {
        Te.push(F => O(F))
      }) : o.value, L = [], R = async () => Us(C.value) ? new Promise(O => {
        L.push(F => O(F))
      }) : C.value, J = P(() => [Sn.official, Sn.institution].includes(C.value.auth_type));
    return {
      is_checking: s,
      total_point: r,
      start_point: a,
      user_info: C,
      is_login: o,
      login_status: l,
      loading: E,
      mood_list: m,
      user_had_bound_lip: _,
      user_can_publish_multiple_language: J,
      user_game_player_info: v,
      user_had_bind_lip_loading: i,
      intl_user_status: u,
      checkHasLipAccount: j,
      setIsLogin: M,
      setLoginStatus: U,
      refreshPoints: x,
      checkLogin: V,
      loginInGame: se,
      refetchUserInfo: I,
      refetchMoodList: h,
      isFollow: d,
      setFollowConfig: f,
      waitLoginCheckFinish: Ze,
      waitingGetUserInfoFinish: R,
      loginFromWebCredential: pe,
      onGetUserGamePlayerInfo: async () => {
        if (await R(), !o.value) return;
        const O = await Jo.run({
          intl_openid: C.value.intl_openid
        });
        v.value = O
      },
      onUpdateIntlUserStatus: p
    }
  }),
  Ql = e => {
    try {
      return JSON.parse(e)
    } catch (t) {
      return null
    }
  };

function Wv(e, t) {
  if (!e) return "";
  let n;
  if (typeof e == "number")
    if (e.toString().length === 10) n = new Date(e * 1e3);
    else if (e.toString().length === 13) n = new Date(e);
  else return "";
  else if (e instanceof Date) n = e;
  else return "";
  const s = {};
  switch (t) {
    case "MM-DD":
      s.month = "2-digit", s.day = "2-digit";
      break;
    case "YYYY-MM-DD":
      s.year = "numeric", s.month = "2-digit", s.day = "2-digit";
      break;
    case "DD/MM/YYYY":
      s.day = "2-digit", s.month = "2-digit", s.year = "numeric";
      break;
    case "MM/DD/YYYY":
      s.month = "2-digit", s.day = "2-digit", s.year = "numeric";
      break;
    case "YYYY/MM/DD":
      s.year = "numeric", s.month = "2-digit", s.day = "2-digit";
      break;
    default:
      s.month = "2-digit", s.day = "2-digit";
      break
  }
  return new Intl.DateTimeFormat("zh-CN", s).format(n)
}
const Kv = e => e.indexOf(Wc) > -1,
  Jv = (e, t, n) => {
    const s = new RegExp(t, "gi");
    return e.replace(s, o => '<span class="'.concat(n, '">').concat(o, "</span>"))
  },
  ut = (e, t = bn(e), n = "noopener,noreferrer") => {
    const {
      ensure: s
    } = wo(), o = s(kn.location, e);
    ho(o, t, n)
  },
  Zl = () => {
    const e = he(),
      {
        getLoginMeta: t
      } = xn(),
      n = async (_, g = bn(_), l = "noopener,noreferrer") => {
        var h;
        const v = i(_);
        if (!v || !e.is_login) {
          ut(_, g, l);
          return
        }
        const u = No(String(Le())),
          {
            getAccountSdk: p
          } = Go(u),
          d = await p(),
          f = t(),
          m = await d.exchangeWebCredential({
            openid: f.openid || f.open_id,
            token: f.token,
            target_gameid: v,
            channel_id: ((h = f.channel_info) == null ? void 0 : h.channelId) || f.channel_id
          });
        if (m.ret === 0) {
          const {
            web_credential: S
          } = m;
          if (r(_)) {
            const E = new URL(_),
              I = new URL("".concat(E.origin, "/external/nikke"));
            I.searchParams.set("web_credential", S), I.searchParams.set("redirect", encodeURIComponent(_)), a(I), ut(I.toString(), g, l)
          } else {
            const E = new URL(_);
            E.searchParams.set("web_credential", S), a(E), ut(E.toString(), g, l)
          }
        } else m.ret, ut(_, g, l)
      }, s = _ => !!i(_), o = _ => {
        try {
          return new URL(_).host.includes("pass.levelinfinite.com")
        } catch (g) {
          return !1
        }
      }, r = _ => {
        if (!o(_)) return !1;
        try {
          return new URL(_).pathname.includes("/lottery/wand/")
        } catch (g) {
          return !1
        }
      }, a = _ => {
        _.origin.includes("test-pass.levelinfinite.com") && _.searchParams.set("env", "sg")
      }, i = _ => o(_) ? 30004 : null;
    return {
      isSupportWebCredential: s,
      openUrlWithAuth: n
    }
  },
  {
    getLoginMeta: eu
  } = xn(),
  {
    logAndReportError: ps
  } = Po();
let un = null;
Jr.getInstance().createSwitch({
  "sg-lipcommunity.playerinfinite.com": "sg-lipcommunity-cdn.levelinfinite.com"
});
const on = e => {
    let t = null;
    const n = jc(e == null ? void 0 : e.cms_config);
    if (e != null && e.cms_config) {
      const {
        cms_helper: d
      } = Qn({
        cms_config: n
      });
      t = d
    } else if (un) t = un;
    else {
      const {
        cms_helper: d
      } = Qn({
        cms_config: n
      });
      un = d, t = d
    }
    const s = async d => {
      const {
        data: f
      } = await t.getFeedDetailV2({
        content_id: d
      });
      return f
    }, o = async d => await t.getColumnByName(d), r = async (d, f) => {
      var S;
      const m = f ? await o(d) : {
          secondary_label_list: []
        },
        h = ((S = m.secondary_label_list) == null ? void 0 : S.find(E => E.raw_label_name === f)) || {
          label_id: 0
        };
      return Object.assign(h, {
        primary_label_id: m.label_id
      })
    }, a = async (d, f) => {
      const {
        primary: m,
        second: h
      } = f, {
        label_id: S,
        primary_label_id: E
      } = await r(m, h), {
        offset: I,
        content_class: C,
        get_num: M,
        ext_info_type_list: U,
        with_off: V
      } = Object.assign({
        offset: 0,
        content_class: 0,
        get_num: 20,
        ext_info_type_list: [0, 1, 2],
        with_off: !1
      }, d);
      return await t.getFeedsByColumns({
        primary_label_id: E,
        secondary_label_id: S,
        offset: I,
        get_num: M,
        content_class: C,
        ext_info_type_list: U,
        with_off: V
      })
    }, i = async d => await t.getGroupFeedDetail(d), _ = d => {
      const {
        openUrlWithAuth: f
      } = Zl(), {
        external_link: m,
        is_group_content: h,
        content_id: S,
        father_content_id: E,
        not_jump: I
      } = zc(d, f);
      m || I || (h ? le.push({
        path: fe.INFO_GROUPS,
        query: ns({
          group_id: S
        })
      }) : le.push({
        path: fe.INFO_DETAIL,
        query: ns({
          content_id: S,
          father_content_id: E
        })
      }))
    }, g = d => {
      var h, S;
      const f = ((h = d.pic_urls) == null ? void 0 : h[0]) || "";
      return ((S = d.mobile_pic_urls) == null ? void 0 : S[0]) || "" || f
    }, l = async () => {
      var f;
      if (!(t.is_login && t.uid && t.ticket)) {
        const m = eu();
        if (Us(m)) return;
        const h = {
          channel_id: (f = m == null ? void 0 : m.channel_info) == null ? void 0 : f.channelId,
          login_res: m,
          intl_game_id: yo
        };
        await t.loginByIntlToken(h)
      }
      t.headers["X-uid"] || t.setHeaders({
        "X-uid": t.uid,
        "X-Ticket": t.ticket
      })
    }, v = async d => {
      await l(), await t.likeOperation({
        ...d,
        biz_id: 1,
        uid: t.uid
      })
    }, u = async d => {
      const {
        data: f
      } = await t.batchGetLikeInfo({
        content_ids: d,
        uid: t.uid,
        need_like_status: !0,
        biz_id: 1
      });
      return f == null ? void 0 : f.like_info_items
    };
    return {
      cms_helper: t,
      likeOperation: v,
      getFeedLikeInfo: async d => {
        await l();
        const f = await u([d]);
        return f == null ? void 0 : f[0]
      },
      getSecondColumnConfig: r,
      getFeedDetail: s,
      getSecondColumnData: a,
      getGroupFeedDetail: i,
      useCmsJump: _,
      getImage: g
    }
  },
  gs = e => {
    const t = _e(),
      n = Le();
    return (e == null ? void 0 : e.map(s => {
      var o;
      return {
        ...s,
        src: s.pic_urls || [],
        desc: s.content_part,
        is_video: !!s.video_info,
        time: Sc(s.pub_timestamp),
        source: (o = s == null ? void 0 : s.content_source) == null ? void 0 : o.content_source
      }
    }).filter(s => Oo({
      ext_info: s.ext_info,
      lang: t,
      game_id: n
    }))) || []
  },
  Xv = e => {
    const t = e.cms_config,
      n = e.primary_column_name,
      s = e.second_column_name,
      o = e.game_code,
      r = e.content_class || Gn.info,
      a = e.with_off || !1,
      i = e.get_num || 10,
      _ = e.offset || 0,
      g = e.group_id,
      l = A(e.list || []),
      v = A(!1),
      u = A(0),
      p = A(!1);
    let d = null;
    const f = E => Object.assign(g ? {
        content_id: g
      } : {
        content_class: r
      }, {
        with_off: a,
        get_num: i,
        offset: _
      }, E || {}),
      m = E => Object.assign({
        primary: n,
        second: s
      }, E || {}),
      h = () => {
        l.value = [], v.value = !1, u.value = 0, p.value = !1
      };
    if (t && (n || g) && (t != null && t.cms_areaid || o)) {
      const {
        getSecondColumnData: E,
        getGroupFeedDetail: I
      } = on({
        cms_config: t
      }), C = f(), M = m();
      d || (d = async (U, V) => {
        const x = await (g ? I : E)(U || C, V || M);
        if (x.code !== 0) {
          const se = {
            msg: x.msg,
            request_id: x.request_id
          };
          throw ps(se.msg, se), new Error(JSON.stringify(se))
        }
        return x.data
      }), (s || g) && (p.value = !0, d(C, M).then(U => {
        const {
          is_finish: V,
          next_offset: j,
          info_content: x
        } = U;
        v.value = !!V, u.value = j, l.value = gs(x)
      }).finally(() => {
        var U;
        p.value = !1, (U = e.callback) == null || U.call(e)
      }))
    }
    return {
      list: l,
      is_finish: v,
      next_offset: u,
      loading: p,
      load: d,
      loadMore: async (E, I) => {
        var C;
        try {
          if (p.value) return;
          p.value = !0;
          const M = E || f({
              offset: u.value
            }),
            U = I || m(),
            {
              is_finish: V,
              next_offset: j,
              info_content: x
            } = await d(M, U);
          v.value = !!V, u.value = j, l.value.push(...hc(l.value, gs(x), "content_id")), p.value = !1
        } catch (M) {
          ps("", M), p.value = !1
        } finally {
          (C = e.callback) == null || C.call(e)
        }
      },
      getLoadParams: f,
      getLoadOptions: m,
      reset: h
    }
  },
  Qv = {
    isInIntlBrowser: po()
  },
  Xo = () => _e() === "zh" ? "zh-TW" : _e(),
  Ne = Xo().toLowerCase(),
  Qo = Uc(),
  $e = new Xr({
    label: "common",
    level: void 0
  });
on();
const tu = e => {
    function t() {
      const o = document.documentElement,
        r = document.body;
      if (Ee()) {
        const i = Math.min(o.clientWidth, 480) / 750 * 16;
        o.style.setProperty("--scale", String(i / 16)), o.style.fontSize = i + "px", r.classList.remove("is-pc"), r.classList.add("is-mobile")
      } else {
        const a = o.clientWidth || window.innerWidth;
        let i = Math.min(a, 480) / 750 * 16;
        a <= 900, r.classList.add("is-mobile"), r.classList.remove("is-pc"), o.style.setProperty("--scale", String(i / 16)), o.style.fontSize = i + "px"
      }
    }

    function n() {
      setTimeout(function () {
        t()
      }, 300)
    }

    function s() {
      t(), n()
    }
    s(), document.addEventListener("DOMContentLoaded", s, !1), window.addEventListener("resize", Qr(s, 300), !1), window.addEventListener("load", s, !1)
  },
  Zo = e => {
    let t;
    const {
      screenChangeCallback: n
    } = {}, {
      isSupported: s,
      orientation: o
    } = Zr(), r = window, a = A(Ee()), i = A(r.innerWidth), _ = A(_n()), g = () => typeof r.screen.orientation < "u", l = () => {
      clearTimeout(t), t = setTimeout(() => {
        i.value !== r.innerWidth && (i.value = r.innerWidth, _.value = _n(), a.value = Ee(), n == null || n())
      }, 500)
    }, v = () => {
      i.value = r.innerWidth, _.value = _n(), a.value = Ee(), n == null || n()
    }, u = () => {
      document.addEventListener("visibilitychange", v), g() ? r.screen.orientation.addEventListener("change", l) : r.addEventListener("orientationchange", l)
    }, p = P(() => {
      var f, m;
      return !s.value || !Ee() ? _.value : (m = (f = o.value) == null ? void 0 : f.includes("landscape")) != null ? m : _.value
    }), d = () => {
      document.removeEventListener("visibilitychange", v), g() ? r.screen.orientation.removeEventListener("change", l) : r.removeEventListener("orientationchange", l)
    };
    return ke(u), ea(d), {
      is_mobile: a,
      is_landscape: _,
      new_is_landscape: p
    }
  },
  er = () => {
    const e = yt();
    return {
      is_widget_mode: P(() => e.name === me.WIDGET)
    }
  },
  nu = {
    key: 0,
    class: "fixed z-[9999] w-screen h-screen flex flex-col justify-center items-center bg-[color:var(--color-1)] left-0 top-0"
  },
  su = {
    class: "font-normal text-[length:13px] leading-[16px] text-[color:var(--color-white)]"
  },
  ou = X({
    __name: "index",
    setup(e) {
      const {
        is_widget_mode: t
      } = er(), {
        new_is_landscape: n
      } = Zo();
      return (s, o) => D(n) && !D(t) ? (b(), H("div", nu, [z(Dt, {
        name: "icon-rotate",
        color: "var(--color-white)",
        class: "w-[40px] h-[40px] mb-[16px] icon-rotate"
      }), G("p", su, W(D(w)("please_rotate_your_device_for_better_display")), 1)])) : te("", !0)
    }
  }),
  ru = Lt(ou, [
    ["__scopeId", "data-v-bb95b228"]
  ]),
  au = {
    class: "flex items-center justify-center my-[20px]"
  },
  tr = X({
    __name: "loading",
    props: {
      color: {}
    },
    setup(e) {
      const t = e,
        n = P(() => t.color || "var(--text-4)");
      return (s, o) => (b(), H("div", au, [z(Dt, {
        name: "icon-loading",
        class: "w-[32px] h-[32px] common-rotate",
        color: n.value
      }, null, 8, ["color"])]))
    }
  }),
  iu = {
    HOME: {
      INDEX: "home",
      CREATOR_HUB: "home_creator_hub",
      ANN: "anniversary2.5"
    },
    TAG: "tag",
    SEARCH: {
      INDEX: "search"
    }
  };
var mt = (e => (e.openid = "openid", e.openid_last_digits = "openid_last_digits", e.timestamp = "timestamp", e.url_no_keyword = "url_no_keyword", e))(mt || {}),
  wt = (e => (e.and = "and", e.or = "or", e.contains = "contains", e.not_contains = "not_contains", e.equal = "eq", e.greater_than = "gt", e.greater_than_or_equal = "gte", e.less_than = "lt", e.less_than_or_equal = "lte", e.not_equal = "neq", e.between = "between", e))(wt || {}),
  Yn = (e => (e.challenge = "challenge", e.vconsole = "vconsole", e.system = "system", e.annual_event = "annual_event", e.laboratory = "laboratory", e))(Yn || {});
const {
  staleWhileRevalidate: cu
} = Un(), Gt = window, _u = async (e, t) => {
  (!e || e === Ct) && (e = Pe);
  const n = Date.now(),
    s = "//sg-lipcommunity.playerinfinite.com/standalone-site-frontend/configure/".concat(t, "-").concat(e, ".json?t=").concat(n);
  return (await fetch(s)).json()
}, nr = e => {
  const {
    window_key: t,
    index_db_key: n
  } = e || {
    window_key: Fs,
    index_db_key: Vs
  };
  return {
    loadCDNConfigs: cu(n, {
      async handler(r, a = "configs") {
        try {
          Gt[t] = await _u(r, a)
        } catch (i) {}
        return Gt[t]
      },
      callback(r) {
        Gt[t] = r
      }
    }),
    getCDNConfigs: () => Gt[t] || {}
  }
}, rn = () => nr({
  window_key: Fs,
  index_db_key: Vs
}), Zv = () => nr({
  window_key: Na,
  index_db_key: Ua
}), lu = ue(), sr = (e, t, n) => (!t || e >= t) && (!n || e <= n), qn = e => !(e != null && e.length);
class zn {
  constructor(t, n) {
    B(this, "checkers");
    B(this, "relation");
    this.checkers = t, this.relation = n
  }
  async doCheck() {
    const t = [];
    for (const n of this.checkers) {
      const s = await n.check();
      t.push(s)
    }
    return this.relation === wt.and ? t.every(n => n) : t.some(n => n)
  }
}
class eE {
  constructor(t) {
    B(this, "checkers");
    this.checkers = t
  }
  async doCheck() {
    const t = [];
    for (const n of this.checkers) {
      const s = await n.check();
      t.push(s)
    }
    return t.some(n => n)
  }
}
class uu {
  constructor(t) {
    B(this, "keyword");
    this.keyword = t
  }
  async check() {
    return !ta(lu, "no_".concat(this.keyword))
  }
}
class du {
  constructor(t) {
    B(this, "logic");
    this.logic = t
  }
  async check() {
    const {
      rules: t,
      relation: n
    } = this.logic;
    if (!(t != null && t.length)) return !1;
    const s = t.map(a => new class {
      async check() {
        const _ = Date.now() / 1e3,
          {
            min: g,
            max: l
          } = a;
        return sr(_, g, l)
      }
    });
    return await new zn(s, n || wt.or).doCheck()
  }
}
class mu {
  constructor(t, n) {
    B(this, "logic");
    B(this, "openid");
    this.logic = t, this.openid = "".concat(n)
  }
  async check() {
    const {
      rules: t,
      relation: n,
      digits: s
    } = this.logic;
    if (!this.openid || !(t != null && t.length)) return !1;
    const o = +this.openid.slice(-(s || 2)),
      r = t.map(_ => new class {
        async check() {
          const {
            min: l,
            max: v
          } = _;
          return sr(o, l, v)
        }
      });
    return await new zn(r, n || wt.or).doCheck()
  }
}
class pu {
  constructor(t, n) {
    B(this, "logic");
    B(this, "openid");
    this.logic = t, this.openid = "".concat(n)
  }
  async check() {
    const {
      rules: t,
      relation: n
    } = this.logic;
    if (!(t != null && t.length) || !this.openid) return !1;
    let s = t.includes(this.openid);
    return n === wt.not_contains && (s = !s), s
  }
}
class sE {
  constructor(t, n) {
    B(this, "url");
    B(this, "config_values");
    this.url = t, this.config_values = n || []
  }
  async check() {
    return qn(this.config_values) ? !1 : this.config_values.includes(vo(Eo(this.url)))
  }
}
class oE {
  constructor(t, n) {
    B(this, "url");
    B(this, "config_values");
    this.url = t, this.config_values = n || []
  }
  async check() {
    if (qn(this.config_values)) return !1;
    try {
      const n = new URL(this.url).hostname;
      return this.config_values.includes(n)
    } catch (t) {
      return !1
    }
  }
}
class rE {
  constructor(t, n) {
    B(this, "url");
    B(this, "config_values");
    this.url = t, this.config_values = n || []
  }
  async check() {
    if (qn(this.config_values)) return !1;
    try {
      const n = new URL(this.url).hostname;
      return this.config_values.map(o => {
        const r = o.replace(/\*/g, ".*");
        return new RegExp("^".concat(r, "$"))
      }).some(o => o.test(n))
    } catch (t) {
      return !1
    }
  }
}
const {
  getCDNConfigs: gu
} = rn(), or = e => ({
  getGrayscale: async (n, s) => {
    var g;
    if (!n) throw new Error("[getGrayscale] grayscale_key is required");
    const {
      grayscale: o
    } = gu(), r = o[n] || {}, a = [];
    return (g = r.logics) == null || g.forEach(l => {
      switch (l.type) {
        case mt.url_no_keyword:
          a.push(new uu(n));
          break;
        case mt.timestamp:
          a.push(new du(l));
          break;
        case mt.openid_last_digits:
          a.push(new mu(l, (s == null ? void 0 : s.openid) || ""));
          break;
        case mt.openid:
          a.push(new pu(l, (s == null ? void 0 : s.openid) || ""));
          break
      }
    }), await new zn(a, r.relation).doCheck()
  }
}), fu = It(iu.HOME.ANN, () => {
  const e = A(!1),
    t = A(!1),
    n = A(),
    s = A({
      bg_image: "",
      bg_color: ""
    }),
    {
      getCDNConfigs: o
    } = rn(),
    r = async () => {
      const {
        getGrayscale: l
      } = or(), v = await l(Yn.annual_event, {});
      e.value = v, t.value = v;
      const {
        annual_event: u
      } = await o();
      if (u) {
        const {
          value: p,
          configs: d
        } = u, f = d.find(m => m.value === p);
        n.value = p, f && (s.value = f == null ? void 0 : f.bg_config)
      }
    }, a = l => n.value === l, i = P(() => t.value && a("2.5")), _ = P(() => t.value && a("atmosphere")), g = P(() => t.value && a("summerLife"));
  return r(), {
    anniversary: e,
    anniversary_value: n,
    anniversary_visible: t,
    anniversary_bg_config: s,
    is_two_and_half_anniversary: i,
    is_atmosphere_anniversary: _,
    is_summerLife: g
  }
}), vu = {
  class: "fixed flex justify-center w-full mx-auto z-10"
}, fs = 50, Eu = X({
  __name: "index",
  setup(e) {
    const {
      anniversary_visible: t,
      is_two_and_half_anniversary: n,
      is_atmosphere_anniversary: s,
      is_summerLife: o,
      anniversary_bg_config: r
    } = Ns(fu()), a = Ee(), i = yt(), _ = A(), g = A(0), l = A(0), v = A(!1), u = P(() => {
      const I = {};
      return r.value.bg_image ? {
        ...I,
        backgroundImage: "url(".concat(r.value.bg_image, ")"),
        backgroundColor: r.value.bg_color
      } : I
    }), {
      is_widget_mode: p
    } = er(), d = P(() => {
      const I = ["flex flex-col h-screen w-screen relative bg-[var(--fill-3)]"];
      return p.value ? (I.push("items-center"), I) : (I.push("max-w-[var(--max-pc-w)]"), !t.value || ![me.HOME].includes(i.name) ? I : s.value ? I.concat("atmosphere transform scale(1)") : o.value ? I.concat("summerlife transform scale(1)") : n.value ? I.concat("year2-5") : I)
    }), f = P(() => {
      var I;
      return a ? !((I = i.meta) != null && I.noBottomPadding) : !1
    }), m = () => !(!a || ![me.HOME].includes(i.name) || _.value.scrollTop >= 0);

    function h(I) {
      m() && (g.value = q(I, "touches[0].clientY", 0), l.value = 0)
    }

    function S(I) {
      if (!m()) {
        v.value = !1;
        return
      }
      let M = q(I, "touches[0].clientY", 0) - g.value;
      M > 0 && (I.preventDefault(), M = M / 2, l.value = M), M >= fs && (v.value = !0, l.value = fs)
    }

    function E() {
      v.value && setTimeout(() => {
        window.location.reload()
      }, 100), l.value = 0, v.value = !1
    }
    return ke(() => {
      i.name === me.HOME && setTimeout(() => {
        _.value.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }, 1e3)
    }), (I, C) => (b(), H("div", {
      class: ee(["flex justify-center w-full h-full overflow-hidden bg-no-repeat bg-[position:top_center] bg-fixed bg-[100%_auto]"]),
      style: ve(u.value),
      onTouchstartPassive: h,
      onTouchmove: S,
      onTouchend: E
    }, [G("div", {
      class: ee(d.value)
    }, [be(G("div", vu, [z(tr, {
      class: "w-[20px] h-[20px]"
    })], 512), [
      [Ye, v.value]
    ]), G("div", {
      id: "layout-content",
      ref_key: "layout_content_ref",
      ref: _,
      class: ee(["overflow-y-auto w-full relative no-scrollbar", !D(p) && "max-w-[var(--max-pc-w)]", f.value && "pb-[100px]"])
    }, [St(I.$slots, "default")], 2), z(ru)], 2)], 36))
  }
}), hu = "https://www.blablalink.com/assets/nikke/version/default/assets/ot-persistent-cookie-icon-D1bATZps.png", Au = X({
  __name: "entrance",
  setup(e) {
    const t = A(null),
      {
        is_mobile: n
      } = Zo(),
      s = P(() => n.value ? -195 : -240),
      o = !1;
    return (r, a) => be((b(), H("img", {
      id: "ot-sdk-btn",
      ref_key: "container",
      ref: t,
      src: hu,
      class: "hover:!bg-[color:transparent] ot-sdk-show-settings !p-0 fixed z-[50] bottom-[30px] left-[50%] w-[8px] object-cover !border-none cursor-pointer !h-[40px]",
      style: ve({
        transform: "translateX(".concat(s.value, "px)")
      })
    }, null, 4)), [
      [Ye, !D(o) && !1]
    ])
  }
}), Iu = X({
  __name: "service-worker",
  setup(e) {
    const t = Zn(() => c(() => import("./service-workder-refresh-prompt-BZ_WmnsD.js"), __vite__mapDeps([251, 1, 252]))),
      n = Zn(() => c(() => import("./index-DTy6aJFv.js"), __vite__mapDeps([253, 1]))),
      s = A(!0),
      o = A([Pe].includes("prod"));
    return (r, a) => (b(), ie(na, {
      to: "body"
    }, [s.value ? (b(), H(Be, {
      key: 0
    }, [(b(), ie(vt(D(t)))), o.value ? (b(), ie(vt(D(n)), {
      key: 0
    })) : te("", !0)], 64)) : te("", !0)]))
  }
});

function aE(e, t = 500) {
  let n, s;
  return function () {
    const o = arguments,
      r = this;
    return n || (n = !0, setTimeout(() => n = !1, t), s = e.apply(r, o)), s
  }
}

function pt(e) {
  let t = null;
  return (...n) => (t || (t = e(...n), t instanceof Promise && t.finally(() => {
    t = null
  })), t)
}
const iE = (e, t) => t.length > 0 ? e.sort((n, s) => {
  const o = t.indexOf(n.resource_id),
    r = t.indexOf(s.resource_id);
  return o !== -1 && r !== -1 ? o - r : o !== -1 && r === -1 ? -1 : o === -1 && r !== -1 ? 1 : 0
}) : e;

function Su(e, t = "-") {
  return e ? typeof e == "string" ? e : Su(e.toString(), t) : t
}

function cE(e) {
  const s = Number(e) < 0 ? "-" : "",
    o = {
      M: 1e6,
      K: 1e3
    },
    r = Object.keys(o),
    a = Math.abs(Number(e));
  for (let i = 0; i < r.length; i++)
    if (a >= 10 * o[r[i]]) return "".concat(s).concat(Math.round(a / o[r[i]])).concat(r[i]);
  return "".concat(s).concat(e)
}
const Ge = (e, t) => {
    let n = String(e);
    for (; n.length < t;) n = "0".concat(n);
    return n
  },
  Tu = e => {
    const t = /<color=(#[0-9a-fA-F]{6})>|<\/color>/g;
    return e.replace(t, (s, o, r) => {
      if (o) return '<span style="color: '.concat(o, ';">');
      if (r) return "</span>"
    })
  },
  yu = e => (e = e.replace(new RegExp("\\n", "g"), "<br />"), e = e.replace(new RegExp("\\\\n", "g"), "<br />"), e);

function _E(e, t) {
  const n = {};
  return e.description_value_list.forEach((s, o) => {
    if (Array.isArray(s.description_value)) {
      const [r] = s.description_value;
      n["description_value_".concat(Ge(o + 1, 2))] = s.description_value[t] || r
    }
  }), Ou(e.description_localkey, n)
}
const lE = e => {
    if (!e) return "-";
    const t = s => {
        const o = new Date(s);
        return "".concat(o.toLocaleDateString(), " ").concat(String(o.getHours()).padStart(2, "0"), ":").concat(String(o.getMinutes()).padStart(2, "0"))
      },
      n = String(e.id - 1e6);
    return "[S".concat(n, "] ").concat(t(e.season_start_date), " - ").concat(t(e.season_end_date))
  },
  Ou = (e, t) => {
    let n = e;
    return Object.keys(t).forEach(s => {
      n = yu(n), typeof t[s] == "string" && (n = n.replace(new RegExp("{".concat(s, "}"), "g"), t[s])), typeof t[s] == "number" && (n = n.replace(new RegExp("{".concat(s, "}"), "g"), String(Number(t[s]) / 100)))
    }), n = Tu(n), n
  },
  Pu = e => Ru("shiftysassets/images/".concat(e)),
  Cu = e => "https://sg-tools-cdn.blablalink.com".concat(e),
  Ru = e => "".concat("https://www.blablalink.com/assets/nikke/version/default".replace(/\/$/g, ""), "/").concat(e.replace(/^\//g, ""));
(function (e, t) {
  for (var n = ce, s = e();;) try {
    var o = -parseInt(n(418)) / 1 * (parseInt(n(414)) / 2) + parseInt(n(384)) / 3 * (-parseInt(n(395)) / 4) + -parseInt(n(379)) / 5 * (parseInt(n(377)) / 6) + -parseInt(n(408)) / 7 * (-parseInt(n(417)) / 8) + parseInt(n(403)) / 9 * (-parseInt(n(426)) / 10) + -parseInt(n(402)) / 11 * (-parseInt(n(411)) / 12) + parseInt(n(407)) / 13;
    if (o === t) break;
    s.push(s.shift())
  } catch (r) {
    s.push(s.shift())
  }
})(Ht, 387693);

function Du(e) {
  var t = ce;
  return e && e[t(385)] && Object[t(378)][t(420)].call(e, t(413)) ? e[t(413)] : e
}
var dn = {
    exports: {}
  },
  mn = {
    exports: {}
  },
  vs;

function Lu() {
  var e = ce;
  return vs || (vs = 1, function () {
    var t = e,
      n = t(423),
      s = {
        rotl: function (o, r) {
          return o << r | o >>> 32 - r
        },
        rotr: function (o, r) {
          return o << 32 - r | o >>> r
        },
        endian: function (o) {
          var r = t;
          if (o[r(422)] == Number) return s[r(390)](o, 8) & 16711935 | s[r(390)](o, 24) & 4278255360;
          for (var a = 0; a < o.length; a++) o[a] = s.endian(o[a]);
          return o
        },
        randomBytes: function (o) {
          for (var r = t, a = []; o > 0; o--) a.push(Math[r(376)](Math[r(427)]() * 256));
          return a
        },
        bytesToWords: function (o) {
          for (var r = [], a = 0, i = 0; a < o.length; a++, i += 8) r[i >>> 5] |= o[a] << 24 - i % 32;
          return r
        },
        wordsToBytes: function (o) {
          for (var r = t, a = [], i = 0; i < o[r(374)] * 32; i += 8) a.push(o[i >>> 5] >>> 24 - i % 32 & 255);
          return a
        },
        bytesToHex: function (o) {
          for (var r = t, a = [], i = 0; i < o[r(374)]; i++) a[r(409)]((o[i] >>> 4)[r(373)](16)), a[r(409)]((o[i] & 15)[r(373)](16));
          return a[r(404)]("")
        },
        hexToBytes: function (o) {
          for (var r = t, a = [], i = 0; i < o[r(374)]; i += 2) a[r(409)](parseInt(o.substr(i, 2), 16));
          return a
        },
        bytesToBase64: function (o) {
          for (var r = t, a = [], i = 0; i < o[r(374)]; i += 3)
            for (var _ = o[i] << 16 | o[i + 1] << 8 | o[i + 2], g = 0; g < 4; g++) i * 8 + g * 6 <= o.length * 8 ? a[r(409)](n[r(419)](_ >>> 6 * (3 - g) & 63)) : a[r(409)]("=");
          return a[r(404)]("")
        },
        base64ToBytes: function (o) {
          var r = t;
          o = o[r(389)](/[^A-Z0-9+\/]/ig, "");
          for (var a = [], i = 0, _ = 0; i < o.length; _ = ++i % 4) _ != 0 && a.push((n[r(375)](o[r(419)](i - 1)) & Math[r(371)](2, -2 * _ + 8) - 1) << _ * 2 | n[r(375)](o.charAt(i)) >>> 6 - _ * 2);
          return a
        }
      };
    mn[t(412)] = s
  }()), mn[e(412)]
}
var pn, Es;

function hs() {
  if (Es) return pn;
  Es = 1;
  var e = {
    utf8: {
      stringToBytes: function (t) {
        var n = ce;
        return e[n(401)].stringToBytes(unescape(encodeURIComponent(t)))
      },
      bytesToString: function (t) {
        var n = ce;
        return decodeURIComponent(escape(e[n(401)][n(398)](t)))
      }
    },
    bin: {
      stringToBytes: function (t) {
        for (var n = ce, s = [], o = 0; o < t[n(374)]; o++) s.push(t[n(372)](o) & 255);
        return s
      },
      bytesToString: function (t) {
        for (var n = ce, s = [], o = 0; o < t[n(374)]; o++) s[n(409)](String[n(382)](t[o]));
        return s[n(404)]("")
      }
    }
  };
  return pn = e, pn
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var gn, As;

function wu() {
  if (As) return gn;
  As = 1, gn = function (n) {
    var s = ce;
    return n != null && (e(n) || t(n) || !!n[s(393)])
  };

  function e(n) {
    var s = ce;
    return !!n[s(422)] && typeof n[s(422)][s(397)] === s(421) && n[s(422)].isBuffer(n)
  }

  function t(n) {
    var s = ce;
    return typeof n[s(383)] === s(421) && typeof n.slice === s(421) && e(n[s(386)](0, 0))
  }
  return gn
}
var Is;

function bu() {
  var e = ce;
  return Is || (Is = 1, function () {
    var t = e,
      n = Lu(),
      s = hs()[t(387)],
      o = wu(),
      r = hs().bin,
      a = function (i, _) {
        var g = t;
        i.constructor == String ? _ && _[g(399)] === "binary" ? i = r.stringToBytes(i) : i = s[g(425)](i) : o(i) ? i = Array[g(378)].slice.call(i, 0) : !Array[g(400)](i) && i[g(422)] !== Uint8Array && (i = i[g(373)]());
        for (var l = n[g(406)](i), v = i[g(374)] * 8, u = 1732584193, p = -271733879, d = -1732584194, f = 271733878, m = 0; m < l[g(374)]; m++) l[m] = (l[m] << 8 | l[m] >>> 24) & 16711935 | (l[m] << 24 | l[m] >>> 8) & 4278255360;
        l[v >>> 5] |= 128 << v % 32, l[(v + 64 >>> 9 << 4) + 14] = v;
        for (var h = a._ff, S = a._gg, E = a[g(405)], I = a[g(392)], m = 0; m < l[g(374)]; m += 16) {
          var C = u,
            M = p,
            U = d,
            V = f;
          u = h(u, p, d, f, l[m + 0], 7, -680876936), f = h(f, u, p, d, l[m + 1], 12, -389564586), d = h(d, f, u, p, l[m + 2], 17, 606105819), p = h(p, d, f, u, l[m + 3], 22, -1044525330), u = h(u, p, d, f, l[m + 4], 7, -176418897), f = h(f, u, p, d, l[m + 5], 12, 1200080426), d = h(d, f, u, p, l[m + 6], 17, -1473231341), p = h(p, d, f, u, l[m + 7], 22, -45705983), u = h(u, p, d, f, l[m + 8], 7, 1770035416), f = h(f, u, p, d, l[m + 9], 12, -1958414417), d = h(d, f, u, p, l[m + 10], 17, -42063), p = h(p, d, f, u, l[m + 11], 22, -1990404162), u = h(u, p, d, f, l[m + 12], 7, 1804603682), f = h(f, u, p, d, l[m + 13], 12, -40341101), d = h(d, f, u, p, l[m + 14], 17, -1502002290), p = h(p, d, f, u, l[m + 15], 22, 1236535329), u = S(u, p, d, f, l[m + 1], 5, -165796510), f = S(f, u, p, d, l[m + 6], 9, -1069501632), d = S(d, f, u, p, l[m + 11], 14, 643717713), p = S(p, d, f, u, l[m + 0], 20, -373897302), u = S(u, p, d, f, l[m + 5], 5, -701558691), f = S(f, u, p, d, l[m + 10], 9, 38016083), d = S(d, f, u, p, l[m + 15], 14, -660478335), p = S(p, d, f, u, l[m + 4], 20, -405537848), u = S(u, p, d, f, l[m + 9], 5, 568446438), f = S(f, u, p, d, l[m + 14], 9, -1019803690), d = S(d, f, u, p, l[m + 3], 14, -187363961), p = S(p, d, f, u, l[m + 8], 20, 1163531501), u = S(u, p, d, f, l[m + 13], 5, -1444681467), f = S(f, u, p, d, l[m + 2], 9, -51403784), d = S(d, f, u, p, l[m + 7], 14, 1735328473), p = S(p, d, f, u, l[m + 12], 20, -1926607734), u = E(u, p, d, f, l[m + 5], 4, -378558), f = E(f, u, p, d, l[m + 8], 11, -2022574463), d = E(d, f, u, p, l[m + 11], 16, 1839030562), p = E(p, d, f, u, l[m + 14], 23, -35309556), u = E(u, p, d, f, l[m + 1], 4, -1530992060), f = E(f, u, p, d, l[m + 4], 11, 1272893353), d = E(d, f, u, p, l[m + 7], 16, -155497632), p = E(p, d, f, u, l[m + 10], 23, -1094730640), u = E(u, p, d, f, l[m + 13], 4, 681279174), f = E(f, u, p, d, l[m + 0], 11, -358537222), d = E(d, f, u, p, l[m + 3], 16, -722521979), p = E(p, d, f, u, l[m + 6], 23, 76029189), u = E(u, p, d, f, l[m + 9], 4, -640364487), f = E(f, u, p, d, l[m + 12], 11, -421815835), d = E(d, f, u, p, l[m + 15], 16, 530742520), p = E(p, d, f, u, l[m + 2], 23, -995338651), u = I(u, p, d, f, l[m + 0], 6, -198630844), f = I(f, u, p, d, l[m + 7], 10, 1126891415), d = I(d, f, u, p, l[m + 14], 15, -1416354905), p = I(p, d, f, u, l[m + 5], 21, -57434055), u = I(u, p, d, f, l[m + 12], 6, 1700485571), f = I(f, u, p, d, l[m + 3], 10, -1894986606), d = I(d, f, u, p, l[m + 10], 15, -1051523), p = I(p, d, f, u, l[m + 1], 21, -2054922799), u = I(u, p, d, f, l[m + 8], 6, 1873313359), f = I(f, u, p, d, l[m + 15], 10, -30611744), d = I(d, f, u, p, l[m + 6], 15, -1560198380), p = I(p, d, f, u, l[m + 13], 21, 1309151649), u = I(u, p, d, f, l[m + 4], 6, -145523070), f = I(f, u, p, d, l[m + 11], 10, -1120210379), d = I(d, f, u, p, l[m + 2], 15, 718787259), p = I(p, d, f, u, l[m + 9], 21, -343485551), u = u + C >>> 0, p = p + M >>> 0, d = d + U >>> 0, f = f + V >>> 0
        }
        return n[g(380)]([u, p, d, f])
      };
    a[t(410)] = function (i, _, g, l, v, u, p) {
      var d = i + (_ & g | ~_ & l) + (v >>> 0) + p;
      return (d << u | d >>> 32 - u) + _
    }, a[t(396)] = function (i, _, g, l, v, u, p) {
      var d = i + (_ & l | g & ~l) + (v >>> 0) + p;
      return (d << u | d >>> 32 - u) + _
    }, a._hh = function (i, _, g, l, v, u, p) {
      var d = i + (_ ^ g ^ l) + (v >>> 0) + p;
      return (d << u | d >>> 32 - u) + _
    }, a[t(392)] = function (i, _, g, l, v, u, p) {
      var d = i + (g ^ (_ | ~l)) + (v >>> 0) + p;
      return (d << u | d >>> 32 - u) + _
    }, a._blocksize = 16, a[t(391)] = 16, dn.exports = function (i, _) {
      var g = t;
      if (i == null) throw new Error("Illegal argument " + i);
      var l = n[g(415)](a(i, _));
      return _ && _.asBytes ? l : _ && _[g(394)] ? r.bytesToString(l) : n.bytesToHex(l)
    }
  }()), dn[e(412)]
}
var xu = bu(),
  Uu = Du(xu);

function rr(e) {
  return Uu(e)
}

function ar(e, t) {
  for (var n = ce, s = t, o = 0; o < e[n(374)]; o++) s = s * 33 + e.charCodeAt(o) & 4294967295;
  return s
}

function ir(e, t) {
  var n = ar(e, t),
    s = (n % t + t) % t,
    o = Math.floor(s / 26) % 26,
    r = s % 26;
  return String.fromCharCode(97 + o, 97 + r)
}

function cr(e, t) {
  var n = ce,
    s = 99,
    o = ar(e, t),
    r = (o % t + t) % t,
    a = r % s;
  return String(a)[n(381)](2, "0")
}
var Bt = [224737, 1000639, 2654435761, 2654435769, 1000621, 4294967291],
  Nu = function (e) {
    for (var t = ce, n = e[t(388)]("/")[t(416)](Boolean), s = n[t(386)](0, n[t(374)] - 1).join("/"), o = 0; o < n[t(374)]; o++)
      if (o === n[t(374)] - 1) {
        var r = n[o];
        n[o] = Mu(r)
      } else n[o] = "" [t(424)](ir(s, Bt[o]), "-")[t(424)](cr(s, Bt[o]));
    var a = n.join("/");
    return a
  },
  Gu = function (e) {
    for (var t = ce, n = e[t(388)]("/")[t(416)](Boolean), s = 0; s < n[t(374)]; s++)
      if (s === n.length - 1) {
        var o = n[s],
          r = o[t(388)](".");
        r[t(428)]();
        var a = r.slice(),
          i = rr(e);
        n[s] = "".concat(i, ".")[t(424)](a[t(404)]("."))
      } else n[s] = "" [t(424)](ir(e, Bt[s]), "-")[t(424)](cr(e, Bt[s]));
    var _ = n[t(404)]("/");
    return _
  };

function Ht() {
  var e = ["default", "466KBSPoW", "wordsToBytes", "filter", "44072LNTPLg", "2155PmzDjZ", "charAt", "hasOwnProperty", "function", "constructor", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "concat", "stringToBytes", "3792370XKijff", "random", "shift", "pow", "charCodeAt", "toString", "length", "indexOf", "floor", "894dJblPV", "prototype", "10015SZltYq", "endian", "padStart", "fromCharCode", "readFloatLE", "55221tQUnHr", "__esModule", "slice", "utf8", "split", "replace", "rotl", "_digestsize", "_ii", "_isBuffer", "asString", "44OCGMLZ", "_gg", "isBuffer", "bytesToString", "encoding", "isArray", "bin", "1591161HnnATu", "18MyVfrq", "join", "_hh", "bytesToWords", "14956513HvjEJA", "350mTLvmC", "push", "_ff", "60aGiZpu", "exports"];
  return Ht = function () {
    return e
  }, Ht()
}

function ku(e) {
  var t = ce,
    n = e[t(389)](/^\//, "");
  return n.startsWith("spine") ? Nu(n) : Gu(n)
}

function ce(e, t) {
  var n = Ht();
  return ce = function (s, o) {
    s = s - 371;
    var r = n[s];
    return r
  }, ce(e, t)
}

function Mu(e) {
  var t = ce,
    n = e[t(388)]("."),
    s = n[t(428)](),
    o = n[t(386)](),
    r = rr(s);
  return "" [t(424)](r, ".")[t(424)](o[t(404)]("."))
}
const Xe = Qo ? "webp" : "png";
let _r;
Gc().then(e => _r = e);
const Ce = e => {
    const t = Cu(""),
      n = e.replace(t, "").replace(/^\//, ""),
      s = ku(n);
    return "".concat(t, "/").concat(s)
  },
  uE = e => {
    const {
      skin_index: t = 0,
      resource_id: n,
      type: s = "stand",
      combat: o = "aim"
    } = e, r = _r ? "_avif" : "", a = Ge(n, 3), i = Ge(t, 2), _ = s === "stand" ? "c".concat(a, "_").concat(i) : "c".concat(a, "_").concat(o, "_").concat(i), g = s === "stand" ? "/spine/".concat(s, "/c").concat(a, "/").concat(i, "/").concat(_) : "/spine/".concat(s, "/c").concat(a, "/").concat(i, "/").concat(o, "/").concat(_), l = "".concat(g).concat(r, ".atlas.txt"), v = "".concat(g, ".skel.bytes");
    return {
      atlas: Ce(l),
      skel: Ce(v)
    }
  },
  dE = e => {
    const {
      skin_index: t = 0,
      resource_id: n
    } = e, s = "c".concat(Ge(n, 3), "_").concat(Ge(t, 2));
    return Ce("/character/full/".concat(s, ".").concat(Xe))
  },
  mE = e => {
    const {
      skin_index: t = 0,
      resource_id: n
    } = e, s = "c".concat(Ge(n, 3), "_").concat(Ge(t, 2));
    return Ce("/character/mi/mi_".concat(s, "_s.").concat(Xe))
  },
  Vu = e => {
    const {
      skin_index: t = 0,
      resource_id: n
    } = e, s = "c".concat(Ge(n, 3), "_").concat(Ge(t, 2));
    return Ce("/character/si/si_".concat(s, "_s.").concat(Xe))
  },
  pE = e => e.name ? Ce("/icon/".concat(e.path.replace(/^\//, ""), "/").concat(e.name, ".").concat(Xe)) : "",
  gE = ({
    banner: e,
    type: t
  }) => {
    if (!e) return "";
    switch (t) {
      case "SeasonPass":
        return Ce("/icon/Logo/pass/".concat(e, ".").concat(Xe));
      default:
        return Ce("/schedule/banner/".concat(e, ".").concat(Xe))
    }
  },
  fE = e => Ce("/background/".concat(e.path, "/").concat(e.name, ".").concat(Xe)),
  vE = e => {
    const {
      cv_lang: t,
      speech_id: n,
      format: s
    } = e, o = s || "wav";
    return Ce("/voice/".concat(t, "/").concat(n, ".").concat(o))
  },
  Fu = e => (n => {
    let s = n.replace(/\{lang\}/g, Xo());
    return s = s.replace(/\{l_lang\}/g, Ne), Ne === "ko" && (s = s.replace(/_ko/g, "")), s
  })(e),
  ge = async e => {
    try {
      const t = await fetch(Ce(e));
      return t.status.toString().startsWith("4") ? (En.error("load ".concat(e, " json failed: ").concat(t.status)), null) : await t.json()
    } catch (t) {
      return En.error("load ".concat(e, " json failed: ").concat(t)), null
    }
  };
async function EE() {
  const e = await ge("/character/".concat(Ne, "/character_face_list.json"));
  return e != null ? e : []
}
async function hE() {
  const e = await ge(Fu("/character/{l_lang}/nikke_list_{lang}_v2.json"));
  return e != null ? e : []
}
async function Bu(e) {
  const t = await ge("/character/character_avatar_map.json"),
    n = t == null ? void 0 : t.find(s => e === s.id);
  return n ? Vu({
    skin_index: n.costume_index,
    resource_id: n.resource_id
  }) : ""
}
const lr = (() => {
  let e, t;
  return async () => (e || (e = ge("/character/character_id_map.json")), t || (t = await e), t)
})();
async function AE() {
  const e = await ge("/character/character_skill_map.json");
  return e || []
}
async function IE(e) {
  const t = await ge("/roledata/".concat("582", "-v2-").concat(Ne, ".json"));
  return t || {}
}
async function Hu(e) {
  const n = (await lr()).find(s => s.resource_id === e);
  return n == null ? void 0 : n.name_code
}
async function Ss(e) {
  const {
    name_code: t
  } = e, n = await lr(), s = n == null ? void 0 : n.find(o => o.name_code === t);
  return s ? s.resource_id : 0
}
async function SE() {
  var t;
  const e = await ge("/character/CharacterLevelTable.json");
  return (t = e == null ? void 0 : e.records) != null ? t : []
}
async function TE(e) {
  var s;
  const {
    scene_id: t
  } = e, n = await ge("/attractscene/".concat(t, "-").concat(Ne, ".json"));
  return (s = n == null ? void 0 : n.records) != null ? s : []
}
async function yE() {
  var t;
  const e = await ge("/character/RecycleResearchStatTable.json");
  return (t = e == null ? void 0 : e.records) != null ? t : []
}
async function OE() {
  var t;
  const e = await ge("/character/AttractiveLevelTable.json");
  return (t = e == null ? void 0 : e.records) != null ? t : []
}
async function PE() {
  const e = await ge("/character/scene_characeter_list_v2.json");
  return e != null ? e : []
}
const $u = N({
    method: "get",
    url: Bi
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0
  }),
  Yu = N({
    method: "post",
    url: oo
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0
  }),
  qu = N({
    method: "post",
    url: ro
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0
  }),
  zu = N({
    method: "post",
    url: ao
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0
  }),
  ju = N({
    method: "post",
    url: no
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0,
    default_error_tip_key: "system_busy"
  }),
  Wu = N({
    method: "post",
    url: so
  }, {
    ignore_toast: !0,
    use_non_zero_ret: !0,
    default_error_tip_key: "system_busy"
  }),
  Ku = () => N({
    method: "post",
    url: Ui
  }),
  Ju = () => N({
    method: "post",
    url: Ni
  }),
  Xu = N({
    method: "get",
    url: ki
  }),
  CE = N({
    method: "post",
    url: Hi
  }, {
    use_non_zero_ret: !0
  }),
  RE = N({
    method: "post",
    url: Yi
  }),
  DE = N({
    method: "post",
    url: zi
  }),
  LE = N({
    method: "post",
    url: qi
  }),
  wE = N({
    method: "post",
    url: Wi
  }),
  bE = N({
    method: "post",
    url: ji
  }),
  xE = ne({
    method: "post",
    url: $i
  }),
  UE = 0,
  NE = 1,
  GE = 10,
  kE = 100,
  ME = .7,
  VE = 18,
  FE = .01,
  BE = .01,
  HE = .02,
  $E = 1.3,
  Qu = .1,
  Zu = .3,
  ed = -1,
  td = -99,
  nd = -9999,
  YE = [ed, td],
  sd = e => !e || e < 0 ? 0 : e,
  qE = {
    3: "#006819",
    4: "#01CA00",
    5: "#0043A8",
    6: "#0077FF",
    7: "#8711BC",
    8: "#CD00FF",
    9: "#FF8900",
    10: "#FF2A76"
  };
var ye = (e => (e[e.Personal = 1001] = "Personal", e[e.Attacker = 1101] = "Attacker", e[e.Defender = 1102] = "Defender", e[e.Supporter = 1103] = "Supporter", e[e.Elysion = 1201] = "Elysion", e[e.Missilis = 1202] = "Missilis", e[e.Tetra = 1203] = "Tetra", e[e.Pilgrim = 1204] = "Pilgrim", e[e.Abnormal = 1205] = "Abnormal", e))(ye || {}),
  od = (e => (e[e.FreeCash = 99] = "FreeCash", e[e.CharacterExp = 1e3] = "CharacterExp", e[e.Gold = 2e3] = "Gold", e[e.CharacterExp2 = 3e3] = "CharacterExp2", e[e.Char_Premium_Ticket = 5100] = "Char_Premium_Ticket", e[e.Char_Customize_Ticket = 5200] = "Char_Customize_Ticket", e[e.SilverMileageTicket = 11e3] = "SilverMileageTicket", e[e.GoldMileageTicket = 12e3] = "GoldMileageTicket", e))(od || {});
async function rd() {
  var e, t;
  return (t = (e = await ge("/equip/ItemEquipTable-".concat(Ne, ".json"))) == null ? void 0 : e.records) != null ? t : []
}
async function zE(e) {
  return await ge("/equip/".concat(Ne, "/cube_").concat(e, ".json"))
}
async function jE() {
  return await ge("/equip/favorite_rare_map.json")
}
async function WE(e) {
  return await ge("/equip/".concat(Ne, "/favorite_").concat(e, ".json"))
}
async function ad() {
  var e;
  return (e = await ge("/equip/equip_option_table_v2-".concat(Ne, ".json"))) != null ? e : []
}

function id(e) {
  const n = {
    1: "elysion",
    2: "missilis",
    3: "tetra",
    4: "pilgrim",
    7: "abnormal"
  } [e == null ? void 0 : e.equip_manufacturer_bonus];
  return !n || Number(e == null ? void 0 : e.equip_manufacturer_bonus) === 0 ? null : n
}

function KE(e) {
  var l;
  const {
    equip: t,
    type: n,
    character: s
  } = e, o = sd(t == null ? void 0 : t.equip_level);
  if (n === "None") return 0;
  const r = ((l = t == null ? void 0 : t.stat) != null ? l : []).reduce((v, u) => (u == null ? void 0 : u.stat_type) === n ? v + u.stat_value : v, 0),
    a = id(t),
    _ = s.corporation.toLowerCase() === a ? Zu : 0,
    g = r * (1 + _ + o * Qu);
  return Math.round(g)
}
const cd = (() => {
  let e = new Map;
  return async () => (e.size === 0 && (await ad()).forEach(n => {
    const {
      state_effect_id_list: s = []
    } = n;
    s.forEach(o => {
      e.set(o, n)
    })
  }), e)
})();
async function _d(e, t) {
  const n = await rd(),
    s = await cd(),
    {
      arm_equip_option1_id: o,
      arm_equip_option2_id: r,
      arm_equip_option3_id: a,
      torso_equip_option1_id: i,
      torso_equip_option2_id: _,
      torso_equip_option3_id: g,
      leg_equip_option1_id: l,
      leg_equip_option2_id: v,
      leg_equip_option3_id: u,
      head_equip_option1_id: p,
      head_equip_option2_id: d,
      head_equip_option3_id: f
    } = e,
    m = V => {
      var x;
      const j = t.get(String(V));
      return (x = j == null ? void 0 : j.function_details) == null || x.forEach(se => {
        const pe = s.get(V);
        se.name_localvalues = (pe == null ? void 0 : pe.description_localkey) || "", se.group_id = (pe == null ? void 0 : pe.state_effect_group_id) || 0
      }), j
    },
    h = [m(p), m(d), m(f)],
    S = [m(i), m(_), m(g)],
    E = [m(o), m(r), m(a)],
    I = [m(l), m(v), m(u)],
    C = V => {
      const {
        equip_id: j,
        equip_lv: x,
        effects: se,
        bonus: pe
      } = V, Te = n.find(Ze => Ze.id === j);
      return Te ? {
        ...Te,
        buffs: se,
        equip_level: x,
        equip_manufacturer_bonus: pe
      } : null
    },
    M = {
      leg: C({
        effects: I,
        equip_id: e.leg_equip_tid,
        equip_lv: e.leg_equip_lv,
        bonus: e.leg_equip_corporation_type
      }),
      arm: C({
        effects: E,
        equip_id: e.arm_equip_tid,
        equip_lv: e.arm_equip_lv,
        bonus: e.arm_equip_corporation_type
      }),
      torso: C({
        effects: S,
        equip_id: e.torso_equip_tid,
        equip_lv: e.torso_equip_lv,
        bonus: e.torso_equip_corporation_type
      }),
      head: C({
        effects: h,
        equip_id: e.head_equip_tid,
        equip_lv: e.head_equip_lv,
        bonus: e.head_equip_corporation_type
      })
    },
    U = Object.assign({}, Vt(e), {
      equips: [M.head, M.torso, M.arm, M.leg]
    });
  return $e.info("equip-effect of ".concat(e.name_code), h, I, E, S), U
}

function JE(e, t) {
  const s = e.filter(a => {
      var i, _;
      return a && ((i = a == null ? void 0 : a.buffs) == null ? void 0 : i.length) && ((_ = a == null ? void 0 : a.item_rare) == null ? void 0 : _.toLowerCase()) === "t10"
    }).map(a => {
      var i;
      return (i = a == null ? void 0 : a.buffs) != null ? i : []
    }).flat(),
    o = new Map;
  s.forEach(a => {
    var g, l;
    const {
      function_details: i = []
    } = a != null ? a : {};
    i.forEach(v => {
      v.function_value = Math.abs(v.function_value)
    });
    const _ = i.at(0);
    if (_)
      if (o.has(_.function_type)) {
        const u = o.get(_.function_type).function_details.at(0);
        u.function_value += _.function_value, u.level = Math.max((g = u.level) != null ? g : 0, (l = _.level) != null ? l : 0)
      } else o.set(_.function_type, JSON.parse(JSON.stringify(a)))
  });
  const r = Array.from(o.entries()).sort((a, i) => {
    var p, d;
    const [_, g] = a, [l, v] = i, u = {
      IncElementDmg: 0,
      StatAtk: 1,
      StatAmmoLoad: 2,
      StatAmmo: 2,
      StatChargeTime: 3,
      StatChargeDamage: 4,
      StatAccuracyCircle: 5,
      OnHitRatio: 5,
      StatCritical: 6,
      StatCriticalDamage: 7,
      StatDef: 8
    };
    return ((p = u[_]) != null ? p : 999) - ((d = u[l]) != null ? d : 999)
  }).map(([a, i]) => i);
  return t && r.sort((a, i) => {
    var l, v;
    const _ = (l = a == null ? void 0 : a.function_details.at(0)) == null ? void 0 : l.group_id,
      g = (v = i == null ? void 0 : i.function_details.at(0)) == null ? void 0 : v.group_id;
    return _ === t ? -1 : g === t ? 1 : (_ != null ? _ : 0) - (g != null ? g : 0)
  }), r
}

function XE(e, t = 0) {
  var i, _;
  if (!e) return null;
  const {
    function_details: n = []
  } = e != null ? e : {}, s = n.at(0);
  if (!s) return null;
  const o = Math.abs(((i = s == null ? void 0 : s.function_value) != null ? i : 0) / 100);
  let r = "".concat(o.toFixed(2), "%"),
    a = s.name_localvalues;
  if (s.function_type === "StatAmmoLoad") {
    const g = Math.ceil(t * o * .01);
    g > 0 && (r += "(+".concat(g, ")"))
  }
  return {
    value: r,
    desc: a,
    level: (_ = s.level) != null ? _ : 0,
    prefix: ""
  }
}
const ur = (() => {
    const e = new Map,
      t = new Map;
    return n => {
      n.area_id || En.error("[invalid-role-req]", location.pathname);
      const {
        area_id: s
      } = n, o = Number(s);
      return t.has(o) ? Promise.resolve(t.get(o)) : (e.has(o) || e.set(o, Ie.post(Gi, n)), e.get(o))
    }
  })(),
  QE = () => Ie.post("game/proxy/Game/GetSavedRoleInfo", {}),
  dr = e => Ie.post("game/proxy/Game/SaveRoleInfo", e),
  Ts = N({
    method: "get",
    url: Mi
  }, {
    staleTime: 5 * 60 * 1e3
  }),
  {
    getOpenID: ld
  } = xn(),
  mr = xs.create({
    baseURL: "https://na-report.playerinfinite.com/api",
    headers: {
      "X-Areaid": "na"
    }
  }),
  ud = e => {
    var r;
    const t = ue(),
      n = _e();
    e.headers && Object.assign(e.headers, {
      "X-Language": n,
      "X-Source": "lip",
      "X-Gameid": "30035"
    });
    const s = Le() || Je,
      o = {
        open_id: ld(),
        client_type: uo(),
        from: t.from,
        lang: n,
        url: window.location.href,
        scene: wn() ? "inner_game" : "outer",
        platform: q(navigator, "userAgentData.platform") || q(navigator, "platform"),
        user_agent: navigator.userAgent,
        ref_url: document.referrer,
        intl_game_id: s
      };
    return (r = e.url) != null && r.includes("ReportStatInfoBatch") ? (e.data = Object.assign({
      original_game_id: s
    }, e.data), e.data.reports = e.data.reports.map(a => ({
      ...a,
      ext_content: JSON.stringify({
        ...o,
        ...a.ext_content
      })
    }))) : (e.data = Object.assign({
      original_game_id: s,
      ext_content: {}
    }, e.data), e.data.ext_content = JSON.stringify({
      ...o,
      ...e.data.ext_content
    })), e
  };
mr.interceptors.request.use(ud);
class dd {
  constructor() {
    B(this, "queue", []);
    B(this, "timer", null);
    B(this, "is_flushing", !1);
    B(this, "storage_key", ba);
    B(this, "flush_interval", 1e3);
    B(this, "max_batch_size", 10);
    B(this, "max_retention_time", 7 * 24 * 60 * 60 * 1e3);
    this.initializeManager()
  }
  initializeManager() {
    this.loadQueue(), this.startTimer(), this.setupEventListeners()
  }
  startTimer() {
    this.timer === null && (this.timer = window.setInterval(() => this.flush(), this.flush_interval))
  }
  stopTimer() {
    this.timer !== null && (window.clearInterval(this.timer), this.timer = null)
  }
  setupEventListeners() {
    window.addEventListener("pagehide", () => {
      this.stopTimer(), this.saveQueue()
    }), window.addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && this.flush()
    })
  }
  addEvent(t) {
    const n = {
      ...t,
      timestamp: Math.floor(Date.now() / 1e3)
    };
    this.queue.push(n), this.queue.length >= this.max_batch_size && this.flush()
  }
  async flush() {
    if (!(this.is_flushing || this.queue.length === 0)) try {
      if (this.is_flushing = !0, this.cleanExpiredEvents(), this.queue.length === 0) {
        this.is_flushing = !1;
        return
      }
      const t = [...this.queue],
        {
          host: n
        } = window.location;
      if (/localhost/i.test(n) || /127\.0\.0\.1/.test(n)) {
        this.queue = [], this.saveQueue(), this.is_flushing = !1;
        return
      }
      await mr.post("/gpts_community.report_svr.ReportSvr/ReportStatInfoBatch", {
        reports: t
      }), this.queue = this.queue.filter(s => !t.some(o => o.timestamp === s.timestamp)), this.saveQueue()
    } catch (t) {} finally {
      this.is_flushing = !1
    }
  }
  cleanExpiredEvents() {
    const t = Date.now();
    this.queue = this.queue.filter(n => t - n.timestamp * 1e3 < this.max_retention_time)
  }
  saveQueue() {
    try {
      localStorage.setItem(this.storage_key, JSON.stringify(this.queue))
    } catch (t) {}
  }
  loadQueue() {
    try {
      const t = localStorage.getItem(this.storage_key);
      t && (this.queue = JSON.parse(t), this.cleanExpiredEvents())
    } catch (t) {
      this.queue = []
    }
  }
}
const pr = new dd,
  md = () => pr.flush(),
  pd = async e => {
    const {
      host: t
    } = window.location;
    /localhost/i.test(t) || /127\.0\.0\.1/.test(t) || pr.addEvent(e)
  }, Tn = new Proxy({}, {
    get(e, t) {
      return t === "flush" ? md : new Proxy({}, {
        get(n, s) {
          return async o => {
            typeof t == "symbol" || typeof s == "symbol" || await pd({
              action: t,
              sub_action: s,
              ext_content: o
            })
          }
        }
      })
    }
  }), $t = A(null), Yt = A(null), gd = pt(async () => {
    var n, s;
    if ((n = $t.value) != null && n.area_list.length || (s = Yt.value) != null && s.area_list.length) return Promise.resolve();
    const [e, t] = await Promise.all([Ts.run({
      game_id: Ke
    }), Ts.run({
      game_id: Je
    })]);
    $t.value = e, Yt.value = t
  }), fd = e => {
    const t = Le(),
      {
        all: n = !0
      } = e != null ? e : {},
      s = n ? P(() => {
        var r, a, i, _;
        return [...(a = (r = $t.value) == null ? void 0 : r.area_list) != null ? a : [], ...(_ = (i = Yt.value) == null ? void 0 : i.area_list) != null ? _ : []]
      }) : t === String(Ke) ? P(() => {
        var r, a;
        return (a = (r = $t.value) == null ? void 0 : r.area_list) != null ? a : []
      }) : P(() => {
        var r, a;
        return (a = (r = Yt.value) == null ? void 0 : r.area_list) != null ? a : []
      }),
      o = r => {
        var a, i, _;
        return (_ = (i = (a = s.value) == null ? void 0 : a.find(g => g.area_id + "" == r + "")) == null ? void 0 : i.area_name) != null ? _ : "-"
      };
    return gd(), {
      server_list: s,
      getServerName: o
    }
  };

function vd() {
  const e = A(),
    t = A(),
    n = A(null),
    s = A([]),
    o = A(),
    r = g => e.value = g,
    a = g => n.value = g,
    {
      server_list: i
    } = fd({
      all: !1
    });
  return {
    pending: o,
    selected_server: e,
    server_list: i,
    selected_role_info: n,
    saved_role_info: t,
    role_list: s,
    getRoles: async () => {
      if (!e.value) return a(null), [];
      try {
        o.value = !0;
        const {
          role_list: g
        } = await ur({
          zone_id: 0,
          game_id: Le(),
          area_id: Number(e.value.area_id)
        });
        s.value = [], s.value = g, g.length && a(g[0])
      } finally {
        o.value = !1
      }
      return s.value
    },
    setCurrentRole: a,
    setCurrentRegion: r
  }
}
class gr {
  constructor(t) {
    B(this, "map", new Map);
    B(this, "list", new Ed);
    this.capacity = t
  }
  get(t) {
    if (this.map.has(t)) {
      const n = this.map.get(t);
      return this.list.remove(t), this.list.append(t), n
    }
    return null
  }
  delete(t) {
    this.map.has(t) && (this.map.delete(t), this.list.remove(t))
  }
  clear() {
    this.map.clear(), this.list.clear()
  }
  put(t, n) {
    if (this.map.has(t)) this.map.set(t, n), this.list.remove(t), this.list.append(t);
    else if (this.list.append(t), this.map.set(t, n), this.list.size > this.capacity) {
      const s = this.list.get(0);
      this.map.delete(s), this.list.remove(s)
    }
  }
}
class Ed {
  constructor() {
    B(this, "head");
    B(this, "tail");
    B(this, "length");
    this.head = null, this.tail = null, this.length = 0
  }
  get size() {
    return this.length
  }
  isEmpty() {
    return this.length === 0
  }
  prepend(t) {
    const n = {
      value: t,
      prev: null,
      next: this.head
    };
    this.head ? this.head.prev = n : this.tail = n, this.head = n, this.length++
  }
  append(t) {
    const n = {
      value: t,
      prev: this.tail,
      next: null
    };
    this.tail ? this.tail.next = n : this.head = n, this.tail = n, this.length++
  }
  insertAt(t, n) {
    if (t < 0 || t > this.length) return !1;
    if (t === 0) return this.prepend(n), !0;
    if (t === this.length) return this.append(n), !0;
    const s = {
      value: n,
      prev: null,
      next: null
    };
    let o = this.head,
      r = 0;
    for (; r < t - 1 && o;) o = o.next, r++;
    return o && o.next ? (s.prev = o, s.next = o.next, o.next.prev = s, o.next = s, this.length++, !0) : !1
  }
  removeHead() {
    if (!this.head) return null;
    const t = this.head.value;
    return this.head.next ? (this.head.next.prev = null, this.head = this.head.next) : (this.head = null, this.tail = null), this.length--, t
  }
  removeTail() {
    if (!this.tail) return null;
    const t = this.tail.value;
    return this.tail.prev ? (this.tail.prev.next = null, this.tail = this.tail.prev) : (this.head = null, this.tail = null), this.length--, t
  }
  removeAt(t) {
    if (t < 0 || t >= this.length) return null;
    if (t === 0) return this.removeHead();
    if (t === this.length - 1) return this.removeTail();
    let n = this.head,
      s = 0;
    for (; s < t && n;) n = n.next, s++;
    return n && n.prev && n.next ? (n.prev.next = n.next, n.next.prev = n.prev, this.length--, n.value) : null
  }
  remove(t) {
    if (!this.head) return !1;
    let n = this.head;
    for (; n;) {
      if (n.value === t) return n === this.head ? this.removeHead() : n === this.tail ? this.removeTail() : n.prev && n.next && (n.prev.next = n.next, n.next.prev = n.prev, this.length--), !0;
      n = n.next
    }
    return !1
  }
  indexOf(t) {
    let n = this.head,
      s = 0;
    for (; n;) {
      if (n.value === t) return s;
      n = n.next, s++
    }
    return -1
  }
  contains(t) {
    return this.indexOf(t) !== -1
  }
  get(t) {
    if (t < 0 || t >= this.length) return null;
    let n = this.head,
      s = 0;
    for (; s < t && n;) n = n.next, s++;
    return n ? n.value : null
  }
  update(t, n) {
    if (t < 0 || t >= this.length) return !1;
    let s = this.head,
      o = 0;
    for (; o < t && s;) s = s.next, o++;
    return s ? (s.value = n, !0) : !1
  }
  clear() {
    this.head = null, this.tail = null, this.length = 0
  }
  forEach(t) {
    let n = this.head,
      s = 0;
    for (; n;) t(n.value, s), n = n.next, s++
  }
}
class hd {
  constructor() {
    B(this, "map", new Map)
  }
  get(t) {
    return this.map.get(t)
  }
  set(t, n) {
    this.map.set(t, n)
  }
  has(t) {
    return this.map.has(t)
  }
  delete(t) {
    this.map.delete(t)
  }
  clear() {
    this.map.clear()
  }
  size() {
    return this.map.size
  }
  getAllKeys() {
    return Array.from(this.map.keys())
  }
  updateOrder(t) {}
}
class Ad {
  constructor(t) {
    B(this, "storageKey");
    if (!t) throw new Error("");
    this.storageKey = "".concat(wa, "_").concat(t)
  }
  getCacheArray() {
    try {
      const t = localStorage.getItem(this.storageKey);
      return t ? JSON.parse(t) : []
    } catch (t) {
      return []
    }
  }
  setCacheArray(t) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(t))
    } catch (n) {}
  }
  get(t) {
    try {
      const n = this.getCacheArray(),
        s = n.findIndex(o => o.key === t);
      if (s !== -1) {
        const o = n[s];
        return {
          key: o.key,
          val: o.val,
          pre: null,
          next: null
        }
      }
    } catch (n) {}
  }
  set(t, n) {
    try {
      const s = this.getCacheArray(),
        o = s.findIndex(a => a.key === t),
        r = {
          key: n.key,
          val: n.val
        };
      o !== -1 && s.splice(o, 1), s.push(r), this.setCacheArray(s)
    } catch (s) {}
  }
  updateOrder(t) {
    try {
      const n = this.getCacheArray(),
        s = n.findIndex(o => o.key === t);
      if (s !== -1) {
        const o = n[s];
        n.splice(s, 1), n.push(o), this.setCacheArray(n)
      }
    } catch (n) {}
  }
  has(t) {
    try {
      return this.getCacheArray().some(s => s.key === t)
    } catch (n) {
      return !1
    }
  }
  delete(t) {
    try {
      const s = this.getCacheArray().filter(o => o.key !== t);
      this.setCacheArray(s)
    } catch (n) {}
  }
  clear() {
    try {
      localStorage.removeItem(this.storageKey)
    } catch (t) {}
  }
  size() {
    return this.getCacheArray().length
  }
  getAllKeys() {
    return this.getCacheArray().map(t => t.key)
  }
  getKeysInLRUOrder() {
    return this.getAllKeys()
  }
  removeOldest() {
    try {
      const t = this.getCacheArray();
      if (t.length > 0) {
        const n = t.shift();
        return this.setCacheArray(t), n
      }
    } catch (t) {}
    return null
  }
}
var Id = (e => (e.memory = "memory", e.local_storage = "local_storage", e))(Id || {});
class ZE {
  constructor(t, n = {}) {
    B(this, "storage");
    B(this, "tail", null);
    B(this, "head", null);
    B(this, "count", 0);
    this.capacity = t;
    const {
      storage_type: s = "memory",
      local_storage_prefix: o = ""
    } = n;
    s === "local_storage" ? (this.storage = new Ad(o), this.initializeFromStorage()) : this.storage = new hd
  }
  initializeFromStorage() {
    try {
      this.storage.getAllKeys().slice(0, this.capacity).forEach(n => {
        const s = this.storage.get(n);
        s && (this.count += 1, this.toTail(s))
      })
    } catch (t) {}
  }
  get(t) {
    var n, s, o, r;
    if (this.storage.has(t)) {
      let a = this.findNodeInList(t);
      if (a) return this.remove(a), this.toTail(a), (s = (n = this.storage).updateOrder) == null || s.call(n, t), a.val; {
        const i = this.storage.get(t);
        return a = this.createNode(i.key, i.val), this.toTail(a), (r = (o = this.storage).updateOrder) == null || r.call(o, t), a.val
      }
    }
    return null
  }
  delete(t) {
    if (this.storage.has(t)) {
      const n = this.storage.get(t);
      this.count -= 1, this.remove(n), this.storage.delete(t)
    }
  }
  put(t, n) {
    var s, o;
    if (this.storage.has(t)) {
      let r = this.findNodeInList(t);
      r ? (r.val = n, this.remove(r), this.toTail(r)) : (r = this.createNode(t, n), this.toTail(r)), this.storage.set(t, r), (o = (s = this.storage).updateOrder) == null || o.call(s, t)
    } else {
      const r = this.createNode(t, n);
      this.count += 1, this.toTail(r), this.storage.set(t, r), this.count > this.capacity && (this.storage.delete(this.head.key), this.remove(this.head), this.count -= 1)
    }
  }
  clear() {
    this.storage.clear(), this.head = null, this.tail = null, this.count = 0
  }
  size() {
    return this.count
  }
  keys() {
    return this.storage.getAllKeys()
  }
  createNode(t, n) {
    return {
      pre: null,
      next: null,
      val: n,
      key: t
    }
  }
  findNodeInList(t) {
    let n = this.head;
    for (; n;) {
      if (n.key === t) return n;
      n = n.next
    }
    return null
  }
  remove(t) {
    t.pre ? (t.pre.next = t.next, t.next || (this.tail = t.pre)) : this.head = t.next, t.next ? (t.next.pre = t.pre, t.pre || (this.head = t.next)) : this.tail = t.pre, t.pre = null, t.next = null
  }
  toTail(t) {
    this.tail ? (t.next = null, t.pre = this.tail, this.tail.next = t, this.tail = t) : (this.head = t, this.tail = t, t.next = null, t.pre = null)
  }
}
var Sd = (e => (e.exceed_size_limit = "exceed_size_limit", e.file_upload_failed = "file_upload_failed", e.file_type_not_support = "file_type_not_support", e.exceed_count_limit = "exceed_count_limit", e))(Sd || {});
const eh = (e = "post-image") => {
    const {
      show: t
    } = Qe(), n = A(!1), s = e === "avatar" ? t_ : Qc, o = e === "avatar" ? Do : Co, r = e === "avatar" ? n_ : e_, a = e === "avatar" ? Lo : Ro, i = {
      exceed_size_limit: w("max_image_limit_size_tips", ["".concat(o, "MB")]),
      file_upload_failed: w("file_upload_failed"),
      file_type_not_support: w("file_type_not_support", ["(".concat(r.join(", "), ")")]),
      exceed_count_limit: "".concat(w("exceed_count_limit"), " (").concat(w("max_parallel_upload_count", [Zc]), ")")
    }, _ = async m => {
      if (!m) return;
      const h = await X_();
      await h.getToken();
      let S = await h.uploadFile({
        file: m,
        type: io.image
      });
      if (S) {
        const E = await fo(S, 1);
        S += "?height=".concat(E.height, "&width=").concat(E.width)
      }
      return S
    }, g = (m, h = s) => m <= h, l = (m, h = a) => h.includes(m), v = m => {
      const h = {
        exceed_size_limit: () => t({
          text: i.exceed_size_limit,
          type: "error"
        }),
        file_upload_failed: () => t({
          text: i.file_upload_failed,
          type: "error"
        }),
        file_type_not_support: () => t({
          text: i.file_type_not_support,
          type: "error"
        }),
        exceed_count_limit: () => t({
          text: i.exceed_count_limit,
          type: "error"
        })
      } [m];
      return h == null ? void 0 : h()
    };
    return {
      uploading: n,
      ERROR_MESSAGE_MAP: i,
      getUploading: () => n.value,
      toggleUploading: () => {
        n.value = !n.value
      },
      onCheckSizeLimit: g,
      onCheckFileType: l,
      onUpload: _,
      onErrorToast: v,
      onUploadLimitCheck: (m, h) => {
        const S = m == null ? void 0 : m[0];
        if (S) {
          const {
            size: E,
            type: I
          } = S, {
            max_size: C,
            allow_file_types: M
          } = Object.assign({}, {
            max_size: s,
            allow_file_types: a
          }, h);
          return g(E, C) ? l(I, M) ? !0 : (v("file_type_not_support"), !1) : (v("exceed_size_limit"), !1)
        }
        return !1
      },
      uploadBase64Image: async m => {
        const h = async E => {
          const I = Vo(E) || "";
          if (!l("image/".concat(I))) return v("file_type_not_support");
          try {
            const C = h_(E),
              {
                size: M
              } = C;
            return g(M) ? await _(C) || "" : v("exceed_size_limit")
          } catch (C) {}
        };
        return (await Promise.all(m.map(h))).filter(Boolean)
      }
    }
  },
  fr = () => {
    const e = s => {
      try {
        return !!new URL(s).search
      } catch (o) {
        return !1
      }
    };
    return {
      handleQuality: (s, o = 100) => {
        const r = e(s) ? "&" : "?";
        return "".concat(s).concat(r, "imageMogr2/quality/").concat(o, "/format/webp/interlace/0")
      },
      removeQuality: s => s.replace(/(imageMogr2\/quality[^&]*)/g, "")
    }
  },
  th = () => {
    const {
      updateCache: e,
      getCache: t
    } = Un(), n = async o => {
      const r = Rc(o),
        a = ue(r);
      if (a.height && a.width) return {
        height: +a.height,
        width: +a.width
      }; {
        let i = await t(cn);
        i || (e({
          key: cn,
          value: []
        }), i = {
          value: []
        });
        const _ = i.value.find(l => l.key === o),
          g = (_ == null ? void 0 : _.value) || await go(o).catch(l => ({
            width: 0,
            height: 0
          }));
        return !(_ != null && _.value) && (g.width || g.height) && (i.value.length >= 100 && i.value.shift(), e({
          key: cn,
          value: i.value.concat({
            key: o,
            value: g
          })
        })), {
          width: +g.width,
          height: +g.height
        }
      }
    };
    return {
      getImageOriginalSize: n,
      getImageDisplaySizeByLimit: async o => {
        const r = await n(o);
        return Td(r)
      }
    }
  },
  Td = e => {
    const {
      width: t,
      height: n
    } = e;
    return t / n > 16 / 9 ? {
      width: n * 16 / 9,
      height: n
    } : t / n < 9 / 16 ? {
      width: t,
      height: t * 16 / 9
    } : {
      width: t,
      height: n
    }
  },
  nh = (e, t) => {
    const n = Zt(e),
      s = n.querySelectorAll("img"),
      {
        handleQuality: o
      } = fr();
    return s.forEach(r => {
      r.src = o(r.src, t)
    }), n.body.innerHTML
  },
  yd = (() => {
    const e = new gr(500);
    return () => ({
      setLoaded(t) {
        e.put(t, !0)
      },
      checkIsLoaded(t) {
        return !!e.get(t)
      }
    })
  })();
let ze = function (e) {
  return e.loading = "loading", e.error = "error", e.timeout = "timeout", e.loaded = "loaded", e.original = "original", e
}({});
const Od = () => {
    const e = A(ze.loading),
      t = A(),
      n = () => {
        t.value = setTimeout(() => {
          s(ze.timeout)
        }, 100 * 1e3)
      },
      s = o => {
        e.value = o, clearTimeout(t.value)
      };
    return n(), {
      image_status: e,
      setImageStatus: s
    }
  },
  Pd = e => {
    if (![ze.loaded].includes(e.status)) return z("div", {
      class: "flex items-center justify-center bg-white flex-col absolute inset-0 z-[1]"
    }, [e.status === ze.loading ? z(Dt, {
      name: "icon-loading",
      class: "common-rotate w-1/4 h-1/4 max-w-[32px] max-h-[32px]",
      color: "var(--text-4)"
    }, null) : z(Be, null, null)])
  },
  Cd = {
    class: ee(["inline-flex"])
  },
  Rd = ["alt", "src", "data-src"],
  ys = X({
    __name: "index",
    props: {
      src: {
        default: ""
      },
      alt: {},
      lazy: {
        type: Boolean
      },
      placeholder: {
        default: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
      },
      loading: {
        type: Boolean
      },
      thumbnail: {
        type: Boolean
      },
      thumbnail_quality: {},
      original: {
        type: Boolean
      },
      cover: {
        type: Boolean
      },
      image_class: {},
      image_style: {},
      auto_dethumbnail: {
        type: Boolean,
        default: void 0
      }
    },
    emits: ["click", "load", "error"],
    setup(e, {
      expose: t,
      emit: n
    }) {
      const s = Ee(),
        o = window,
        r = o.unavailable_webp_images_set || (o.unavailable_webp_images_set = new Set),
        {
          toWebp: a,
          isCmsOptImage: i
        } = sa,
        {
          handleQuality: _
        } = fr(),
        {
          setLoaded: g,
          checkIsLoaded: l
        } = yd(),
        {
          getCDNConfigs: v
        } = rn(),
        {
          image_status: u,
          setImageStatus: p
        } = Od(),
        {
          image: d
        } = v(),
        f = e,
        m = n,
        h = A(),
        S = A(f.thumbnail_quality || (d == null ? void 0 : d.thumbnail_quality) || 1),
        E = A(f.lazy),
        I = A(!1),
        C = () => {
          if (!f.lazy || I.value || l(V.value)) return;
          const R = new Image;
          R.onload = () => {
            I.value = !0, g(V.value)
          }, R.onerror = () => I.value = !0, R.src = V.value
        };
      ke(() => {
        f.lazy && C()
      });
      const {
        stop: M
      } = oa(h, ([{
        isIntersecting: R
      }]) => {
        R && E.value && (E.value = !1, M())
      }), U = P(() => {
        var R;
        return (R = f.auto_dethumbnail) != null ? R : !s
      }), V = P(() => {
        const R = pe(f.src);
        return f.original || !f.thumbnail || ze.loaded === u.value && U.value ? R : _(R, S.value)
      }), j = R => {
        var J;
        return ((J = h.value) == null ? void 0 : J.getAttribute("src")) === R
      }, x = R => R, se = R => a(R), pe = (R = f.src) => !f.original && !r.has(R) && i(f.src) ? se(R) : x(R), Te = () => {
        var R;
        j(f.src) || (p(ze.error), r.add(f.src), (R = h.value) == null || R.setAttribute("src", f.src), m("error", h.value))
      }, Ze = () => {
        p(ze.loaded), m("load", h.value)
      };
      return t({
        onChangeIsLazyLoad: R => {
          E.value = R
        }
      }), (R, J) => (b(), H("span", Cd, [G("img", {
        ref_key: "root",
        ref: h,
        class: ee(["w-full h-full", R.image_class]),
        alt: R.alt,
        src: E.value ? f.placeholder : V.value,
        "data-src": E.value ? V.value : "",
        style: ve(R.image_style || {}),
        onError: Te,
        onLoad: Ze,
        onClick: J[0] || (J[0] = $ => m("click"))
      }, null, 46, Rd), R.loading ? (b(), ie(vt(D(Pd)({
        status: D(u)
      })), {
        key: 0
      })) : te("", !0)]))
    }
  }),
  Dd = {
    name: "PulseLoader",
    props: {
      loading: {
        type: Boolean,
        default: !0
      },
      color: {
        type: String,
        default: "#12a8fe"
      },
      size: {
        type: String,
        default: "15px"
      },
      margin: {
        type: String,
        default: "2px"
      },
      radius: {
        type: String,
        default: "100%"
      }
    },
    data() {
      return {
        spinnerStyle: {
          backgroundColor: this.color,
          width: this.size,
          height: this.size,
          margin: this.margin,
          borderRadius: this.radius,
          display: "inline-block",
          animationName: "v-pulseStretchDelay",
          animationDuration: "0.75s",
          animationIterationCount: "infinite",
          animationTimingFunction: "cubic-bezier(.2,.68,.18,1.08)",
          animationFillMode: "both"
        },
        spinnerDelay1: {
          animationDelay: "0.12s"
        },
        spinnerDelay2: {
          animationDelay: "0.24s"
        },
        spinnerDelay3: {
          animationDelay: "0.36s"
        }
      }
    }
  },
  Ld = {
    class: "v-spinner"
  };

function wd(e, t, n, s, o, r) {
  return be((b(), H("div", Ld, [G("div", {
    class: "v-pulse v-pulse1",
    style: ve([o.spinnerStyle, o.spinnerDelay1])
  }, null, 4), G("div", {
    class: "v-pulse v-pulse2",
    style: ve([o.spinnerStyle, o.spinnerDelay2])
  }, null, 4), G("div", {
    class: "v-pulse v-pulse3",
    style: ve([o.spinnerStyle, o.spinnerDelay3])
  }, null, 4)], 512)), [
    [Ye, n.loading]
  ])
}
const bd = Lt(Dd, [
    ["render", wd]
  ]),
  xd = X({
    props: {
      avatar_id: Number,
      scene: {
        type: String,
        required: !1
      },
      default_avatar: {
        type: String,
        required: !1
      },
      loading_size: {
        type: String,
        required: !1
      }
    },
    setup(e, {
      attrs: t
    }) {
      const {
        avatar_id: n,
        scene: s,
        default_avatar: o,
        loading_size: r
      } = yn(e), {
        data: a,
        isLoading: i
      } = qt({
        queryKey: [n.value],
        enabled: P(() => !!n.value),
        queryFn: async () => {
          var l, v;
          return (v = await Bu((l = n.value) != null ? l : 0)) != null ? v : ""
        }
      }), _ = A(!1), g = P(() => a.value || (o == null ? void 0 : o.value));
      return () => {
        var p, d, f;
        const {
          class: l,
          ...v
        } = t, u = "relative w-full h-full rounded-full bg-[var(--fill-2)] border-[1px] border-[color:var(--op-line-white)]";
        if (i.value) return z("div", an(v, {
          class: [u, l]
        }), [z(bd, {
          size: (p = r.value) != null ? p : "5px"
        }, null)]);
        switch (s == null ? void 0 : s.value) {
          case "section":
            return be(z(ys, an(v, {
              src: (d = g.value) != null ? d : "",
              class: ["section-avatar", l],
              onLoad: () => _.value = !0
            }), null), [
              [Ye, _.value]
            ]);
          default:
            return z(Be, null, [z("div", an(v, {
              key: n.value,
              class: [u, l]
            }), [z(ys, {
              src: (f = g.value) != null ? f : "",
              onError: () => {
                a.value = ""
              },
              class: "rounded-full w-full h-full overflow-hidden",
              alt: ""
            }, null)])])
        }
      }
    }
  }),
  Ud = () => {
    const e = P(() => [{
      value: ht,
      label: w("nikke_area_29157"),
      game_id: Ke
    }, {
      value: ot,
      label: w("nikke_area_29080"),
      game_id: Je
    }]);
    return {
      login_areas: e,
      fingLoginAreaByGameId: o => e.value.find(r => "".concat(r.game_id) === o),
      getCurrentLoginAreaConfig: (o = Le()) => e.value.find(r => "".concat(r.game_id) === o),
      getAnotherLoginAreaConfig: (o = Le()) => e.value.find(r => "".concat(r.game_id) !== o)
    }
  },
  Nd = () => {
    const e = he(),
      {
        removeStorage: t
      } = Jt();
    return {
      logout: async () => {
        await Kl.run({}), e.setIsLogin(!1), e.setLoginStatus(At.unlogin), t(Et);
        const s = Qt();
        s.to === fe.LOGOUT && (s.to = fe.HOME), await le.replace({
          path: fe.LOGIN,
          query: s
        }), window.location.reload()
      }
    }
  },
  {
    show: Gd
  } = Bo(),
  {
    getAnotherLoginAreaConfig: kd
  } = Ud(),
  Md = () => Math.ceil(Math.random() * 1e8),
  Vd = X({
    setup() {
      var a;
      const {
        logout: e
      } = Nd(), t = Md(), n = () => {
        Gd({
          title: w("warning"),
          content: w("are_you_sure_to_log_out"),
          confirm_text: w("confirm"),
          cancel_text: w("cancel"),
          z_index: 1e3,
          async callback(i) {
            const {
              value: _,
              close: g
            } = i;
            _ === Fe.confirm && e(), g()
          }
        })
      };
      ke(() => {
        const i = document.getElementById("".concat(t));
        i && (i.onclick = n)
      });
      const s = "[".concat((a = kd()) == null ? void 0 : a.label, "]") || "",
        o = '<span class="text-[var(--brand-1)] cursor-pointer" id="'.concat(t, '">\n        ').concat(w("log_out_switch_region"), "\n      </span>"),
        r = w("switch_server_to_login", [s, o]);
      return () => z("div", {
        class: "text-center text-ink-60 text-20 mt-[10px] mx-auto mb-[20px] text-black w-[calc(100%-6.25rem)]",
        innerHTML: r
      }, null)
    }
  }),
  Fd = {
    class: "popup"
  },
  Bd = {
    class: "pop-bd text-center pop-serverselector"
  },
  Hd = {
    class: "flex justify-center text-32 items-center pop-serverselector-title"
  },
  $d = {
    class: "text-center text-ink-60 text-20 mt-[20px] text-black"
  },
  Yd = {
    class: "pop-serverselector-box"
  },
  qd = ["onClick"],
  zd = {
    class: "pop-bd text-center pop-roleselector"
  },
  jd = {
    class: "flex justify-center items-center text-32 pop-roleselector-title"
  },
  Wd = {
    class: "text-center text-ink-60 text-20 mt-[20px] mb-[20px] text-black"
  },
  Kd = {
    class: "pop-roleselector-box"
  },
  Jd = {
    class: "flex items-center text-20 text-white ff-tt-bold area-tit"
  },
  Xd = {
    key: 0
  },
  Qd = ["onClick"],
  Zd = {
    class: "role-avatar"
  },
  em = {
    class: "text-20 ff-tt-bold mt-[5px] role-name"
  },
  tm = {
    key: 1
  },
  nm = {
    class: "p-[15px] flex justify-around text-center text-20 ff-tt-bold mt-[5px] role-name text-black"
  },
  sm = X({
    __name: "SelectServer",
    props: {
      hint: {
        default: w("select_server_desc")
      }
    },
    emits: ["close", "select-role"],
    setup(e, {
      expose: t,
      emit: n
    }) {
      const s = e,
        o = n,
        {
          hint: r
        } = yn(s),
        a = A(1),
        i = A(!1),
        {
          pending: _,
          server_list: g,
          selected_role_info: l,
          selected_server: v,
          role_list: u,
          setCurrentRole: p,
          setCurrentRegion: d,
          getRoles: f
        } = vd(),
        m = () => {
          var U;
          S(), i.value = !1, (U = C.value) == null || U.call(C, "cancel select"), o("close")
        },
        h = P(() => _.value ? w("loading") : u.value.length ? w("select_role_confirm") : w("back")),
        S = () => {
          a.value = 1
        },
        E = async () => {
          var U;
          _.value || (u.value.length || (a.value = 1), l.value && ((U = I.value) == null || U.call(I, l.value), m()))
        }, I = A(), C = A();
      return t({
        invoke: async () => (i.value = !0, new Promise((U, V) => {
          I.value = x => {
            clearTimeout(j), U(x)
          }, C.value = x => {
            clearTimeout(j), V(x != null ? x : "unknown reason")
          };
          const j = setTimeout(() => {
            var x;
            (x = C.value) == null || x.call(C, "time out")
          }, 60 * 1e3)
        })),
        reset: S
      }), (U, V) => {
        var j;
        return be((b(), H("div", Fd, [be(G("div", Bd, [G("a", {
          href: "javascript:;",
          class: "absolute pop-btn-close",
          onClick: m
        }), G("div", Hd, W(D(w)("select_server_title")), 1), G("p", $d, W(D(w)(D(r))), 1), z(D(Vd)), G("ul", Yd, [(b(!0), H(Be, null, vn(D(g), (x, se) => (b(), H("li", {
          key: se,
          class: ee(["cursor-pointer", {
            on: D(v) === x
          }]),
          onClick: () => {
            D(d)(x), a.value = 2, D(f)()
          }
        }, W(x.area_name), 11, qd))), 128))])], 512), [
          [Ye, a.value === 1]
        ]), be(G("div", zd, [G("a", {
          href: "javascript:;",
          class: "absolute pop-btn-close",
          onClick: m
        }), G("div", jd, W(D(w)("select_role_title")), 1), G("p", Wd, W(D(w)("select_role_desc")), 1), G("div", Kd, [G("p", Jd, W((j = D(v)) == null ? void 0 : j.area_name), 1), D(u).length ? (b(), H("div", Xd, [(b(!0), H(Be, null, vn(D(u), x => {
          var se;
          return b(), H("div", {
            key: x.role_id + x.icon,
            class: "pt-[15px] pb-[15px] flex justify-around text-center",
            onClick: pe => D(p)(x)
          }, [G("div", {
            class: ee(["flex flex-col items-center role-item", {
              on: D(l) === x
            }])
          }, [G("p", Zd, [x ? (b(), ie(D(xd), {
            key: x.icon,
            default_avatar: D(Pu)("appicon.png"),
            avatar_id: (se = x == null ? void 0 : x.icon) != null ? se : 0
          }, null, 8, ["default_avatar", "avatar_id"])) : te("", !0)]), G("p", em, W(x == null ? void 0 : x.role_name), 1)], 2)], 8, Qd)
        }), 128))])) : te("", !0), !D(u).length && !D(_) ? (b(), H("div", tm, [G("p", nm, W(D(w)("no_roles")), 1)])) : te("", !0)]), G("a", {
          href: "javascript:;",
          class: ee(["mx-auto mt-20 mb-5 text-22 pop-btn-ok", [D(_) ? "!bg-[#bbb]" : "bg-[#0eb1fe]"]]),
          onClick: E
        }, W(h.value), 3), D(u).length ? (b(), H("a", {
          key: 0,
          href: "javascript:;",
          class: "text-center text-ink-60 text-16",
          onClick: V[0] || (V[0] = x => a.value = 1)
        }, W(D(w)("back")), 1)) : te("", !0)], 512), [
          [Ye, a.value === 2]
        ])], 512)), [
          [Ye, i.value]
        ])
      }
    }
  }),
  om = Lt(sm, [
    ["__scopeId", "data-v-210b58e5"]
  ]),
  vr = e => e ? [Z.JoinGuildUnderMaintenance, Z.GuildUnderMaintenance].includes(e) : !1;

function rm(e) {
  var d, f;
  const t = A((d = e.uid) != null ? d : ""),
    n = A(!1),
    s = A((f = e.is_client) != null ? f : !1),
    o = A({}),
    r = P(() => {
      var m, h;
      return !!((m = o.value) != null && m.role_id || (h = o.value) != null && h.role_name)
    }),
    a = () => {
      var h;
      if (!xe()) return "";
      const m = ue();
      return (h = q(m, Ia)) != null ? h : ""
    },
    i = async m => {
      if (a() !== (m == null ? void 0 : m.role_id)) {
        const h = await _();
        return h ? (await dr(h), h) : null
      }
      return m
    }, _ = async () => {
      var E, I;
      const m = ue(),
        h = Number(q(m, kt));
      if (!h) return null;
      const S = await ur({
        area_id: h,
        game_id: q(m, Re),
        zone_id: q(m, Sa)
      });
      return (I = (E = S == null ? void 0 : S.role_list) == null ? void 0 : E[0]) != null ? I : null
    }, g = pt(async () => {
      var h;
      if (!o.value) return Promise.resolve({
        role_info: null,
        is_rebinded: !1
      });
      if (r.value) return Promise.resolve({
        role_info: o.value,
        is_rebinded: !1
      });
      const m = await p();
      if (xe() && !s.value) {
        const S = await i(m);
        return o.value = (h = S != null ? S : m) != null ? h : null, {
          role_info: S != null ? S : m,
          is_rebinded: !!S && (m == null ? void 0 : m.role_id) !== (S == null ? void 0 : S.role_id)
        }
      }
      return o.value = m, {
        role_info: o.value,
        is_rebinded: !1
      }
    }), l = m => {
      const {
        is_client: h,
        uid: S
      } = m;
      s.value = h, t.value = S
    }, v = () => $u.run(Object.assign({
      uid: t.value
    }, e.area_id ? {
      area_id: e.area_id
    } : {})), u = () => {
      o.value = {}
    }, p = async () => {
      const m = await (async () => s.value ? await v() : await Xu.run({}))(),
        {
          icon: h,
          is_banned: S,
          role_info: E
        } = m != null ? m : {};
      return n.value = vr(m == null ? void 0 : m.code), E ? Object.assign({
        icon: h,
        is_banned: S
      }, E) : null
    };
  return {
    uid_ref: t,
    has_role: r,
    is_client_ref: s,
    user_role_info: o,
    is_under_maintenance: n,
    initRoleInfo: g,
    updateState: l,
    resetRoleInfo: u
  }
}

function sh(e) {
  const t = yt(),
    n = Er(),
    {
      user_role_info: s,
      is_client: o,
      has_role: r
    } = yn(n),
    {
      unmount: a,
      instance: i
    } = jo(om, {
      hint: e == null ? void 0 : e.select_hint
    }),
    _ = () => i.invoke();
  Ot(() => {
    a()
  });
  const g = P(() => {
      var p;
      return !xe() || xe() && !Number((p = t.query) == null ? void 0 : p[kt]) && !r.value
    }),
    l = async () => {
      const {
        mission_has_done: p = !1
      } = await Ku().run({});
      p || await Ju().run({
        tag_id: "3"
      }, {
        ignore_toast: !0
      })
    }, v = async p => {
      const {
        reload_page: d = !0
      } = p != null ? p : {}, f = await _(), m = ue();
      Tn.standalonesite_user_bind_ret.cm_click({
        ret: 0,
        roleid: f == null ? void 0 : f.role_id
      });
      const h = () => {
        setTimeout(() => {
          location.reload()
        }, 500)
      };
      return await dr(f), !Number(q(m, kt)) && xe() && Fa({
        [kt]: String(f.area_id)
      }), d && h(), f
    };
  return {
    show_bind_role: g,
    getRoleBonus: l,
    selectGameRole: _,
    bindRole: v,
    makeSureBindRole: async p => {
      if (!o.value) return n.initRoleInfo().finally(async () => r.value ? s.value : v(p))
    }
  }
}

function Os(e) {
  const t = he(),
    {
      uid_ref: n,
      has_role: s,
      user_role_info: o,
      is_client_ref: r,
      is_under_maintenance: a,
      resetRoleInfo: i,
      initRoleInfo: _,
      updateState: g
    } = rm(e),
    l = A([]),
    v = A(new Map),
    u = A(null),
    p = A(null),
    d = A(null),
    f = L => L.length > 0 && L.every(R => String(R) === String(nd)),
    m = P(() => {
      var R, J, $, O, F;
      if (!d.value || !p.value) return null;
      const L = (R = p.value.memorial_counts) != null ? R : [];
      return {
        notes: ($ = (J = L.find(Y => Y.category === "HandWriting")) == null ? void 0 : J.count) != null ? $ : 0,
        callrecord: (F = (O = L.find(Y => Y.category === "CallLog")) == null ? void 0 : O.count) != null ? F : 0,
        data: L.reduce((Y, oe) => oe.category === "HandWriting" || oe.category === "CallLog" ? Y : Y + oe.count, 0),
        bgm: p.value.jukebox_count
      }
    }),
    h = P(() => {
      var F, Y, oe;
      if (!d.value || !p.value) return null;
      const L = d.value,
        R = p.value,
        {
          recycle_room_researches: J
        } = R;

      function $(re) {
        var Se;
        const at = J == null ? void 0 : J.find(bt => bt.tid === re);
        return (Se = at == null ? void 0 : at.lv) != null ? Se : 0
      }
      const O = [L, R].some(re => (re == null ? void 0 : re.code) === Z.UserBanned);
      return {
        normal_progress: L.progress_normal_campaign,
        hard_progress: L.progress_hard_campaign,
        tower_floor: L.progress_tribe_tower,
        last_login_time: L.last_action_at,
        costume: L.character_costume_count,
        created_at: L.created_at,
        synchro_level: R.synchro_level,
        overlock_season: L.sim_room_overclock_latest_season_high_score > 0 ? L.sim_room_overclock_latest_season_high_score : 0,
        overlock_subseason: L.sim_room_overclock_current_sub_season_high_score > 0 ? L.sim_room_overclock_current_sub_season_high_score : 0,
        team_combat: L.team_combat,
        character_count: L.character_count,
        tactic_academy_class: R.tactic_academy_class,
        tactic_academy_lesson: R.tactic_academy_lesson,
        outpost_detail: {
          recyle_level: $(ye.Personal),
          elysion_level: $(ye.Elysion),
          tetra_level: $(ye.Tetra),
          missills_level: $(ye.Missilis),
          missilis_level: $(ye.Missilis),
          pilgrim_level: $(ye.Pilgrim),
          abnormal_level: $(ye.Abnormal),
          attacker_level: $(ye.Attacker),
          defender_level: $(ye.Defender),
          supporter_level: $(ye.Supporter),
          sychro_level: R.synchro_level
        },
        is_outpost_hidden: f(Object.values((F = R.recycle_room_researches) != null ? F : {}).map(re => re.lv)),
        is_banned: O || ((Y = d.value) == null ? void 0 : Y.is_banned) || ((oe = p.value) == null ? void 0 : oe.is_banned) || !1
      }
    }),
    S = P(() => {
      var $, O, F, Y, oe;
      if (!d.value || !p.value || !u.value) return null;
      const L = (O = ($ = u.value) == null ? void 0 : $[0]) != null ? O : {},
        R = [d.value, u.value, p.value].some(re => (re == null ? void 0 : re.code) === Z.NoPermissionVisitShiftyspad),
        J = [d.value, p.value].some(re => (re == null ? void 0 : re.code) === Z.UserBanned);
      return {
        ...L,
        player_level: d.value.lv,
        remain_interception: L.intercept_remaining_tickets,
        used_rookie_arena: L.rookie_arena_remaining_count > 0 ? L.rookie_arena_remaining_count : 0,
        used_special_arena: L.special_arena_remaining_count > 0 ? L.special_arena_remaining_count : 0,
        remain_rookie_arena: L.rookie_arena_remaining_count > 0 ? L.rookie_arena_remaining_count : 0,
        remain_special_arena: L.special_arena_remaining_count > 0 ? L.special_arena_remaining_count : 0,
        own_nikke_cnt: d.value.character_count,
        currencies: d.value.currencies,
        infra_core_level: p.value.infra_core_level,
        is_basic_info_hidden: R,
        is_daily_info_hidden: f(Object.values(L != null ? L : {}).filter(Number.isInteger)),
        is_resource_hidden: f(((F = d.value.currencies) != null ? F : []).map(re => re.value)),
        is_banned: J || ((Y = d.value) == null ? void 0 : Y.is_banned) || ((oe = p.value) == null ? void 0 : oe.is_banned) || !1
      }
    }),
    E = P(() => {
      const L = [d.value, u.value, p.value].some(R => vr(R == null ? void 0 : R.code));
      return a.value || L
    }),
    I = () => r.value ? !!n.value : !r.value,
    C = () => {
      var O;
      const L = (O = t.user_info) == null ? void 0 : O.intl_openid,
        R = n.value,
        J = r.value ? R : L,
        [, $] = J.split("-");
      return $
    },
    M = () => {
      var L;
      return (L = o.value) == null ? void 0 : L.area_id
    },
    U = () => ({
      intl_open_id: C(),
      nikke_area_id: Number(M())
    }),
    V = () => {
      i(), d.value = null, p.value = null, u.value = null, l.value = [], v.value = new Map, x.clear()
    },
    j = pt(async () => {}),
    x = new gr(150),
    se = async L => {
      await _();
      const R = L.filter($ => !v.value.get($)),
        J = await Promise.all(R.map(Hu));
      if (J.length) {
        const {
          character_details: $ = [],
          state_effects: O = []
        } = await ju.run({
          ...U(),
          name_codes: J.filter(Boolean)
        }), F = $.map(Y => {
          const oe = Object.assign({}, Y, {
            sychro_level: Y.lv
          });
          return delete oe.lv, oe
        });
        O.forEach(Y => {
          x.put(String(Y.id), Y)
        }), await Promise.all(F.map(async Y => {
          const oe = await Ss(Y);
          v.value.set(oe, Y)
        }))
      }
      return Promise.all(L.map(async $ => {
        const O = v.value.get($);
        return O ? await _d(O, x) : null
      }))
    }, pe = pt(async () => {
      var O;
      if (Object.entries((O = h.value) != null ? O : {}).length || !I()) return;
      await _();
      const [L, R, J] = await Promise.all([Yu.run(U()), zu.run(U()), qu.run(U())]), $ = (F, Y) => {
        var oe;
        return F != null && F.code ? {
          ...F[Y],
          code: (oe = F.code) != null ? oe : 0
        } : F[Y]
      };
      d.value = $(L, "basic_info"), p.value = $(R, "outpost_info"), u.value = $(J, "daily_progress")
    }), Te = pt(async () => {
      var $;
      if (($ = l.value) != null && $.length || !I()) return;
      await _();
      const L = await Wu.run(U()),
        {
          characters: R = []
        } = L,
        J = R.map(async O => {
          var F, Y;
          return Object.assign({}, O, {
            limit_break: ((F = O.core) != null ? F : 0) + ((Y = O.grade) != null ? Y : 0),
            resource_id: await Ss(O)
          })
        });
      l.value = (await Promise.all(J)).filter(O => !!O.resource_id)
    });
  return {
    initAllData: async () => (await _(), Promise.all([Te(), pe(), j()])),
    updateState: g,
    resetUserInfo: V,
    initRoleInfo: _,
    initUserBasicInfo: j,
    initUserBattleInfo: pe,
    initUserNikkeInfo: Te,
    loadCharacterDetail: se,
    has_role: s,
    user_role_info: o,
    user_basic_info: S,
    user_battle_info: h,
    user_nikkelist_info: l,
    user_lost_memories: m,
    is_under_maintenance: E,
    is_client: P(() => r.value),
    id: P(() => r.value ? n.value : "self")
  }
}

function oh(e) {
  const s = Number(e) < 0 ? "-" : "",
    o = {
      M: 1e6,
      K: 1e3
    },
    r = Object.keys(o),
    a = Math.abs(Number(e));
  for (let i = 0; i < r.length; i++)
    if (a > 10 * o[r[i]]) return "".concat(s).concat(Math.round(a / o[r[i]])).concat(r[i]);
  return "".concat(s).concat(e)
}
const am = (e, t) => {
  let n = String(e);
  for (; n.length < t;) n = "0".concat(n);
  return n
};

function rh(e, t) {
  const n = Ve(),
    s = e === 0 ? n : Ve(e);
  let o = n.diff(s, "minute");
  const r = n.diff(s, "hour"),
    a = n.year() === s.year();
  return o < 60 ? (o < 1 && (o = 1), "".concat(o, " ").concat(t("min_before"))) : r < 24 ? "".concat(r, " ").concat(t("hour_before")) : a ? s.format("MM/DD") : s.format("YYYY/MM/DD")
}
const ah = e => {
    const t = Ve().year(),
      n = e * 1e3,
      o = t === Ve(n).get("year") ? "MM-DD HH:mm" : "YYYY-MM-DD";
    return Ve(n).format(o)
  },
  Er = It("shiftys_user", () => {
    const e = O_(),
      t = On(),
      n = yt(),
      s = he(),
      {
        is_login: o,
        user_info: r
      } = Ns(s),
      a = P(() => o.value),
      i = P(() => {
        var M, U, V;
        if (!((M = m.value.user_role_info.value) != null && M.role_id)) return "-";
        const C = (V = (U = m.value.user_role_info.value) == null ? void 0 : U.role_id) != null ? V : "-";
        return am(C, 8)
      }),
      _ = P(() => !n.query[Oe.EncodedUid] && !n.query[Oe.OpenId] ? "" : n.query[Oe.EncodedUid] || n.query[Oe.OpenId] || ""),
      g = P(() => {
        if (!_.value) return "";
        try {
          const C = r_(String(_.value));
          return $e.info("real_uid: ".concat(C)), C
        } catch (C) {
          return ""
        }
      }),
      l = P(() => {
        var C;
        return (C = r.value) == null ? void 0 : C.intl_openid
      }),
      v = P(() => g.value ? g.value === l.value : !g.value),
      u = P(() => !!g.value && g.value !== l.value),
      p = P(() => {
        var C;
        return (C = l.value) == null ? void 0 : C.split("-").pop()
      }),
      d = Os({
        is_client: !0,
        uid: g.value
      }),
      f = Os({
        is_client: !1,
        uid: l.value
      }),
      m = P(() => u.value ? d : f),
      h = C => S().then(() => C()).catch(M => Promise.reject(M)),
      S = async () => {
        if (await s.waitLoginCheckFinish(), l.value) return Promise.resolve();
        if (s.is_login && await s.waitingGetUserInfoFinish(), u.value ? d.updateState({
            is_client: !0,
            uid: g.value
          }) : f.updateState({
            is_client: !1,
            uid: l.value
          }), !s.is_login) throw new Error("login failed.")
      }, E = async () => {
        if (await S(), await fc(1), $e.info("[init-user-data]: client - ".concat(u.value, ", uid - ").concat(g.value)), u.value ? d.updateState({
            is_client: !0,
            uid: g.value
          }) : f.updateState({
            is_client: !1,
            uid: l.value
          }), !l.value) throw new Error("user info not ready.");
        await (u.value ? d : f).initAllData(), e.showLoading(!1)
      }, I = () => t.push({
        name: me.LOGIN,
        query: {
          ...n.query,
          to: n.path
        }
      });
    return $e.info("[store-loaded]"), je(() => r.value, () => {
      f.updateState({
        is_client: !1,
        uid: l.value
      })
    }, {
      immediate: !0
    }), je([g, u], () => {
      !l.value || !g.value || (d.resetUserInfo(), d.updateState({
        is_client: !0,
        uid: g.value
      }), $e.info("[reset-user-info-by-uid-change]: is_client ".concat(u.value, ", uid ").concat(g.value)))
    }, {
      immediate: !0
    }), {
      uid: g,
      is_self: v,
      is_client: u,
      logined: a,
      user_info: r,
      encrypt_uid: _,
      shown_role_id: i,
      shiftys_user: m,
      self_user_id: l,
      intl_open_id: p,
      self_shifty_user: f,
      has_role: P(() => m.value.has_role.value),
      user_lost_memories: P(() => m.value.user_lost_memories.value),
      user_basic_info: P(() => m.value.user_basic_info.value),
      user_role_info: P(() => m.value.user_role_info.value),
      user_battle_info: P(() => m.value.user_battle_info.value),
      user_nikkelist_info: P(() => m.value.user_nikkelist_info.value),
      is_under_maintenance: P(() => m.value.is_under_maintenance.value),
      initUser: S,
      liPassLogin: I,
      initAllUserData: E,
      initSelfRole: () => h(() => f.initRoleInfo()),
      initRoleInfo: () => h(() => m.value.initRoleInfo()),
      initUserBasicInfo: () => h(() => m.value.initUserBasicInfo()),
      initUserBattleInfo: () => h(() => m.value.initUserBattleInfo()),
      initUserNikkeInfo: () => h(() => m.value.initUserNikkeInfo()),
      loadNikkesDetail: C => h(() => m.value.loadCharacterDetail(C))
    }
  }),
  im = "https://www.blablalink.com/assets/nikke/version/default/assets/banner-en-B9ZDJYZT.png",
  cm = "https://www.blablalink.com/assets/nikke/version/default/assets/banner-jp-BVDkTOUF.png",
  _m = "https://www.blablalink.com/assets/nikke/version/default/assets/banner-kr-lDxkcN7M.png",
  lm = "https://www.blablalink.com/assets/nikke/version/default/assets/banner-tw-DMG2CxNF.png",
  um = "https://www.blablalink.com/assets/nikke/version/default/assets/banner-cn-C_08Yq9h.png",
  dm = It("mission", () => {
    const e = he();
    _e();
    const t = Le(),
      {
        data: n,
        isLoading: s,
        refetch: o
      } = $l({}, {
        enabled: P(() => !!e.is_login),
        queryKey: [e.is_login]
      }),
      r = ql(),
      a = async E => {
        r.isPending.value || await r.mutateAsync({
          tag_id: E
        }).finally(() => {
          o()
        })
      }, i = Yl(), _ = async E => {
        i.isPending.value || await i.mutateAsync({
          tag_id: E
        }).finally(() => {
          o()
        })
      }, {
        data: g,
        refetch: l,
        isLoading: v
      } = Jo(P(() => ({
        intl_openid: e.user_info.intl_openid
      })), {
        enabled: P(() => !!e.user_info.intl_openid)
      }), u = A([]), {
        getSecondColumnData: p
      } = on({
        cms_config: {}
      }), d = async () => {
        var M;
        const E = _e(),
          C = [{
            pic_urls: [{
              en: im,
              ja: cm,
              zh: um,
              ko: _m,
              "zh-TW": lm
            } [E]],
            ext_info: {
              default: !0
            }
          }];
        try {
          const {
            data: U
          } = await p({
            offset: 0,
            content_class: Gn.banner,
            get_num: 10
          }, {
            primary: Bc,
            second: Hc
          }), V = (M = U == null ? void 0 : U.info_content) == null ? void 0 : M.filter(j => Oo({
            ext_info: j.ext_info,
            lang: E,
            game_id: t
          }));
          V != null && V.length ? u.value = V : u.value = C
        } catch (U) {
          u.value = C
        }
      }, {
        data: f,
        isLoading: m,
        refetch: h
      } = qt({
        queryKey: ["reward_task"],
        enabled: !1,
        queryFn: () => e.is_login && e.user_had_bound_lip ? Ko.run({
          get_top: !1,
          intl_game_id: t
        }) : Wo.run({
          get_top: !1,
          intl_game_id: t
        })
      }), S = P(() => {
        var E, I;
        return (I = (E = f == null ? void 0 : f.value) == null ? void 0 : E.tasks) != null ? I : []
      });
    return {
      mission_list: P(() => {
        var E, I;
        return (I = (E = n == null ? void 0 : n.value) == null ? void 0 : E.mission_done_list) != null ? I : []
      }),
      mission_status_loading: s,
      receiveMissionGift: a,
      refetchMissionStatus: o,
      finishMission: _,
      player_info: g,
      player_loading: v,
      refetchPlayerInfo: l,
      bannerList: u,
      getBanners: d,
      reward_task_list_loading: m,
      reward_task_list: S,
      refetchRewardTask: () => {
        if (!m.value) return h()
      }
    }
  });

function ih(e) {
  const t = A(0),
    n = A(void 0),
    {
      getScrollEl: s
    } = Object.assign({
      getScrollEl: () => document.getElementById("layout-content")
    }, e);
  let o;
  return {
    direction: n,
    scroll_top: t,
    registerScroll: () => {
      const i = s();
      i && (o = ra(i, "scroll", aa(() => {
        const _ = i.scrollTop;
        _ > t.value ? n.value = "down" : _ < t.value && (n.value = "up"), t.value = _
      }, 300)))
    },
    unRegisterScroll: () => {
      o == null || o()
    }
  }
}
const mm = () => {
    const e = P(() => document.getElementById("app")),
      t = P(() => document.getElementById("layout-content")),
      n = Ee();
    return {
      onAppWheelAction: () => {
        if (n) return;
        const o = a => {
            a.ctrlKey ? a.preventDefault() : a.stopPropagation()
          },
          r = a => {
            a.preventDefault();
            const i = a.deltaY;
            t.value && t.value.scrollBy({
              top: i
            })
          };
        ke(() => {
          t.value && t.value.addEventListener("wheel", o), e.value && e.value.addEventListener("wheel", r)
        }), Ot(() => {
          t.value && t.value.removeEventListener("wheel", o), e.value && e.value.removeEventListener("wheel", r)
        })
      }
    }
  },
  pm = {
    post_detail_comment_head_scroll_into_view: "post_detail_comment_head_scroll_into_view",
    post_detail_reset_comment_list: "post_detail_reset_comment_list",
    post_detail_comment_list_scroll_into_view: "post_detail_comment_list_scroll_into_view",
    post_detail_add_new_comment: "post_detail_add_new_comment",
    post_detail_add_new_reply: "post_detail_add_new_reply",
    topic_detail_reset_list: "topic_detail_reset_list",
    refresh_post_list_item_info: "refresh_post_list_item_info",
    user_status_change: "user_status_change",
    page_scroll_to_top: "page_scroll_to_top",
    refresh_home_plate_post_list: "refresh_home_plate_post_list"
  };
class gm {
  constructor() {
    B(this, "listeners");
    this.listeners = new Map
  }
  on(t, n) {
    this.listeners.has(t) || this.listeners.set(t, []), this.listeners.get(t).push(n)
  }
  off(t, n) {
    if (!this.listeners.has(t)) return;
    const s = this.listeners.get(t).indexOf(n);
    s !== -1 && this.listeners.get(t).splice(s, 1)
  }
  emit(t, ...n) {
    if (!this.listeners.has(t)) return;
    const s = n[0];
    this.listeners.get(t).forEach(o => o(s))
  }
}
const Ps = new gm,
  fm = (e, t) => {
    ke(() => {
      Ps.on(e, t)
    }), Ot(() => {
      Ps.off(e, t)
    })
  };

function vm(e = "#layout-content") {
  const t = On();
  let n = null;
  const s = () => {
      const a = navigator.userAgent,
        i = /iPad|iPhone|iPod/.test(a),
        _ = /CriOS/.test(a);
      return i && _
    },
    o = async () => {
      if (!s()) return;
      await ft();
      const a = document.querySelector(e);
      if (!a) return;
      const i = a.style.transform;
      a.style.transform = "translateZ(0)";
      const _ = a.style.overflowY;
      a.style.overflowY = "hidden", setTimeout(() => {
        a.style.transform = i, a.style.overflowY = _ || "auto";
        const g = a.scrollTop;
        a.scrollTop = g + 1, a.scrollTop = g
      }, 0)
    }, r = () => {
      n && clearTimeout(n), n = window.setTimeout(() => {
        o()
      }, 100)
    };
  return ke(() => {
    s() && t.afterEach(r)
  }), Ot(() => {
    n && clearTimeout(n)
  }), {
    reactivateScroll: o,
    isIOSChrome: s
  }
}
var hr = (e => (e[e.Obtained = 1] = "Obtained", e[e.NotObtained = 2] = "NotObtained", e))(hr || {});
const Em = ne({
  method: "post",
  url: Qa
});
var hm = (e => (e[e.Obtained = 1] = "Obtained", e[e.NotObtained = 2] = "NotObtained", e))(hm || {}),
  Am = (e => (e[e.Dressed = 1] = "Dressed", e[e.NotDressed = 2] = "NotDressed", e))(Am || {});
const ch = N({
    method: "post",
    url: Za
  }),
  _h = ne({
    method: "post",
    url: ei
  }, {
    refetch: () => [Tm]
  }),
  lh = ne({
    method: "post",
    url: ti
  }),
  uh = N({
    method: "post",
    url: ni
  });
var Im = (e => (e[e.NotCompleted = 0] = "NotCompleted", e[e.Completed = 1] = "Completed", e))(Im || {});
const dh = N({
  method: "post",
  url: si
});
var Sm = (e => (e[e.Awarded = 1] = "Awarded", e[e.NotAwarded = 2] = "NotAwarded", e[e.Pending = 3] = "Pending", e))(Sm || {});
const Tm = N({
  method: "post",
  url: oi
});
var ym = (e => (e[e.NotStarted = 0] = "NotStarted", e[e.Started = 1] = "Started", e))(ym || {});
const mh = N({
    method: "post",
    url: ri
  }),
  Om = ne({
    method: "post",
    url: ai
  });
var Pm = (e => (e[e.Awarded = 1] = "Awarded", e[e.NotAwarded = 2] = "NotAwarded", e[e.Pending = 3] = "Pending", e))(Pm || {});
const ph = N({
    method: "post",
    url: ii
  }),
  gh = ne({
    method: "post",
    url: ci
  }),
  Cm = {
    class: "w-full flex flex-col items-center text-center mb-[12px]"
  },
  Rm = {
    class: "mx-auto w-[85px] h-[85px] bg-[color:var(--fill-3)] border border-[color:var(--line-2)] flex items-center justify-center overflow-hidden"
  },
  Dm = ["src"],
  Lm = {
    key: 0,
    class: "mt-[12px] text-[11px] font-[Inter] leading-[13px] text-[color:var(--color-3)] px-[6px] whitespace-pre-wrap font-bold"
  },
  wm = {
    key: 1,
    class: "mt-[12px] text-[11px] font-[Inter] leading-[13px] text-[color:var(--color-3)] px-[6px] whitespace-pre-wrap"
  },
  bm = e => tn(xm, e),
  xm = X({
    __name: "ornament-dialog",
    props: {
      ornament: {},
      title: {
        default: ""
      },
      show_confirm: {
        type: Boolean,
        default: !0
      },
      show_cancel: {
        type: Boolean,
        default: !0
      },
      confirm_text: {
        default: ""
      },
      cancel_text: {
        default: ""
      },
      cancel: {},
      finish: {},
      visible: {
        type: Boolean
      },
      is_finishing: {
        type: Boolean
      },
      is_cancelling: {
        type: Boolean
      }
    },
    setup(e) {
      const t = e,
        n = P(() => t.title || w("christmas_tree_discover_outfit")),
        s = () => {
          t.finish()
        },
        o = a => a.replace(/<br\/>/g, "\n").replace(/<br>/g, "\n"),
        r = () => {
          t.cancel()
        };
      return (a, i) => (b(), ie(en, {
        show: a.visible,
        title: n.value,
        "padding-x": 22,
        onClose: r
      }, {
        default: ae(() => [G("div", Cm, [i[0] || (i[0] = G("div", {
          class: "w-full h-[3px] bg-[url(@/assets/imgs/common/line.png)] bg-[length:100%_100%] mb-[15px]"
        }, null, -1)), G("div", Rm, [G("img", {
          src: a.ornament.icon,
          class: "w-full h-full object-contain",
          alt: "christmas-ornament"
        }, null, 8, Dm)]), a.ornament.name ? (b(), H("div", Lm, W(a.ornament.name), 1)) : te("", !0), a.ornament.description ? (b(), H("div", wm, W(o(a.ornament.description)), 1)) : te("", !0)]), a.show_confirm ? (b(), ie(He, {
          key: 0,
          type: "primary",
          class: "w-full mt-[18px]",
          onClick: s
        }, {
          default: ae(() => [Me(W(a.confirm_text || D(w)("confirm")), 1)]),
          _: 1
        })) : te("", !0), a.show_cancel ? (b(), ie(He, {
          key: 1,
          type: "secondary",
          class: "w-full !mt-[12px]",
          onClick: r
        }, {
          default: ae(() => [Me(W(a.cancel_text || D(w)("cancel")), 1)]),
          _: 1
        })) : te("", !0)]),
        _: 1
      }, 8, ["show", "title"]))
    }
  }),
  Um = e => new Promise((t, n) => {
    const s = new Image;
    s.crossOrigin = "anonymous", s.onload = () => t({
      image: s,
      width: s.naturalWidth / 7,
      height: s.naturalHeight / 7
    }), s.onerror = n, s.src = e
  });

function Nm(e) {
  const t = A(null),
    n = A(!1);
  return je(e, async s => {
    if (!s) {
      t.value = null;
      return
    }
    n.value = !0;
    try {
      t.value = await Um(s)
    } catch (o) {
      t.value = null
    } finally {
      n.value = !1
    }
  }, {
    immediate: !0
  }), {
    data: t,
    loading: n
  }
}
const Gm = ["src"],
  et = 24,
  km = X({
    __name: "christmas-egg-entry",
    setup(e) {
      const t = yt(),
        n = On(),
        s = he(),
        o = new Set([me.HOME, me.POST_DETAIL, me.USER, me.SHIFTYSPAD, me.SHIFTYSPAD_ROOT]),
        r = A(null),
        a = A(0),
        i = A({
          top: 100,
          left: 24
        }),
        _ = P(() => {
          var E, I;
          return ((E = r.value) == null ? void 0 : E.gif) || ((I = r.value) == null ? void 0 : I.icon)
        }),
        g = Nm(_),
        l = P(() => {
          const E = g.data.value;
          return E ? Math.max(E.width, E.height) : 88
        }),
        v = P(() => o.has(t.name)),
        u = P(() => {
          var E;
          return !!((E = r.value) != null && E.icon) && r.value.get_status === hr.NotObtained && v.value
        }),
        p = P(() => ({
          top: "".concat(i.value.top, "px"),
          left: "".concat(i.value.left, "px")
        })),
        d = () => {
          r.value = null
        },
        f = () => {
          var V, j;
          const E = document.getElementById("layout-content"),
            I = (V = E == null ? void 0 : E.clientWidth) != null ? V : window.innerWidth,
            C = (j = E == null ? void 0 : E.clientHeight) != null ? j : window.innerHeight,
            M = Math.max(I - l.value - et * 2, et),
            U = Math.max(C - l.value - et * 2, et);
          i.value = {
            left: et + Math.random() * M,
            top: et + Math.random() * U
          }
        },
        m = async () => {
          const E = ++a.value;
          if (d(), !s.is_login || !v.value) return;
          const I = await Em.run({}, {
            ignore_toast: !0
          });
          Math.random() > .15 || E === a.value && (r.value = I, await ft(), f())
        }, h = () => {
          n.push({
            name: me.CHRISTMAS_TREE
          }), d()
        }, S = async () => {
          if (!r.value) return;
          const E = r.value;
          d(), await Om.run({
            uuid: E.uuid
          }), bm({
            ornament: {
              icon: E.icon,
              name: "【".concat(E.name, "】"),
              description: String(E.desc) || ""
            },
            title: w("christmas_tree_discover_outfit"),
            show_confirm: !0,
            show_cancel: !0,
            confirm_text: w("christmas_tree_go_decorate"),
            cancel_text: w("cancel"),
            onFinish: () => {
              h()
            }
          })
        };
      return je([() => t.fullPath, () => s.is_login, () => t.name], ([E, I, C]) => {
        if (!I || !C) {
          d();
          return
        }
        m()
      }, {
        immediate: !0
      }), (E, I) => u.value && D(g).data.value ? (b(), H("div", {
        key: 0,
        class: "absolute z-[20] cursor-pointer",
        style: ve({
          ...p.value,
          width: "".concat(D(g).data.value.width, "px"),
          height: "".concat(D(g).data.value.height, "px")
        }),
        onClick: ws(S, ["stop"])
      }, [G("img", {
        src: r.value.gif || r.value.icon,
        class: "w-full h-full object-contain",
        alt: "christmas-ornament"
      }, null, 8, Gm)], 4)) : te("", !0)
    }
  }),
  Mm = "https://www.blablalink.com/assets/nikke/version/default/assets/fireworks-CEBAtIkB.png",
  Vm = {
    class: "relative w-full h-full max-w-[var(--max-pc-w)] mx-auto"
  },
  Fm = ["src"],
  Bm = X({
    __name: "index",
    props: {
      duration: {
        default: 5e3 * 2
      },
      header_height: {
        default: 44
      }
    },
    setup(e, {
      expose: t
    }) {
      const n = e,
        s = A(!1),
        o = A();
      let r = null;
      const a = A(""),
        i = async () => {
          if (!r) try {
            r = await (await fetch(Mm)).blob()
          } catch (p) {
            throw p
          }
        }, _ = () => r ? (a.value && URL.revokeObjectURL(a.value), URL.createObjectURL(r)) : "", g = async () => {
          if (!o.value) try {
            await i(), a.value = _(), s.value = !0, o.value = setTimeout(() => {
              l()
            }, n.duration)
          } catch (p) {}
        }, l = () => {
          s.value = !1, o.value && (clearTimeout(o.value), o.value = void 0)
        }, v = () => {}, u = () => {
          l()
        };
      return Ot(() => {
        o.value && clearTimeout(o.value), a.value && URL.revokeObjectURL(a.value)
      }), t({
        playAnimation: g,
        preloadImage: i,
        hideAnimation: l
      }), (p, d) => s.value ? (b(), H("div", {
        key: 0,
        class: "fixed left-0 w-full z-[49] pointer-events-none overflow-hidden",
        style: ve({
          top: "".concat(p.header_height, "px"),
          height: "calc(100vh - ".concat(p.header_height, "px)")
        })
      }, [G("div", Vm, [G("img", {
        src: a.value,
        class: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full animate-[fadeIn_0.3s_ease-in-out]",
        onLoad: v,
        onError: u
      }, null, 40, Fm)])], 4)) : te("", !0)
    }
  }),
  Hm = Lt(Bm, [
    ["__scopeId", "data-v-00ebfccc"]
  ]),
  $m = ["新年快乐", "Happy New Year", "새해 복 많이 받으세요", "あけましておめでとうございます", "新年快樂"],
  Ym = new Date("2026-01-01T11:00:00+09:00").getTime(),
  qm = new Date("2026-01-05T23:59:59+09:00").getTime();

function zm() {
  const e = Date.now();
  return e >= Ym && e <= qm
}

function jm(e) {
  return e.replace(/&nbsp;/gi, " ").replace(/\u00A0/g, " ").replace(/\s+/g, " ").trim()
}
const gt = A(null);
let dt = null,
  Cs = null;
async function Wm() {
  dt || (dt = document.createElement("div"), dt.id = "fireworks-container", document.body.appendChild(dt), Cs = Tt({
    setup() {
      return () => bs(Hm, {
        ref: e => {
          gt.value = e
        }
      })
    }
  }), Cs.mount(dt), await ft(), gt.value && gt.value.preloadImage())
}

function Km(e) {
  if (!zm() || !e) return !1;
  const n = jm(e).toLowerCase();
  return $m.some(s => n.includes(s.toLowerCase()))
}

function fh(e) {
  return Km(e) ? (Jm(), !0) : !1
}

function Jm() {
  gt.value && gt.value.playAnimation()
}
const Xm = {
    key: 0,
    class: "flex h-full w-full justify-center items-center"
  },
  Qm = X({
    __name: "App",
    setup(e) {
      const {
        onAppWheelAction: t
      } = mm(), {
        logAndReportError: n
      } = Po(), {
        initRoleInfo: s
      } = Er(), o = he(), r = mo();
      vm();
      const a = A(!0),
        i = P(() => r === Mt.NORMAL ? !1 : a.value),
        _ = async () => {
          (await s()).is_rebinded && location.reload()
        };
      (async () => {
        if (r !== Mt.NORMAL) {
          try {
            await (r === Mt.IN_GAME ? o.loginInGame : o.loginFromWebCredential)()
          } catch (u) {
            n(u.msg, u)
          } finally {
            a.value = !1
          }(async () => {
            await o.checkLogin(), xe() && _(), await o.refetchUserInfo();
            const {
              afterLoginInterceptor: u
            } = $n();
            await u()
          })();
          return
        }
        o.checkLogin()
      })(), dm(), t(), fm(pm.page_scroll_to_top, () => {
        var v;
        (v = document.getElementById("layout-content")) == null || v.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }), Tn.standalonesite_cm_init.cm_vshow();
      const l = v => [fe.USER, fe.POST_DETAIL].includes(v);
      return ke(() => {
        Wm();
        const v = Math.floor(performance.now());
        Tn.standalonesite_home_page_loading.cm_vshow({
          du: v
        })
      }), (v, u) => {
        const p = ia("router-view");
        return b(), ie(Eu, null, {
          default: ae(() => [i.value ? (b(), H("div", Xm, [z(tr)])) : (b(), ie(p, {
            key: 1
          }, {
            default: ae(({
              Component: d,
              route: f
            }) => [(b(), ie(ca, {
              include: D(Xc),
              max: 15
            }, [l(f.path) ? (b(), ie(vt(d), {
              key: f.fullPath
            })) : (b(), ie(vt(d), {
              key: f.path
            }))], 1032, ["include"]))]),
            _: 1
          })), z(Au), z(Iu), z(km)]),
          _: 1
        })
      }
    }
  }),
  Zm = () => {
    const e = A([{
        name: "English",
        value: T.en
      }, {
        name: "日本語",
        value: T.ja
      }, {
        name: "한국어",
        value: T.ko
      }, {
        name: "繁體中文",
        value: T.tw
      }]),
      t = A(_e()),
      n = P(() => e.value.find(r => r.value === t.value)),
      s = async r => {
        o(r.value), To() && await le.replace({
          query: {
            ...le.currentRoute.value.query,
            lang: r.value
          }
        })
      }, o = r => {
        t.value = r, Io(Hs, r)
      };
    return {
      lang_list: e,
      current_lang: n,
      onLangChange: s,
      setAppLang: o
    }
  },
  ep = () => {
    const {
      getGrayscale: e
    } = or(), t = Ee();
    return {
      loadVConsole: async () => {
        const s = async () => {
          const i = await c(() => import("./vconsole.min-CEPe-Tm_.js").then(_ => _.v), __vite__mapDeps([254, 1]));
          new i.default
        };
        if ([Pe, t && Ct].filter(Boolean).includes("prod")) {
          s();
          return
        }
        const o = he();
        await o.waitingGetUserInfoFinish();
        const r = o.user_info.intl_openid;
        await e(Yn.vconsole, {
          openid: r
        }) && s()
      }
    }
  };
Ve.extend(_a);
const {
  loadVConsole: tp
} = ep(), {
  setAppLang: np
} = Zm(), {
  installAppPlugins: sp
} = zo(), {
  loadCDNConfigs: op
} = rn();
(async () => {
  const e = Ee();
  await op("prod"), Va() && (location.search = $s(location.search)), q(ue(), "is_log") && Xt.level("log");
  const t = _e();
  t && np(t);
  const n = Tt(Qm);
  Qo && document.body.classList.add("webp"), e || document.body.classList.add("overflow-hidden"), sp(n, {
    is_main_app: !0
  }).mount("#app"), tu(), qo(n), setTimeout(() => {
    e && Q.prompt()
  }, 5e3), setTimeout(() => {
    c(() => Promise.resolve({}), __vite__mapDeps([255])), c(() => Promise.resolve({}), __vite__mapDeps([256])), tp()
  }, 0)
})();
export {
  Ie as $, Qe as A, _e as B, Oe as C, Jl as D, kn as E, Ee as F, ys as G, fc as H, Xv as I, Gn as J, qf as K, $f as L, jc as M, on as N, dm as O, gc as P, N as Q, fe as R, gp as S, ne as T, Le as U, rn as V, QE as W, dr as X, ur as Y, Ts as Z, c as _, ap as __vite_legacy_guard, tr as a, mp as a$, Vg as a0, Mg as a1, Bg as a2, Fg as a3, xi as a4, cp as a5, Ac as a6, He as a7, Z as a8, hc as a9, cv as aA, Ct as aB, fd as aC, xd as aD, lc as aE, dc as aF, mc as aG, cs as aH, fr as aI, dp as aJ, kf as aK, ZE as aL, Id as aM, fh as aN, eh as aO, ev as aP, uv as aQ, h_ as aR, Sn as aS, qp as aT, Un as aU, Sp as aV, rv as aW, Wc as aX, pp as aY, xn as aZ, lo as a_, me as aa, Yf as ab, Kf as ac, kg as ad, Hg as ae, le as af, Mf as ag, Pf as ah, Xt as ai, sh as aj, H_ as ak, $_ as al, rh as am, Zf as an, En as ao, Jt as ap, hn as aq, th as ar, Zm as as, tv as at, pc as au, Qf as av, xf as aw, Bf as ax, Ff as ay, ov as az, en as b, Vp as b$, X_ as b0, Tc as b1, io as b2, Zc as b3, Vf as b4, Ro as b5, Sf as b6, po as b7, Sd as b8, fv as b9, Tv as bA, Cv as bB, Pv as bC, fl as bD, Kc as bE, hv as bF, Av as bG, ng as bH, tg as bI, Tp as bJ, xv as bK, bv as bL, oh as bM, iu as bN, Fa as bO, Jv as bP, Rv as bQ, Iv as bR, Sv as bS, Qs as bT, Hp as bU, Bp as bV, Fp as bW, Gp as bX, kp as bY, Mp as bZ, jp as b_, Zt as ba, pv as bb, Vo as bc, gv as bd, rE as be, oE as bf, sE as bg, eE as bh, Eo as bi, Cc as bj, iv as bk, nh as bl, Hf as bm, Ev as bn, Rf as bo, nv as bp, sv as bq, Po as br, ag as bs, o_ as bt, ih as bu, dv as bv, Lo as bw, t_ as bx, nl as by, Tg as bz, ue as c, Up as c$, Xs as c0, er as c1, Ep as c2, Oo as c3, Xf as c4, Jf as c5, T as c6, Wf as c7, jf as c8, gf as c9, hf as cA, $n as cB, Ec as cC, ah as cD, wp as cE, $p as cF, Yp as cG, Jp as cH, eo as cI, jg as cJ, Wg as cK, dg as cL, yg as cM, Zs as cN, Js as cO, Ks as cP, Og as cQ, bp as cR, zg as cS, Cp as cT, Ws as cU, Np as cV, js as cW, Rp as cX, Wp as cY, Kp as cZ, xp as c_, pf as ca, zf as cb, Gv as cc, Mv as cd, kv as ce, $v as cf, Yv as cg, wn as ch, Hv as ci, _p as cj, Af as ck, If as cl, qe as cm, We as cn, Pe as co, Kt as cp, Lg as cq, pi as cr, fi as cs, gi as ct, ig as cu, Rg as cv, Dg as cw, hp as cx, Ap as cy, uc as cz, Dt as d, Fu as d$, Qp as d0, eg as d1, ug as d2, Td as d3, yp as d4, Op as d5, Dp as d6, Lp as d7, Pp as d8, sg as d9, Of as dA, yd as dB, zv as dC, No as dD, yv as dE, Go as dF, oc as dG, Tf as dH, lv as dI, Ca as dJ, c_ as dK, ya as dL, Ga as dM, nn as dN, Jo as dO, jv as dP, r_ as dQ, a_ as dR, YE as dS, nd as dT, _g as dU, cg as dV, Hn as dW, lg as dX, hE as dY, PE as dZ, ge as d_, rg as da, og as db, fp as dc, Eg as dd, mg as de, pg as df, gg as dg, fg as dh, vg as di, hg as dj, Ag as dk, Ig as dl, Sg as dm, Nf as dn, qg as dp, wv as dq, s_ as dr, bd as ds, jo as dt, Ic as du, _f as dv, af as dw, cf as dx, lf as dy, rf as dz, Ba as e, iE as e$, od as e0, ed as e1, Xo as e2, mE as e3, Er as e4, Pu as e5, pE as e6, Ne as e7, LE as e8, DE as e9, Zp as eA, wg as eB, bg as eC, xg as eD, Ug as eE, Gg as eF, Ng as eG, df as eH, uf as eI, mf as eJ, Ip as eK, Gf as eL, Wv as eM, RE as eN, CE as eO, xE as eP, Dv as eQ, Qt as eR, or as eS, Yn as eT, rl as eU, ol as eV, Uv as eW, Nv as eX, al as eY, Lv as eZ, qv as e_, bE as ea, wE as eb, lE as ec, Os as ed, M_ as ee, zo as ef, Xg as eg, Kg as eh, Jg as ei, Qg as ej, nf as ek, Zg as el, ef as em, tf as en, sf as eo, of as ep, Cf as eq, Lf as er, Df as es, Kv as et, mv as eu, Rc as ev, go as ew, vv as ex, zp as ey, Xp as ez, Lt as f, Cg as f$, uo as f0, xe as f1, av as f2, pt as f3, aE as f4, AE as f5, Ss as f6, jE as f7, JE as f8, XE as f9, IE as fA, uE as fB, Qv as fC, Ou as fD, Su as fE, cE as fF, yu as fG, _E as fH, GE as fI, vE as fJ, O_ as fK, up as fL, lr as fM, fE as fN, TE as fO, Ud as fP, _v as fQ, yf as fR, ms as fS, Io as fT, Rn as fU, Re as fV, st as fW, Pa as fX, Nd as fY, $g as fZ, Pg as f_, EE as fa, Lc as fb, ad as fc, Ge as fd, qE as fe, id as ff, Vu as fg, lp as fh, NE as fi, UE as fj, Hu as fk, yE as fl, OE as fm, sd as fn, $e as fo, KE as fp, zE as fq, WE as fr, SE as fs, FE as ft, BE as fu, HE as fv, $E as fw, kE as fx, ME as fy, VE as fz, he as g, Yg as g0, Uf as g1, Vv as g2, Fv as g3, zl as g4, jl as g5, Um as g6, Tm as g7, Sm as g8, Im as g9, bm as ga, ph as gb, Pm as gc, gh as gd, mh as ge, dh as gf, uh as gg, lh as gh, _h as gi, ch as gj, ym as gk, hm as gl, Am as gm, Sc as gn, bf as go, dE as gp, gE as gq, ff as gr, vf as gs, Ef as gt, Xa as gu, _c as gv, Bv as h, Q as i, vp as j, Zo as k, Zl as l, wo as m, co as n, fu as o, fm as p, pm as q, Tn as r, tn as s, w as t, Zv as u, wf as v, Ov as w, Ps as x, Bo as y, Fe as z
};

function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-HZgF5A8b.js", "assets/vendor-DaP1Mbb7.js", "assets/setting-DHECbQgA.js", "assets/user-privacy-CzumY0V6.js", "assets/composition-DGS3BezM.js", "assets/swiper-pagination.vue_vue_type_script_setup_true_lang-BJImH5Rb.js", "assets/timer-DROLMeZV.js", "assets/comm-bottom-popup.vue_vue_type_script_setup_true_lang-5B3qL8rC.js", "assets/launch-BxwUK-GM.js", "assets/composition-DqCQDRL-.css", "assets/index.vue_vue_type_script_setup_true_lang-4cyAEoj5.js", "assets/index.vue_vue_type_script_setup_true_lang-CzsbxzTa.js", "assets/LanguageSetting.vue_vue_type_script_setup_true_lang-gI-_tYhd.js", "assets/language-lT3tfAMB.js", "assets/index.vue_vue_type_script_setup_true_lang-ClUUPR3s.js", "assets/index-gxNMlqtY.js", "assets/push-notification-fdvtw38e.js", "assets/apple-touch-icon-BQv0xIY0.js", "assets/index.vue_vue_type_script_setup_true_lang-2Wdd38WD.js", "assets/index.vue_vue_type_script_setup_true_lang-CNLBFxeW.js", "assets/use-server-timestamp-BE4Z3jxd.js", "assets/system-CuFX06Xf.js", "assets/use-check-user-CGDrpTww.js", "assets/use-bind-lip-GewDLGlP.js", "assets/intl-CftDlE8J.js", "assets/index.vue_vue_type_script_setup_true_lang-C4zLW343.js", "assets/use-post-D5FAemxo.js", "assets/post-DnpSW49H.js", "assets/index.vue_vue_type_script_setup_true_lang-DfNRlg6S.js", "assets/authoring-statement-atomic-Dj350oxB.js", "assets/like.vue_vue_type_script_setup_true_lang-DKX4SfH4.js", "assets/index.vue_vue_type_script_setup_true_lang-CSBiEbx7.js", "assets/tiktok.vue_vue_type_script_setup_true_lang-cd8hcEyC.js", "assets/empty-img-Cf_HtnDF.js", "assets/index.vue_vue_type_script_setup_true_lang-BMtYCkhb.js", "assets/index-B-VRIyac.js", "assets/index-BmUYcr6f.css", "assets/use-is-deleted-BQecpVL-.js", "assets/use-plate-BPv4vIQy.js", "assets/home.store-DcjlgLsh.js", "assets/home-CDyxgx0M.js", "assets/index.vue_vue_type_script_setup_true_lang-BFAGKe2Y.js", "assets/home-Bm3tuXaj.js", "assets/index-ERua7-Wu.js", "assets/copy-CqF9GlTj.js", "assets/details.vue_vue_type_script_setup_true_lang-ClTpvxt1.js", "assets/icon-nikke-star-gold-BZMPZ9jg.js", "assets/user-comment-bubble-CC4pUjp2.js", "assets/use-user-center-C7IOS36-.js", "assets/json-C2LBpqy-.js", "assets/scene-OoNf_IDV.js", "assets/reward.vue_vue_type_script_setup_true_lang-NzAXrvxK.js", "assets/icon-list-friend-Rl7TJPaQ.js", "assets/index-BN0NDIvw.css", "assets/nodata.vue_vue_type_script_setup_true_lang-BDUcyd6m.js", "assets/infinite-scroll.vue_vue_type_script_setup_true_lang-DV_l0udn.js", "assets/stance-BR79B-TV.js", "assets/use-posts-status-Vfyj9uWo.js", "assets/index.vue_vue_type_script_setup_true_lang-BlEy7LCU.js", "assets/index.vue_vue_type_script_setup_true_lang-CyatxlBR.js", "assets/index.vue_vue_type_style_index_0_lang-puA4TRFk.js", "assets/index-DRKt7agD.css", "assets/index.vue_vue_type_script_setup_true_lang-CuEA1FHX.js", "assets/creatorhub-BBL597Wq.js", "assets/index.vue_vue_type_script_setup_true_lang-qhkqno8U.js", "assets/twMerge-DnNDQBbQ.js", "assets/TabsList.vue_vue_type_script_setup_true_lang-CEnXBvS3.js", "assets/TabsContent.vue_vue_type_script_setup_true_lang-DiPTnKk5.js", "assets/use-tanstack-infinite-list-Ds_xVz-U.js", "assets/index-BmwYy2ed.css", "assets/index.vue_vue_type_script_setup_true_lang-Dj_S473h.js", "assets/tab-scroll.vue_vue_type_script_setup_true_lang-dzoRCXvr.js", "assets/index.vue_vue_type_script_setup_true_lang-DzsTue-D.js", "assets/index-Cs0TzJPb.css", "assets/index-Dshn4Blu.js", "assets/index.vue_vue_type_script_setup_true_lang-BKtRhoIr.js", "assets/index.vue_vue_type_script_setup_true_lang-CJz2qajs.js", "assets/index-BGd_S_Km.css", "assets/index-m9B7NraO.js", "assets/index-CUiVZ5Zc.js", "assets/index-YHO4HpkE.js", "assets/index-_FNkf0sh.js", "assets/index.vue_vue_type_script_setup_true_lang-HbvTV7eX.js", "assets/index.vue_vue_type_script_setup_true_lang-CJ0W5JB1.js", "assets/index-CpQ4iCcl.js", "assets/index-BkN2cs0U.js", "assets/index-hToKonJJ.css", "assets/use-poll-DCkgLaZZ.js", "assets/index-roHkRVvy.js", "assets/utils-D45qPOC4.js", "assets/content-Jr7SRc6p.js", "assets/index-BumsZl8T.js", "assets/tag.store-CMfu4QKr.js", "assets/topic-BYLAkKmU.js", "assets/swiper-core--A90a6Da.js", "assets/index-CxjJ79Sp.css", "assets/index-Br6buqyE.js", "assets/index-5ORQaMhT.js", "assets/index-i1mNzDs3.css", "assets/comments-DScA704J.js", "assets/index-BXgsFmN9.js", "assets/use-infinite-list-2vdwlKi1.js", "assets/index-CgovajEv.css", "assets/index.vue_vue_type_script_setup_true_lang-l1uZhEAy.js", "assets/appicon-D3bEhSt6.js", "assets/index.vue_vue_type_script_setup_true_lang-DHOZgjtJ.js", "assets/compose-CJbPzCRG.js", "assets/draft-B2P50Qr-.js", "assets/letter-paper-LTI9Sf96.js", "assets/index-Bx9aFw8q.js", "assets/index.vue_vue_type_script_setup_true_lang-CXAsaRoP.js", "assets/custom-list-DIXDFSfD.js", "assets/shiftyspad-BUFWf30B.js", "assets/index.vue_vue_type_script_setup_true_lang-B670HyHc.js", "assets/play_icon-DnIwwxDf.js", "assets/icon-7sBVi1ua.js", "assets/index-C16hg5eE.css", "assets/index-DeRXgA6L.js", "assets/index-DjLMhXqd.css", "assets/index-Cxj03W9_.css", "assets/preview-DY8aV8oA.js", "assets/index-CKj6qh7r.js", "assets/use-compatible-Dk9-VURy.js", "assets/preview-5vuqGnfE.js", "assets/preview-Cb84qMpp.css", "assets/index-DK_6sHU1.css", "assets/index-DaAMKfLT.js", "assets/index-D1QDUEbr.js", "assets/draft-list.vue_vue_type_script_setup_true_lang-CRbAZrxs.js", "assets/index-DLDU6eU0.js", "assets/index.vue_vue_type_script_setup_true_lang-D3pZyLFn.js", "assets/creatorhub-DTEke_eQ.js", "assets/use-user-block-DeLrJqeR.js", "assets/default-cover-eDY9NOZb.js", "assets/index-CJIpzmAG.css", "assets/index-DMOnQEBw.js", "assets/index.vue_vue_type_script_setup_true_lang-c0tB3glx.js", "assets/index-B5Wv9CNn.js", "assets/index-hjgk7OQX.css", "assets/index-CvHnMJeQ.js", "assets/index-Cp6Z9ray.js", "assets/index-DUrIMVPV.js", "assets/index.vue_vue_type_script_setup_true_lang-L4-gxul-.js", "assets/index-C9zBTCEy.js", "assets/index.vue_vue_type_script_setup_true_lang-CrkuP6u5.js", "assets/index-DG17wFcM.js", "assets/index-C5hR9MuS.js", "assets/index-DzVM1-Ao.js", "assets/index-CIOP_pJ1.js", "assets/index-CnEWGkkG.css", "assets/index-fhwlKLhF.js", "assets/index-BHzTv1-I.js", "assets/index-VWmRBXHJ.js", "assets/index-D2AcC3AA.js", "assets/index-glRg4Lnh.js", "assets/index.vue_vue_type_script_setup_true_lang-BZEHNkqi.js", "assets/index-DW06h9g4.css", "assets/index-bwtBiUv6.js", "assets/laboratory-HkM0ulMG.js", "assets/index-BeKNqh_d.js", "assets/icon-facebook-pZVmwZ_c.js", "assets/index-DlgMsEkQ.js", "assets/index-DnxwekRT.js", "assets/index-B-n0cS6d.js", "assets/index.vue_vue_type_script_setup_true_lang-Bwl3mSV0.js", "assets/index-C7VpB1yd.js", "assets/index-DMEFmW2I.js", "assets/index-C6PvgrIj.js", "assets/index-BW2pmuvS.js", "assets/index-Am0tgXAD.css", "assets/index-C-jRt7z1.js", "assets/index-CWSCJCmL.js", "assets/index.vue_vue_type_style_index_0_lang-BS3tu2hC.js", "assets/index-Bc9fN1Lc.css", "assets/index-C_W0ttKS.css", "assets/App-Cn73EAEQ.js", "assets/card-item-Dwmri2wJ.js", "assets/equip-icon-kLdyOc88.js", "assets/weapon-slot-item-BoCvVTX-.js", "assets/weapon-slot-item-CjKmem-0.css", "assets/equip-icon-DGO-YQru.css", "assets/player-item-DBWtuCV3.js", "assets/player-item-CPdsWRty.css", "assets/card-item-BFAjqARe.css", "assets/UserBaseInfo.vue_vue_type_script_setup_true_lang-Bfm4NV6o.js", "assets/UserBaseInfo-DMoqAhzT.css", "assets/cv-0xyG50ox.js", "assets/nav-69XH5BWC.js", "assets/NoticePopup-BqN_7n0N.js", "assets/NoticePopup-Cv8yb5kG.css", "assets/App-D-ZdueaO.css", "assets/swiper-jrlR7SKN.css", "assets/index-DvcS8W3r.js", "assets/index-DXHLSS4X.css", "assets/index-MjuI4Ix7.js", "assets/swiper-vue-DZT9Ra_D.js", "assets/index.vue_vue_type_script_setup_true_lang-UWsTuMxr.js", "assets/voice-CFfQH4b6.js", "assets/index-DAHrfh9P.css", "assets/index-CUnFS7Bz.js", "assets/loading-BT1GyE33.js", "assets/index-BmM116-S.js", "assets/index-jXQxZ2Af.css", "assets/index-CNRY13SC.js", "assets/index-Dvo99PaZ.js", "assets/index-CjDdYl1h.js", "assets/scene-CGMNp53f.js", "assets/sudden-DuX57eld.js", "assets/archive-c5dtAjUR.js", "assets/index-FMqRB51B.css", "assets/index-YBezZucM.js", "assets/effect-coverflow-CIAZnwD8.js", "assets/index-DxfLyiwZ.css", "assets/index-8tc8p_-N.js", "assets/index-Dje5UE8B.css", "assets/index-BwQr1yjX.js", "assets/index-DC5i6R_H.css", "assets/index-CmUeOQ1S.js", "assets/index-SQbVjvI2.css", "assets/index-JyH2ZNmv.js", "assets/index-BQgRqgBa.css", "assets/401-B-ZI0YAR.js", "assets/index-CPQPlNCQ.js", "assets/creatorhub-CxAcxn4X.js", "assets/index-CeCi_mMq.js", "assets/index-BxWAFDUa.js", "assets/topic-default-BxqJs0Lr.js", "assets/index-Cgyh5gsR.css", "assets/index-BduM7EDc.js", "assets/index-Dab6UWoE.js", "assets/index-DSIV2d2_.js", "assets/index-Dg9DT5gi.js", "assets/index-CCF-pLc6.css", "assets/index-Dd1m9Man.js", "assets/index-DihZEot2.js", "assets/index-CnElGHKw.css", "assets/bind-B2jRcjNv.js", "assets/apply-CZ1-_StJ.js", "assets/records-DQSRH4RU.js", "assets/index-D10Iss-7.js", "assets/detail-RFXndni0.js", "assets/groups-CmBOP4bP.js", "assets/index-CUvnoO7_.js", "assets/calendar-04BZ22cs.js", "assets/index-BHT8tDfj.css", "assets/subscibe-uD8sANfn.js", "assets/index-C0c31ReJ.js", "assets/index-CBDVt_cL.css", "assets/not-found-Cl7-kkfg.js", "assets/login-tips-DFWrMFtW.js", "assets/index-CCnFl2aO.js", "assets/service-workder-refresh-prompt-BZ_WmnsD.js", "assets/service-workder-refresh-prompt-y2zUJPVc.css", "assets/index-DTy6aJFv.js", "assets/vconsole.min-CEPe-Tm_.js", "assets/quill-CMPsr2Ab.css", "assets/quill-C413rZQi.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}