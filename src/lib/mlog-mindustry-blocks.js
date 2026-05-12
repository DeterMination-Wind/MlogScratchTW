const categoryColors = {
    io: '#a08a8a',
    block: '#d4816b',
    operation: '#877bad',
    control: '#6bb2b2',
    unit: '#c7b59d',
    world: '#6b84d4'
};

const dropdown = (name, options) => ({
    type: 'field_dropdown',
    name,
    options: options.map(option => [option.label, option.value])
});

const text = (name, value) => ({
    type: 'field_input',
    name,
    text: value
});

const option = (label, value = label) => ({label, value});

const logicOpOptions = [
    option('+', 'add'),
    option('-', 'sub'),
    option('*', 'mul'),
    option('/', 'div'),
    option('//', 'idiv'),
    option('%', 'mod'),
    option('%%', 'emod'),
    option('^', 'pow'),
    option('==', 'equal'),
    option('not', 'notEqual'),
    option('and', 'land'),
    option('<', 'lessThan'),
    option('<=', 'lessThanEq'),
    option('>', 'greaterThan'),
    option('>=', 'greaterThanEq'),
    option('===', 'strictEqual'),
    option('<<', 'shl'),
    option('>>', 'shr'),
    option('>>>', 'ushr'),
    option('or', 'or'),
    option('b-and', 'and'),
    option('xor', 'xor'),
    option('flip', 'not'),
    option('max', 'max'),
    option('min', 'min'),
    option('angle', 'angle'),
    option('anglediff', 'angleDiff'),
    option('len', 'len'),
    option('noise', 'noise'),
    option('abs', 'abs'),
    option('sign', 'sign'),
    option('log', 'log'),
    option('logn', 'logn'),
    option('log10', 'log10'),
    option('floor', 'floor'),
    option('ceil', 'ceil'),
    option('round', 'round'),
    option('sqrt', 'sqrt'),
    option('rand', 'rand'),
    option('sin', 'sin'),
    option('cos', 'cos'),
    option('tan', 'tan'),
    option('asin', 'asin'),
    option('acos', 'acos'),
    option('atan', 'atan')
];

const conditionOptions = [
    option('==', 'equal'),
    option('not', 'notEqual'),
    option('<', 'lessThan'),
    option('<=', 'lessThanEq'),
    option('>', 'greaterThan'),
    option('>=', 'greaterThanEq'),
    option('===', 'strictEqual'),
    option('always', 'always')
];

const controlOptions = [
    option('enabled'),
    option('shoot'),
    option('shootp'),
    option('config'),
    option('color')
];

const radarTargetOptions = [
    option('any'),
    option('enemy'),
    option('ally'),
    option('player'),
    option('attacker'),
    option('flying'),
    option('boss'),
    option('ground')
];

const radarSortOptions = [
    option('distance'),
    option('health'),
    option('shield'),
    option('armor'),
    option('maxHealth')
];

const drawOptions = [
    option('clear'),
    option('color'),
    option('col'),
    option('stroke'),
    option('line'),
    option('rect'),
    option('lineRect'),
    option('poly'),
    option('linePoly'),
    option('triangle'),
    option('image'),
    option('print'),
    option('translate'),
    option('scale'),
    option('rotate')
];

const lookupOptions = [
    option('block'),
    option('unit'),
    option('item'),
    option('liquid')
];

const unitControlOptions = [
    option('idle'),
    option('stop'),
    option('move'),
    option('approach'),
    option('pathfind'),
    option('autoPathfind'),
    option('boost'),
    option('target'),
    option('targetp'),
    option('itemDrop'),
    option('itemTake'),
    option('payDrop'),
    option('payTake'),
    option('payEnter'),
    option('mine'),
    option('flag'),
    option('build'),
    option('deconstruct'),
    option('getBlock'),
    option('within'),
    option('unbind')
];

const locateOptions = [
    option('ore'),
    option('building'),
    option('spawn'),
    option('damaged')
];

const blockFlagOptions = [
    option('core'),
    option('storage'),
    option('generator'),
    option('turret'),
    option('factory'),
    option('repair'),
    option('battery'),
    option('reactor'),
    option('drill'),
    option('shield')
];

const tileLayerOptions = [
    option('floor'),
    option('ore'),
    option('block'),
    option('building')
];

const tileLayerSettableOptions = [
    option('floor'),
    option('ore'),
    option('block')
];

const statusModeOptions = [
    option('apply'),
    option('clear')
];

const logicRuleOptions = [
    option('currentWaveTime'),
    option('waveTimer'),
    option('waves'),
    option('wave'),
    option('waveSpacing'),
    option('waveSending'),
    option('attackMode'),
    option('enemyCoreBuildRadius'),
    option('dropZoneRadius'),
    option('unitCap'),
    option('mapArea'),
    option('lighting'),
    option('canGameOver'),
    option('ambientLight'),
    option('solarMultiplier'),
    option('dragMultiplier'),
    option('ban'),
    option('unban'),
    option('pauseDisabled'),
    option('buildSpeed'),
    option('unitHealth'),
    option('unitBuildSpeed'),
    option('unitMineSpeed'),
    option('unitCost'),
    option('unitDamage'),
    option('blockHealth'),
    option('blockDamage'),
    option('rtsMinWeight'),
    option('rtsMinSquad')
];

const messageTypeOptions = [
    option('notify'),
    option('announce'),
    option('toast'),
    option('mission')
];

const cutsceneOptions = [
    option('pan'),
    option('zoom'),
    option('stop')
];

const fetchOptions = [
    option('unit'),
    option('unitCount'),
    option('player'),
    option('playerCount'),
    option('core'),
    option('coreCount'),
    option('build'),
    option('buildCount')
];

const playSoundModeOptions = [
    option('global'),
    option('positional')
];

const markerControlOptions = [
    option('remove'),
    option('world'),
    option('minimap'),
    option('autoscale'),
    option('pos'),
    option('endPos'),
    option('drawLayer'),
    option('color'),
    option('radius'),
    option('stroke'),
    option('outline'),
    option('rotation'),
    option('shape'),
    option('arc'),
    option('flushText'),
    option('fontSize'),
    option('textHeight'),
    option('textAlign'),
    option('lineAlign'),
    option('labelFlags'),
    option('texture'),
    option('textureSize'),
    option('posi'),
    option('uvi'),
    option('colori')
];

const block = (type, message, args = [], tooltip = '') => ({type, message, args, tooltip});

export const mindustryLogicCategories = [
    {
        id: 'mlog_io',
        name: 'I/O',
        color: categoryColors.io,
        blocks: [
            block('comment', '# %1', [
                text('text', 'note')
            ]),
            block('read', 'read %1 = %2 at %3', [
                text('out', 'result'),
                text('cell', 'cell1'),
                text('index', '0')
            ]),
            block('write', 'write %1 to %2 at %3', [
                text('value', 'result'),
                text('cell', 'cell1'),
                text('index', '0')
            ]),
            block('draw', 'draw %1 %2 %3 %4 %5 %6 %7', [
                dropdown('mode', drawOptions),
                text('x', '0'),
                text('y', '0'),
                text('p1', '0'),
                text('p2', '0'),
                text('p3', '0'),
                text('p4', '0')
            ]),
            block('print', 'print %1', [
                text('value', '"frog"')
            ]),
            block('printchar', 'print char %1', [
                text('value', '65')
            ]),
            block('format', 'format %1', [
                text('value', '"frog"')
            ])
        ]
    },
    {
        id: 'mlog_block',
        name: 'Block',
        color: categoryColors.block,
        blocks: [
            block('drawflush', 'drawflush to %1', [
                text('display', 'display1')
            ]),
            block('printflush', 'printflush to %1', [
                text('message', 'message1')
            ]),
            block('getlink', '%1 = link# %2', [
                text('out', 'result'),
                text('index', '0')
            ]),
            block('control', 'set %1 of %2 %3 %4 %5 %6', [
                dropdown('mode', controlOptions),
                text('target', 'block1'),
                text('p1', '0'),
                text('p2', '0'),
                text('p3', '0'),
                text('p4', '0')
            ]),
            block('radar', 'radar from %1 %2 %3 %4 order %5 sort %6 out %7', [
                text('from', 'turret1'),
                dropdown('target1', radarTargetOptions),
                dropdown('target2', radarTargetOptions),
                dropdown('target3', radarTargetOptions),
                text('order', '1'),
                dropdown('sort', radarSortOptions),
                text('out', 'result')
            ]),
            block('sensor', '%1 = %2 in %3', [
                text('out', 'result'),
                text('property', '@copper'),
                text('target', 'block1')
            ])
        ]
    },
    {
        id: 'mlog_operation',
        name: 'Operation',
        color: categoryColors.operation,
        blocks: [
            block('set', '%1 = %2', [
                text('out', 'result'),
                text('value', '0')
            ]),
            block('op', '%1 = %2 %3 %4', [
                text('out', 'result'),
                text('a', 'a'),
                dropdown('op', logicOpOptions),
                text('b', 'b')
            ]),
            block('select', '%1 = if %2 %3 %4 then %5 else %6', [
                text('result', 'result'),
                text('comp0', 'x'),
                dropdown('op', conditionOptions),
                text('comp1', 'false'),
                text('a', 'a'),
                text('b', 'b')
            ]),
            block('lookup', '%1 = lookup %2 # %3', [
                text('result', 'result'),
                dropdown('type', lookupOptions),
                text('id', '0')
            ]),
            block('packcolor', '%1 = pack %2 %3 %4 %5', [
                text('result', 'result'),
                text('r', '1'),
                text('g', '0'),
                text('b', '0'),
                text('a', '1')
            ]),
            block('unpackcolor', '%1 %2 %3 %4 = unpack %5', [
                text('r', 'r'),
                text('g', 'g'),
                text('b', 'b'),
                text('a', 'a'),
                text('value', 'color')
            ])
        ]
    },
    {
        id: 'mlog_control',
        name: 'Control',
        color: categoryColors.control,
        blocks: [
            block('wait', 'wait %1 sec', [
                text('value', '0.5')
            ]),
            block('stop', 'stop'),
            block('end', 'end'),
            block('jump', 'jump %1 if %2 %3 %4', [
                text('dest', 'label'),
                text('value', 'x'),
                dropdown('op', conditionOptions),
                text('compare', 'false')
            ])
        ]
    },
    {
        id: 'mlog_unit',
        name: 'Unit',
        color: categoryColors.unit,
        blocks: [
            block('ubind', 'ubind type %1', [
                text('unit', '@poly')
            ]),
            block('ucontrol', 'ucontrol %1 %2 %3 %4 %5 %6', [
                dropdown('mode', unitControlOptions),
                text('p1', '0'),
                text('p2', '0'),
                text('p3', '0'),
                text('p4', '0'),
                text('p5', '0')
            ]),
            block('uradar', 'uradar %1 %2 %3 order %4 sort %5 out %6', [
                dropdown('target1', radarTargetOptions),
                dropdown('target2', radarTargetOptions),
                dropdown('target3', radarTargetOptions),
                text('order', '1'),
                dropdown('sort', radarSortOptions),
                text('out', 'result')
            ]),
            block('ulocate', 'ulocate %1 flag %2 enemy %3 ore %4 outX %5 outY %6 found %7 build %8', [
                dropdown('type', locateOptions),
                dropdown('flag', blockFlagOptions),
                text('enemy', 'true'),
                text('ore', '@copper'),
                text('outX', 'outx'),
                text('outY', 'outy'),
                text('outFound', 'found'),
                text('outBuild', 'building')
            ])
        ]
    },
    {
        id: 'mlog_world',
        name: 'World',
        color: categoryColors.world,
        blocks: [
            block('getblock', '%1 = get %2 at %3 , %4', [
                text('result', 'result'),
                dropdown('layer', tileLayerOptions),
                text('x', '0'),
                text('y', '0')
            ]),
            block('setblock', 'set %1 at %2 , %3 to %4 team %5 rotation %6', [
                dropdown('layer', tileLayerSettableOptions),
                text('x', '0'),
                text('y', '0'),
                text('block', '@air'),
                text('team', '@derelict'),
                text('rotation', '0')
            ]),
            block('spawn', '%1 = spawn %2 at %3 , %4 team %5 rot %6', [
                text('result', 'result'),
                text('unit', '@dagger'),
                text('x', '10'),
                text('y', '10'),
                text('team', '@sharded'),
                text('rotation', '90')
            ]),
            block('status', '%1 status %2 to %3 for %4 sec', [
                dropdown('mode', statusModeOptions),
                text('effect', 'wet'),
                text('unit', 'unit'),
                text('duration', '10')
            ]),
            block('weathersense', '%1 = weather %2', [
                text('out', 'result'),
                text('weather', '@rain')
            ]),
            block('weatherset', 'set weather %1 state %2', [
                text('weather', '@rain'),
                text('state', 'true')
            ]),
            block('spawnwave', 'spawnwave natural %1 x %2 y %3', [
                text('natural', 'false'),
                text('x', '10'),
                text('y', '10')
            ]),
            block('setrule', 'setrule %1 value %2 p1 %3 p2 %4 p3 %5 p4 %6', [
                dropdown('rule', logicRuleOptions),
                text('value', '10'),
                text('p1', '0'),
                text('p2', '0'),
                text('p3', '100'),
                text('p4', '100')
            ]),
            block('message', 'message %1 duration %2 success %3', [
                dropdown('type', messageTypeOptions),
                text('duration', '3'),
                text('outSuccess', '@wait')
            ]),
            block('cutscene', 'cutscene %1 %2 %3 %4 %5', [
                dropdown('action', cutsceneOptions),
                text('p1', '100'),
                text('p2', '100'),
                text('p3', '0.06'),
                text('p4', '0')
            ]),
            block('effect', 'effect %1 x %2 y %3 size %4 color %5 data %6', [
                text('type', 'warn'),
                text('x', '0'),
                text('y', '0'),
                text('sizerot', '2'),
                text('color', '%ffaaff'),
                text('data', '')
            ]),
            block('explosion', 'explosion team %1 x %2 y %3 radius %4 damage %5 air %6 ground %7 pierce %8 effect %9', [
                text('team', '@crux'),
                text('x', '0'),
                text('y', '0'),
                text('radius', '5'),
                text('damage', '50'),
                text('air', 'true'),
                text('ground', 'true'),
                text('pierce', 'false'),
                text('effect', 'true')
            ]),
            block('setrate', 'setrate ipt %1', [
                text('amount', '10')
            ]),
            block('fetch', '%1 = fetch %2 team %3 index %4 extra %5', [
                text('result', 'result'),
                dropdown('type', fetchOptions),
                text('team', '@sharded'),
                text('index', '0'),
                text('extra', '@conveyor')
            ]),
            block('sync', 'sync %1', [
                text('variable', 'var')
            ]),
            block('clientdata', 'clientdata send %1 on %2 reliable %3', [
                text('value', '"bar"'),
                text('channel', '"frog"'),
                text('reliable', '0')
            ]),
            block('getflag', '%1 = flag %2', [
                text('result', 'result'),
                text('flag', '"flag"')
            ]),
            block('setflag', 'flag %1 = %2', [
                text('flag', '"flag"'),
                text('value', 'true')
            ]),
            block('setprop', 'set %1 of %2 to %3', [
                text('type', '@copper'),
                text('of', 'block1'),
                text('value', '0')
            ]),
            block('playsound', 'playsound %1 %2 volume %3 pitch %4 pan %5 x %6 y %7 limit %8', [
                dropdown('mode', playSoundModeOptions),
                text('id', '@sfx-pew'),
                text('volume', '1'),
                text('pitch', '1'),
                text('pan', '0'),
                text('x', '@thisx'),
                text('y', '@thisy'),
                text('limit', 'true')
            ]),
            block('setmarker', 'setmarker %1 id %2 %3 %4 %5', [
                dropdown('type', markerControlOptions),
                text('id', '0'),
                text('p1', '0'),
                text('p2', '0'),
                text('p3', '0')
            ]),
            block('makemarker', 'makemarker %1 id %2 x %3 y %4 replace %5', [
                text('type', 'shape'),
                text('id', '0'),
                text('x', '0'),
                text('y', '0'),
                text('replace', 'true')
            ]),
            block('localeprint', 'localeprint %1', [
                text('value', '"name"')
            ])
        ]
    }
];

const jsonArgs = args => args.map(arg => {
    if (arg.type === 'field_dropdown') {
        return {
            type: 'field_dropdown',
            name: arg.name,
            options: arg.options
        };
    }
    return {
        type: 'field_input',
        name: arg.name,
        text: arg.text
    };
});

export default function registerMlogMindustryBlocks (ScratchBlocks) {
    mindustryLogicCategories.forEach(category => {
        category.blocks.forEach(definition => {
            ScratchBlocks.Blocks[definition.type] = {
                init () {
                    this.jsonInit({
                        message0: definition.message,
                        args0: jsonArgs(definition.args),
                        inputsInline: true,
                        previousStatement: null,
                        nextStatement: null,
                        colour: category.color
                    });
                    this.setTooltip(definition.tooltip || `Mindustry logic: ${definition.type}`);
                }
            };
        });
    });
}
