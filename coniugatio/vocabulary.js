const VOCABULARY = [
  [
    1,
    'I',
    'amāre',
    'love / любить',
    ['am_ō', 'amā_s', 'ama_t'],
    ['amā_mus', 'amā_tis', 'ama_nt'],
  ],
  [
    1,
    'I',
    'clāmāre',
    'cry, shout / кричать',
    ['clām_ō', 'clāmā_s', 'clāma_t'],
    ['clāmā_mus', 'clāmā_tis', 'clāma_nt'],
  ],
  [
    1,
    'I',
    'rogāre',
    'ask / спрашивать',
    ['rog_ō', 'rogā_s', 'roga_t'],
    ['rogā_mus', 'rogā_tis', 'roga_nt'],
  ],
  [
    1,
    'I',
    'levāre',
    'elevate / поднимать, повышать',
    ['lev_ō', 'levā_s', 'leva_t'],
    ['levā_mus', 'levā_tis', 'leva_nt'],
  ],
  [
    1,
    'I',
    'iterāre',
    'repeat / повторять',
    ['iter_ō', 'iterā_s', 'itera_t'],
    ['iterā_mus', 'iterā_tis', 'itera_nt'],
  ],
  [
    1,
    'I',
    'aedificāre',
    'build / строить',
    ['aedific_ō', 'aedificā_s', 'aedifica_t'],
    ['aedificā_mus', 'aedificā_tis', 'aedifica_nt'],
  ],
  [
    1,
    'I',
    'vocāre',
    'call / звать',
    ['voc_ō', 'vocā_s', 'voca_t'],
    ['vocā_mus', 'vocā_tis', 'voca_nt'],
  ],
  [
    1,
    'I',
    'cantāre',
    'sing / петь',
    ['cant_ō', 'cantā_s', 'canta_t'],
    ['cantā_mus', 'cantā_tis', 'canta_nt'],
  ],
  [
    1,
    'I',
    'numerāre',
    'count / считать',
    ['numer_ō', 'numerā_s', 'numera_t'],
    ['numerā_mus', 'numerā_tis', 'numera_nt'],
  ],
  [
    1,
    'I',
    'salūtāre',
    'greet / приветствовать',
    ['salūt_ō', 'salūtā_s', 'salūta_t'],
    ['salūtā_mus', 'salūtā_tis', 'salūta_nt'],
  ],
  [
    1,
    'II',
    'videō vīdī vīsum -ēre',
    'see / видеть',
    ['vide_ō', 'vidē_s', 'vide_t'],
    ['vidē_mus', 'vidē_tis', 'vide_nt'],
  ],
  [
    1,
    'II',
    'respondeō -dī -sum -ēre',
    'answer / отвечать',
    ['responde_ō', 'respondē_s', 'responde_t'],
    ['respondē_mus', 'respondē_tis', 'responde_nt'],
  ],
  [
    1,
    'II',
    'habēre',
    'have / иметь',
    ['habe_ō', 'habē_s', 'habe_t'],
    ['habē_mus', 'habē_tis', 'habe_nt'],
  ],
  [
    1,
    'II',
    'teneō -uī -ntum -ēre',
    'hold / держать',
    ['tene_ō', 'tenē_s', 'tene_t'],
    ['tenē_mus', 'tenē_tis', 'tene_nt'],
  ],
  [
    1,
    'II',
    'tergeō -sī -sum -ēre',
    'wipe / протирать',
    ['terge_ō', 'tergē_s', 'terge_t'],
    ['tergē_mus', 'tergē_tis', 'terge_nt'],
  ],
  [
    1,
    'II',
    'moveō mōvī mōtum -ēre',
    'move / двигать',
    ['move_ō', 'movē_s', 'move_t'],
    ['movē_mus', 'movē_tis', 'move_nt'],
  ],
  [
    1,
    'II',
    'torreō -uī tostum -ēre',
    'dry, parch / сушить, жечь',
    ['torre_ō', 'torrē_s', 'torre_t'],
    ['torrē_mus', 'torrē_tis', 'torre_nt'],
  ],
  [
    1,
    'II',
    'foveō fōvī fōtum -ēre',
    'keep warm / согревать',
    ['fove_ō', 'fovē_s', 'fove_t'],
    ['fovē_mus', 'fovē_tis', 'fove_nt'],
  ],
  [
    1,
    'II',
    'compleō -ēvī -ētum -ēre',
    'fill up / заполнять',
    ['comple_ō', 'complē_s', 'comple_t'],
    ['complē_mus', 'complē_tis', 'comple_nt'],
  ],
  [
    1,
    'II',
    'arcēre',
    'hold off / (у, с)держивать',
    ['arce_ō', 'arcē_s', 'arce_t'],
    ['arcē_mus', 'arcē_tis', 'arce_nt'],
  ],
  [
    1,
    'III a',
    'sūmō sūmpsī sūmptum -ere',
    'take / брать',
    ['sūm_ō', 'sūmi_s', 'sūmi_t'],
    ['sūmi_mus', 'sūmi_tis', 'sūmu_nt'],
  ],
  [
    1,
    'III a',
    'agō ēgī āctum -ere',
    'do / делать',
    ['ag_ō', 'agi_s', 'agi_t'],
    ['agi_mus', 'agi_tis', 'agu_nt'],
  ],
  [
    1,
    'III a',
    'vehō vexī vectum -ere',
    'carry, convey / нести, везти',
    ['veh_ō', 'vehi_s', 'vehi_t'],
    ['vehi_mus', 'vehi_tis', 'vehu_nt'],
  ],
  [
    1,
    'III a',
    'vertō -sī -sum -ere',
    'turn / вертеть, поворачивать',
    ['vert_ō', 'verti_s', 'verti_t'],
    ['verti_mus', 'verti_tis', 'vertu_nt'],
  ],
  [
    1,
    'III a',
    'emō ēmī ēmptum -ere',
    'buy / покупать',
    ['em_ō', 'emi_s', 'emi_t'],
    ['emi_mus', 'emi_tis', 'emu_nt'],
  ],
  [
    1,
    'III a',
    'dūcō dūxī ductum -ere',
    'lead / вести',
    ['dūc_ō', 'dūci_s', 'dūci_t'],
    ['dūci_mus', 'dūci_tis', 'dūcu_nt'],
  ],
  [
    1,
    'III a',
    'crēdō -didī -ditum -ere',
    'believe / верить',
    ['crēd_ō', 'crēdi_s', 'crēdi_t'],
    ['crēdi_mus', 'crēdi_tis', 'crēdu_nt'],
  ],
  [
    1,
    'III a',
    'lūdō -sī -sum -ere',
    'play / играть',
    ['lūd_ō', 'lūdi_s', 'lūdi_t'],
    ['lūdi_mus', 'lūdi_tis', 'lūdu_nt'],
  ],
  [
    1,
    'III a',
    'tollō sustulī sublātum -ere',
    'lift, raise / поднимать',
    ['toll_ō', 'tolli_s', 'tolli_t'],
    ['tolli_mus', 'tolli_tis', 'tollu_nt'],
  ],
  [
    1,
    'III a',
    'fallō fefellī falsum -ere',
    'deceive / обманывать',
    ['fall_ō', 'falli_s', 'falli_t'],
    ['falli_mus', 'falli_tis', 'fallu_nt'],
  ],
  [
    1,
    'III b',
    'faciō fēcī factum -ere',
    'make / делать',
    ['faci_ō', 'faci_s', 'faci_t'],
    ['faci_mus', 'faci_tis', 'faciu_nt'],
  ],
  [
    1,
    'III b',
    'capiō cēpī captum -ere',
    'take, take hold of / брать, хватать',
    ['capi_ō', 'capi_s', 'capi_t'],
    ['capi_mus', 'capi_tis', 'capiu_nt'],
  ],
  [
    1,
    'III b',
    'iaciō iēcī iactum -ere',
    'throw / кидать',
    ['iaci_ō', 'iaci_s', 'iaci_t'],
    ['iaci_mus', 'iaci_tis', 'iaciu_nt'],
  ],
  [
    1,
    'III b',
    'aspiciō -spexī -spectum -ere',
    'look / глядеть',
    ['aspici_ō', 'aspici_s', 'aspici_t'],
    ['aspici_mus', 'aspici_tis', 'aspiciu_nt'],
  ],
  [
    1,
    'III b',
    'accipiō -cēpī -ceptum -ere',
    'accept / принимать',
    ['accipi_ō', 'accipi_s', 'accipi_t'],
    ['accipi_mus', 'accipi_tis', 'accipiu_nt'],
  ],
  [
    1,
    'III b',
    'interficiō -fēcī -fectum -ere',
    'kill / убивать',
    ['interfici_ō', 'interfici_s', 'interfici_t'],
    ['interfici_mus', 'interfici_tis', 'interficiu_nt'],
  ],
  [
    1,
    'III b',
    'rapiō -uī raptum -ere',
    'seize; carry off / хватать; похищать',
    ['rapi_ō', 'rapi_s', 'rapi_t'],
    ['rapi_mus', 'rapi_tis', 'rapiu_nt'],
  ],
  [
    1,
    'III b',
    'cōnficiō -fēcī -fectum -ere',
    'complete / завершать',
    ['cōnfici_ō', 'cōnfici_s', 'cōnfici_t'],
    ['cōnfici_mus', 'cōnfici_tis', 'cōnficiu_nt'],
  ],
  [
    1,
    'III b',
    'afficiō -fēcī -fectum -ere',
    'affect / причинять',
    ['affici_ō', 'affici_s', 'affici_t'],
    ['affici_mus', 'affici_tis', 'afficiu_nt'],
  ],
  [
    1,
    'III b',
    'cōnspiciō -fēcī -fectum -ere',
    'get sight of / заметить',
    ['cōnspici_ō', 'cōnspici_s', 'cōnspici_t'],
    ['cōnspici_mus', 'cōnspici_tis', 'cōnspiciu_nt'],
  ],
  [
    1,
    'IV',
    'audīre',
    'hear; listen / слышать; слушать',
    ['audi_ō', 'audī_s', 'audi_t'],
    ['audī_mus', 'audī_tis', 'audiu_nt'],
  ],
  [
    1,
    'IV',
    'fīnīre',
    'limit / ограничивать',
    ['fīni_ō', 'fīnī_s', 'fīni_t'],
    ['fīnī_mus', 'fīnī_tis', 'fīniu_nt'],
  ],
  [
    1,
    'IV',
    'mollīre',
    'soften / размягчать',
    ['molli_ō', 'mollī_s', 'molli_t'],
    ['mollī_mus', 'mollī_tis', 'molliu_nt'],
  ],
  [
    1,
    'IV',
    'polīre',
    'polish / полировать',
    ['poli_ō', 'polī_s', 'poli_t'],
    ['polī_mus', 'polī_tis', 'poliu_nt'],
  ],
  [
    1,
    'IV',
    'linīre',
    'smear / смазывать',
    ['lini_ō', 'linī_s', 'lini_t'],
    ['linī_mus', 'linī_tis', 'liniu_nt'],
  ],
  [
    1,
    'IV',
    'pūnīre',
    'punish / наказывать',
    ['pūni_ō', 'pūnī_s', 'pūni_t'],
    ['pūnī_mus', 'pūnī_tis', 'pūniu_nt'],
  ],
  [
    1,
    'IV',
    'ferīre',
    'strike, smite / ударять, поражать',
    ['feri_ō', 'ferī_s', 'feri_t'],
    ['ferī_mus', 'ferī_tis', 'feriu_nt'],
  ],
  [
    1,
    'IV',
    'hauriō hausī haustum -īre',
    'draw; drink up / черпать; выпивать',
    ['hauri_ō', 'haurī_s', 'hauri_t'],
    ['haurī_mus', 'haurī_tis', 'hauriu_nt'],
  ],
  [
    1,
    'IV',
    'sepeliō -īvī -pultum -īre',
    'bury, inter / хоронить, погребать',
    ['sepeli_ō', 'sepelī_s', 'sepeli_t'],
    ['sepelī_mus', 'sepelī_tis', 'sepeliu_nt'],
  ],
  [
    1,
    'IV',
    'scīre',
    'know / знать',
    ['sci_ō', 'scī_s', 'sci_t'],
    ['scī_mus', 'scī_tis', 'sciu_nt'],
  ],
  [
    2,
    'I',
    'amāre',
    'love / любить',
    ['am_or', 'amā_ris', 'amā_tur'],
    ['amā_mur', 'amā_minī', 'ama_ntur'],
  ],
  [
    2,
    'I',
    'clāmāre',
    'cry, shout / кричать',
    ['clām_or', 'clāmā_ris', 'clāmā_tur'],
    ['clāmā_mur', 'clāmā_minī', 'clāma_ntur'],
  ],
  [
    2,
    'I',
    'rogāre',
    'ask / спрашивать',
    ['rog_or', 'rogā_ris', 'rogā_tur'],
    ['rogā_mur', 'rogā_minī', 'roga_ntur'],
  ],
  [
    2,
    'I',
    'levāre',
    'elevate / поднимать, повышать',
    ['lev_or', 'levā_ris', 'levā_tur'],
    ['levā_mur', 'levā_minī', 'leva_ntur'],
  ],
  [
    2,
    'I',
    'iterāre',
    'repeat / повторять',
    ['iter_or', 'iterā_ris', 'iterā_tur'],
    ['iterā_mur', 'iterā_minī', 'itera_ntur'],
  ],
  [
    2,
    'I',
    'aedificāre',
    'build / строить',
    ['aedific_or', 'aedificā_ris', 'aedificā_tur'],
    ['aedificā_mur', 'aedificā_minī', 'aedifica_ntur'],
  ],
  [
    2,
    'I',
    'vocāre',
    'call / звать',
    ['voc_or', 'vocā_ris', 'vocā_tur'],
    ['vocā_mur', 'vocā_minī', 'voca_ntur'],
  ],
  [
    2,
    'I',
    'cantāre',
    'sing / петь',
    ['cant_or', 'cantā_ris', 'cantā_tur'],
    ['cantā_mur', 'cantā_minī', 'canta_ntur'],
  ],
  [
    2,
    'I',
    'numerāre',
    'count / считать',
    ['numer_or', 'numerā_ris', 'numerā_tur'],
    ['numerā_mur', 'numerā_minī', 'numera_ntur'],
  ],
  [
    2,
    'I',
    'salūtāre',
    'greet / приветствовать',
    ['salūt_or', 'salūtā_ris', 'salūtā_tur'],
    ['salūtā_mur', 'salūtā_minī', 'salūta_ntur'],
  ],
  [
    2,
    'II',
    'videō vīdī vīsum -ēre',
    'see / видеть',
    ['vide_or', 'vidē_ris', 'vidē_tur'],
    ['vidē_mur', 'vidē_minī', 'vide_ntur'],
  ],
  [
    2,
    'II',
    'respondeō -dī -sum -ēre',
    'answer / отвечать',
    ['responde_or', 'respondē_ris', 'respondē_tur'],
    ['respondē_mur', 'respondē_minī', 'responde_ntur'],
  ],
  [
    2,
    'II',
    'habēre',
    'have / иметь',
    ['habe_or', 'habē_ris', 'habē_tur'],
    ['habē_mur', 'habē_minī', 'habe_ntur'],
  ],
  [
    2,
    'II',
    'teneō -uī -ntum -ēre',
    'hold / держать',
    ['tene_or', 'tenē_ris', 'tenē_tur'],
    ['tenē_mur', 'tenē_minī', 'tene_ntur'],
  ],
  [
    2,
    'II',
    'tergeō -sī -sum -ēre',
    'wipe / протирать',
    ['terge_or', 'tergē_ris', 'tergē_tur'],
    ['tergē_mur', 'tergē_minī', 'terge_ntur'],
  ],
  [
    2,
    'II',
    'moveō mōvī mōtum -ēre',
    'move / двигать',
    ['move_or', 'movē_ris', 'movē_tur'],
    ['movē_mur', 'movē_minī', 'move_ntur'],
  ],
  [
    2,
    'II',
    'torreō -uī tostum -ēre',
    'dry, parch / сушить, жечь',
    ['torre_or', 'torrē_ris', 'torrē_tur'],
    ['torrē_mur', 'torrē_minī', 'torre_ntur'],
  ],
  [
    2,
    'II',
    'foveō fōvī fōtum -ēre',
    'keep warm / согревать',
    ['fove_or', 'fovē_ris', 'fovē_tur'],
    ['fovē_mur', 'fovē_minī', 'fove_ntur'],
  ],
  [
    2,
    'II',
    'compleō -ēvī -ētum -ēre',
    'fill up / заполнять',
    ['comple_or', 'complē_ris', 'complē_tur'],
    ['complē_mur', 'complē_minī', 'comple_ntur'],
  ],
  [
    2,
    'II',
    'arcēre',
    'hold off / (у, с)держивать',
    ['arce_or', 'arcē_ris', 'arcē_tur'],
    ['arcē_mur', 'arcē_minī', 'arce_ntur'],
  ],
  [
    2,
    'III a',
    'sūmō sūmpsī sūmptum -ere',
    'take / брать',
    ['sūm_or', 'sūme_ris', 'sūmi_tur'],
    ['sūmi_mur', 'sūmi_minī', 'sūmu_ntur'],
  ],
  [
    2,
    'III a',
    'agō ēgī āctum -ere',
    'do / делать',
    ['ag_or', 'age_ris', 'agi_tur'],
    ['agi_mur', 'agi_minī', 'agu_ntur'],
  ],
  [
    2,
    'III a',
    'vehō vexī vectum -ere',
    'carry, convey / нести, везти',
    ['veh_or', 'vehe_ris', 'vehi_tur'],
    ['vehi_mur', 'vehi_minī', 'vehu_ntur'],
  ],
  [
    2,
    'III a',
    'vertō -sī -sum -ere',
    'turn / вертеть, поворачивать',
    ['vert_or', 'verte_ris', 'verti_tur'],
    ['verti_mur', 'verti_minī', 'vertu_ntur'],
  ],
  [
    2,
    'III a',
    'emō ēmī ēmptum -ere',
    'buy / покупать',
    ['em_or', 'eme_ris', 'emi_tur'],
    ['emi_mur', 'emi_minī', 'emu_ntur'],
  ],
  [
    2,
    'III a',
    'dūcō dūxī ductum -ere',
    'lead / вести',
    ['dūc_or', 'dūce_ris', 'dūci_tur'],
    ['dūci_mur', 'dūci_minī', 'dūcu_ntur'],
  ],
  [
    2,
    'III a',
    'crēdō -didī -ditum -ere',
    'believe / верить',
    ['crēd_or', 'crēde_ris', 'crēdi_tur'],
    ['crēdi_mur', 'crēdi_minī', 'crēdu_ntur'],
  ],
  [
    2,
    'III a',
    'lūdō -sī -sum -ere',
    'play / играть',
    ['lūd_or', 'lūde_ris', 'lūdi_tur'],
    ['lūdi_mur', 'lūdi_minī', 'lūdu_ntur'],
  ],
  [
    2,
    'III a',
    'tollō sustulī sublātum -ere',
    'lift, raise / поднимать',
    ['toll_or', 'tolle_ris', 'tolli_tur'],
    ['tolli_mur', 'tolli_minī', 'tollu_ntur'],
  ],
  [
    2,
    'III a',
    'fallō fefellī falsum -ere',
    'deceive / обманывать',
    ['fall_or', 'falle_ris', 'falli_tur'],
    ['falli_mur', 'falli_minī', 'fallu_ntur'],
  ],
  [
    2,
    'III b',
    'faciō fēcī factum -ere',
    'make / делать',
    ['fī_ō', 'fī_s', 'fi_t'],
    ['fī_mus', 'fī_tis', 'fīu_nt'],
  ],
  [
    2,
    'III b',
    'capiō cēpī captum -ere',
    'take, take hold of / брать, хватать',
    ['capi_or', 'cape_ris', 'capi_tur'],
    ['capi_mur', 'capi_minī', 'capiu_ntur'],
  ],
  [
    2,
    'III b',
    'iaciō iēcī iactum -ere',
    'throw / кидать',
    ['iaci_or', 'iace_ris', 'iaci_tur'],
    ['iaci_mur', 'iaci_minī', 'iaciu_ntur'],
  ],
  [
    2,
    'III b',
    'aspiciō -spexī -spectum -ere',
    'look / глядеть',
    ['aspici_or', 'aspice_ris', 'aspici_tur'],
    ['aspici_mur', 'aspici_minī', 'aspiciu_ntur'],
  ],
  [
    2,
    'III b',
    'accipiō -cēpī -ceptum -ere',
    'accept / принимать',
    ['accipi_or', 'accipe_ris', 'accipi_tur'],
    ['accipi_mur', 'accipi_minī', 'accipiu_ntur'],
  ],
  [
    2,
    'III b',
    'interficiō -fēcī -fectum -ere',
    'kill / убивать',
    ['interfici_or', 'interfice_ris', 'interfici_tur'],
    ['interfici_mur', 'interfici_minī', 'interficiu_ntur'],
  ],
  [
    2,
    'III b',
    'rapiō -uī raptum -ere',
    'seize; carry off / хватать; похищать',
    ['rapi_or', 'rape_ris', 'rapi_tur'],
    ['rapi_mur', 'rapi_minī', 'rapiu_ntur'],
  ],
  [
    2,
    'III b',
    'cōnficiō -fēcī -fectum -ere',
    'complete / завершать',
    ['cōnfici_or', 'cōnfice_ris', 'cōnfici_tur'],
    ['cōnfici_mur', 'cōnfici_minī', 'cōnficiu_ntur'],
  ],
  [
    2,
    'III b',
    'afficiō -fēcī -fectum -ere',
    'affect / причинять',
    ['affici_or', 'affice_ris', 'affici_tur'],
    ['affici_mur', 'affici_minī', 'afficiu_ntur'],
  ],
  [
    2,
    'III b',
    'cōnspiciō -spexī -spectum -ere',
    'get sight of / заметить',
    ['cōnspici_or', 'cōnspice_ris', 'cōnspici_tur'],
    ['cōnspici_mur', 'cōnspici_minī', 'cōnspiciu_ntur'],
  ],
  [
    2,
    'IV',
    'audīre',
    'hear; listen / слышать; слушать',
    ['audi_or', 'audī_ris', 'audī_tur'],
    ['audī_mur', 'audī_minī', 'audiu_ntur'],
  ],
  [
    2,
    'IV',
    'fīnīre',
    'limit / ограничивать',
    ['fīni_or', 'fīnī_ris', 'fīnī_tur'],
    ['fīnī_mur', 'fīnī_minī', 'fīniu_ntur'],
  ],
  [
    2,
    'IV',
    'mollīre',
    'soften / размягчать',
    ['molli_or', 'mollī_ris', 'mollī_tur'],
    ['mollī_mur', 'mollī_minī', 'molliu_ntur'],
  ],
  [
    2,
    'IV',
    'polīre',
    'polish / полировать',
    ['poli_or', 'polī_ris', 'polī_tur'],
    ['polī_mur', 'polī_minī', 'poliu_ntur'],
  ],
  [
    2,
    'IV',
    'linīre',
    'smear / смазывать',
    ['lini_or', 'linī_ris', 'linī_tur'],
    ['linī_mur', 'linī_minī', 'liniu_ntur'],
  ],
  [
    2,
    'IV',
    'pūnīre',
    'punish / наказывать',
    ['pūni_or', 'pūnī_ris', 'pūnī_tur'],
    ['pūnī_mur', 'pūnī_minī', 'pūniu_ntur'],
  ],
  [
    2,
    'IV',
    'ferīre',
    'strike, smite / ударять, поражать',
    ['feri_or', 'ferī_ris', 'feri_tur'],
    ['ferī_mur', 'ferī_minī', 'feriu_ntur'],
  ],
  [
    2,
    'IV',
    'hauriō hausī haustum -īre',
    'draw; drink up / черпать; выпивать',
    ['hauri_or', 'haurī_ris', 'haurī_tur'],
    ['haurī_mur', 'haurī_minī', 'hauriu_ntur'],
  ],
  [
    2,
    'IV',
    'sepeliō -īvī -pultum -īre',
    'bury, inter / хоронить, погребать',
    ['sepeli_or', 'sepelī_ris', 'sepelī_tur'],
    ['sepelī_mur', 'sepelī_minī', 'sepeliu_ntur'],
  ],
  [
    2,
    'IV',
    'scīre',
    'know / знать',
    ['sci_or', 'scī_ris', 'scī_tur'],
    ['scī_mur', 'scī_minī', 'sciu_ntur'],
  ],
];
