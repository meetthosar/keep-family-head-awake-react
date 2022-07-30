// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1],
      5: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function _Family_keepHeadAwake5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_keepHeadAwake5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc2,
    Thieves_robTheTime0_54: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v333, v336, v349, v350, v358, v371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v375 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:43:72:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:46:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'in',
    who: 'Family_keepHeadAwake'
    });
  const v377 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:48:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v377, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:48:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:47:10:application call to [unknown function] (defined at: ./index.rsh:47:10:function exp)', 'at ./index.rsh:43:72:application call to "runFamily_keepHeadAwake0_54" (defined at: ./index.rsh:46:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Time is up',
    who: 'Family_keepHeadAwake'
    });
  const v381 = ['Family_keepHeadAwake0_54', v375];
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v336, v349, v350, v358, v371, v381],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [v336, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v398], secs: v400, time: v399, didSend: v213, from: v397 } = txn1;
      
      switch (v398[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v401 = v398[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Family_keepHeadAwake"
            });
          const v408 = stdlib.add(v358, v336);
          sim_r.txns.push({
            amt: v336,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v410 = true;
          const v411 = await txn1.getOutput('Family_keepHeadAwake', 'v410', ctc4, v410);
          
          const v416 = stdlib.add(v350, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
          const v418 = stdlib.gt(v416, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
          const v757 = v349;
          const v758 = v416;
          const v760 = v408;
          if (v418) {
            const v761 = stdlib.add(v399, v416);
            const v762 = stdlib.add(v399, v761);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v434 = v398[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v398], secs: v400, time: v399, didSend: v213, from: v397 } = txn1;
  switch (v398[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v401 = v398[1];
      undefined /* setApiDetails */;
      const v408 = stdlib.add(v358, v336);
      ;
      const v410 = true;
      const v411 = await txn1.getOutput('Family_keepHeadAwake', 'v410', ctc4, v410);
      if (v213) {
        stdlib.protect(ctc5, await interact.out(v401, v411), {
          at: './index.rsh:46:10:application',
          fs: ['at ./index.rsh:46:10:application call to [unknown function] (defined at: ./index.rsh:46:10:function exp)', 'at ./index.rsh:52:10:application call to "k" (defined at: ./index.rsh:51:11:function exp)', 'at ./index.rsh:51:11:application call to [unknown function] (defined at: ./index.rsh:51:11:function exp)'],
          msg: 'out',
          who: 'Family_keepHeadAwake'
          });
        }
      else {
        }
      
      const v416 = stdlib.add(v350, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
      const v418 = stdlib.gt(v416, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
      const v757 = v349;
      const v758 = v416;
      const v760 = v408;
      if (v418) {
        const v761 = stdlib.add(v399, v416);
        const v762 = stdlib.add(v399, v761);
        return;
        }
      else {
        return;
        }
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v434 = v398[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Family_timesUp5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Family_timesUp5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Family_timesUp5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Null;
  
  
  const [v333, v336, v349, v350, v358, v371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v469 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:68:7:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:67:60:application call to [unknown function] (defined at: ./index.rsh:67:60:function exp)'],
    msg: 'in',
    who: 'Family_timesUp'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v336, v349, v350, v358, v371, v469],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:68:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v471], secs: v473, time: v472, didSend: v270, from: v470 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Family_timesUp"
        });
      ;
      const v474 = null;
      const v475 = await txn1.getOutput('Family_timesUp', 'v474', ctc3, v474);
      
      const v479 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
      const v791 = v349;
      const v792 = v350;
      const v794 = v358;
      if (v479) {
        const v795 = stdlib.add(v472, v350);
        const v796 = stdlib.add(v472, v795);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v471], secs: v473, time: v472, didSend: v270, from: v470 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v474 = null;
  const v475 = await txn1.getOutput('Family_timesUp', 'v474', ctc3, v474);
  stdlib.protect(ctc3, await interact.out(v471, v475), {
    at: './index.rsh:68:7:application',
    fs: ['at ./index.rsh:68:7:application call to [unknown function] (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:69:8:application call to "k" (defined at: ./index.rsh:68:7:function exp)', 'at ./index.rsh:67:60:application call to [unknown function] (defined at: ./index.rsh:67:60:function exp)'],
    msg: 'out',
    who: 'Family_timesUp'
    });
  
  const v479 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
  const v791 = v349;
  const v792 = v350;
  const v794 = v358;
  if (v479) {
    const v795 = stdlib.add(v472, v350);
    const v796 = stdlib.add(v472, v795);
    return;
    }
  else {
    return;
    }
  
  
  };
export async function HeadOfFamily(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for HeadOfFamily expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for HeadOfFamily expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([]);
  const ctc2 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc1,
    Thieves_robTheTime0_54: ctc1
    });
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Object({
    thief1: ctc5,
    thief2: ctc5
    });
  
  
  const v328 = stdlib.protect(ctc0, interact.boughtTime, 'for HeadOfFamily\'s interact field boughtTime');
  const v329 = stdlib.protect(ctc0, interact.initialStakes, 'for HeadOfFamily\'s interact field initialStakes');
  const v330 = stdlib.protect(ctc0, interact.wakeUpFee, 'for HeadOfFamily\'s interact field wakeUpFee');
  
  const txn1 = await (ctc.sendrecv({
    args: [v329, v328, v330],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:8:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v334, v335, v336], secs: v338, time: v337, didSend: v31, from: v333 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v334, v335, v336], secs: v338, time: v337, didSend: v31, from: v333 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v333, v334, v335, v336],
    evt_cnt: 0,
    funcNum: 1,
    lct: v337,
    onlyIf: true,
    out_tys: [],
    pay: [v334, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v341, time: v340, didSend: v38, from: v339 } = txn2;
      
      sim_r.txns.push({
        amt: v334,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v348 = true;
      const v349 = stdlib.checkedBigNumberify('./index.rsh:43:96:decimal', stdlib.UInt_max, '0');
      const v350 = v335;
      const v351 = v340;
      const v358 = v334;
      
      if (await (async () => {
        
        return v348;})()) {
        const v364 = stdlib.add(v351, v350);
        const v371 = stdlib.add(v351, v364);
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v341, time: v340, didSend: v38, from: v339 } = txn2;
  ;
  const v344 = stdlib.addressEq(v333, v339);
  stdlib.assert(v344, {
    at: './index.rsh:36:8:dot',
    fs: [],
    msg: 'sender correct',
    who: 'HeadOfFamily'
    });
  let v348 = true;
  let v349 = stdlib.checkedBigNumberify('./index.rsh:43:96:decimal', stdlib.UInt_max, '0');
  let v350 = v335;
  let v351 = v340;
  let v358 = v334;
  
  while (await (async () => {
    
    return v348;})()) {
    const v364 = stdlib.add(v351, v350);
    const v371 = stdlib.add(v351, v364);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc2],
      timeoutAt: ['time', v371],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc1],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v471], secs: v473, time: v472, didSend: v270, from: v470 } = txn4;
      undefined /* setApiDetails */;
      ;
      const v474 = null;
      await txn4.getOutput('Family_timesUp', 'v474', ctc4, v474);
      const v479 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:70:30:decimal', stdlib.UInt_max, '0'));
      const cv348 = v479;
      const cv349 = v349;
      const cv350 = v350;
      const cv351 = v472;
      const cv358 = v358;
      
      v348 = cv348;
      v349 = cv349;
      v350 = cv350;
      v351 = cv351;
      v358 = cv358;
      
      continue;
      }
    else {
      const {data: [v398], secs: v400, time: v399, didSend: v213, from: v397 } = txn3;
      switch (v398[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v401 = v398[1];
          undefined /* setApiDetails */;
          const v408 = stdlib.add(v358, v336);
          ;
          const v410 = true;
          await txn3.getOutput('Family_keepHeadAwake', 'v410', ctc3, v410);
          const v416 = stdlib.add(v350, stdlib.checkedBigNumberify('./index.rsh:53:25:decimal', stdlib.UInt_max, '1'));
          const v418 = stdlib.gt(v416, stdlib.checkedBigNumberify('./index.rsh:53:41:decimal', stdlib.UInt_max, '0'));
          const cv348 = v418;
          const cv349 = v349;
          const cv350 = v416;
          const cv351 = v399;
          const cv358 = v408;
          
          v348 = cv348;
          v349 = cv349;
          v350 = cv350;
          v351 = cv351;
          v358 = cv358;
          
          continue;
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v434 = v398[1];
          undefined /* setApiDetails */;
          ;
          const v455 = true;
          await txn3.getOutput('Thieves_robTheTime', 'v455', ctc3, v455);
          stdlib.protect(ctc4, await interact.sendThief(v397), {
            at: './index.rsh:64:36:application',
            fs: ['at ./index.rsh:64:36:application call to [unknown function] (defined at: ./index.rsh:64:36:function exp)', 'at ./index.rsh:64:36:application call to "liftedInteract" (defined at: ./index.rsh:64:36:application)', 'at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)'],
            msg: 'sendThief',
            who: 'HeadOfFamily'
            });
          
          const v462 = stdlib.sub(v350, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '4'));
          const v464 = stdlib.gt(v462, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
          const v465 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
          const cv348 = v464;
          const cv349 = v465;
          const cv350 = v462;
          const cv351 = v399;
          const cv358 = v358;
          
          v348 = cv348;
          v349 = cv349;
          v350 = cv350;
          v351 = cv351;
          v358 = cv358;
          
          continue;
          break;
          }
        }}
    
    }
  const v484 = stdlib.protect(ctc6, await interact.getThieves(), {
    at: './index.rsh:76:53:application',
    fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:19:function exp)'],
    msg: 'getThieves',
    who: 'HeadOfFamily'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v333, v358, v484],
    evt_cnt: 1,
    funcNum: 3,
    lct: v351,
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./index.rsh:79:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v488], secs: v490, time: v489, didSend: v290, from: v487 } = txn3;
      
      ;
      const v500 = stdlib.div(v358, stdlib.checkedBigNumberify('./index.rsh:85:26:decimal', stdlib.UInt_max, '2'));
      const v501 = v488.thief1;
      const v505 = stdlib.sub(v358, v500);
      sim_r.txns.push({
        kind: 'from',
        to: v501,
        tok: undefined /* Nothing */
        });
      const v507 = v488.thief2;
      sim_r.txns.push({
        kind: 'from',
        to: v507,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc0, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v488], secs: v490, time: v489, didSend: v290, from: v487 } = txn3;
  ;
  const v491 = stdlib.addressEq(v333, v487);
  stdlib.assert(v491, {
    at: './index.rsh:79:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'HeadOfFamily'
    });
  const v500 = stdlib.div(v358, stdlib.checkedBigNumberify('./index.rsh:85:26:decimal', stdlib.UInt_max, '2'));
  const v501 = v488.thief1;
  const v505 = stdlib.sub(v358, v500);
  ;
  const v507 = v488.thief2;
  ;
  return;
  
  
  
  
  
  
  };
export async function _Thieves_robTheTime5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Thieves_robTheTime5 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Tuple([]);
  const ctc3 = stdlib.T_Data({
    Family_keepHeadAwake0_54: ctc2,
    Thieves_robTheTime0_54: ctc2
    });
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Null;
  
  
  const [v333, v336, v349, v350, v358, v371] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1]);
  const v385 = stdlib.protect(ctc2, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'in',
    who: 'Thieves_robTheTime'
    });
  const v387 = stdlib.gt(v350, stdlib.checkedBigNumberify('./index.rsh:58:24:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v387, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:58:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Add time should be greter than zero',
    who: 'Thieves_robTheTime'
    });
  const v389 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:59:30:decimal', stdlib.UInt_max, '2'));
  stdlib.assert(v389, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:59:16:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:57:12:application call to [unknown function] (defined at: ./index.rsh:57:12:function exp)', 'at ./index.rsh:43:72:application call to "runThieves_robTheTime0_54" (defined at: ./index.rsh:56:9:function exp)', 'at ./index.rsh:43:72:application call to [unknown function] (defined at: ./index.rsh:43:72:function exp)'],
    msg: 'Thieves should not be greater than 2',
    who: 'Thieves_robTheTime'
    });
  const v393 = ['Thieves_robTheTime0_54', v385];
  
  const txn1 = await (ctc.sendrecv({
    args: [v333, v336, v349, v350, v358, v371, v393],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:61:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v398], secs: v400, time: v399, didSend: v213, from: v397 } = txn1;
      
      switch (v398[0]) {
        case 'Family_keepHeadAwake0_54': {
          const v401 = v398[1];
          
          break;
          }
        case 'Thieves_robTheTime0_54': {
          const v434 = v398[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Thieves_robTheTime"
            });
          ;
          const v455 = true;
          const v456 = await txn1.getOutput('Thieves_robTheTime', 'v455', ctc4, v455);
          
          const v462 = stdlib.sub(v350, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '4'));
          const v464 = stdlib.gt(v462, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
          const v465 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
          const v825 = v465;
          const v826 = v462;
          const v828 = v358;
          if (v464) {
            const v829 = stdlib.add(v399, v462);
            const v830 = stdlib.add(v399, v829);
            sim_r.isHalt = false;
            }
          else {
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v398], secs: v400, time: v399, didSend: v213, from: v397 } = txn1;
  switch (v398[0]) {
    case 'Family_keepHeadAwake0_54': {
      const v401 = v398[1];
      return;
      break;
      }
    case 'Thieves_robTheTime0_54': {
      const v434 = v398[1];
      undefined /* setApiDetails */;
      ;
      const v455 = true;
      const v456 = await txn1.getOutput('Thieves_robTheTime', 'v455', ctc4, v455);
      if (v213) {
        stdlib.protect(ctc5, await interact.out(v434, v456), {
          at: './index.rsh:56:10:application',
          fs: ['at ./index.rsh:56:10:application call to [unknown function] (defined at: ./index.rsh:56:10:function exp)', 'at ./index.rsh:63:12:application call to "k" (defined at: ./index.rsh:62:13:function exp)', 'at ./index.rsh:62:13:application call to [unknown function] (defined at: ./index.rsh:62:13:function exp)'],
          msg: 'out',
          who: 'Thieves_robTheTime'
          });
        }
      else {
        }
      
      const v462 = stdlib.sub(v350, stdlib.checkedBigNumberify('./index.rsh:65:28:decimal', stdlib.UInt_max, '4'));
      const v464 = stdlib.gt(v462, stdlib.checkedBigNumberify('./index.rsh:65:45:decimal', stdlib.UInt_max, '0'));
      const v465 = stdlib.add(v349, stdlib.checkedBigNumberify('./index.rsh:65:72:decimal', stdlib.UInt_max, '1'));
      const v825 = v465;
      const v826 = v462;
      const v828 = v358;
      if (v464) {
        const v829 = stdlib.add(v399, v462);
        const v830 = stdlib.add(v399, v829);
        return;
        }
      else {
        return;
        }
      break;
      }
    }
  
  
  };
export async function Family_keepHeadAwake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Family_keepHeadAwake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Family_keepHeadAwake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Family_keepHeadAwake5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Family_timesUp(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Family_timesUp expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Family_timesUp5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Thieves_robTheTime(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Thieves_robTheTime expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Thieves_robTheTime5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`],
    pure: [],
    sigs: [`Family_keepHeadAwake()byte`, `Family_timesUp()byte[0]`, `Thieves_robTheTime()byte`]
    },
  appApproval: `BiAOAAEFIAMwKAjYq/S0A8G09ukPBEA4AiYDAQAAAQEiNQAxGEEDPClkSSJbNQEhB1s1AjYaABdJQQA8IjUEIzUGSSEIDEAAHUkhCQxAAA4hCRJEKTX/KDT/UEIAnSEIEkQpQgA2gcTpwpgDEkQpNf8qNP9QQgCDNhoCFzUENhoDNhoBF0khBAxAAX9JIQoMQAESSSQMQABhJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDIQVbNf9JNQU1/oAEaJJkYzT+ULAyBjQDIQtbD0SACAAAAAAAAAHasCk1BzQDVwAgNAMlWzT/Ig00AyEGWzT/MgY0AyEMW0IBvkgkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBls1/SEFWzX8IQxbNftJNQU1+oAErnvUBjT6ULAyBjQDIQtbDEQ0+iJVQAAwNP6IAjOACQAAAAAAAAGaAbAqNQc0/CMINfk0/zT+NPkiDTT9NPkyBjT7NP4IQgE+gAkAAAAAAAABxwGwKjUHNPwhCgk1+TT/NP40+SINNP0jCDT5MgY0+0IBE0ghBDQBEkQ0BEkiEkw0AhIRRChkSTUDJVs1/0k1BTX+gAQixJS3NP5QsDQDVwAgMQASRDT/IQ0KNf2xIrIBNP2yCCOyEDT+VwAgsgezsSKyATT/NP0JsggjshA0/lcgILIHs0IBCkkjDEAASSMSRCM0ARJENARJIhJMNAISEUQoZEk1A0lXACA1/yVbNf6ABJqLkXSwNP6IAUM0/zEAEkQ0/zQDIQVbIyI0AyEGWzIGNP5CAF5IgaCNBogBICI0ARJENARJIhJMNAISEURJNQVJSSJbNf8hB1s1/oEQWzX9gAT3cRNNNP8WUDT+FlA0/RZQsDEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB4Nf81/jX9Nfw1+zX6Nfk0+0EAMTT+STT9CAg1+DT5NPoWUDT8FlA0/RZQNP8WUDT4FlAoSwFXAEhnSCQ1ATIGNQJCADQ0+TT/FlAoSwFXAChnSCEENQEyBjUCQgAbMRkkEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQ0xNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 72,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v334",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v335",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v336",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_thief1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_thief2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v488",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Family_keepHeadAwake0_54",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thieves_robTheTime0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v398",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v471",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v410",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v455",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v474",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Family_keepHeadAwake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Family_timesUp",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Thieves_robTheTime",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_thief1",
                    "type": "address"
                  },
                  {
                    "internalType": "address payable",
                    "name": "_thief2",
                    "type": "address"
                  }
                ],
                "internalType": "struct T10",
                "name": "v488",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T14",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Family_keepHeadAwake0_54",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Thieves_robTheTime0_54",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T14",
                "name": "v398",
                "type": "tuple"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v471",
                "type": "bool"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200186138038062001861833981016040819052620000269162000255565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a162000095341560076200014e565b620000ca604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014592600292019062000178565b50505062000329565b81620001745760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018690620002ec565b90600052602060002090601f016020900481019282620001aa5760008555620001f5565b82601f10620001c557805160ff1916838001178555620001f5565b82800160010185558215620001f5579182015b82811115620001f5578251825591602001919060010190620001d8565b506200020392915062000207565b5090565b5b8082111562000203576000815560010162000208565b604051606081016001600160401b03811182821017156200024f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200026957600080fd5b604080519081016001600160401b03811182821017156200029a57634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002b457600080fd5b620002be6200021e565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030157607f821691505b602082108114156200032357634e487b7160e01b600052602260045260246000fd5b50919050565b61152880620003396000396000f3fe60806040526004361061008f5760003560e01c8063a6b45d4611610056578063a6b45d461461010f578063ab53f2c614610122578063ad9fa3d814610145578063ae23d73d14610158578063c3bdadcd1461016057005b806308d57599146100985780631e93b0f1146100b55780632c10a159146100d457806336054e53146100e757806383230757146100fa57005b3661009657005b005b6100a0610168565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506003545b6040519081526020016100ac565b6100966100e2366004610f9c565b6101a6565b6100966100f5366004610fbf565b6101df565b34801561010657600080fd5b506001546100c6565b61009661011d366004610fd1565b610214565b34801561012e57600080fd5b50610137610249565b6040516100ac929190610fe3565b610096610153366004610f9c565b6102e6565b6100a061031b565b6100a0610360565b6000610172610df0565b602081810151516000908190526040805160608101825282815292830182905282015261019f82826103a0565b5192915050565b60408051606081018252600080825260208201819052918101919091526101db6101d5368490038401846110d3565b826106c6565b5050565b60408051606081018252600080825260208201819052918101919091526101db61020e36849003840184611109565b826103a0565b60408051606081018252600080825260208201819052918101919091526101db610243368490038401846111d4565b8261086a565b60006060600054600280805461025e9061124e565b80601f016020809104026020016040519081016040528092919081815260200182805461028a9061124e565b80156102d75780601f106102ac576101008083540402835291602001916102d7565b820191906000526020600020905b8154815290600101906020018083116102ba57829003601f168201915b50505050509050915091509091565b60408051606081018252600080825260208201819052918101919091526101db61031536849003840184611283565b82610a8e565b6000610325610df0565b60208181015151600190526040805160608101825260008082529281018390529081019190915261035682826103a0565b6040015192915050565b600061036a610e2e565b602081810151600090819052604080516060810182528281529283018290528201526103968282610a8e565b6020015192915050565b6103b06005600054146012610c68565b81516103cb9015806103c457508251600154145b6013610c68565b6000808055600280546103dd9061124e565b80601f01602080910402602001604051908101604052809291908181526020018280546104099061124e565b80156104565780601f1061042b57610100808354040283529160200191610456565b820191906000526020600020905b81548152906001019060200180831161043957829003601f168201915b505050505080602001905181019061046e91906112db565b905061048d604051806040016040528060008152602001600081525090565b61049e8260a0015143106014610c68565b7f4208286ebb06b5ded256694c66572f0ecc8422f937c57e9c5c3c3930244f3db833856040516104cf92919061136c565b60405180910390a160006020850151515160018111156104f1576104f1611040565b14156105cf57610508826020015134146010610c68565b604051600181527f76c5b89fe6878e2cc7066ecd482f8ee959d39f7130905c2935e0b1d3a043af3d9060200160405180910390a16001808452606083015161055091906113ea565b815261055a610e58565b825181516001600160a01b0390911690526020808401805183518301528351828401805191151590915260408087015182519094019390935284518151909301929092529051436060909101525160808401516105b791906113ea565b6020820151608001526105c981610c8d565b506106c0565b60016020850151515160018111156105e9576105e9611040565b14156106c0576105fb34156011610c68565b604051600181527f0508272cd8ae0cc2f33dd508ad59877ceab76d044a7ed4dc03ae282ee695bc069060200160405180910390a160016040840152606082015161064790600490611402565b6020820152610654610e58565b825181516001600160a01b039091169052602080840151825182015282810151908201519015159052604083015161068e906001906113ea565b60208083018051820192909252830151815160400152805143606090910152608080850151915101526105c981610c8d565b50505050565b6106d6600160005414600a610c68565b81516106f19015806106ea57508251600154145b600b610c68565b6000808055600280546107039061124e565b80601f016020809104026020016040519081016040528092919081815260200182805461072f9061124e565b801561077c5780601f106107515761010080835404028352916020019161077c565b820191906000526020600020905b81548152906001019060200180831161075f57829003601f168201915b50505050508060200190518101906107949190611419565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16107f0816020015134146008610c68565b8051610808906001600160a01b031633146009610c68565b610810610e58565b815181516001600160a01b039091169052606080830151825160209081019190915280830180516001905280516000908301526040808601518251909101528051439301929092528301519051608001526106c081610c8d565b61087a600360005414600e610c68565b815161089590158061088e57508251600154145b600f610c68565b6000808055600280546108a79061124e565b80601f01602080910402602001604051908101604052809291908181526020018280546108d39061124e565b80156109205780601f106108f557610100808354040283529160200191610920565b820191906000526020600020905b81548152906001019060200180831161090357829003601f168201915b50505050508060200190518101906109389190611496565b90506109506040518060200160405280600081525090565b604080513381528551602080830191909152808701515180516001600160a01b039081168486015291015116606082015290517f7a795ca12ed6a7000cb93ed9c6e7ea8da0bf23c85134e134d824a710bc906daa9181900360800190a16109b93415600c610c68565b81516109d1906001600160a01b03163314600d610c68565b600282602001516109e291906114d0565b808252602085015151516040516001600160a01b039091169180156108fc02916000818181858888f19350505050158015610a21573d6000803e3d6000fd5b50836020015160000151602001516001600160a01b03166108fc82600001518460200151610a4f9190611402565b6040518115909202916000818181858888f19350505050158015610a77573d6000803e3d6000fd5b50600080805560018190556106c090600290610eae565b610a9e6005600054146016610c68565b8151610ab9901580610ab257508251600154145b6017610c68565b600080805560028054610acb9061124e565b80601f0160208091040260200160405190810160405280929190818152602001828054610af79061124e565b8015610b445780601f10610b1957610100808354040283529160200191610b44565b820191906000526020600020905b815481529060010190602001808311610b2757829003601f168201915b5050505050806020019051810190610b5c91906112db565b9050610b708160a001514310156018610c68565b6040805133815284516020808301919091528501515115158183015290517f663356c9bc60432e38c96f881aa1e2828a9a5648f65169c66c8c7722e9c213659181900360600190a1610bc434156015610c68565b604051600081527f051b14db94aa1be0640f68e3e89ec8e5feeb3fa71319c10c5b384d190561025c9060200160405180910390a160006020830152610c07610e58565b815181516001600160a01b03909116905260208083015182518201526060808401805183850180519115159091526040808701518251909501949094529051815190930192909252815143910152608080840151915101526106c081610c8d565b816101db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515115610d9d5760208201516040810151606090910151610cc191906113ea565b826020015160600151610cd491906113ea565b81526040805160c08082018352600080835260208084018281528486018381526060808701858152608080890187815260a0808b018981528e51516001600160a01b0316808d528f518a015189528f8a0180518b0151895280518f015187525185015184528e5182526005909a55436001558c519889019990995295519a87019a909a52925191850191909152519083015294519481019490945251908301529060e0015b604051602081830303815290604052600290805190602001906106c0929190610eeb565b604080518082018252600080825260208083018281528651516001600160a01b03168085528783015160800151825260039093554360015584519182019290925290519281019290925290606001610d79565b604051806040016040528060008152602001610e2960408051608081018252600060208201818152928201819052606082015290815290565b905290565b604051806040016040528060008152602001610e2960405180602001604052806000151581525090565b60408051608081018252600091810182815260608201929092529081908152602001610e296040518060a00160405280600015158152602001600081526020016000815260200160008152602001600081525090565b508054610eba9061124e565b6000825580601f10610eca575050565b601f016020900490600052602060002090810190610ee89190610f6f565b50565b828054610ef79061124e565b90600052602060002090601f016020900481019282610f195760008555610f5f565b82601f10610f3257805160ff1916838001178555610f5f565b82800160010185558215610f5f579182015b82811115610f5f578251825591602001919060010190610f44565b50610f6b929150610f6f565b5090565b5b80821115610f6b5760008155600101610f70565b600060408284031215610f9657600080fd5b50919050565b600060408284031215610fae57600080fd5b610fb88383610f84565b9392505050565b600060808284031215610f9657600080fd5b600060608284031215610f9657600080fd5b82815260006020604081840152835180604085015260005b8181101561101757858101830151858201606001528201610ffb565b81811115611029576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052602160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561108757634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff8111828210171561108757634e487b7160e01b600052604160045260246000fd5b803580151581146110ce57600080fd5b919050565b6000604082840312156110e557600080fd5b6110ed611056565b823581526110fd602084016110be565b60208201529392505050565b6000818303608081121561111c57600080fd5b611124611056565b833581526060601f198301121561113a57600080fd5b61114261108d565b91506040516060810181811067ffffffffffffffff8211171561117557634e487b7160e01b600052604160045260246000fd5b60405260208501356002811061118a57600080fd5b8152611198604086016110be565b60208201526111a9606086016110be565b6040820152825260208101919091529392505050565b6001600160a01b0381168114610ee857600080fd5b600081830360608112156111e757600080fd5b6111ef611056565b833581526040601f198301121561120557600080fd5b61120d61108d565b9150611217611056565b6020850135611225816111bf565b81526040850135611235816111bf565b6020828101919091529083528101919091529392505050565b600181811c9082168061126257607f821691505b60208210811415610f9657634e487b7160e01b600052602260045260246000fd5b6000818303604081121561129657600080fd5b61129e611056565b833581526020601f19830112156112b457600080fd5b6112bc61108d565b91506112ca602085016110be565b825260208101919091529392505050565b600060c082840312156112ed57600080fd5b60405160c0810181811067ffffffffffffffff8211171561131e57634e487b7160e01b600052604160045260246000fd5b604052825161132c816111bf565b808252506020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6001600160a01b0383168152815160208083019190915282015151805160a083019190600281106113ad57634e487b7160e01b600052602160045260246000fd5b80604085015250602081015115156060840152604081015115156080840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113fd576113fd6113d4565b500190565b600082821015611414576114146113d4565b500390565b60006080828403121561142b57600080fd5b6040516080810181811067ffffffffffffffff8211171561145c57634e487b7160e01b600052604160045260246000fd5b604052825161146a816111bf565b808252506020830151602082015260408301516040820152606083015160608201528091505092915050565b6000604082840312156114a857600080fd5b6114b0611056565b82516114bb816111bf565b81526020928301519281019290925250919050565b6000826114ed57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212205a7bea63b21735c65d86e90a95dcc2902e072da2dd6e9acc40dfe9cae817ca2564736f6c634300080c0033`,
  BytecodeLen: 6241,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:73:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:89:14:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:43:72:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Family_keepHeadAwake": Family_keepHeadAwake,
  "Family_timesUp": Family_timesUp,
  "HeadOfFamily": HeadOfFamily,
  "Thieves_robTheTime": Thieves_robTheTime
  };
export const _APIs = {
  Family: {
    keepHeadAwake: Family_keepHeadAwake,
    timesUp: Family_timesUp
    },
  Thieves: {
    robTheTime: Thieves_robTheTime
    }
  };
