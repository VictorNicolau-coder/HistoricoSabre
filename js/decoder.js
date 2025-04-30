let ultimoEditores = [];
let edicoes = []

function getLastMod(){
    return ultimoEditores;
}

function splitBlocks(value){
    const key_word = "OAC-";

    // Novos editores
    ultimoEditores = [];

   // Limpeza inicial
    let rows = value
        .replace(/¥/g, '')        // remove o caractere indesejado
        .split("\n")              // quebra em linhas
        .map(row => row.trim())   // remove espaços nas bordas
        .filter(row => row !== ''); // remove linhas vazias

    // Agrupamento em blocos
    let blocks = [];
    let currentBlock = [];
    let prevRow = "";

    rows.forEach(row => {
    if (prevRow.includes(key_word)) {
            // Finaliza o bloco anterior ao encontrar a palavra-chave
            ultimoEditores.push(row.split(" ")[1]);
            currentBlock.push(row);
            blocks.push(currentBlock);
            currentBlock = [];
        } else {
            currentBlock.push(row);
        }
        prevRow = row;
    });

    // Salva o último bloco
    if (currentBlock.length > 0) blocks.push(currentBlock);

    edicoes = blocks;
    return blocks;
}

function update(){
    const encrypted_text = document.getElementById("input").value;
    /* let encrypted_text = `UAX ASIENTOS/HK1/LA3611X23JUNPMWGRU-GONCALVES DA SILVA/ELISDET
                        TI MS
                        OAC- JJ SAO M9 5796554
                        SAO-SAO-M9 HDQ5MGO 0943/10APR25
                        UAX ASIENTOS/HK1/LA3832O18JUNGRUPMW-GONCALVES DA SILVA/ELISDET
                        TI MS
                        OAC- JJ SAO M9 5796554
                        SAO-SAO-M9 HDQ5MGO 0942/10APR25
                        A5H H-NRP/42792581808
                        R- ALLEGRO LATAM
                        OAC- JJ JDO JM 5796945
                        JDO-JDO-JM JDO5VIA 0925/10APR25
                        A5H H-NMP/VICTOR HUGO GONCALVES LIMA DA SILVA
                        R- ALLEGRO LATAM
                        OAC- JJ JDO JM 5796945
                        JDO-JDO-JM JDO5VIA 0925/10APR25
                        A3O OSI JJ PSGR WITH PREPAID SEAT MCO RESTRICTIONS APPLY IN CA
                        SE OF CHG OR REF
                        A3O OSI JJ PSGR WITH PREPAID SEAT MCO RESTRICTIONS APPLY IN CA¥
                        SE OF CHG OR REF
                        ¥
                        OAC- JJ JDO JM 5796945
                        JDO-JDO-JM JDO5VIA 0924/10APR25
                        UAX ASIENTOS/HI1/LA3611X23JUNPMWGRU-GONCALVES LIMA DA SILVA/VI
                        CTOR HUGO MR
                        R- MISCWS
                        0924/10APR25
                        UAX ASIENTOS/HI1/LA3832O18JUNGRUPMW-GONCALVES LIMA DA SILVA/VI
                        CTOR HUGO MR
                        R- MISCWS
                        0924/10APR25
                        A5T QQ PLEASE ADV ANCILLARIES BEFORE 48 HRS OR AUTO CANCEL
                        A5H H-PLEASE ADV ANCILLARIES BEFORE 48 HRS OR AUTO CANCEL
                        R- CALIDRIS REVENUE INTEGRITY AE
                        OAC- LA HDQ FP 7599419
                        HDQ-HDQ-FP HDQ8RIC 0858/10APR25
                        AAX ASIENTOS/HD1/52.00BRL/52.00BRL/PTC-ADT/GROUP-SA /VEN-ATP /
                        SJC-S/OWN-LA /APPIND-4/SSR-SEAT/RFIC-A/RFISC-0B5/EMD TYPE-
                        2/REFUND-Y/COMMISSION-N/TRAVEL DATE 18JUN25 TO 18JUN25/PDC¥
                        SEAT-13E/PURCHASE BY 16JUN25 2359/LA3832O18JUNGRUPMW-GONCA¥
                        LVES LIMA DA SILVA/VICTOR HUGO MR
                        AAX ASIENTOS/HD1/60.00BRL/60.00BRL/PTC-ADT/GROUP-SA /VEN-ATP /
                        SJC-S/OWN-LA /APPIND-4/SSR-SEAT/RFIC-A/RFISC-0B5/EMD TYPE-
                        2/REFUND-Y/COMMISSION-N/TRAVEL DATE 18JUN25 TO 18JUN25/PDC
                        SEAT-13F/PURCHASE BY 16JUN25 2359/LA3832O18JUNGRUPMW-GONCA
                        LVES DA SILVA/ELISDETTI MS
                        AAX ASIENTOS/HD1/52.00BRL/52.00BRL/PTC-ADT/GROUP-SA /VEN-ATP /
                        SJC-S/OWN-LA /APPIND-4/SSR-SEAT/RFIC-A/RFISC-0B5/EMD TYPE-
                        2/REFUND-Y/COMMISSION-N/TRAVEL DATE 23JUN25 TO 23JUN25/PDC
                        SEAT-13E/PURCHASE BY 21JUN25 2359/LA3611X23JUNPMWGRU-GONCA
                        LVES LIMA DA SILVA/VICTOR HUGO MR
                        AAX ASIENTOS/HD1/60.00BRL/60.00BRL/PTC-ADT/GROUP-SA /VEN-ATP /
                        SJC-S/OWN-LA /APPIND-4/SSR-SEAT/RFIC-A/RFISC-0B5/EMD TYPE-
                        2/REFUND-Y/COMMISSION-N/TRAVEL DATE 23JUN25 TO 23JUN25/PDC
                        SEAT-13F/PURCHASE BY 21JUN25 2359/LA3611X23JUNPMWGRU-GONCA
                        LVES DA SILVA/ELISDETTI MS
                        A4G LA3832O 18JUN GRUPMW NN/SS 13E N P -GONCALVES LIMA DA
                        A4G LA3832O 18JUN GRUPMW NN/SS 13F NW P -GONCALVES DA SILVA ¥
                        A4G LA3611X 23JUN PMWGRU NN/SS 13E N P -GONCALVES LIMA DA ¥
                        A4G LA3611X 23JUN PMWGRU NN/SS 13F NW P -GONCALVES DA SILVA
                        R- P
                        OAC- JJ JDO JM 5796945
                        JDO-JDO-JM JDO5VIA 0854/10APR25
                        A4S SSR LAXP LA 3832O18JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR LAXP LA 3701O18JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MRA4S SSR LAXP LA 3784X23JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR LAXP LA 3611X23JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        R- SABRE IX
                        OAC- LA HDQ FR 0562975
                        HDQ-HDQ-FR HDQ8KBH 2013/04APR25
                        A4S SSR BRND LA 3832O18JUN/SL
                        A4S SSR BRND LA 3701O18JUN/SL
                        A4S SSR BRND LA 3784X23JUN/SL
                        ¥
                        A4S SSR BRND LA 3611X23JUN/SL
                        ¥
                        R- SABRE IX
                        OAC- LA HDQ FR 0562975
                        HDQ-HDQ-FR HDQ8KBH 1944/04APR25
                        A4S SSR LAXP LA 3784X23JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR LAXP LA 3611X23JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR LAXP LA 3832O18JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR LAXP LA 3701O18JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        R- SABRE IX
                        OAC- LA HDQ FR 0562975
                        HDQ-HDQ-FR HDQ8KBH 1913/04APR25
                        A4S SSR CRPD LA 3701O18JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR CRPD LA 3832O18JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        ¥
                        A4S SSR SETB LA 3701O18JUN/NN1
                        ¥
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR SETB LA 3832O18JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        R- LATAM XP
                        OAC- LA HDQ FR 0562975
                        HDQ-HDQ-FR HDQ5L*S 1813/04APR25
                        XAX ASIENTOS/HI1/OPTSTAT-HD/LA3832O17JUNGRUPMW-GONCALVES DA SI
                        LVA/ELISDETTI MS
                        XS 3701O 17JUN RAOCGH SC/HK2 1005 1110 /E
                        XS 3832O 17JUN GRUPMW NN/HK2 1520 1745 HRS/E
                        XS 3611X 24JUN PMWGRU*NN/HK2 1030 1250 /E
                        XS 3784X 24JUN CGHRAO*NN/HK2 1750 1855 /E
                        X4G* LA3832O 17JUN GRUPMW SS/HK 13B N P -GONCALVES DA SILVA
                        XFF LA 42792581808
                        SC/HK LA -GONCALVES LIMA DA/VICTO
                        LA3701O 17JUN RAOCGH
                        XFF LA 42792581808
                        SC/HK LA -GONCALVES DA SILV/ELISD
                        LA3701O 17JUN RAOCGH
                        XFF LA 42792581808
                        NN/HK LA -GONCALVES LIMA DA/VICTO¥
                        LA3832O 17JUN GRUPMW
                        ¥
                        XFF LA 42792581808
                        NN/HK LA -GONCALVES DA SILV/ELISD
                        LA3832O 17JUN GRUPMW
                        X4S* SSR BRND LA NN1 RAOCGH3701O17JUN/SL
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/9572215020048C1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/9572215020049C1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR OTHS LA 3701O17JUN/LAXP NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR OTHS LA 3701O17JUN/LAXP NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452219019322C1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452219019324C1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452219019322C1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MRX4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452219019324C1
                        ¥
                        -GONCALVES DA SILVA/ELISDETTI MS
                        ¥
                        X4S* SSR LAXP LA 3701O17JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR LAXP LA 3701O17JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452225181232C1/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 RAOCGH3701O17JUN/0452225181234C1/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR BRND LA NN1 GRUPMW3832O17JUN/SL
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/9572215020048C2
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/9572215020049C2
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR LAXP LA 3832O17JUN/LATAM XP USER NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR LAXP LA 3832O17JUN/LATAM XP USER NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/0452219019322C2
                        ¥
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        ¥
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/0452219019324C2
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR CRPD LA 3832O17JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/0452225181232C3/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 GRUPMW3832O17JUN/0452225181234C3/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 PMWGRU3611X24JUN/0452219019322C3
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 PMWGRU3611X24JUN/0452219019324C3
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 PMWGRU3611X24JUN/0452225181232C4/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 PMWGRU3611X24JUN/0452225181234C4/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR LAXP LA 3611X24JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        ¥
                        X4S* SSR BRND LA 3611X24JUN/SL
                        ¥
                        X4S* SSR LAXP LA 3611X24JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 CGHRAO3784X24JUN/0452219019322C4
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 CGHRAO3784X24JUN/0452219019324C4
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR TKNE LA HK1 CGHRAO3784X24JUN/0452225181233C2/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        X4S* SSR TKNE LA HK1 CGHRAO3784X24JUN/0452225181235C2/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR LAXP LA 3784X24JUN/NN1
                        -GONCALVES DA SILVA/ELISDETTI MS
                        X4S* SSR BRND LA 3784X24JUN/SL
                        X4S* SSR LAXP LA 3784X24JUN/NN1
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR TKNE LA HK1 RAOCGH3701O18JUN/0452225181232C1/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR TKNE LA HK1 RAOCGH3701O18JUN/0452225181234C1/234-235 ¥
                        -GONCALVES DA SILVA/ELISDETTI MS
                        ¥
                        A4S SSR TKNE LA HK1 GRUPMW3832O18JUN/0452225181232C3/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR TKNE LA HK1 GRUPMW3832O18JUN/0452225181234C3/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR TKNE LA HK1 PMWGRU3611X23JUN/0452225181232C4/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR TKNE LA HK1 PMWGRU3611X23JUN/0452225181234C4/234-235-GONCALVES DA SILVA/ELISDETTI MS
                        A4S SSR TKNE LA HK1 CGHRAO3784X23JUN/0452225181233C2/232-233
                        -GONCALVES LIMA DA SILVA/VICTOR HUGO MR
                        A4S SSR TKNE LA HK1 CGHRAO3784X23JUN/0452225181235C2/234-235
                        -GONCALVES DA SILVA/ELISDETTI MS
                        AS 3701O 18JUN RAOCGH OB/SS2 1005 1110 /E
                        AS 3832O 18JUN GRUPMW OB/SS2 1520 1745 /E
                        AS 3611X 23JUN PMWGRU OB/SS2 1030 1250 /E
                        AS 3784X 23JUN CGHRAO OB/SS2 1750 1855 /E
                        R- LATAM AUTOMATIC REVALIDATION SERVICE
                        OAC- LA HDQ FR 0562975
                        ¥
                        HDQ-HDQ-FR HDQ8SJ0 1813/04APR25
                        ¥`; */
    let decoder_output = document.querySelector(".decoder_output");
    
    // Se não existe, cria
    if (!decoder_output) {
        decoder_output = document.createElement("div");
        decoder_output.classList.add("decoder_output");
        
        let last_mod = document.createElement("div");
        let blocks = document.createElement("div");
        
        //Consulta o array de ultimos editores e os coloca dentro de paragrafos
        ultimoEditores.forEach(editor=>{
            let p = document.createElement("p");
            p.textContent = editor + "\n";
            last_mod.appendChild(p);
        })
        last_mod.classList.add("last_mod");

        let blocos = splitBlocks(encrypted_text);
        blocos.forEach( bloco => {
            const block = document.createElement("div");
            const data_mod = document.createElement("h3");
            
            bloco.slice(0, -1).forEach(row => {
                const p = document.createElement("p");
                p.textContent = row;
                block.appendChild(p);                
            });

            data_mod.textContent = bloco[bloco.length-1];
            block.classList.add("block");
            block.appendChild(data_mod);
            blocks.appendChild(block);
        });
        blocks.classList.add("blocks");
        
        decoder_output.appendChild(last_mod);
        decoder_output.appendChild(blocks);
        document.getElementById("main").appendChild(decoder_output);
    }

    // Atualiza o conteúdo
    let last_mod = decoder_output.querySelector(".last_mod");
    last_mod.innerHTML = ""; // Limpa conteúdo anterior
    ultimoEditores.forEach(editor => {
        let p = document.createElement("p");
        p.textContent = editor;
        last_mod.appendChild(p);
    });

    let blocks = decoder_output.querySelector(".blocks");
    blocks.innerHTML = ""; // Limpa blocos antigos

    let blocos = splitBlocks(encrypted_text);
    blocos.forEach(bloco => {
        const block = document.createElement("div");
        const data_mod = document.createElement("h3");

        bloco.slice(0, -1).forEach(row => {
            const p = document.createElement("p");
            p.textContent = row;
            block.appendChild(p);
        });

        data_mod.textContent = bloco[bloco.length - 1];
        block.classList.add("block");
        block.appendChild(data_mod);
        blocks.appendChild(block);
    });
}