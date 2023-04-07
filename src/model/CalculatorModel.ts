const NO_CLEAN_DISPLAY = false
const CLEAN_DISPLAY = true

export default class CalculatorModel {

    private value: string
    private accumulator: number
    private cleanDisplay: boolean
    private operation: string

    constructor(value: string, accumulator: number, operation: string, cleanDisplay: boolean) {
        this.value = value
        this.accumulator = accumulator
        this.operation = operation
        this.cleanDisplay = cleanDisplay
    }

    getValue(): string {
        return this.value?.replace('.', ',') || '0'
    }

    getAccumulator(): number {
        return this.accumulator
    }

    getOperation(): string {
        return this.operation
    }

    getCleanDisplay(): boolean {
        return this.cleanDisplay
    }

    numberTyped(newValue: string) {
        return new CalculatorModel(
            this.cleanDisplay || !this.value ? newValue : this.value + newValue,
            this.accumulator,
            this.operation,
            NO_CLEAN_DISPLAY
        )
    }

    pointTyped() {
        return new CalculatorModel(
            this.value?.includes('.') ? this.value : this.value + '.',
            this.accumulator,
            this.operation,
            NO_CLEAN_DISPLAY
        )
    }

    toClean() {
        return new CalculatorModel('',0, '', NO_CLEAN_DISPLAY
        )
    }

    operationTyped(approachOperation: string ) {
        return this.calculator(approachOperation)
    }

    calculator(approachOperation?: string) {
        
        const accumulator = !this.operation 
            ? parseFloat(this.value) 
            : eval(`${this.accumulator} ${this.operation} ${this.value}`)
        const value = !this.operation ? this.value : `${accumulator}`

        return new CalculatorModel(
            value,
            accumulator,
            approachOperation ? approachOperation : this.operation,
            approachOperation ? CLEAN_DISPLAY : NO_CLEAN_DISPLAY
        )
    }

}