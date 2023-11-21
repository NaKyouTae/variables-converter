'use client';

import {useEffect, useState} from "react";

export function ConverterAds() {
    const test  = "<p>\n" +
        "                            <pre><code>\n" +
        "                                const snakeToCamel = (str: string): string =&gt; str.toLowerCase().replace(/_([a-z])/g, (_, char) =&gt; char.toUpperCase())\n" +
        "                                const pascalToCamel = (str: string): string =&gt; str.replace(/^[A-Z][a-zA-Z\\d]*(?:[A-Z][a-zA-Z\\d]*)*/g, (match) =&gt; match.charAt(0).toLowerCase() + match.slice(1))\n" +
        "                                const kebabToCamel = (str: string): string =&gt; str.toLowerCase().replace(/-([a-z])/g, (key, char) =&gt; char.toUpperCase())\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const camelToSnake = (str: string): string =&gt; str.replace(/[A-Z]/g, (match) =&gt; '_' + match.toLowerCase())\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const pascalToSnake = (str: string): string =&gt; str.replace(/(?&lt;!^)([A-Z])/g, (match) =&gt; '_' + match.toLowerCase()).toLowerCase()\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const kebabToSnake = (str: string): string =&gt; str.replace(/-/g, '_')\n" +
        "                                const camelToPascal = (str: string): string =&gt; str.charAt(0).toUpperCase() + str.slice(1)\n" +
        "                                const snakeToPascal = (str: string): string =&gt; snakeToCamel(str).charAt(0).toUpperCase() + snakeToCamel(str).slice(1)\n" +
        "                                const kebabToPascal = (str: string): string =&gt; kebabToCamel(str).charAt(0).toUpperCase() + kebabToCamel(str).slice(1)\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const camelToKebab = (str: string): string =&gt; str.replace(/[A-Z]/g, (match) =&gt; '-' + match.toLowerCase())\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const pascalToKebab = (str: string): string =&gt; str.replace(/(?&lt;!^)([A-Z])/g, (match) =&gt; \"-\" + match.toLowerCase()).toLowerCase()\n" +
        "                                {/* eslint-disable-next-line react/no-unescaped-entities */}\n" +
        "                                const snakeToKebab = (str: string): string =&gt; str.replace(/_/g, '-')\n" +
        "                            </code></pre>\n" +
        "\n" +
        "                            Converter 컴포넌트는 원하는 형식으로 변수명을 변환해주는 기능을 가진 코드입니다.\n" +
        "                            이 코드를 바탕으로 converter를 만드는 방법에 대해 후기를 작성해드리겠습니다.\n" +
        "\n" +
        "                            이 코드는 React의 함수형 컴포넌트로 작성되어 있으며, useState와 useEffect 훅을 사용하여 상태와 상태 변화를 관리하고 있습니다.\n" +
        "                            상태로는 originStr, convertStr, variables가 있으며, setOriginStr, setConvertStr, setVariables 함수를 사용하여 상태를 업데이트합니다.\n" +
        "\n" +
        "                            variables는 변환할 변수의 종류를 나타내는 객체들의 배열입니다. 각 객체는 field, id, label, isChecked 속성을 가지고 있습니다.\n" +
        "                            field는 변수의 형식을 나타내는 문자열이고, id는 체크박스의 id를 나타냅니다. label은 화면에 표시될 라벨 텍스트이고, isChecked는 해당 변수가 선택되었는지 여부를 나타냅니다.\n" +
        "\n" +
        "                            변수명 변환은 convert 함수에서 이루어집니다. 입력된 originStr을 공백으로 분리한 후, 선택된 변수에 따라 각 단어를 변환합니다.\n" +
        "                            변환은 정규식과 문자열 치환을 사용하여 이루어지며, 변환된 단어들은 convertWords 배열에 추가됩니다. 변환된 단어들은 줄바꿈 문자(\\n)로 구분되어 convertStr 상태에 저장됩니다.\n" +
        "\n" +
        "                            또한, 코드에는 각 형식별로 변환을 수행하는 함수들이 포함되어 있습니다.\n" +
        "                            예를 들어, camelToSnake 함수는 카멜케이스를 스네이크케이스로 변환하는 함수입니다.\n" +
        "                            이러한 함수들은 변환에 사용되며, 필요에 따라 확장할 수 있습니다.\n" +
        "\n" +
        "                            추가적으로, 형식 선택에 따른 체크박스 변경은 handleChangeCase 함수에서 이루어집니다.\n" +
        "                            해당 함수는 선택된 형식의 체크박스를 업데이트하고, 다른 형식들의 체크박스는 해제합니다.\n" +
        "\n" +
        "                            마지막으로, useEffect 훅을 사용하여 variables 상태가 변경될 때마다 변환을 수행하도록 설정되어 있습니다.\n" +
        "\n" +
        "                            이와 같은 코드를 기반으로 변환기(converter)를 만들면, 사용자는 입력창에 텍스트를 입력하고 원하는 형식의 체크박스를 선택하여 변환된 결과를 확인할 수 있을 것입니다.\n" +
        "                            이를 통해 사용자는 원하는 형식으로 변수명을 간편하게 변환할 수 있습니다.\n" +
        "\n" +
        "                            코드 작성에 도움이 되었기를 바라며, 추가적인 질문이 있으시면 언제든지 물어보세요!\n" +
        "\n" +
        "                            email: qppk@naver.com\n" +
        "                        </p>"


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
            <div className="contents">
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
                    <div className="box">
                        <div className="title" style={{marginTop: '20px'}}>
                            <h4>변수 변환기 후기!</h4>
                        </div>
                        <div style={{fontSize: '15px', lineHeight: '22px'}}>
                            <p>
                                const snakeToCamel = (str: string): string =&gt; str.toLowerCase().replace(/_([a-z])/g, (_, char) =&gt; char.toUpperCase()) <br />
                                const pascalToCamel = (str: string): string =&gt; str.replace(/^[A-Z][a-zA-Z\d]*(?:[A-Z][a-zA-Z\d]*)*/g, (match) =&gt; match.charAt(0).toLowerCase() + match.slice(1)) <br />
                                const kebabToCamel = (str: string): string =&gt; str.toLowerCase().replace(/-([a-z])/g, (key, char) =&gt; char.toUpperCase()) <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const camelToSnake = (str: string): string =&gt; str.replace(/[A-Z]/g, (match) =&gt; '_' + match.toLowerCase()) <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const pascalToSnake = (str: string): string =&gt; str.replace(/(?&lt;!^)([A-Z])/g, (match) =&gt; '_' + match.toLowerCase()).toLowerCase() <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const kebabToSnake = (str: string): string =&gt; str.replace(/-/g, '_') <br />
                                const camelToPascal = (str: string): string =&gt; str.charAt(0).toUpperCase() + str.slice(1) <br />
                                const snakeToPascal = (str: string): string =&gt; snakeToCamel(str).charAt(0).toUpperCase() + snakeToCamel(str).slice(1) <br />
                                const kebabToPascal = (str: string): string =&gt; kebabToCamel(str).charAt(0).toUpperCase() + kebabToCamel(str).slice(1) <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const camelToKebab = (str: string): string =&gt; str.replace(/[A-Z]/g, (match) =&gt; '-' + match.toLowerCase()) <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const pascalToKebab = (str: string): string =&gt; str.replace(/(?&lt;!^)([A-Z])/g, (match) =&gt; "-" + match.toLowerCase()).toLowerCase() <br />
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                const snakeToKebab = (str: string): string =&gt; str.replace(/_/g, '-') <br /> <br />
                            </p>
                            <p>
                                Converter 컴포넌트는 원하는 형식으로 변수명을 변환해주는 기능을 가진 코드입니다. <br />
                                이 코드를 바탕으로 converter를 만드는 방법에 대해 후기를 작성해드리겠습니다. <br />
                            </p>

                            <p>
                                이 코드는 React의 함수형 컴포넌트로 작성되어 있으며, useState와 useEffect 훅을 사용하여 상태와 상태 변화를 관리하고 있습니다. <br />
                                상태로는 originStr, convertStr, variables가 있으며, setOriginStr, setConvertStr, setVariables 함수를 사용하여 상태를 업데이트합니다. <br />
                            </p>
                            <p>
                                variables는 변환할 변수의 종류를 나타내는 객체들의 배열입니다. 각 객체는 field, id, label, isChecked 속성을 가지고 있습니다. <br />
                                field는 변수의 형식을 나타내는 문자열이고, id는 체크박스의 id를 나타냅니다. label은 화면에 표시될 라벨 텍스트이고, isChecked는 해당 변수가 선택되었는지 여부를 나타냅니다. <br />
                            </p>
                            <p>
                                변수명 변환은 convert 함수에서 이루어집니다. 입력된 originStr을 공백으로 분리한 후, 선택된 변수에 따라 각 단어를 변환합니다. <br />
                                변환은 정규식과 문자열 치환을 사용하여 이루어지며, 변환된 단어들은 convertWords 배열에 추가됩니다. 변환된 단어들은 줄바꿈 문자(\n)로 구분되어 convertStr 상태에 저장됩니다. <br />
                            </p>
                            <p>
                                또한, 코드에는 각 형식별로 변환을 수행하는 함수들이 포함되어 있습니다. <br />
                                예를 들어, camelToSnake 함수는 카멜케이스를 스네이크케이스로 변환하는 함수입니다. <br />
                                이러한 함수들은 변환에 사용되며, 필요에 따라 확장할 수 있습니다. <br />
                            </p>
                            <p>
                                추가적으로, 형식 선택에 따른 체크박스 변경은 handleChangeCase 함수에서 이루어집니다. <br />
                                해당 함수는 선택된 형식의 체크박스를 업데이트하고, 다른 형식들의 체크박스는 해제합니다. <br />
                            </p>
                            <p>
                                마지막으로, useEffect 훅을 사용하여 variables 상태가 변경될 때마다 변환을 수행하도록 설정되어 있습니다. <br />
                            </p>
                            <p>
                                이와 같은 코드를 기반으로 변환기(converter)를 만들면, 사용자는 입력창에 텍스트를 입력하고 원하는 형식의 체크박스를 선택하여 변환된 결과를 확인할 수 있을 것입니다. <br />
                                이를 통해 사용자는 원하는 형식으로 변수명을 간편하게 변환할 수 있습니다. <br />
                            </p>
                            <p>
                                코드 작성에 도움이 되었기를 바라며, 추가적인 질문이 있으시면 언제든지 물어보세요! <br />
                            </p>
                            <p>
                                email: qppk@naver.com <br /> <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>development of kevin</p>
                </div>
            </div>
        </div>
    )
}
