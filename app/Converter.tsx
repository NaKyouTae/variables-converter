'use client';

import {useState} from "react";

export function Converter() {
    const [originStr, setOriginStr] = useState<string>("")
    const [convertStr, setConvertStr] = useState<string>("")
    const [variables, setVariables] = useState([
        { field: 'camel', id: 'toCamel', label: 'camelCase', isChecked: true },
        { field: 'snake', id: 'toSnake', label: 'snake_case', isChecked: false },
        { field: 'pascal', id: 'toPascal', label: 'PascalCase', isChecked: false },
        { field: 'kebab', id: 'toKebab', label: 'kebab-case', isChecked: false },
    ]);

    const convert = (origin: string) => {
        setOriginStr(origin);

        const words = origin.split(/\s+/)

        const selectedVariable = variables.find((variable) => variable.isChecked);

        if (selectedVariable) {
            const { field } = selectedVariable;

            const convertWords = words.map((str: string) => {
                if (field === 'camel') {
                    convertToCamelCase(str)
                } else if (field === 'snake') {
                    convertToSnakeCase(str)
                } else if (field === 'pascal') {
                    convertToPascalCase(str)
                } else if (field === 'kebab') {
                    convertToKebabCase(str)
                }
            })

            console.log('convertWords', convertWords)

            setConvertStr(convertWords.toString())
        } else {
            setConvertStr("");
        }
    }

    const convertToCamelCase = (str: string) => {
        return str.replace(/[-_]\w/g, (m) => m[1].toUpperCase());
    }
    const convertToSnakeCase = (str: string) => {
        return str.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
    }
    const convertToPascalCase = (str: string) => {
        return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    }
    const convertToKebabCase = (str: string) => {
        return str.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
    }

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