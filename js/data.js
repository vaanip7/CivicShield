// Mock incident data — replace with a real API/feed call when wiring up a backend.
const incidents = [
  {id:'INC-1042', hazard:'Tilting electric pole', icon:'⚡', sev:'Critical', loc:'Rajpur Rd, Dehradun', dept:'Electricity Board', status:'Assigned', conf:96, time:'6 min ago', desc:'Pole leaning ~18° from vertical over a footpath near a school gate, following heavy overnight rain.', stage:3},
  {id:'INC-1041', hazard:'Hanging live wire', icon:'⚡', sev:'Critical', loc:'Clock Tower, Dehradun', dept:'Electricity Board', status:'In progress', conf:98, time:'22 min ago', desc:'Snapped conductor hanging over a market lane, high foot traffic detected in frame.', stage:4},
  {id:'INC-1039', hazard:'Waterlogging', icon:'🌊', sev:'High', loc:'Haridwar Bypass, Haldwani', dept:'PWD', status:'Detected', conf:91, time:'34 min ago', desc:'Standing water covering a full carriageway lane near a low-lying underpass.', stage:1},
  {id:'INC-1037', hazard:'Fallen tree', icon:'🌳', sev:'High', loc:'Rajpur–Mussoorie Rd', dept:'Forest Dept', status:'Assigned', conf:94, time:'51 min ago', desc:'Tree down across one lane after overnight wind, partially blocking the hill route.', stage:3},
  {id:'INC-1035', hazard:'Damaged guardrail', icon:'🚧', sev:'Medium', loc:'Rishikesh–Badrinath Rd', dept:'PWD', status:'In progress', conf:87, time:'1 hr ago', desc:'Guardrail section buckled at a hairpin bend, no active blockage.', stage:4},
  {id:'INC-1033', hazard:'Waterlogging', icon:'🌊', sev:'Medium', loc:'Kathgodam Rd, Haldwani', dept:'PWD', status:'Resolved', conf:89, time:'2 hr ago', desc:'Drain overflow cleared after municipal pump deployment.', stage:6},
  {id:'INC-1030', hazard:'Tilting electric pole', icon:'⚡', sev:'High', loc:'Sahastradhara Rd, Dehradun', dept:'Electricity Board', status:'Resolved', conf:93, time:'4 hr ago', desc:'Pole straightened and re-anchored, verified with after-photo and GPS match.', stage:6},
  {id:'INC-1028', hazard:'Fallen tree', icon:'🌳', sev:'Medium', loc:'Chakrata Rd, Dehradun', dept:'Forest Dept', status:'Resolved', conf:90, time:'6 hr ago', desc:'Branch cleared from shoulder, road fully reopened.', stage:6}
];

const sevClass = {Critical:'critical', High:'high', Medium:'medium'};
