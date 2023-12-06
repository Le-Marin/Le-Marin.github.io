const VOCABULARY = [
  ['I', 'am~āre', 'love / любить'],
  ['I', 'clām~āre', 'cry, shout / кричать'],
  ['I', 'rog~āre', 'ask / спрашивать'],
  ['I', 'lev~āre', 'elevate / поднимать, повышать'],
  ['I', 'iter~āre', 'repeat / повторять'],
  ['I', 'aedific~āre', 'build / строить'],
  ['I', 'voc~āre', 'call / звать'],
  ['I', 'cant~āre', 'sing / петь'],
  ['I', 'numer~āre', 'count / считать'],
  ['I', 'salūt~āre', 'greet / приветствовать'],

  ['II', 'vid~eō vīd~ī vīs~um -ēre', 'see / видеть'],
  ['II', 'respond~eō respond~ī respōns~um -ēre', 'answer / отвечать'],
  ['II', 'hab~ēre', 'have / иметь'],
  ['II', 'ten~eō -u~ī tent~um -ēre', 'hold / держать'],
  ['II', 'terg~eō ters~ī ters~um -ēre', 'wipe / протирать'],
  ['II', 'mov~eō mōv~ī mōt~um -ēre', 'move / двигать'],
  ['II', 'torr~eō -u~ī tost~um -ēre', 'dry, parch / сушить, жечь'],
  ['II', 'fov~eō fōv~ī fōt~um -ēre', 'keep warm / согревать'],
  ['II', 'compl~eō -ēv~ī -ēt~um -ēre', 'fill up / заполнять'],
  ['II', 'arc~ēre', 'hold off / (у, с)держивать'],

  ['III a', 'sūm~ō sūmps~ī sūmpt~um -ere', 'take / брать'],
  ['III a', 'ag~ō ēg~ī āct~um -ere', 'do / делать'],
  ['III a', 'veh~ō vex~ī vect~um -ere', 'carry, convey / нести, везти'],
  ['III a', 'vert~ō vers~ī vers~um -ere', 'turn / вертеть, поворачивать'],
  ['III a', 'em~ō ēm~ī ēmpt~um -ere', 'buy / покупать'],
  ['III a', 'dūc~ō dūx~ī duct~um -ere', 'lead / вести', {
    13: [
      ['', 'dūc', ''],
      ['', 'dūc|i_te', ''],
    ],
  }],
  ['III a', 'crēd~ō crēdid~ī -itum -ere', 'believe / верить'],
  ['III a', 'lūd~ō lūs~ī lūs~um -ere', 'play / играть'],
  ['III a', 'toll~ō sustul~ī sublāt~um -ere', 'lift, raise / поднимать'],
  ['III a', 'fall~ō fefell~ī fals~um -ere', 'deceive / обманывать'],

  ['III b', 'fac~iō fēc~ī fact~um -ere', 'make / делать', {
    2: [
      ['fī_ō', 'fī_s', 'fi_t'],
      ['fī_mus', 'fī_tis', 'fī:u_nt'],
    ],
    4: [
      ['fī^ēba_m', 'fī^ēbā_s', 'fī^ēba_t'],
      ['fī^ēbā_mus', 'fī^ēbā_tis', 'fī^ēba_nt'],
    ],
    6: [
      ['fī^a_m', 'fī^ē_s', 'fī^e_t'],
      ['fī^ē_mus', 'fī^ē_tis', 'fī^e_nt'],
    ],
    13: [
      ['', 'fac', ''],
      ['', 'fac|i_te', ''],
    ],
  }],
  ['III b', 'cap~iō cēp~ī capt~um -ere', 'take, take hold of / брать, хватать'],
  ['III b', 'iac~iō iēc~ī iact~um -ere', 'throw / кидать'],
  ['III b', 'a-spic~iō -spex~ī -spect~um -ere', 'look / глядеть'],
  ['III b', 'ac-cip~iō -cēp~ī -cept~um -ere', 'accept / принимать'],
  ['III b', 'inter-fic~iō -fēc~ī -fect~um -ere', 'kill / убивать'],
  ['III b', 'rap~iō -u~ī rapt~um -ere', 'seize; carry off / хватать; похищать'],
  ['III b', 'cōn-fic~iō -fēc~ī -fect~um -ere', 'complete / завершать'],
  ['III b', 'af-fic~iō -fēc~ī -fect~um -ere', 'affect / причинять'],
  ['III b', 'cōn-spic~iō -spex~ī -spect~um -ere', 'get sight of / заметить'],

  ['IV', 'aud~īre', 'hear; listen / слышать; слушать'],
  ['IV', 'fīn~īre', 'limit / ограничивать'],
  ['IV', 'moll~īre', 'soften / размягчать'],
  ['IV', 'pol~īre', 'polish / полировать'],
  ['IV', 'lin~īre', 'smear / смазывать'],
  ['IV', 'pūn~īre', 'punish / наказывать'],
  ['IV', 'fer~īre', 'strike, smite / ударять, поражать'],
  ['IV', 'haur~iō haus~ī haust~um -īre', 'draw; drink up / черпать; выпивать'],
  ['IV', 'sepel~iō -īv~ī sepult~um -īre', 'bury, inter / хоронить, погребать'],
  ['IV', 'sc~īre', 'know / знать'],
];