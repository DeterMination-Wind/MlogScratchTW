const flowColor = '#ffab19';

const textField = (ScratchBlocks, value) => new ScratchBlocks.FieldTextInput(String(value));

export const mlogFlowCategory = {
    id: 'mlog_flow',
    name: 'flow',
    color: flowColor,
    blocks: ['if', 'if_else', 'when', 'when_case', 'when_else', 'while', 'for_range']
};

export default function registerMlogSugarBlocks (ScratchBlocks) {
    ScratchBlocks.Blocks.if = {
        init () {
            this.appendDummyInput()
                .appendField('if')
                .appendField(textField(ScratchBlocks, 'enabled == true'), 'condition');
            this.appendStatementInput('body')
                .appendField('do');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('条件成立时执行一次 body。');
        }
    };

    ScratchBlocks.Blocks.if_else = {
        init () {
            this.appendDummyInput()
                .appendField('if')
                .appendField(textField(ScratchBlocks, 'enabled == true'), 'condition');
            this.appendStatementInput('body')
                .appendField('then');
            this.appendStatementInput('elseBody')
                .appendField('else');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('条件分支语句。');
        }
    };

    ScratchBlocks.Blocks.when = {
        init () {
            this.appendDummyInput()
                .appendField('when')
                .appendField(textField(ScratchBlocks, 'value'), 'subject');
            this.appendStatementInput('body')
                .appendField('branches');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('Kotlin 风格 when。subject 留空时按条件分支处理。');
        }
    };

    ScratchBlocks.Blocks.when_case = {
        init () {
            this.appendDummyInput()
                .appendField('case')
                .appendField(textField(ScratchBlocks, '1, 2'), 'matches');
            this.appendStatementInput('body')
                .appendField('->');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('when 的 case 分支。多个匹配值用逗号分隔。');
        }
    };

    ScratchBlocks.Blocks.when_else = {
        init () {
            this.appendDummyInput()
                .appendField('else');
            this.appendStatementInput('body')
                .appendField('->');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('when 的 else 分支。');
        }
    };

    ScratchBlocks.Blocks.while = {
        init () {
            this.appendDummyInput()
                .appendField('while')
                .appendField(textField(ScratchBlocks, 'enabled == true'), 'condition');
            this.appendStatementInput('body')
                .appendField('do');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('条件循环语句。');
        }
    };

    ScratchBlocks.Blocks.for_range = {
        init () {
            this.appendDummyInput()
                .appendField('for')
                .appendField(textField(ScratchBlocks, 'i'), 'var')
                .appendField('from')
                .appendField(textField(ScratchBlocks, '0'), 'start')
                .appendField('to')
                .appendField(textField(ScratchBlocks, '10'), 'end');
            this.appendStatementInput('body')
                .appendField('do');
            this.setPreviousStatement(true);
            this.setNextStatement(true);
            this.setColour(flowColor);
            this.setTooltip('范围循环语句。');
        }
    };
}
