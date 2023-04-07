<script lang="ts">
    import CalculatorModel from "../model/CalculatorModel";
    import Button from "./Button.svelte";
    import Display from "./Display.svelte";
    import Line from "./Line.svelte";

    let calc = new CalculatorModel('', 0, '', false)

    const numberTyped = (num: string) => calc = calc.numberTyped(num)
    const operationTyped = (op: string) => calc = calc.operationTyped(op)
    const pointTyped = () => calc = calc.pointTyped()
    const calculator = () => calc = calc.calculator()
    const toClean = () => calc = calc.toClean()
</script>

<div class="calculator">
    <Display value={calc.getValue()}/>  
    <Line>
        <Button emphasis triple label="AC" onClick={toClean} />
        <Button operation label="/"  onClick={operationTyped} />
    </Line>
    <Line>
        <Button label="7" onClick={numberTyped} />
        <Button label="8" onClick={numberTyped} />
        <Button label="9" onClick={numberTyped} />
        <Button operation label="*" onClick={operationTyped} />
    </Line>
    <Line>
        <Button label="6" onClick={numberTyped} />
        <Button label="5" onClick={numberTyped} />
        <Button label="4" onClick={numberTyped} />
        <Button operation label="+" onClick={operationTyped} />
    </Line>
    <Line>
        <Button label="3" onClick={numberTyped} />
        <Button label="2" onClick={numberTyped} />
        <Button label="1" onClick={numberTyped} />
        <Button operation label="-" onClick={operationTyped} />
    </Line>
    <Line>
        <Button double label="0" onClick={numberTyped} />
        <Button operation label="," onClick={pointTyped} />
        <Button emphasis label="=" onClick={calculator} />
    </Line>
</div>

<style>
    .calculator {
        background-color: var(--my-background-color);
        height: 210px;
        width:  200px;
        padding: 10px;
        border-radius: 10px;

        display: flex;
        flex-direction: column;
    }
</style>
