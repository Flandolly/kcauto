import React from 'react'
import * as urls from 'urls'

export const en = {
  label: 'English',
  bodyConfig: {
    generalHeader: 'General',
    generalProgram: 'Program',
    generalProgramDesc: 'Program that Kantai Collection is running in (ex: Chrome)',
    generalJSTOffset: 'JST Offset',
    generalJSTOffsetDesc: 'Hours offset from JST',
    generalPause: 'Pause kcauto',
    generalPauseTrue: 'Paused',
    generalPauseFalse: 'Not Paused',
    scheduledSleepHeader: 'Scheduled Sleep',
    scheduledSleepScriptSleepEnabled: 'Enable kcauto Sleep',
    scheduledSleepScriptSleepStartTime: 'kcauto Sleep Start Time',
    scheduledSleepScriptSleepLength: 'kcauto Sleep Length',
    scheduledSleepExpeditionSleepEnabled: 'Enable Expedition Sleep',
    scheduledSleepExpeditionSleepStartTime: 'Expedition Sleep Start Time',
    scheduledSleepExpeditionSleepLength: 'Expedition Sleep Length',
    scheduledSleepCombatSleepEnabled: 'Enable Combat Sleep',
    scheduledSleepCombatSleepStartTime: 'Combat Sleep Start Time',
    scheduledSleepCombatSleepLength: 'Combat Sleep Length',
    scheduledStopHeader: 'Scheduled Stop',
    scheduledStopScriptStopEnabled: 'Enable kcauto Stop',
    scheduledStopScriptStopCount: 'kcauto Stop Hours',
    scheduledStopScriptStopTime: 'kcauto Stop Time',
    scheduledStopExpeditionStopEnabled: 'Enable Expedition Stop',
    scheduledStopExpeditionStopMode: 'Expedition Stop Mode',
    scheduledStopExpeditionStopCount: 'Expedition Stop Count',
    scheduledStopExpeditionStopTime: 'Expedition Stop Time',
    scheduledStopCombatStopEnabled: 'Enable Combat Stop',
    scheduledStopCombatStopMode: 'Combat Stop Mode',
    scheduledStopCombatStopCount: 'Combat Stop Count',
    scheduledStopCombatStopTime: 'Combat Stop Time',
    scheduledStopStopModeModule: 'Stop Module',
    scheduledStopStopModeScript: 'Stop kcauto',
    expeditionsHeader: 'Expeditions',
    expeditionsFleet2: 'Fleet 2',
    expeditionsFleet3: 'Fleet 3',
    expeditionsFleet4: 'Fleet 4',
    pvpHeader: 'PvP',
    pvpFleet: 'PvP Fleet Preset',
    pvpFleetDesc: 'The fleet preset, as ordered on the fleet preset recall screen, to use for PvP',
    combatHeader: 'Combat',
    combatEngine: 'Engine',
    combatEngineLegacy: 'legacy: per-node definition of formations and night battles / low CPU use',
    combatEngineLive: 'live: auto node detection with optional formation and night battle overrides / high CPU use',
    combatFleets: 'Combat Fleet Presets',
    combatFleetsDesc: 'The fleet presets, as they are ordered on the fleet preset recall screen, to cycle through',
    combatMap: 'Map',
    combatFleetMode: 'Fleet Mode',
    combatFleetModeStandard: 'Standard',
    combatFleetModeCTF: 'CTF',
    combatFleetModeSTF: 'STF',
    combatFleetModeTransport: 'Transport',
    combatFleetModeStriking: 'Striking',
    combatRetreatNodes: 'Combat Node Count and Retreat Nodes',
    combatNodeSelect1: 'If at this Node...',
    combatNodeSelect2: '...select this Node',
    combatNodeSelectAdd: 'Add',
    combatNodeSelects: 'All Node Selects',
    combatCustomFormation1: 'If at this Node...',
    combatCustomFormation2: '...select this Formation',
    combatCustomFormationAdd: 'Add',
    combatCustomFormations: 'All Specified Formations',
    combatFormationLineAhead: 'Line Ahead',
    combatFormationDoubleLine: 'Double Line',
    combatFormationDiamond: 'Diamond',
    combatFormationEchelon: 'Echelon',
    combatFormationLineAbreast: 'Line Abreast',
    combatFormationVanguard: 'Vanguard',
    combatFormationCombinedFleet1: 'Combined Fleet 1',
    combatFormationCombinedFleet2: 'Combined Fleet 2',
    combatFormationCombinedFleet3: 'Combined Fleet 3',
    combatFormationCombinedFleet4: 'Combined Fleet 4',
    combatCustomNightBattle1: 'If at this Node...',
    combatCustomNightBattle2: '...select Night Battle',
    combatCustomNightBattleAdd: 'Add',
    combatCustomNightBattles: 'All Night Battles',
    combatNightBattleTrue: 'True',
    combatNightBattleFalse: 'False',
    combatDamageStateHeavy: 'Heavy',
    combatDamageStateModerate: 'Moderate',
    combatDamageStateMinor: 'Minor',
    combatRetreatLimit: 'Retreat Limit',
    combatRepairLimit: 'Repair Limit',
    combatRepairTimeLimit: 'Repair Time Limit',
    combatLBASGroups: 'LBAS Groups',
    combatLBASGroup1Nodes: 'Group 1 Nodes',
    combatLBASGroup2Nodes: 'Group 2 Nodes',
    combatLBASGroup3Nodes: 'Group 3 Nodes',
    combatCheckFatigue: 'Check Fatigue',
    combatReserveDocks: 'Reserve Docks',
    combatPortCheck: 'Port Check',
    combatClearStop: 'Clear Stop',
    combatLastNodePush: 'Last Node Push',
    eventResetHeader: 'Event Map Progress Reset',
    eventResetDifficultyCasual: 'Casual',
    eventResetDifficultyEasy: 'Easy',
    eventResetDifficultyMedium: 'Medium',
    eventResetDifficultyHard: 'Hard',
    eventResetFrequency: 'Frequency of resetting',
    eventResetFarmDifficulty: 'Farm difficulty (sortied)',
    eventResetResetDifficulty: 'Reset difficulty (not sortied)',
    shipSwitcherHeader: 'Ship Switcher',
    shipSwitcherSlot1: 'Slot 1 Switch Criteria and Ships',
    shipSwitcherSlot2: 'Slot 2 Switch Criteria and Ships',
    shipSwitcherSlot3: 'Slot 3 Switch Criteria and Ships',
    shipSwitcherSlot4: 'Slot 4 Switch Criteria and Ships',
    shipSwitcherSlot5: 'Slot 5 Switch Criteria and Ships',
    shipSwitcherSlot6: 'Slot 6 Switch Criteria and Ships',
    shipSwitcherCriteria: 'Select Criteria...',
    shipSwitcherCriteriaDamage: 'Damage',
    shipSwitcherCriteriaFatigue: 'Fatigue',
    shipSwitcherCriteriaSparkle: 'Sparkle',
    shipSwitcherModalSpecification: 'Specify ship(s) by...',
    shipSwitcherModalSpecificationPosition: 'Position',
    shipSwitcherModalSpecificationAsset: 'Asset (Class/Ship/Custom)',
    shipSwitcherModalSortBy: 'Sort By',
    shipSwitcherModalSortByDateAcquired: 'Date Acquired',
    shipSwitcherModalSortByClass: 'Class',
    shipSwitcherModalSortByLevel: 'Level',
    shipSwitcherModalOffsetStart: 'Start count from...',
    shipSwitcherModalOffsetStartStart: 'Start of list',
    shipSwitcherModalOffsetStartEnd: 'End of list',
    shipSwitcherModalOffsetCount: 'Offset count',
    shipSwitcherModalClasses: 'Select Class...',
    shipSwitcherModalShips: 'Select Ship...',
    shipSwitcherModalShipsDesc: `Custom ship-specific assets should be specified here. Specify in format <class>_<ship>,
      and save asset as 'shiplist_list_<class>_<ship>.png'`,
    shipSwitcherModalLevel: 'Filter on level',
    shipSwitcherModalLockedIgnore: 'Ignore Locks',
    shipSwitcherModalLockedYes: 'Only Locked',
    shipSwitcherModalLockedNo: 'Only Unlocked',
    shipSwitcherModalRingedIgnore: 'Ignore Rings',
    shipSwitcherModalRingedYes: 'Only Ringed',
    shipSwitcherModalRingedNo: 'Only Not Ringed',
    questsHeader: 'Quests',
    questsQuestGroups: 'Enabled Quest Groups',
    questsQuestGroupsDaily: 'Daily',
    questsQuestGroupsWeekly: 'Weekly',
    questsQuestGroupsMonthly: 'Monthly',
    questsQuestGroupsOthers: 'Quarterly/Others',
    configHeader: 'Config',
    configLoad: 'Load',
    configSave: 'Save',
  },
  bodyRunCmd: {
    intro: `Assuming that you've properly installed Java, Sikuli, and kcauto, fill out the two fields below to
      generate the command you need to run in your command prompt/cmd/terminal to start kcauto.`,
    sikuliPath: 'Sikuli Path',
    sikuliPathDesc: 'Full path to the folder/directory where Sikuli is installed (where sikulix.jar exists)',
    kcautoKaiPath: 'kcauto Path',
    kcautoKaiPathDesc: 'Full path to the folder/directory where kcauto is installed (where config.ini exists)',
    commandHeader: 'Command',
    noCommandNotice: 'Fill out the above two fields to generate the command.',
  },
  bodyAbout: {
    intro1:
  <span>
    <strong>kcauto</strong> is a robust Kantai Collection automation tool. The successor
    to <a href={urls.KANCOLLE_AUTO_GITHUB_LINK}>kancolle-auto</a>, both it and kcauto are proof-of-concepts in
    using Sikuli for vision-based scripting to automate the playing of Kantai Collection and are exercises in
    automating large, convoluted, and complex game logic. It is not designed to be the fastest automation tool,
    but instead designed to be robust and highly
    customizable. <strong>Please read the Disclaimer section before use!</strong>
  </span>,
    intro2:
  <span>
    Visit the <a href={urls.GITHUB_LINK}>kcauto GitHub repository</a> for the latest releases and to
    report any bugs. Join the <a href={urls.DISCORD_LINK}>kcauto Discord</a> for up to date information
    and help.
  </span>,
    disclaimerHeader: 'Disclaimer',
    disclaimer1: `kcauto is meant for educational purposes only. Botting is against the rules and prolonged usage of
      kcauto may result in your account being banned. The developer of kcauto takes no responsibility for
      repercussions related to the usage of kcauto. You have been warned!`,
    disclaimer2: `Although unlikely, users may lose ships and equipment when using kcauto to conduct combat sorties.
      While kcauto has been painstakingly designed to reduce the chances of this happening, the developer of kcauto
      does not take responsibility for any loss of ships and/or resources.`,
  },
}
