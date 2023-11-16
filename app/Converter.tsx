'use client';

import {useEffect, useState} from "react";

export function Converter() {
    const [originStr, setOriginStr] = useState<string>("")
    const [convertStr, setConvertStr] = useState<string>("")
    const [variables, setVariables] = useState([
        { field: 'camel', id: 'toCamel', label: 'camelCase', isChecked: true },
        { field: 'snake', id: 'toSnake', label: 'snake_case', isChecked: false },
        { field: 'pascal', id: 'toPascal', label: 'PascalCase', isChecked: false },
        { field: 'kebab', id: 'toKebab', label: 'kebab-case', isChecked: false },
    ]);
    const regCamel = /^[a-z][a-zA-Z\d]*$/
    const regPascal = /^[A-Z][a-zA-Z\d]*(?:[A-Z][a-zA-Z\d]*)*$/
    const regSnake = /^[A-Za-z\d]*[_](?:[A-Za-z\d]*)*$/
    const regKebab = /^[A-Za-z\d]*[-](?:[A-Za-z\d]*)*$/

    const isCamel = (str: string) => regCamel.test(str)
    const isPascal = (str: string) => regPascal.test(str)
    const isSnake = (str: string) => regSnake.test(str)
    const isKebab = (str: string) => regKebab.test(str)

    const convert = (origin: string) => {
        setOriginStr(origin);

        const words = origin.split(/\s+/)
        const selectedVariable = variables.find((variable) => variable.isChecked);

        if (selectedVariable) {
            const { field } = selectedVariable;
            const convertWords: string[] = []

            words.map((str) => {
                let word = str

                if(field == "camel") {
                    if(isSnake(str)) { word = snakeToCamel(str) }
                    else if(isPascal(str)) { word = pascalToCamel(str) }
                    else if(isKebab(str)) { word = kebabToCamel(str) }
                }
                else if(field == "snake") {
                    if(isCamel(str)) { word = camelToSnake(str) }
                    else if(isPascal(str)) { word = pascalToSnake(str) }
                    else if(isKebab(str)) { word = kebabToSnake(str) }
                }
                else if(field == "pascal") {
                    if(isCamel(str)) { word = camelToPascal(str) }
                    else if(isSnake(str)) { word = snakeToPascal(str) }
                    else if(isKebab(str)) { word = kebabToPascal(str) }
                }
                else if(field == "kebab") {
                    if(isCamel(str)) { word = camelToKebab(str) }
                    else if(isSnake(str)) { word = snakeToKebab(str) }
                    else if(isPascal(str)) { word = pascalToKebab(str) }
                }

                convertWords.push(word)
            })

            setConvertStr(convertWords.join("\n"))
        } else {
            setConvertStr("");
        }
    }
    // ================== 테스트 완료 ======================
    const snakeToCamel = (str: string): string => str.toLowerCase().replace(/_([a-z])/g, (_, char) => char.toUpperCase())
    const pascalToCamel = (str: string): string => str.replace(/^[A-Z][a-zA-Z\d]*(?:[A-Z][a-zA-Z\d]*)*/g, (match) => match.charAt(0).toLowerCase() + match.slice(1))
    const kebabToCamel = (str: string): string => str.toLowerCase().replace(/-([a-z])/g, (key, char) => char.toUpperCase())

    const camelToSnake = (str: string): string => str.replace(/[A-Z]/g, (match) => '_' + match.toLowerCase())
    const pascalToSnake = (str: string): string => str.replace(/(?<!^)([A-Z])/g, (match) => '_' + match.toLowerCase()).toLowerCase()
    const kebabToSnake = (str: string): string => str.replace(/-/g, '_')

    const camelToPascal = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)
    const snakeToPascal = (str: string): string => snakeToCamel(str).charAt(0).toUpperCase() + snakeToCamel(str).slice(1)
    const kebabToPascal = (str: string): string => kebabToCamel(str).charAt(0).toUpperCase() + kebabToCamel(str).slice(1)

    const camelToKebab = (str: string): string => str.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase())
    const pascalToKebab = (str: string): string => str.replace(/(?<!^)([A-Z])/g, (match) => "-" + match.toLowerCase()).toLowerCase()
    const snakeToKebab = (str: string): string => str.replace(/_/g, '-')
    // ================== 테스트 완료 ======================

    const handleChangeCase = (field: string) => {
        const updatedVariables = variables.map((variable) => {
            if (variable.field === field) {
                return { ...variable, isChecked: !variable.isChecked };
            } else {
                return { ...variable, isChecked: false };
            }
        });

        setVariables(updatedVariables);
    }

    useEffect(() => {
        convert(originStr)
    }, [variables])

    return (
        <div className="container">
            <div className="header">
                <p>variables converter</p>
                <h2>변수 변환기 🖐🏻</h2>
            </div>
            <div className="contents">
                <div className="box">
                    <div className="title">
                        <h4>원하는 타입을 선택하세요!</h4>
                    </div>
                    <ul className="check-wrap">
                        {
                            variables.map((variable) => (
                                <li key={variable.id}>
                                    <input type="checkbox" id={variable.id} checked={variable.isChecked} onChange={(e) => handleChangeCase(variable.field)} />
                                    <label htmlFor={variable.id}>
                                        <span>{variable.label}</span>
                                    </label>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="text-box">
                    <textarea placeholder="변환할 텍스트를 입력해 주세요." value={originStr} onChange={e => convert(e.target.value)}></textarea>
                    <textarea readOnly={true} value={convertStr}></textarea>
                </div>
            </div>
            <div className="footer">
                <p>development of kevin</p>
            </div>
        </div>
    )
}
