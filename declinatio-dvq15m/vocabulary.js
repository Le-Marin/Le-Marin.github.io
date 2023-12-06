const VOCABULARY = [
  [
    1,
    'opera -ae f',
    'work; effort / работа; усилие',
    ['oper_a', 'oper_ae', 'oper_ae', 'oper_am', 'oper_ā', 'oper_a'],
    ['oper_ae', 'oper_ārum', 'oper_īs', 'oper_ās', 'oper_īs', 'oper_ae'],
  ],
  [
    1,
    'alauda -ae f',
    'lark / жаворонок',
    ['alaud_a', 'alaud_ae', 'alaud_ae', 'alaud_am', 'alaud_ā', 'alaud_a'],
    ['alaud_ae', 'alaud_ārum', 'alaud_īs', 'alaud_ās', 'alaud_īs', 'alaud_ae'],
  ],
  [
    1,
    'tragoedia -ae f',
    'tragedy / трагедия',
    ['tragoedi_a', 'tragoedi_ae', 'tragoedi_ae', 'tragoedi_am', 'tragoedi_ā', 'tragoedi_a'],
    ['tragoedi_ae', 'tragoedi_ārum', 'tragoedi_īs', 'tragoedi_ās', 'tragoedi_īs', 'tragoedi_ae'],
  ],
  [
    1,
    'fāma -ae f',
    'talk, rumour / молва, слух',
    ['fām_a', 'fām_ae', 'fām_ae', 'fām_am', 'fām_ā', 'fām_a'],
    ['fām_ae', 'fām_ārum', 'fām_īs', 'fām_ās', 'fām_īs', 'fām_ae'],
  ],
  [
    1,
    'rota -ae f',
    'wheel / колесо',
    ['rot_a', 'rot_ae', 'rot_ae', 'rot_am', 'rot_ā', 'rot_a'],
    ['rot_ae', 'rot_ārum', 'rot_īs', 'rot_ās', 'rot_īs', 'rot_ae'],
  ],
  [
    1,
    'stēlla -ae f',
    'star / звезда',
    ['stēll_a', 'stēll_ae', 'stēll_ae', 'stēll_am', 'stēll_ā', 'stēll_a'],
    ['stēll_ae', 'stēll_ārum', 'stēll_īs', 'stēll_ās', 'stēll_īs', 'stēll_ae'],
  ],
  [
    1,
    'umbra -ae f',
    'shadow / тень',
    ['umbr_a', 'umbr_ae', 'umbr_ae', 'umbr_am', 'umbr_ā', 'umbr_a'],
    ['umbr_ae', 'umbr_ārum', 'umbr_īs', 'umbr_ās', 'umbr_īs', 'umbr_ae'],
  ],
  [
    1,
    'scientia -ae f',
    'knowledge / знание',
    ['scienti_a', 'scienti_ae', 'scienti_ae', 'scienti_am', 'scienti_ā', 'scienti_a'],
    ['scienti_ae', 'scienti_ārum', 'scienti_īs', 'scienti_ās', 'scienti_īs', 'scienti_ae'],
  ],
  [
    1,
    'convīva -ae m',
    'guest, table companion / гость, сотрапезник',
    ['convīv_a', 'convīv_ae', 'convīv_ae', 'convīv_am', 'convīv_ā', 'convīv_a'],
    ['convīv_ae', 'convīv_ārum', 'convīv_īs', 'convīv_ās', 'convīv_īs', 'convīv_ae'],
  ],
  [
    1,
    'pīrāta -ae m',
    'pirate / пират',
    ['pīrāt_a', 'pīrāt_ae', 'pīrāt_ae', 'pīrāt_am', 'pīrāt_ā', 'pīrāt_a'],
    ['pīrāt_ae', 'pīrāt_ārum', 'pīrāt_īs', 'pīrāt_ās', 'pīrāt_īs', 'pīrāt_ae'],
  ],
  [
    2,
    'tympanum -ī n',
    'drum, timbrel / барабан, тимпан',
    ['tympan_um', 'tympan_ī', 'tympan_ō', 'tympan_um', 'tympan_ō', 'tympan_um'],
    ['tympan_a', 'tympan_ōrum', 'tympan_īs', 'tympan_a', 'tympan_īs', 'tympan_a'],
  ],
  [
    2,
    'sagum -ī n',
    'cloak / плащ',
    ['sag_um', 'sag_ī', 'sag_ō', 'sag_um', 'sag_ō', 'sag_um'],
    ['sag_a', 'sag_ōrum', 'sag_īs', 'sag_a', 'sag_īs', 'sag_a'],
  ],
  [
    2,
    'rēgnum -ī n',
    'kingdom / королевство',
    ['rēgn_um', 'rēgn_ī', 'rēgn_ō', 'rēgn_um', 'rēgn_ō', 'rēgn_um'],
    ['rēgn_a', 'rēgn_ōrum', 'rēgn_īs', 'rēgn_a', 'rēgn_īs', 'rēgn_a'],
  ],
  [
    2,
    'furnus -ī m',
    'oven / печь',
    ['furn_us', 'furn_ī', 'furn_ō', 'furn_um', 'furn_ō', 'furn_e'],
    ['furn_ī', 'furn_ōrum', 'furn_īs', 'furn_ōs', 'furn_īs', 'furn_ī'],
  ],
  [
    2,
    'cervus -ī m',
    'deer, stag / олень',
    ['cerv_us', 'cerv_ī', 'cerv_ō', 'cerv_um', 'cerv_ō', 'cerv_e'],
    ['cerv_ī', 'cerv_ōrum', 'cerv_īs', 'cerv_ōs', 'cerv_īs', 'cerv_ī'],
  ],
  [
    2,
    'fīlius -ī m',
    'son / сын',
    ['fīli_us', 'fīli_ī', 'fīli_ō', 'fīli_um', 'fīli_ō', 'fīl_ī'],
    ['fīli_ī', 'fīli_ōrum', 'fīli_īs', 'fīli_ōs', 'fīli_īs', 'fīli_ī'],
  ],
  [
    2,
    'sorbus -ī f',
    'sorb, rowan / рябина',
    ['sorb_us', 'sorb_ī', 'sorb_ō', 'sorb_um', 'sorb_ō', 'sorb_e'],
    ['sorb_ī', 'sorb_ōrum', 'sorb_īs', 'sorb_ōs', 'sorb_īs', 'sorb_ī'],
  ],
  [
    2,
    'aper -prī m',
    'wild boar / кабан',
    ['aper', 'apr_ī', 'apr_ō', 'apr_um', 'apr_ō', 'aper'],
    ['apr_ī', 'apr_ōrum', 'apr_īs', 'apr_ōs', 'apr_īs', 'apr_ī'],
  ],
  [
    2,
    'gener -erī m',
    'son-in-law / зять',
    ['gener', 'gener_ī', 'gener_ō', 'gener_um', 'gener_ō', 'gener'],
    ['gener_ī', 'gener_ōrum', 'gener_īs', 'gener_ōs', 'gener_īs', 'gener_ī'],
  ],
  [
    2,
    'vir -ī m',
    'man / мужчина',
    ['vir', 'vir_ī', 'vir_ō', 'vir_um', 'vir_ō', 'vir'],
    ['vir_ī', 'vir_ōrum', 'vir_īs', 'vir_ōs', 'vir_īs', 'vir_ī'],
  ],
  [
    3,
    'urbs urbis f',
    'city / город',
    ['urbs', 'urb_is', 'urb_ī', 'urb_em', 'urb_e', 'urbs'],
    ['urb_ēs', 'urb_ium', 'urb_ibus', 'urb_ēs', 'urb_ibus', 'urb_ēs'],
  ],
  [
    3,
    'regiō -ōnis f',
    'region / регион, край',
    ['regiō', 'regiōn_is', 'regiōn_ī', 'regiōn_em', 'regiōn_e', 'regiō'],
    ['regiōn_ēs', 'regiōn_um', 'regiōn_ibus', 'regiōn_ēs', 'regiōn_ibus', 'regiōn_ēs'],
  ],
  [
    3,
    'calamitās -ātis f',
    'calamity / бедствие',
    ['calamitās', 'calamitāt_is', 'calamitāt_ī', 'calamitāt_em', 'calamitāt_e', 'calamitās'],
    ['calamitāt_ēs', 'calamitāt_um', 'calamitāt_ibus', 'calamitāt_ēs', 'calamitāt_ibus', 'calamitāt_ēs'],
  ],
  [
    3,
    'carmen -inis n',
    'song / песня',
    ['carmen', 'carmin_is', 'carmin_ī', 'carmen', 'carmin_e', 'carmen'],
    ['carmin_a', 'carmin_um', 'carmin_ibus', 'carmin_a', 'carmin_ibus', 'carmin_a'],
  ],
  [
    3,
    'hostis -is m',
    'enemy / враг',
    ['host_is', 'host_is', 'host_ī', 'host_em', 'host_e', 'host_is'],
    ['host_ēs', 'host_ium', 'host_ibus', 'host_ēs', 'host_ibus', 'host_ēs'],
  ],
  [
    3,
    'pāx -ācis f',
    'peace / мир',
    ['pāx', 'pāc_is', 'pāc_ī', 'pāc_em', 'pāc_e', 'pāx'],
    ['pāc_ēs', 'pāc_um', 'pāc_ibus', 'pāc_ēs', 'pāc_ibus', 'pāc_ēs'],
  ],
  [
    3,
    'lēx -ēgis f',
    'law / закон',
    ['lēx', 'lēg_is', 'lēg_ī', 'lēg_em', 'lēg_e', 'lēx'],
    ['lēg_ēs', 'lēg_um', 'lēg_ibus', 'lēg_ēs', 'lēg_ibus', 'lēg_ēs'],
  ],
  [
    3,
    'onus -eris n',
    'burden / бремя',
    ['onus', 'oner_is', 'oner_ī', 'onus', 'oner_e', 'onus'],
    ['oner_a', 'oner_um', 'oner_ibus', 'oner_a', 'oner_ibus', 'oner_a'],
  ],
  [
    3,
    'vectīgal -ālis n',
    'tax / налог',
    ['vectīgal', 'vectīgāl_is', 'vectīgāl_ī', 'vectīgal', 'vectīgāl_ī', 'vectīgal'],
    ['vectīgāl_ia', 'vectīgāl_ium', 'vectīgāl_ibus', 'vectīgāl_ia', 'vectīgāl_ibus', 'vectīgāl_ia'],
  ],
  [
    3,
    'sapō -ōnis m',
    'soap / мыло',
    ['sapō', 'sapōn_is', 'sapōn_ī', 'sapōn_em', 'sapōn_e', 'sapō'],
    ['sapōn_ēs', 'sapōn_um', 'sapōn_ibus', 'sapōn_ēs', 'sapōn_ibus', 'sapōn_ēs'],
  ],
  [
    4,
    'currus -ūs m',
    'chariot / колесница',
    ['curr_us', 'curr_ūs', 'curr_uī', 'curr_um', 'curr_ū', 'curr_us'],
    ['curr_ūs', 'curr_uum', 'curr_ibus', 'curr_ūs', 'curr_ibus', 'curr_ūs'],
  ],
  [
    4,
    'cāsus -ūs m',
    'falling / падение',
    ['cās_us', 'cās_ūs', 'cās_uī', 'cās_um', 'cās_ū', 'cās_us'],
    ['cās_ūs', 'cās_uum', 'cās_ibus', 'cās_ūs', 'cās_ibus', 'cās_ūs'],
  ],
  [
    4,
    'sēnsus -ūs m',
    'sense / чувство',
    ['sēns_us', 'sēns_ūs', 'sēns_uī', 'sēns_um', 'sēns_ū', 'sēns_us'],
    ['sēns_ūs', 'sēns_uum', 'sēns_ibus', 'sēns_ūs', 'sēns_ibus', 'sēns_ūs'],
  ],
  [
    4,
    'gradus -ūs m',
    'step / шаг',
    ['grad_us', 'grad_ūs', 'grad_uī', 'grad_um', 'grad_ū', 'grad_us'],
    ['grad_ūs', 'grad_uum', 'grad_ibus', 'grad_ūs', 'grad_ibus', 'grad_ūs'],
  ],
  [
    4,
    'lacus -ūs m',
    'lake / озеро',
    ['lac_us', 'lac_ūs', 'lac_uī', 'lac_um', 'lac_ū', 'lac_us'],
    ['lac_ūs', 'lac_uum', 'lac_ibus/lac_ubus', 'lac_ūs', 'lac_ibus/lac_ubus', 'lac_ūs'],
  ],
  [
    4,
    'manus -ūs f',
    'hand / рука',
    ['man_us', 'man_ūs', 'man_uī', 'man_um', 'man_ū', 'man_us'],
    ['man_ūs', 'man_uum', 'man_ibus', 'man_ūs', 'man_ibus', 'man_ūs'],
  ],
  [
    4,
    'nurus -ūs f',
    'daughter-in-law / невестка',
    ['nur_us', 'nur_ūs', 'nur_uī', 'nur_um', 'nur_ū', 'nur_us'],
    ['nur_ūs', 'nur_uum', 'nur_ibus', 'nur_ūs', 'nur_ibus', 'nur_ūs'],
  ],
  [
    4,
    'genū -ūs n',
    'knee / колено',
    ['gen_ū', 'gen_ūs', 'gen_ū', 'gen_ū', 'gen_ū', 'gen_ū'],
    ['gen_ua', 'gen_uum', 'gen_ibus', 'gen_ua', 'gen_ibus', 'gen_ua'],
  ],
  [
    4,
    'verū -ūs n',
    'spit, broach / вертел',
    ['ver_ū', 'ver_ūs', 'ver_ū', 'ver_ū', 'ver_ū', 'ver_ū'],
    ['ver_ua', 'ver_uum', 'ver_ibus/ver_ubus', 'ver_ua', 'ver_ibus/ver_ubus', 'ver_ua'],
  ],
  [
    4,
    'cornū -ūs n',
    'horn / рог',
    ['corn_ū', 'corn_ūs', 'corn_ū', 'corn_ū', 'corn_ū', 'corn_ū'],
    ['corn_ua', 'corn_uum', 'corn_ibus', 'corn_ua', 'corn_ibus', 'corn_ua'],
  ],
  [
    5,
    'seriēs -ēī f',
    'row, series / ряд, вереница',
    ['seri_ēs', 'seri_ēī', 'seri_ēī', 'seri_em', 'seri_ē', 'seri_ēs'],
    ['seri_ēs', 'seri_ērum', 'seri_ēbus', 'seri_ēs', 'seri_ēbus', 'seri_ēs'],
  ],
  [
    5,
    'faciēs -ēī f',
    'face / лицо',
    ['faci_ēs', 'faci_ēī', 'faci_ēī', 'faci_em', 'faci_ē', 'faci_ēs'],
    ['faci_ēs', 'faci_ērum', 'faci_ēbus', 'faci_ēs', 'faci_ēbus', 'faci_ēs'],
  ],
  [
    5,
    'rēs reī f',
    'thing; matter / вещь; дело',
    ['r_ēs', 'r_eī', 'r_eī', 'r_em', 'r_ē', 'r_ēs'],
    ['r_ēs', 'r_ērum', 'r_ēbus', 'r_ēs', 'r_ēbus', 'r_ēs'],
  ],
  [
    5,
    'diēs -ēī mf',
    'day / день',
    ['di_ēs', 'di_ēī', 'di_ēī', 'di_em', 'di_ē', 'di_ēs'],
    ['di_ēs', 'di_ērum', 'di_ēbus', 'di_ēs', 'di_ēbus', 'di_ēs'],
  ],
  [
    5,
    'merīdiēs -ēī m',
    'noon / полдень',
    ['merīdi_ēs', 'merīdi_ēī', 'merīdi_ēī', 'merīdi_em', 'merīdi_ē', 'merīdi_ēs'],
    ['merīdi_ēs', 'merīdi_ērum', 'merīdi_ēbus', 'merīdi_ēs', 'merīdi_ēbus', 'merīdi_ēs'],
  ],
  [
    5,
    'speciēs -ēī f',
    'look / взгляд',
    ['speci_ēs', 'speci_ēī', 'speci_ēī', 'speci_em', 'speci_ē', 'speci_ēs'],
    ['speci_ēs', 'speci_ērum', 'speci_ēbus', 'speci_ēs', 'speci_ēbus', 'speci_ēs'],
  ],
  [
    5,
    'fidēs -eī f',
    'trust, faith / вера, доверие',
    ['fid_ēs', 'fid_eī', 'fid_eī', 'fid_em', 'fid_ē', 'fid_ēs'],
    ['fid_ēs', 'fid_ērum', 'fid_ēbus', 'fid_ēs', 'fid_ēbus', 'fid_ēs'],
  ],
  [
    5,
    'spēs -eī f',
    'hope / надежда',
    ['sp_ēs', 'sp_eī', 'sp_eī', 'sp_em', 'sp_ē', 'sp_ēs'],
    ['sp_ēs', 'sp_ērum', 'sp_ēbus', 'sp_ēs', 'sp_ēbus', 'sp_ēs'],
  ],
  [
    5,
    'aciēs -ēī f',
    'sharp edge / остриё',
    ['aci_ēs', 'aci_ēī', 'aci_ēī', 'aci_em', 'aci_ē', 'aci_ēs'],
    ['aci_ēs', 'aci_ērum', 'aci_ēbus', 'aci_ēs', 'aci_ēbus', 'aci_ēs'],
  ],
  [
    5,
    'glaciēs -ēī f',
    'ice / лёд',
    ['glaci_ēs', 'glaci_ēī', 'glaci_ēī', 'glaci_em', 'glaci_ē', 'glaci_ēs'],
    ['glaci_ēs', 'glaci_ērum', 'glaci_ēbus', 'glaci_ēs', 'glaci_ēbus', 'glaci_ēs'],
  ],
  [
    6,
    'ancilla bona',
    'good maiden / хорошая служанка',
    ['ancill_a bon_a', 'ancill_ae bon_ae', 'ancill_ae bon_ae', 'ancill_am bon_am', 'ancill_ā bon_ā', 'ancill_a bon_a'],
    ['ancill_ae bon_ae', 'ancill_ārum bon_ārum', 'ancill_īs bon_īs', 'ancill_ās bon_ās', 'ancill_īs bon_īs', 'ancill_ae bon_ae'],
  ],
  [
    6,
    'olīva virēns',
    'verdant olive / зеленеющая олива',
    ['olīv_a virēns', 'olīv_ae virent_is', 'olīv_ae virent_ī', 'olīv_am virent_em', 'olīv_ā virent_ī/virent_e', 'olīv_a virēns'],
    ['olīv_ae virent_ēs', 'olīv_ārum virent_ium', 'olīv_īs virent_ibus', 'olīv_ās virent_ēs', 'olīv_īs virent_ibus', 'olīv_ae virent_ēs'],
  ],
  [
    6,
    'clāvis aēnea',
    'copper key / медный ключ',
    ['clāv_is aēne_a', 'clāv_is aēne_ae', 'clāv_ī aēne_ae', 'clāv_em aēne_am', 'clāv_e aēne_ā', 'clāv_is aēne_a'],
    ['clāv_ēs aēne_ae', 'clāv_ium aēne_ārum', 'clāv_ibus aēne_īs', 'clāv_ēs aēne_ās', 'clāv_ibus aēne_īs', 'clāv_ēs aēne_ae'],
  ],
  [
    6,
    'paradīsus terrestris',
    'earthly paradise / земной рай',
    ['paradīs_us terrestr_is', 'paradīs_ī terrestr_is', 'paradīs_ō terrestr_ī', 'paradīs_um terrestr_em', 'paradīs_ō terrestr_ī', 'paradīs_e terrestr_is'],
    ['paradīs_ī terrestr_ēs', 'paradīs_ōrum terrestr_ium', 'paradīs_īs terrestr_ibus', 'paradīs_ōs terrestr_ēs', 'paradīs_īs terrestr_ibus', 'paradīs_ī terrestr_ēs'],
  ],
  [
    6,
    'hortus amoenus',
    'lovely garden / прелестный сад',
    ['hort_us amoen_us', 'hort_ī amoen_ī', 'hort_ō amoen_ō', 'hort_um amoen_um', 'hort_ō amoen_ō', 'hort_e amoen_e'],
    ['hort_ī amoen_ī', 'hort_ōrum amoen_ōrum', 'hort_īs amoen_īs', 'hort_ōs amoen_ōs', 'hort_īs amoen_īs', 'hort_ī amoen_ī'],
  ],
  [
    6,
    'exercitus magnus',
    'big army / большое войско',
    ['exercit_us magn_us', 'exercit_ūs magn_ī', 'exercit_uī magn_ō', 'exercit_um magn_um', 'exercit_ū magn_ō', 'exercit_us magn_e'],
    ['exercit_ūs magn_ī', 'exercit_uum magn_ōrum', 'exercit_ibus magn_īs', 'exercit_ūs magn_ōs', 'exercit_ibus magn_īs', 'exercit_ūs magn_ī'],
  ],
  [
    6,
    'ātrium rēgium',
    'regal hall / царский чертог',
    ['ātri_um rēgi_um', 'ātri_ī rēgi_ī', 'ātri_ō rēgi_ō', 'ātri_um rēgi_um', 'ātri_ō rēgi_ō', 'ātri_um rēgi_um'],
    ['ātri_a rēgi_a', 'ātri_ōrum rēgi_ōrum', 'ātri_īs rēgi_īs', 'ātri_a rēgi_a', 'ātri_īs rēgi_īs', 'ātri_a rēgi_a'],
  ],
  [
    6,
    'conclāve clausum',
    'closed room / закрытая комната',
    ['conclāv_e claus_um', 'conclāv_is claus_ī', 'conclāv_ī claus_ō', 'conclāv_e claus_um', 'conclāv_ī claus_ō', 'conclāv_e claus_um'],
    ['conclāv_ia claus_a', 'conclāv_ium claus_ōrum', 'conclāv_ibus claus_īs', 'conclāv_ia claus_a', 'conclāv_ibus claus_īs', 'conclāv_ia claus_a'],
  ],
  [
    6,
    'lūx obscūra',
    'dusky light / сумеречный свет',
    ['lūx obscūr_a', 'lūc_is obscūr_ae', 'lūc_ī obscūr_ae', 'lūc_em obscūr_am', 'lūc_e obscūr_ā', 'lūx obscūr_a'],
    ['lūc_ēs obscūr_ae', 'lūc_um obscūr_ārum', 'lūc_ibus obscūr_īs', 'lūc_ēs obscūr_ās', 'lūc_ibus obscūr_īs', 'lūc_ēs obscūr_ae'],
  ],
  [
    6,
    'piscis rārus',
    'rare fish / редкая рыба',
    ['pisc_is rār_us', 'pisc_is rār_ī', 'pisc_ī rār_ō', 'pisc_em rār_um', 'pisc_e rār_ō', 'pisc_is rār_e'],
    ['pisc_ēs rār_ī', 'pisc_ium rār_ōrum', 'pisc_ibus rār_īs', 'pisc_ēs rār_ōs', 'pisc_ibus rār_īs', 'pisc_ēs rār_ī'],
  ],
  [
    6,
    'homō mendāx',
    'lying man / лживый человек',
    ['homō mendāx', 'homin_is mendāc_is', 'homin_ī mendāc_ī', 'homin_em mendāc_em', 'homin_e mendāc_ī', 'homō mendāx'],
    ['homin_ēs mendāc_ēs', 'homin_um mendāc_ium', 'homin_ibus mendāc_ibus', 'homin_ēs mendāc_ēs', 'homin_ibus mendāc_ibus', 'homin_ēs mendāc_ēs'],
  ],
  [
    6,
    'vectīgal ingēns',
    'enormous tax / огромный налог',
    ['vectīgal ingēns', 'vectīgāl_is ingent_is', 'vectīgāl_ī ingent_ī', 'vectīgal ingēns', 'vectīgāl_ī ingent_ī', 'vectīgal ingēns'],
    ['vectīgāl_ia ingent_ia', 'vectīgāl_ium ingent_ium', 'vectīgāl_ibus ingent_ibus', 'vectīgāl_ia ingent_ia', 'vectīgāl_ibus ingent_ibus', 'vectīgāl_ia ingent_ia'],
  ],
  [
    6,
    'sedīle lapideum',
    'stone seat / каменное седалище',
    ['sedīl_e lapide_um', 'sedīl_is lapide_ī', 'sedīl_ī lapide_ō', 'sedīl_e lapide_um', 'sedīl_ī lapide_ō', 'sedīl_e lapide_um'],
    ['sedīl_ia lapide_a', 'sedīl_ium lapide_ōrum', 'sedīl_ibus lapide_īs', 'sedīl_ia lapide_a', 'sedīl_ibus lapide_īs', 'sedīl_ia lapide_a'],
  ],
  [
    6,
    'secūris cruenta',
    'blood-stained axe / окровавленная секира',
    ['secūr_is cruent_a', 'secūr_is cruent_ae', 'secūr_ī cruent_ae', 'secūr_im/secūr_em cruent_am', 'secūr_ī/secūr_e cruent_ā', 'secūr_is cruent_a'],
    ['secūr_ēs cruent_ae', 'secūr_ium cruent_ārum', 'secūr_ibus cruent_īs', 'secūr_ēs cruent_ās', 'secūr_ibus cruent_īs', 'secūr_ēs cruent_ae'],
  ],
  [
    6,
    'turris ruīnōsa',
    'ruinous tower / ветхая башня',
    ['turr_is ruīnōs_a', 'turr_is ruīnōs_ae', 'turr_ī ruīnōs_ae', 'turr_im/turr_em ruīnōs_am', 'turr_ī/turr_e ruīnōs_ā', 'turr_is ruīnōs_a'],
    ['turr_ēs ruīnōs_ae', 'turr_ium ruīnōs_ārum', 'turr_ibus ruīnōs_īs', 'turr_ēs ruīnōs_ās', 'turr_ibus ruīnōs_īs', 'turr_ēs ruīnōs_ae'],
  ],
  [
    6,
    'textus Latīnus',
    'Latin text / латинский текст',
    ['text_us Latīn_us', 'text_ūs Latīn_ī', 'text_uī Latīn_ō', 'text_um Latīn_um', 'text_ū Latīn_ō', 'text_us Latīn_e'],
    ['text_ūs Latīn_ī', 'text_uum Latīn_ōrum', 'text_ibus Latīn_īs', 'text_ūs Latīn_ōs', 'text_ibus Latīn_īs', 'text_ūs Latīn_ī'],
  ],
  [
    6,
    'sēnsus ācer',
    'keen sense / острое чувство',
    ['sēns_us ācer', 'sēns_ūs ācr_is', 'sēns_uī ācr_ī', 'sēns_um ācr_em', 'sēns_ū ācr_ī', 'sēns_us ācer'],
    ['sēns_ūs ācr_ēs', 'sēns_uum ācr_ium', 'sēns_ibus ācr_ibus', 'sēns_ūs ācr_ēs', 'sēns_ibus ācr_ibus', 'sēns_ūs ācr_ēs'],
  ],
  [
    6,
    'glaciēs lūbrica',
    'slippery ice / скользкий лёд',
    ['glaci_ēs lūbric_a', 'glaci_ēī lūbric_ae', 'glaci_ēī lūbric_ae', 'glaci_em lūbric_am', 'glaci_ē lūbric_ā', 'glaci_ēs lūbric_a'],
    ['glaci_ēs lūbric_ae', 'glaci_ērum lūbric_ārum', 'glaci_ēbus lūbric_īs', 'glaci_ēs lūbric_ās', 'glaci_ēbus lūbric_īs', 'glaci_ēs lūbric_ae'],
  ],
  [
    7,
    'ego',
    'I / я',
    ['ego', 'meī', 'mihi', 'mē', 'mē', 'ego'],
    [],
  ],
  [
    7,
    'tū',
    'you (sg) / ты',
    ['tū', 'tuī', 'tibi', 'tē', 'tē', 'tū'],
    [],
  ],
  [
    7,
    'nōs',
    'we / мы',
    [],
    ['nōs', 'nostrī/nostrum', 'nōbīs', 'nōs', 'nōbīs', 'nōs'],
  ],
  [
    7,
    'vōs',
    'you (pl) / вы',
    [],
    ['vōs', 'vestrī/vestrum', 'vōbīs', 'vōs', 'vōbīs', 'vōs'],
  ],
  [
    7,
    'is m',
    'this, that / этот, тот',
    ['is', 'e_ius', 'e_ī', 'e_um', 'e_ō'],
    ['e_ī/i_ī', 'e_ōrum', 'e_īs/i_īs', 'e_ōs', 'e_īs/i_īs'],
  ],
  [
    7,
    'ea f',
    'this, that / эта, та',
    ['e_a', 'e_ius', 'e_ī', 'e_am', 'e_ā'],
    ['e_ae', 'e_ārum', 'e_īs/i_īs', 'e_ās', 'e_īs/i_īs'],
  ],
  [
    7,
    'id n',
    'this, that / это, то',
    ['id', 'e_ius', 'e_ī', 'id', 'e_ō'],
    ['e_a', 'e_ōrum', 'e_īs/i_īs', 'e_a', 'e_īs/i_īs'],
  ],
  [
    7,
    'hic m',
    'this / этот',
    ['h_ic', 'h_uius', 'h_uic', 'h_unc', 'h_ōc'],
    ['h_ī', 'h_ōrum', 'h_īs', 'h_ōs', 'h_īs'],
  ],
  [
    7,
    'haec f',
    'this / эта',
    ['h_aec', 'h_uius', 'h_uic', 'h_anc', 'h_āc'],
    ['h_ae', 'h_ārum', 'h_īs', 'h_ās', 'h_īs'],
  ],
  [
    7,
    'hoc n',
    'this / это',
    ['h_oc', 'h_uius', 'h_uic', 'h_oc', 'h_ōc'],
    ['h_aec', 'h_ōrum', 'h_īs', 'h_aec', 'h_īs'],
  ],
  [
    7,
    'ille m',
    'that / тот',
    ['ill_e', 'ill_īus', 'ill_ī', 'ill_um', 'ill_ō'],
    ['ill_ī', 'ill_ōrum', 'ill_īs', 'ill_ōs', 'ill_īs'],
  ],
  [
    7,
    'illa f',
    'that / та',
    ['ill_a', 'ill_īus', 'ill_ī', 'ill_am', 'ill_ā'],
    ['ill_ae', 'ill_ārum', 'ill_īs', 'ill_ās', 'ill_īs'],
  ],
  [
    7,
    'illud n',
    'that / то',
    ['ill_ud', 'ill_īus', 'ill_ī', 'ill_ud', 'ill_ō'],
    ['ill_a', 'ill_ōrum', 'ill_īs', 'ill_a', 'ill_īs'],
  ],
  [
    7,
    'iste m',
    'that of yours / этот твой',
    ['ist_e', 'ist_īus', 'ist_ī', 'ist_um', 'ist_ō'],
    ['ist_ī', 'ist_ōrum', 'ist_īs', 'ist_ōs', 'ist_īs'],
  ],
  [
    7,
    'ista f',
    'that of yours / эта твоя',
    ['ist_a', 'ist_īus', 'ist_ī', 'ist_am', 'ist_ā'],
    ['ist_ae', 'ist_ārum', 'ist_īs', 'ist_ās', 'ist_īs'],
  ],
  [
    7,
    'istud n',
    'that of yours / это твоё',
    ['ist_ud', 'ist_īus', 'ist_ī', 'ist_ud', 'ist_ō'],
    ['ist_a', 'ist_ōrum', 'ist_īs', 'ist_a', 'ist_īs'],
  ],
  [
    7,
    'ipse m',
    'oneself / сам',
    ['ips_e', 'ips_īus', 'ips_ī', 'ips_um', 'ips_ō'],
    ['ips_ī', 'ips_ōrum', 'ips_īs', 'ips_ōs', 'ips_īs'],
  ],
  [
    7,
    'ipsa f',
    'oneself / сама',
    ['ips_a', 'ips_īus', 'ips_ī', 'ips_am', 'ips_ā'],
    ['ips_ae', 'ips_ārum', 'ips_īs', 'ips_ās', 'ips_īs'],
  ],
  [
    7,
    'ipsum n',
    'itself / само',
    ['ips_um', 'ips_īus', 'ips_ī', 'ips_um', 'ips_ō'],
    ['ips_a', 'ips_ōrum', 'ips_īs', 'ips_a', 'ips_īs'],
  ],
  [
    7,
    'quī m',
    'who, that / который',
    ['qu_ī', 'cu_ius', 'cu_i', 'qu_em', 'qu_ō'],
    ['qu_ī', 'qu_ōrum', 'qu_ibus', 'qu_ōs', 'qu_ibus'],
  ],
  [
    7,
    'quae f',
    'who, that / которая',
    ['qu_ae', 'cu_ius', 'cu_i', 'qu_am', 'qu_ā'],
    ['qu_ae', 'qu_ārum', 'qu_ibus', 'qu_ās', 'qu_ibus'],
  ],
  [
    7,
    'quod n',
    'which, that / которое',
    ['qu_od', 'cu_ius', 'cu_i', 'qu_od', 'qu_ō'],
    ['qu_ae', 'qu_ōrum', 'qu_ibus', 'qu_ae', 'qu_ibus'],
  ],
  [
    7,
    'quis m',
    'who? / кто?',
    ['qu_is', 'cu_ius', 'cu_i', 'qu_em', 'qu_ō'],
    ['qu_ī', 'qu_ōrum', 'qu_ibus', 'qu_ōs', 'qu_ibus'],
  ],
  [
    7,
    'quid n',
    'what? / что?',
    ['qu_id', 'cu_ius', 'cu_i', 'qu_id', 'qu_ō'],
    ['qu_ae', 'qu_ōrum', 'qu_ibus', 'qu_ae', 'qu_ibus'],
  ],
  [
    7,
    'alter m',
    '(an)other / другой',
    ['alter', 'alter_īus', 'alter_ī', 'alter_um', 'alter_ō', 'alter'],
    ['alter_ī', 'alter_ōrum', 'alter_īs', 'alter_ōs', 'alter_īs', 'alter_ī'],
  ],
  [
    7,
    'altera f',
    '(an)other / другая',
    ['alter_a', 'alter_īus', 'alter_ī', 'alter_am', 'alter_ā', 'alter_a'],
    ['alter_ae', 'alter_ārum', 'alter_īs', 'alter_ās', 'alter_īs', 'alter_ae'],
  ],
  [
    7,
    'alterum n',
    '(an)other / другое',
    ['alter_um', 'alter_īus', 'alter_ī', 'alter_um', 'alter_ō', 'alter_um'],
    ['alter_a', 'alter_ōrum', 'alter_īs', 'alter_a', 'alter_īs', 'alter_a'],
  ],
  [
    7,
    'alius m',
    'other / другой',
    ['ali_us', 'alter_īus', 'ali_ī/ali_ō', 'ali_um', 'ali_ō', 'ali_e'],
    ['ali_ī', 'ali_ōrum', 'ali_īs', 'ali_ōs', 'ali_īs', 'ali_ī'],
  ],
  [
    7,
    'alia f',
    'other / другая',
    ['ali_a', 'alter_īus', 'ali_ī/ali_ae', 'ali_am', 'ali_ā', 'ali_a'],
    ['ali_ae', 'ali_ārum', 'ali_īs', 'ali_ās', 'ali_īs', 'ali_ae'],
  ],
  [
    7,
    'aliud n',
    'other / другое',
    ['ali_ud', 'alter_īus', 'ali_ī/ali_ō', 'ali_ud', 'ali_ō', 'ali_ud'],
    ['ali_a', 'ali_ōrum', 'ali_īs', 'ali_a', 'ali_īs', 'ali_a'],
  ],
  [
    7,
    'uter m',
    'which or either (of two) / который или какой-л. (из двух)',
    ['uter', 'utr_īus', 'utr_ī', 'utr_um', 'utr_ō'],
    ['utr_ī', 'utr_ōrum', 'utr_īs', 'utr_ōs', 'utr_īs'],
  ],
  [
    7,
    'utra f',
    'which or either (of two) / которая или какая-л. (из двух)',
    ['utr_a', 'utr_īus', 'utr_ī', 'utr_am', 'utr_ā'],
    ['utr_ae', 'utr_ārum', 'utr_īs', 'utr_ās', 'utr_īs'],
  ],
  [
    7,
    'utrum n',
    'which or either (of two) / которое или какое-л. (из двух)',
    ['utr_um', 'utr_īus', 'utr_ī', 'utr_um', 'utr_ō'],
    ['utr_a', 'utr_ōrum', 'utr_īs', 'utr_a', 'utr_īs'],
  ],
  [
    7,
    'neuter m',
    'neither (of two) / ни тот ни другой, ни один (из двух)',
    ['neuter', 'neutr_īus', 'neutr_ī', 'neutr_um', 'neutr_ō'],
    ['neutr_ī', 'neutr_ōrum', 'neutr_īs', 'neutr_ōs', 'neutr_īs'],
  ],
  [
    7,
    'neutra f',
    'neither (of two) / ни та ни другая, ни одна (из двух)',
    ['neutr_a', 'neutr_īus', 'neutr_ī', 'neutr_am', 'neutr_ā'],
    ['neutr_ae', 'neutr_ārum', 'neutr_īs', 'neutr_ās', 'neutr_īs'],
  ],
  [
    7,
    'neutrum n',
    'neither (of two) / ни то ни другое, ни одно (из двух)',
    ['neutr_um', 'neutr_īus', 'neutr_ī', 'neutr_um', 'neutr_ō'],
    ['neutr_a', 'neutr_ōrum', 'neutr_īs', 'neutr_a', 'neutr_īs'],
  ],
  [
    8,
    'ūnus m',
    'one / один',
    ['ūn_us', 'ūn_īus', 'ūn_ī', 'ūn_um', 'ūn_ō', 'ūn_e'],
    ['ūn_ī', 'ūn_ōrum', 'ūn_īs', 'ūn_ōs', 'ūn_īs', 'ūn_ī'],
  ],
  [
    8,
    'ūna f',
    'one / одна',
    ['ūn_a', 'ūn_īus', 'ūn_ī', 'ūn_am', 'ūn_ā', 'ūn_a'],
    ['ūn_ae', 'ūn_ārum', 'ūn_īs', 'ūn_ās', 'ūn_īs', 'ūn_ae'],
  ],
  [
    8,
    'ūnum n',
    'one / одно',
    ['ūn_um', 'ūn_īus', 'ūn_ī', 'ūn_um', 'ūn_ō', 'ūn_um'],
    ['ūn_a', 'ūn_ōrum', 'ūn_īs', 'ūn_a', 'ūn_īs', 'ūn_a'],
  ],
  [
    8,
    'duo m',
    'two / два',
    [],
    ['du_o', 'du_ōrum', 'du_ōbus', 'du_ōs', 'du_ōbus', 'du_o'],
  ],
  [
    8,
    'duae f',
    'two / две',
    [],
    ['du_ae', 'du_ārum', 'du_ābus', 'du_ās', 'du_ābus', 'du_ae'],
  ],
  [
    8,
    'duo n',
    'two / два',
    [],
    ['du_o', 'du_ōrum', 'du_ōbus', 'du_o', 'du_ōbus', 'du_o'],
  ],
  [
    8,
    'trēs m',
    'three / три',
    [],
    ['tr_ēs', 'tr_ium', 'tr_ibus', 'tr_ēs', 'tr_ibus', 'tr_ēs'],
  ],
  [
    8,
    'trēs f',
    'three / три',
    [],
    ['tr_ēs', 'tr_ium', 'tr_ibus', 'tr_ēs', 'tr_ibus', 'tr_ēs'],
  ],
  [
    8,
    'tria n',
    'three / три',
    [],
    ['tr_ia', 'tr_ium', 'tr_ibus', 'tr_ia', 'tr_ibus', 'tr_ia'],
  ],
];