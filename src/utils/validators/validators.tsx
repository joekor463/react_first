export type FieldValidatorsType = (value: string) => string | undefined

export const required: FieldValidatorsType = (value) => {
    if (value) return undefined;
    return "Field is required";
}

//let maxLength = 0
export const maxLengthCreator = (maxLength: number): FieldValidatorsType = (value: any) => {
    if (value.length > maxLength ) return `Max length is ${maxLength} symbols`;
    return undefined;
}


