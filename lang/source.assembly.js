// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/Nessphoro/sublimeassembly>
// and licensed `bsd-3-clause`.
// See <https://github.com/wooorm/starry-night> for more info.
/** @type {import('../lib/index.js').Grammar} */
const grammar = {
  extensions: ['.asm', '.a51', '.i', '.inc', '.nasm'],
  names: ['assembly', 'asm', 'nasm'],
  patterns: [
    {
      match:
        '\\b(?i)(v)?(aaa|aad|aam|aas|adc|add|addpd|addps|addsd|addss|addsubpd|addsubps|aesdec|aesdeclast|aesenc|aesenclast|aesimc|aeskeygenassist|and|andpd|andps|andnpd|andnps|arpl|blendpd|bmi|blendps|blendvpd|blendvps|bound|bsf|bsr|bswap|bt|btc|btr|bts|cbw|cwde|cdqe|clc|cld|cflush|clts|cmc|cmov(n?e|ge?|ae?|le?|be?|n?o|n?z)|cmp|cmppd|cmpps|cmps|cnpsb|cmpsw|cmpsd|cmpsq|cmpss|cmpxchg|cmpxchg8b|cmpxchg16b|comisd|comiss|cpuid|crc32|cvtdq2pd|cvtdq2ps|cvtpd2dq|cvtpd2pi|cvtpd2ps|cvtpi2pd|cvtpi2ps|cvtps2dq|cvtps2pd|cvtps2pi|cvtsd2si|cvtsd2ss|cvts2sd|cvtsi2ss|cvtss2sd|cvtss2si|cvttpd2dq|cvtpd2pi|cvttps2dq|cvttps2pi|cvttps2dq|cvttps2pi|cvttsd2si|cvttss2si|cwd|cdq|cqo|daa|das|dec|div|divpd|divps|divsd|divss|dppd|dpps|emms|enter|extractps|f2xm1|fabs|fadd|faddp|fiadd|fbld|fbstp|fchs|fclex|fnclex|fcmov(n?e|ge?|ae?|le?|be?|n?o|n?z)|fcom|fcmop|fcompp|fcomi|fcomip|fucomi|fucomip|fcos|fdecstp|fdiv|fdivp|fidiv|fdivr|fdivrp|fidivr|ffree|ficom|ficomp|fild|fincstp|finit|fnint|fist|fistp|fisttp|fld|fld1|fldl2t|fldl2e|fldpi|fldlg2|fldln2|fldz|fldcw|fldenv|fmul|fmulp|fimul|fnop|fpatan|fprem|fprem1|fptan|frndint|frstor|fsave|fnsave|fscale|fsin|fsincos|fsqrt|fst|fstp|fstcw|fnstcw|fstenv|fnstenv|fsts(w?)|fnstsw|fsub|fsubp|fisub|fsubr|fsubrp|fisubr|ftst|fucom|fucomp|fucompp|fxam|fxch|fxrstor|fxsave|fxtract|fyl2x|fyl2xp1|haddpd|haddps|husbpd|hsubps|idiv|imul|in|inc|ins|insb|insw|insd|insertps|int|into|invd|invlpg|invpcid|iret|iretd|iretq|lahf|lar|lddqu|ldmxcsr|lds|les|lfs|lgs|lss|lea|leave|lfence|lgdt|lidt|llgdt|lmsw|lock|lods|lodsb|lodsw|lodsd|lodsq|lsl|ltr|maskmovdqu|maskmovq|maxpd|maxps|maxsd|maxss|mfence|minpd|minps|minsd|minss|monitor|mov|movapd|movaps|movbe|movd|movq|movddup|movdqa|movdqu|movq2q|movhlps|movhpd|movhps|movlhps|movlpd|movlps|movmskpd|movmskps|movntdqa|movntdq|movnti|movntpd|movntps|movntq|movq|movq2dq|movs|movsb|movsw|movsd|movsq|movsd|movshdup|movsldup|movss|movsx|movsxd|movupd|movups|movzx|mpsadbw|mul|mulpd|mulps|mulsd|mulss|mwait|neg|not|or|orpd|orps|out|outs|outsb|outsw|outsd|pabsb|pabsw|pabsd|packsswb|packssdw|packusdw|packuswb|paddb|paddw|paddd|paddq|paddsb|paddsw|paddusb|paddusw|palignr|pand|pandn|pause|pavgb|pavgw|pblendvb|pblendw|pclmulqdq|pcmpeqb|pcmpeqw|pcmpeqd|pcmpeqq|pcmpestri|pcmpestrm|pcmptb|pcmptgw|pcmpgtd|pcmpgtq|pcmpistri|pcmpisrm|pdep|pext|pextrb|pextrd|pextrq|pextrw|phaddw|phaddd|phaddsw|phinposuw|phsubw|phsubd|phsubsw|pinsrb|pinsrd|pinsrq|pinsrw|pmaddubsw|pmadddwd|pmaxsb|pmaxsd|pmaxsw|pmaxsw|pmaxub|pmaxud|pmaxuw|pminsb|pminsd|pminsw|pminub|pminud|pminuw|pmovmskb|pmovsx|pmovzx|pmuldq|pmulhrsw|pmulhuw|pmulhw|pmulld|pmullw|pmuludw|pop|popa|popad|popcnt|popf|popfd|popfq|por|prefetch|psadbw|pshufb|pshufd|pshufhw|pshuflw|pshufw|psignb|psignw|psignd|pslldq|psllw|pslld|psllq|psraw|psrad|psrldq|psrlw|psrld|psrlq|psubb|psubw|psubd|psubq|psubsb|psubsw|psubusb|psubusw|test|ptest|punpckhbw|punpckhwd|punpckhdq|punpckhddq|punpcklbw|punpcklwd|punpckldq|punpckldqd|push|pusha|pushad|pushf|pushfd|pxor|prcl|rcr|rol|ror|rcpps|rcpss|rdfsbase|rdgsbase|rdmsr|rdpmc|rdrand|rdtsc|rdtscp|rep|repe|repz|repne|repnz|roundpd|roundps|roundsd|roundss|rsm|rsqrps|rsqrtss|sahf|sal|sar|shl|shr|sbb|scas|scasb|scasw|scasd|set(n?e|ge?|ae?|le?|be?|n?o|n?z)|sfence|sgdt|shld|shrd|shufpd|shufps|sidt|sldt|smsw|sqrtpd|sqrtps|sqrtsd|sqrtss|stc|std|stmxcsr|stos|stosb|stosw|stosd|stosq|str|sub|subpd|subps|subsd|subss|swapgs|syscall|sysenter|sysexit|sysret|teset|ucomisd|ucomiss|ud2|unpckhpd|unpckhps|unpcklpd|unpcklps|vbroadcast|vcvtph2ps|vcvtp2sph|verr|verw|vextractf128|vinsertf128|vmaskmov|vpermilpd|vpermilps|vperm2f128|vtestpd|vzeroall|vzeroupper|wait|fwait|wbinvd|wrfsbase|wrgsbase|wrmsr|xadd|xchg|xgetbv|xlat|xlatb|xor|xorpd|xorps|xrstor|xsave|xsaveopt|xsetbv|lzcnt|extrq|insertq|movntsd|movntss|vfmaddpd|vfmaddps|vfmaddsd|vfmaddss|vfmaddsubbpd|vfmaddsubps|vfmsubaddpd|vfmsubaddps|vfmsubpd|vfmsubps|vfmsubsd|vfnmaddpd|vfnmaddps|vfnmaddsd|vfnmaddss|vfnmsubpd|vfnmusbps|vfnmusbsd|vfnmusbss|vbroadcastss|vbroadcastsd|vbroadcastf128|vmaskmovps|vmaskmovpd|cvt|xor|cli|sti|hlt|nop|lock|wait|enter|leave|ret|loop(n?e|n?z)?|call|j(mp|n?e|n?ge?|n?ae?|le?|be?|n?o|n?z|n?c|n?p|n?b))\\b',
      name: 'keyword.control.assembly'
    },
    {
      match:
        '\\b(?i)(RBP|EBP|BP|CS|DS|ES|FS|GS|SS|RAX|EAX|RBX|EBX|RCX|ECX|RDX|EDX|RIP|EIP|IP|RSP|ESP|SP|RSI|ESI|SI|RDI|EDI|DI|RFLAGS|EFLAGS|FLAGS|R(8|9|10|11|12|13|14|15)(d|w|b)?|(Y|X)MM([0-9]|10|11|12|13|14|15)|(A|B|C|D)(X|H|L)|CR[0-4]|DR[0-7]|TR6|TR7|EFER)\\b',
      name: 'variable.parameter.register.assembly'
    },
    {match: '\\b[0-9]+\\b', name: 'constant.character.decimal.assembly'},
    {
      match: '\\b(0x)(?i)[A-F0-9]+\\b',
      name: 'constant.character.hexadecimal.assembly'
    },
    {
      match: '\\b(?i)[A-F0-9]+h\\b',
      name: 'constant.character.hexadecimal.assembly'
    },
    {match: '\\b(?i)(0|1)+b\\b', name: 'constant.character.binary.assembly'},
    {match: '("|\').*?("|\')', name: 'string.assembly'},
    {begin: '^\\[', end: '\\]', name: 'support.function.directive.assembly'},
    {
      captures: {2: {name: 'entity.name.function.assembly'}},
      match: '(^struc) ([_a-zA-Z][_a-zA-Z0-9]*)',
      name: 'support.function.directive.assembly'
    },
    {match: '^endstruc', name: 'support.function.directive.assembly'},
    {
      captures: {
        1: {name: 'entity.name.function.assembly'},
        2: {name: 'constant.character.assembly'}
      },
      match: '^%macro ([_a-zA-Z][_a-zA-Z0-9]*) ([0-9]+)',
      name: 'support.function.directive.assembly'
    },
    {match: '^%endmacro', name: 'support.function.directive.assembly'},
    {begin: '^%comment', end: '^%endcomment', name: 'comment.assembly'},
    {
      captures: {
        1: {name: 'support.function.directive.assembly'},
        13: {name: 'entity.name.function.assembly'}
      },
      match:
        '\\s*(?i)(%define|%ifndef|%xdefine|%idefine|%undef|%assign|%defstr|%strcat|%strlen|%substr|%00|%0|%rotate|%rep|%endrep|%include|\\$\\$|\\$|%unmacro|%if|%elif|%else|%endif|%(el)?ifdef|%(el)?ifmacro|%(el)?ifctx|%(el)?ifidn|%(el)?ifidni|%(el)?ifid|%(el)?ifnum|%(el)?ifstr|%(el)?iftoken|%(el)?ifempty|%(el)?ifenv|%pathsearch|%depend|%use|%push|%pop|%repl|%arg|%stacksize|%local|%error|%warning|%fatal|%line|%!|%comment|%endcomment|__NASM_VERSION_ID__|__NASM_VER__|__FILE__|__LINE__|__BITS__|__OUTPUT_FORMAT__|__DATE__|__TIME__|__DATE_NUM__|_TIME__NUM__|__UTC_DATE__|__UTC_TIME__|__UTC_DATE_NUM__|__UTC_TIME_NUM__|__POSIX_TIME__|__PASS__|ISTRUC|AT|IEND|BITS 16|BITS 32|BITS 64|USE16|USE32|__SECT__|ABSOLUTE|EXTERN|GLOBAL|COMMON|CPU|FLOAT)\\b ?([_a-zA-Z][_a-zA-Z0-9]*)?'
    },
    {
      match:
        '\\b(?i)(d(b|w|d|q|t|o|y)|res(b|w|d|q|t|o)|equ|times|align|alignb|sectalign|section|ptr|byte|word|dword|qword|incbin|)\\b',
      name: 'support.function.directive.assembly'
    },
    {match: '(\\s)*;.*$', name: 'comment.assembly'},
    {match: '(,|\\[|\\]|\\+|\\-|\\*)', name: 'source.assembly'},
    {match: '^\\s*%%(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\s*%\\$(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\.?(.-[;])+?:$', name: 'entity.name.function.assembly'},
    {match: '^\\.?(.-[;])+?\\b', name: 'entity.name.function.assembly'},
    {match: '.+?', name: 'entity.name.function.assembly'}
  ],
  scopeName: 'source.assembly'
}

export default grammar
