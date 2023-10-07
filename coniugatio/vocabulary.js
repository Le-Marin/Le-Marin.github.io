const VOCABULARY = [
  [
    1,
    'amō -āvī -ātum -āre',
    'love / любить',
    ['am_ō', 'amā_s', 'ama_t'],
    ['amā_mus', 'amā_tis', 'ama_nt'],
  ],
  [
    1,
    'clāmō -āvī -ātum -āre',
    'cry, shout / кричать',
    ['clām_ō', 'clāmā_s', 'clāma_t'],
    ['clāmā_mus', 'clāmā_tis', 'clāma_nt'],
  ],
  [
    1,
    'rogō -āvī -ātum -āre',
    'ask / спрашивать',
    ['rog_ō', 'rogā_s', 'roga_t'],
    ['rogā_mus', 'rogā_tis', 'roga_nt'],
  ],
  [
    1,
    'levō -āvī -ātum -āre',
    'elevate / поднимать, повышать',
    ['lev_ō', 'levā_s', 'leva_t'],
    ['levā_mus', 'levā_tis', 'leva_nt'],
  ],
  [
    1,
    'iterō -āvī -ātum -āre',
    'repeat / повторять',
    ['iter_ō', 'iterā_s', 'itera_t'],
    ['iterā_mus', 'iterā_tis', 'itera_nt'],
  ],
  [
    1,
    'aedificō -āvī -ātum -āre',
    'build / строить',
    ['aedific_ō', 'aedificā_s', 'aedifica_t'],
    ['aedificā_mus', 'aedificā_tis', 'aedifica_nt'],
  ],
  [
    1,
    'vocō -āvī -ātum -āre',
    'call / звать',
    ['voc_ō', 'vocā_s', 'voca_t'],
    ['vocā_mus', 'vocā_tis', 'voca_nt'],
  ],
  [
    1,
    'cantō -āvī -ātum -āre',
    'sing / петь',
    ['cant_ō', 'cantā_s', 'canta_t'],
    ['cantā_mus', 'cantā_tis', 'canta_nt'],
  ],
  [
    1,
    'numerō -āvī -ātum -āre',
    'count / считать',
    ['numer_ō', 'numerā_s', 'numera_t'],
    ['numerā_mus', 'numerā_tis', 'numera_nt'],
  ],
  [
    1,
    'salūtō -āvī -ātum -āre',
    'greet / приветствовать',
    ['salūt_ō', 'salūtā_s', 'salūta_t'],
    ['salūtā_mus', 'salūtā_tis', 'salūta_nt'],
  ],
  [
    1,
    'videō vīdī vīsum -ēre',
    'see / видеть',
    ['vide_ō', 'vidē_s', 'vide_t'],
    ['vidē_mus', 'vidē_tis', 'vide_nt'],
  ],
  [
    1,
    'respondeō -dī -sum -ēre',
    'answer / отвечать',
    ['responde_ō', 'respondē_s', 'responde_t'],
    ['respondē_mus', 'respondē_tis', 'responde_nt'],
  ],
  [
    1,
    'habeō -uī -itum -ēre',
    'have / иметь',
    ['habe_ō', 'habē_s', 'habe_t'],
    ['habē_mus', 'habē_tis', 'habe_nt'],
  ],
  [
    1,
    'teneō -uī -ntum -ēre',
    'hold / держать',
    ['tene_ō', 'tenē_s', 'tene_t'],
    ['tenē_mus', 'tenē_tis', 'tene_nt'],
  ],
  [
    1,
    'tergeō -sī -sum -ēre',
    'wipe / протирать',
    ['terge_ō', 'tergē_s', 'terge_t'],
    ['tergē_mus', 'tergē_tis', 'terge_nt'],
  ],
  [
    1,
    'moveō mōvī mōtum -ēre',
    'move / двигать',
    ['move_ō', 'movē_s', 'move_t'],
    ['movē_mus', 'movē_tis', 'move_nt'],
  ],
  [
    1,
    'torreō -uī -stum -ēre',
    'dry, parch / сушить, жечь',
    ['torre_ō', 'torrē_s', 'torre_t'],
    ['torrē_mus', 'torrē_tis', 'torre_nt'],
  ],
  [
    1,
    'foveō fōvī fōtum -ēre',
    'keep warm / согревать',
    ['fove_ō', 'fovē_s', 'fove_t'],
    ['fovē_mus', 'fovē_tis', 'fove_nt'],
  ],
  [
    1,
    'compleō vīdī vīsum -ēre',
    'fill up / заполнять',
    ['comple_ō', 'complē_s', 'comple_t'],
    ['complē_mus', 'complē_tis', 'comple_nt'],
  ],
  [
    1,
    'arceō vīdī vīsum -ēre',
    'hold off / (у, с)держивать',
    ['arce_ō', 'arcē_s', 'arce_t'],
    ['arcē_mus', 'arcē_tis', 'arce_nt'],
  ],
  [
    1,
    'sūmō sūmpsī sūmptum -ēre',
    'take / брать',
    ['sūm_ō', 'sūmi_s', 'sūmi_t'],
    ['sūmi_mus', 'sūmi_tis', 'sūmu_nt'],
  ],
  [
    1,
    'agō ēgī āctum -ēre',
    'do / делать',
    ['ag_ō', 'agi_s', 'agi_t'],
    ['agi_mus', 'agi_tis', 'agu_nt'],
  ],
  [
    1,
    'vehō vēxī vectum -ēre',
    'carry, convey / нести, везти',
    ['veh_ō', 'vehi_s', 'vehi_t'],
    ['vehi_mus', 'vehi_tis', 'vehu_nt'],
  ],
  [
    1,
    'vertō -sī -sum -ēre',
    'turn / вертеть, поворачивать',
    ['vert_ō', 'verti_s', 'verti_t'],
    ['verti_mus', 'verti_tis', 'vertu_nt'],
  ],
  [
    1,
    'emō ēmī ēmptum -ēre',
    'buy / покупать',
    ['em_ō', 'emi_s', 'emi_t'],
    ['emi_mus', 'emi_tis', 'emu_nt'],
  ],
  [
    1,
    'audiō -īvī -ītum -īre',
    'hear; listen / слышать; слушать',
    ['audi_ō', 'audī_s', 'audi_t'],
    ['audī_mus', 'audī_tis', 'audiu_nt'],
  ],
  [
    1,
    'fīniō -īvī -ītum -īre',
    'limit / ограничивать',
    ['fīni_ō', 'fīnī_s', 'fīni_t'],
    ['fīnī_mus', 'fīnī_tis', 'fīniu_nt'],
  ],
  [
    1,
    'molliō -īvī -ītum -īre',
    'soften / размягчать',
    ['molli_ō', 'mollī_s', 'molli_t'],
    ['mollī_mus', 'mollī_tis', 'molliu_nt'],
  ],
  [
    1,
    'poliō -īvī -ītum -īre',
    'polish / полировать',
    ['poli_ō', 'polī_s', 'poli_t'],
    ['polī_mus', 'polī_tis', 'poliu_nt'],
  ],
  [
    1,
    'liniō -īvī -ītum -īre',
    'smear / смазывать',
    ['lini_ō', 'linī_s', 'lini_t'],
    ['linī_mus', 'linī_tis', 'liniu_nt'],
  ],
  [
    2,
    'amō -āvī -ātum -āre',
    'love / любить',
    ['am_or', 'amā_ris', 'amā_tur'],
    ['amā_mur', 'amā_minī', 'ama_ntur'],
  ],
  [
    2,
    'clāmō -āvī -ātum -āre',
    'cry, shout / кричать',
    ['clām_or', 'clāmā_ris', 'clāmā_tur'],
    ['clāmā_mur', 'clāmā_minī', 'clāma_ntur'],
  ],
  [
    2,
    'rogō -āvī -ātum -āre',
    'ask / спрашивать',
    ['rog_or', 'rogā_ris', 'rogā_tur'],
    ['rogā_mur', 'rogā_minī', 'roga_ntur'],
  ],
  [
    2,
    'levō -āvī -ātum -āre',
    'elevate / поднимать, повышать',
    ['lev_or', 'levā_ris', 'levā_tur'],
    ['levā_mur', 'levā_minī', 'leva_ntur'],
  ],
  [
    2,
    'iterō -āvī -ātum -āre',
    'repeat / повторять',
    ['iter_or', 'iterā_ris', 'iterā_tur'],
    ['iterā_mur', 'iterā_minī', 'itera_ntur'],
  ],
  [
    2,
    'videō vīdī vīsum -ēre',
    'see / видеть',
    ['vide_or', 'vidē_ris', 'vidē_tur'],
    ['vidē_mur', 'vidē_minī', 'vide_ntur'],
  ],
  [
    2,
    'respondeō -dī -sum -ēre',
    'answer / отвечать',
    ['responde_or', 'respondē_ris', 'respondē_tur'],
    ['respondē_mur', 'respondē_minī', 'responde_ntur'],
  ],
  [
    2,
    'habeō -uī -itum -ēre',
    'have / иметь',
    ['habe_or', 'habē_ris', 'habē_tur'],
    ['habē_mur', 'habē_minī', 'habe_ntur'],
  ],
  [
    2,
    'teneō -uī -ntum -ēre',
    'hold / держать',
    ['tene_or', 'tenē_ris', 'tenē_tur'],
    ['tenē_mur', 'tenē_minī', 'tene_ntur'],
  ],
  [
    2,
    'tergeō -sī -sum -ēre',
    'wipe / протирать',
    ['terge_or', 'tergē_ris', 'tergē_tur'],
    ['tergē_mur', 'tergē_minī', 'terge_ntur'],
  ],
  [
    2,
    'sūmō sūmpsī sūmptum -ēre',
    'take / брать',
    ['sūm_or', 'sūme_ris', 'sūmi_tur'],
    ['sūmi_mur', 'sūmi_minī', 'sūmu_ntur'],
  ],
  [
    2,
    'agō ēgī āctum -ēre',
    'do / делать',
    ['ag_or', 'age_ris', 'agi_tur'],
    ['agi_mur', 'agi_minī', 'agu_ntur'],
  ],
  [
    2,
    'vehō vēxī vectum -ēre',
    'carry, convey / нести, везти',
    ['veh_or', 'vehe_ris', 'vehi_tur'],
    ['vehi_mur', 'vehi_minī', 'vehu_ntur'],
  ],
  [
    1,
    'vertō -sī -sum -ēre',
    'turn / вертеть, поворачивать',
    ['vert_or', 'verte_ris', 'verti_tur'],
    ['verti_mur', 'verti_minī', 'vertu_ntur'],
  ],
  [
    2,
    'emō ēmī ēmptum -ēre',
    'buy / покупать',
    ['em_or', 'eme_ris', 'emi_tur'],
    ['emi_mur', 'emi_minī', 'emu_ntur'],
  ],
  [
    1,
    'audiō -īvī -ītum -īre',
    'hear; listen / слышать; слушать',
    ['audi_or', 'audī_ris', 'audī_tur'],
    ['audī_mur', 'audī_minī', 'audiu_ntur'],
  ],
  [
    1,
    'fīniō -īvī -ītum -īre',
    'limit / ограничивать',
    ['fīni_or', 'fīnī_ris', 'fīnī_tur'],
    ['fīnī_mur', 'fīnī_minī', 'fīniu_ntur'],
  ],
  [
    1,
    'molliō -īvī -ītum -īre',
    'soften / размягчать',
    ['molli_or', 'mollī_ris', 'mollī_tur'],
    ['mollī_mur', 'mollī_minī', 'molliu_ntur'],
  ],
  [
    1,
    'poliō -īvī -ītum -īre',
    'polish / полировать',
    ['poli_or', 'polī_ris', 'polī_tur'],
    ['polī_mur', 'polī_minī', 'poliu_ntur'],
  ],
  [
    1,
    'liniō -īvī -ītum -īre',
    'smear / смазывать',
    ['lini_or', 'linī_ris', 'linī_tur'],
    ['linī_mur', 'linī_minī', 'liniu_ntur'],
];
