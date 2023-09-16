const VOCABULARY = [
  [
    1,
    'opera -ae f',
    'work; effort / работа; усилие',
    ['oper_a', 'oper_ae', 'oper_ae', 'oper_am', 'oper_ā', 'oper_a'],
    ['oper_ae', 'oper_ārum', 'oper_īs', 'oper_ās', 'oper_īs', 'oper_ae']
  ],
  [
    1,
    'alauda -ae f',
    'lark / жаворонок',
    ['alaud_a', 'alaud_ae', 'alaud_ae', 'alaud_am', 'alaud_ā', 'alaud_a'],
    ['alaud_ae', 'alaud_ārum', 'alaud_īs', 'alaud_ās', 'alaud_īs', 'alaud_ae']
  ],
  [
    1,
    'tragoedia -ae f',
    'tragedy / трагедия',
    ['tragoedi_a', 'tragoedi_ae', 'tragoedi_ae', 'tragoedi_am', 'tragoedi_ā', 'tragoedi_a'],
    ['tragoedi_ae', 'tragoedi_ārum', 'tragoedi_īs', 'tragoedi_ās', 'tragoedi_īs', 'tragoedi_ae']
  ],
  [
    1,
    'fāma -ae f',
    'talk, rumour / молва, слух',
    ['fām_a', 'fām_ae', 'fām_ae', 'fām_am', 'fām_ā', 'fām_a'],
    ['fām_ae', 'fām_ārum', 'fām_īs', 'fām_ās', 'fām_īs', 'fām_ae']
  ],
  [
    1,
    'rota -ae f',
    'wheel / колесо',
    ['rot_a', 'rot_ae', 'rot_ae', 'rot_am', 'rot_ā', 'rot_a'],
    ['rot_ae', 'rot_ārum', 'rot_īs', 'rot_ās', 'rot_īs', 'rot_ae']
  ],
  [
    1,
    'stēlla -ae f',
    'star / звезда',
    ['stēll_a', 'stēll_ae', 'stēll_ae', 'stēll_am', 'stēll_ā', 'stēll_a'],
    ['stēll_ae', 'stēll_ārum', 'stēll_īs', 'stēll_ās', 'stēll_īs', 'stēll_ae']
  ],
  [
    1,
    'umbra -ae f',
    'shadow / тень',
    ['umbr_a', 'umbr_ae', 'umbr_ae', 'umbr_am', 'umbr_ā', 'umbr_a'],
    ['umbr_ae', 'umbr_ārum', 'umbr_īs', 'umbr_ās', 'umbr_īs', 'umbr_ae']
  ],
  [
    1,
    'scientia -ae f',
    'knowledge / знание',
    ['scienti_a', 'scienti_ae', 'scienti_ae', 'scienti_am', 'scienti_ā', 'scienti_a'],
    ['scienti_ae', 'scienti_ārum', 'scienti_īs', 'scienti_ās', 'scienti_īs', 'scienti_ae']
  ],
  [
    1,
    'convīva -ae m',
    'guest, table companion / гость, сотрапезник',
    ['convīv_a', 'convīv_ae', 'convīv_ae', 'convīv_am', 'convīv_ā', 'convīv_a'],
    ['convīv_ae', 'convīv_ārum', 'convīv_īs', 'convīv_ās', 'convīv_īs', 'convīv_ae']
  ],
  [
    1,
    'pīrāta -ae m',
    'pirate / пират',
    ['pīrāt_a', 'pīrāt_ae', 'pīrāt_ae', 'pīrāt_am', 'pīrāt_ā', 'pīrāt_a'],
    ['pīrāt_ae', 'pīrāt_ārum', 'pīrāt_īs', 'pīrāt_ās', 'pīrāt_īs', 'pīrāt_ae']
  ],
  [
    2,
    'tympanum -ī n',
    'drum, timbrel / барабан, тимпан',
    ['tympan_um', 'tympan_ī', 'tympan_ō', 'tympan_um', 'tympan_ō', 'tympan_um'],
    ['tympan_a', 'tympan_ōrum', 'tympan_īs', 'tympan_a', 'tympan_īs', 'tympan_a']
  ],
  [
    2,
    'sagum -ī n',
    'cloak / плащ',
    ['sag_um', 'sag_ī', 'sag_ō', 'sag_um', 'sag_ō', 'sag_um'],
    ['sag_a', 'sag_ōrum', 'sag_īs', 'sag_a', 'sag_īs', 'sag_a']
  ],
  [
    2,
    'rēgnum -ī n',
    'kingdom / королевство',
    ['rēgn_um', 'rēgn_ī', 'rēgn_ō', 'rēgn_um', 'rēgn_ō', 'rēgn_um'],
    ['rēgn_a', 'rēgn_ōrum', 'rēgn_īs', 'rēgn_a', 'rēgn_īs', 'rēgn_a']
  ],
  [
    2,
    'furnus -ī m',
    'oven / печь',
    ['furn_us', 'furn_ī', 'furn_ō', 'furn_um', 'furn_ō', 'furn_e'],
    ['furn_ī', 'furn_ōrum', 'furn_īs', 'furn_ōs', 'furn_īs', 'furn_ī']
  ],
  [
    2,
    'cervus -ī m',
    'deer, stag / олень',
    ['cerv_us', 'cerv_ī', 'cerv_ō', 'cerv_um', 'cerv_ō', 'cerv_e'],
    ['cerv_ī', 'cerv_ōrum', 'cerv_īs', 'cerv_ōs', 'cerv_īs', 'cerv_ī']
  ],
  [
    2,
    'fīlius -ī m',
    'son / сын',
    ['fīli_us', 'fīli_ī', 'fīli_ō', 'fīli_um', 'fīli_ō', 'fīl_ī'],
    ['fīli_ī', 'fīli_ōrum', 'fīli_īs', 'fīli_ōs', 'fīli_īs', 'fīli_ī']
  ],
  [
    2,
    'sorbus -ī f',
    'sorb, rowan / рябина',
    ['sorb_us', 'sorb_ī', 'sorb_ō', 'sorb_um', 'sorb_ō', 'sorb_e'],
    ['sorb_ī', 'sorb_ōrum', 'sorb_īs', 'sorb_ōs', 'sorb_īs', 'sorb_ī']
  ],
  [
    2,
    'aper -prī m',
    'wild boar / кабан',
    ['aper', 'apr_ī', 'apr_ō', 'apr_um', 'apr_ō', 'aper'],
    ['apr_ī', 'apr_ōrum', 'apr_īs', 'apr_ōs', 'apr_īs', 'apr_ī']
  ],
  [
    2,
    'gener -erī m',
    'son-in-law / зять',
    ['gener', 'gener_ī', 'gener_ō', 'gener_um', 'gener_ō', 'gener'],
    ['gener_ī', 'gener_ōrum', 'gener_īs', 'gener_ōs', 'gener_īs', 'gener_ī']
  ],
  [
    2,
    'vir -ī m',
    'man / мужчина',
    ['vir', 'vir_ī', 'vir_ō', 'vir_um', 'vir_ō', 'vir'],
    ['vir_ī', 'vir_ōrum', 'vir_īs', 'vir_ōs', 'vir_īs', 'vir_ī']
  ],
  [
    3,
    'urbs urbis f',
    'city / город',
    ['urbs', 'urb_is', 'urb_ī', 'urb_em', 'urb_e', 'urbs'],
    ['urb_ēs', 'urb_ium', 'urb_ibus', 'urb_ēs', 'urb_ibus', 'urb_ēs']
  ],
  [
    3,
    'regiō -ōnis f',
    'region / регион, край',
    ['regiō', 'regiōn_is', 'regiōn_ī', 'regiōn_em', 'regiōn_e', 'regiō'],
    ['regiōn_ēs', 'regiōn_um', 'regiōn_ibus', 'regiōn_ēs', 'regiōn_ibus', 'regiōn_ēs']
  ],
  [
    3,
    'calamitās -ātis f',
    'calamity / бедствие',
    ['calamitās', 'calamitāt_is', 'calamitāt_ī', 'calamitāt_em', 'calamitāt_e', 'calamitās'],
    ['calamitāt_ēs', 'calamitāt_um', 'calamitāt_ibus', 'calamitāt_ēs', 'calamitāt_ibus', 'calamitāt_ēs']
  ],
  [
    3,
    'carmen -inis n',
    'song / песня',
    ['carmen', 'carmin_is', 'carmin_ī', 'carmen', 'carmin_e', 'carmen'],
    ['carmin_a', 'carmin_um', 'carmin_ibus', 'carmin_a', 'carmin_ibus', 'carmin_a']
  ],
  [
    3,
    'hostis -is m',
    'enemy / враг',
    ['host_is', 'host_is', 'host_ī', 'host_em', 'host_e', 'host_is'],
    ['host_ēs', 'host_ium', 'host_ibus', 'host_ēs', 'host_ibus', 'host_ēs']
  ],
  [
    3,
    'pāx -ācis f',
    'peace / мир',
    ['pāx', 'pāc_is', 'pāc_ī', 'pāc_em', 'pāc_e', 'pāx'],
    ['pāc_ēs', 'pāc_ium', 'pāc_ibus', 'pāc_ēs', 'pāc_ibus', 'pāc_ēs']
  ],
  [
    3,
    'lēx -ēgis f',
    'law / закон',
    ['lēx', 'lēg_is', 'lēg_ī', 'lēg_em', 'lēg_e', 'lēx'],
    ['lēg_ēs', 'lēg_um', 'lēg_ibus', 'lēg_ēs', 'lēg_ibus', 'lēg_ēs']
  ],
  [
    3,
    'onus -eris n',
    'burden / бремя',
    ['onus', 'oner_is', 'oner_ī', 'onus', 'oner_e', 'onus'],
    ['oner_a', 'oner_um', 'oner_ibus', 'oner_a', 'oner_ibus', 'oner_a']
  ],
  [
    3,
    'vectīgal -ālis n',
    'tax / налог',
    ['vectīgal', 'vectīgāl_is', 'vectīgāl_ī', 'vectīgal', 'vectīgāl_e', 'vectīgal'],
    ['vectīgāl_ia', 'vectīgāl_ium', 'vectīgāl_ibus', 'vectīgāl_ia', 'vectīgāl_ibus', 'vectīgāl_ia']
  ],
  [
    3,
    'sapō -ōnis m',
    'soap / мыло',
    ['sapō', 'sapōn_is', 'sapōn_ī', 'sapōn_em', 'sapōn_e', 'sapō'],
    ['sapōn_ēs', 'sapōn_um', 'sapōn_ibus', 'sapōn_ēs', 'sapōn_ibus', 'sapōn_ēs']
  ],
  [
    4,
    'currus -ūs m',
    'chariot / колесница',
    ['curr_us', 'curr_ūs', 'curr_uī', 'curr_um', 'curr_ū', 'curr_us'],
    ['curr_ūs', 'curr_uum', 'curr_ibus', 'curr_ūs', 'curr_ibus', 'curr_ūs']
  ],
  [
    4,
    'cāsus -ūs m',
    'falling / падение',
    ['cās_us', 'cās_ūs', 'cās_uī', 'cās_um', 'cās_ū', 'cās_us'],
    ['cās_ūs', 'cās_uum', 'cās_ibus', 'cās_ūs', 'cās_ibus', 'cās_ūs']
  ],
  [
    4,
    'sēnsus -ūs m',
    'sense / чувство',
    ['sēns_us', 'sēns_ūs', 'sēns_uī', 'sēns_um', 'sēns_ū', 'sēns_us'],
    ['sēns_ūs', 'sēns_uum', 'sēns_ibus', 'sēns_ūs', 'sēns_ibus', 'sēns_ūs']
  ],
  [
    4,
    'gradus -ūs m',
    'step / шаг',
    ['grad_us', 'grad_ūs', 'grad_uī', 'grad_um', 'grad_ū', 'grad_us'],
    ['grad_ūs', 'grad_uum', 'grad_ibus', 'grad_ūs', 'grad_ibus', 'grad_ūs']
  ],
  [
    4,
    'lacus -ūs m',
    'lake / озеро',
    ['lac_us', 'lac_ūs', 'lac_uī', 'lac_um', 'lac_ū', 'lac_us'],
    ['lac_ūs', 'lac_uum', 'lac_ibus', 'lac_ūs', 'lac_ibus', 'lac_ūs']
  ],
  [
    4,
    'manus -ūs f',
    'hand / рука',
    ['man_us', 'man_ūs', 'man_uī', 'man_um', 'man_ū', 'man_us'],
    ['man_ūs', 'man_uum', 'man_ibus', 'man_ūs', 'man_ibus', 'man_ūs']
  ],
  [
    4,
    'nurus -ūs f',
    'daughter-in-law / невестка',
    ['nur_us', 'nur_ūs', 'nur_uī', 'nur_um', 'nur_ū', 'nur_us'],
    ['nur_ūs', 'nur_uum', 'nur_ibus', 'nur_ūs', 'nur_ibus', 'nur_ūs']
  ],
  [
    4,
    'genū -ūs n',
    'knee / колено',
    ['gen_ū', 'gen_ūs', 'gen_ū', 'gen_ū', 'gen_ū', 'gen_ū'],
    ['gen_ūs', 'gen_uum', 'gen_ibus', 'gen_ūs', 'gen_ibus', 'gen_ūs']
  ],
  [
    4,
    'verū -ūs n',
    'spit, broach / вертел',
    ['ver_ū', 'ver_ūs', 'ver_ū', 'ver_ū', 'ver_ū', 'ver_ū'],
    ['ver_ua', 'ver_uum', 'ver_ibus', 'ver_ua', 'ver_ibus', 'ver_ua']
  ],
  [
    4,
    'cornū -ūs n',
    'horn / рог',
    ['corn_ū', 'corn_ūs', 'corn_ū', 'corn_ū', 'corn_ū', 'corn_ū'],
    ['corn_ua', 'corn_uum', 'corn_ibus', 'corn_ua', 'corn_ibus', 'corn_ua']
  ],
  [
    5,
    'seriēs -ēī f',
    'row, series / ряд, вереница',
    ['seri_ēs', 'seri_ēī', 'seri_ēī', 'seri_em', 'seri_ē', 'seri_ēs'],
    ['seri_ēs', 'seri_ērum', 'seri_ēbus', 'seri_ēs', 'seri_ēbus', 'seri_ēs']
  ],
  [
    5,
    'faciēs -ēī f',
    'face / лицо',
    ['faci_ēs', 'faci_ēī', 'faci_ēī', 'faci_em', 'faci_ē', 'faci_ēs'],
    ['faci_ēs', 'faci_ērum', 'faci_ēbus', 'faci_ēs', 'faci_ēbus', 'faci_ēs']
  ],
  [
    5,
    'rēs reī f',
    'thing; matter / вещь; дело',
    ['r_ēs', 'r_eī', 'r_eī', 'r_em', 'r_ē', 'r_ēs'],
    ['r_ēs', 'r_ērum', 'r_ēbus', 'r_ēs', 'r_ēbus', 'r_ēs']
  ],
  [
    5,
    'diēs -ēī mf',
    'day / день',
    ['di_ēs', 'di_ēī', 'di_ēī', 'di_em', 'di_ē', 'di_ēs'],
    ['di_ēs', 'di_ērum', 'di_ēbus', 'di_ēs', 'di_ēbus', 'di_ēs']
  ],
  [
    5,
    'merīdiēs -ēī m',
    'noon / полдень',
    ['merīdi_ēs', 'merīdi_ēī', 'merīdi_ēī', 'merīdi_em', 'merīdi_ē', 'merīdi_ēs'],
    ['merīdi_ēs', 'merīdi_ērum', 'merīdi_ēbus', 'merīdi_ēs', 'merīdi_ēbus', 'merīdi_ēs']
  ],
  [
    5,
    'speciēs -ēī f',
    'look / взгляд',
    ['speci_ēs', 'speci_ēī', 'speci_ēī', 'speci_em', 'speci_ē', 'speci_ēs'],
    ['speci_ēs', 'speci_ērum', 'speci_ēbus', 'speci_ēs', 'speci_ēbus', 'speci_ēs']
  ],
  [
    5,
    'fidēs -eī f',
    'trust, faith / вера, доверие',
    ['fid_ēs', 'fid_eī', 'fid_eī', 'fid_em', 'fid_ē', 'fid_ēs'],
    ['fid_ēs', 'fid_ērum', 'fid_ēbus', 'fid_ēs', 'fid_ēbus', 'fid_ēs']
  ],
  [
    5,
    'spēs -eī f',
    'hope / надежда',
    ['sp_ēs', 'sp_eī', 'sp_eī', 'sp_em', 'sp_ē', 'sp_ēs'],
    ['sp_ēs', 'sp_ērum', 'sp_ēbus', 'sp_ēs', 'sp_ēbus', 'sp_ēs']
  ],
  [
    5,
    'aciēs -ēī f',
    'sharp edge / остриё',
    ['aci_ēs', 'aci_ēī', 'aci_ēī', 'aci_em', 'aci_ē', 'aci_ēs'],
    ['aci_ēs', 'aci_ērum', 'aci_ēbus', 'aci_ēs', 'aci_ēbus', 'aci_ēs']
  ],
  [
    5,
    'glaciēs -ēī f',
    'ice / лёд',
    ['glaci_ēs', 'glaci_ēī', 'glaci_ēī', 'glaci_em', 'glaci_ē', 'glaci_ēs'],
    ['glaci_ēs', 'glaci_ērum', 'glaci_ēbus', 'glaci_ēs', 'glaci_ēbus', 'glaci_ēs']
  ],
];