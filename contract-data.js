/* Contract wording from the official A4 PDFs.
   2026-11-25: force majeure item replaced by “damage to specific parts”; table footnote updated. */
window.CONTRACT = {
  en: {
    agreementTitle: "Rental Car Agreement",
    compensationTitle: "Rental Car Compensation Policy",
    compensationSubtitle: "Compensation System",
    tableCaption: "Accident Cost Comparison (Amounts in JPY)",
    confirmComp: "I have read and fully understood the above compensation system and liability for damages.",
    signatureLabel: "Renter's Signature",
    dateLabel: "Date",
    planLabels: {
      basic: "Basic Coverage",
      cdw: "CDW",
      cdw_noc: "CDW+NOC"
    },
    planFullNames: {
      basic: "Basic Coverage",
      cdw: "Peace-of-Mind Plan (CDW)",
      cdw_noc: "Full Support Plan (CDW+NOC)"
    },
    planPrices: {
      cdw: { compact: "¥3,300/24h", other: "¥4,400/24h" },
      cdw_noc: { compact: "¥5,500/24h", other: "¥6,600/24h" }
    },
    planHeaderNotes: {
      basic: "No add-on purchased / free",
      cdwCompact: "Compact: ¥3,300/24h",
      cdwOther: "Other classes: ¥4,400/24h",
      nocCompact: "Compact: ¥5,500/24h",
      nocOther: "Other classes: ¥6,600/24h"
    },
    tableHeaders: ["Item", "Basic Coverage*", "Peace-of-Mind Plan (CDW)", "Full Support Plan (CDW+NOC)"],
    tableRows: [
      { item: "Property damage deductible", basic: "100,000", cdw: "0", noc: "0" },
      { item: "Vehicle damage deductible", basic: "150,000", cdw: "0", noc: "0" },
      { item: "NOC (Non-Operation Charge)*", basic: "100,000\n~150,000", cdw: "100,000\n~150,000", noc: "0" },
      { item: "Roadside assistance fee", basic: "20000~", cdw: "0*", noc: "0" },
      {
        item: "Maximum accident liability",
        basic: "400,000+\nHighest risk",
        cdw: "150,000+\nStill at risk",
        noc: "0\n*Except total loss and damage to specific parts",
        emphasize: true
      }
    ],
    footnotes: [
      "*If an accident occurs while the driver or passengers are riding in the rental vehicle and they are injured (including death or disability), the specific scope and limits of compensation (e.g., personal injury insurance up to ¥30,000,000, including medical expenses) are subject to the insurance policy and the insurance company's assessment.",
      "*NOC (Non-Operation Charge): compensation for lost business while the vehicle cannot be rented out during repairs.",
      "*Roadside assistance coverage applies only when an accident occurs."
    ],
    importantTitle: "Important Notice",
    importantItems: [
      { text: "Regardless of the size of the accident (even a minor scratch), you must immediately call 110 to report it to the police and contact our shop.", emphasis: "you must immediately call 110 to report it to the police and contact our shop" },
      { text: "Without an accident certificate issued by the police, the insurance company will not process any claim.", emphasis: "Without an accident certificate issued by the police, the insurance company will not process any claim." },
      { text: "Private settlements with the other party are strictly prohibited; otherwise, the renter shall bear all consequences and costs.", emphasis: "Private settlements with the other party are strictly prohibited" },
      { text: "The compensation system applies only once per rental period; if a second accident occurs, the renter shall bear all costs." }
    ],
    exclusionsTitle: "Compensation Does Not Apply & Exclusions",
    exclusionsLead: "(In the following cases, the customer must pay in full even if enrolled in a plan)",
    exclusions: [
      { lead: "Driving by others:", text: "An accident caused by anyone other than the contract signer driving." },
      { lead: "Key damage:", text: "Loss or damage of the key requires compensation of ¥60,000." },
      { lead: "Damage to specific parts:", text: "Damage to glass, tires (including blowouts and leaks), wheels, lights, the exterior roof panel, and the underbody is excluded from compensation. Whether or not you are enrolled in a compensation plan, and whether or not you have already borne the ¥150,000 vehicle-damage deductible, all related repair and replacement costs for the specific parts listed above shall be paid in full separately by the customer." },
      { lead: "Serious violations:", text: "Including drunk driving, unlicensed driving, speeding and using a mobile phone while driving." },
      { lead: "Off-road driving:", text: "Damage caused by driving on beaches, riverbeds, forest roads or other non-official roads." }
    ],
    totalLossTitle: "Total Loss Policy",
    totalLoss: "If the vehicle is totaled (beyond repair) in an accident for which the renter is liable, the renter must compensate based on the vehicle's actual market value, with a reference amount starting from ¥600,000, and shall separately bear the applicable NOC and roadside assistance fees. Costs already covered by compensation will not be charged twice.",
    totalLossEmphasis: "¥600,000",
    specialTitle: "Special Reminder",
    special: "If unreported damage is only discovered when you return the car, the police usually cannot issue an accident certificate even if you report it then and there, and the process may take up to about 5 hours. Therefore, if an accident occurs, you must report it to the police immediately at the scene. The Company accepts no liability for any missed flights or additional airfare resulting from this. Please take note.",
    rules: [
      {
        num: "1",
        title: "Fuel",
        blocks: [
          { lead: "Full-tank return:", text: "Before returning the vehicle, please fill the tank at a gas station within 2 km of the shop, keep the receipt, and hand it to a staff member when you return the vehicle." },
          { lead: "Wrong fuel:", text: "If the wrong type of fuel is used, compensation of ¥500,000 will be charged (including engine repair and depreciation); if the actual costs of repair, cleaning and depreciation exceed or fall short of that amount, settlement shall be based on the amount actually incurred." },
          { lead: "Not returned full:", text: "A charge of ¥1,000–13,000 will be collected depending on the remaining fuel level." }
        ]
      },
      {
        num: "2",
        title: "Late Return",
        blocks: [
          { text: "If you cannot return the vehicle at the agreed time, you must contact us in advance. (Same-day extension fee: ¥2,500/hour)" }
        ]
      },
      {
        num: "3",
        title: "Vehicle Return",
        blocks: [
          { text: "Please return the vehicle during business hours (9:00–19:00)." },
          { text: "The vehicle pick-up/drop-off shuttle service ends at 18:30. Returns outside business hours incur an additional fee of ¥10,000." }
        ]
      },
      {
        num: "4",
        title: "Parking Violations",
        blocks: [
          { text: "Please pay any fine before returning the vehicle; otherwise, a parking-violation handling and late-payment risk compensation fee of ¥25,000 will be charged. If the vehicle is towed because of a violation, the renter shall bear all resulting costs in full." }
        ]
      },
      {
        num: "5",
        title: "Optional Equipment",
        blocks: [
          { lead: "Child seat:", text: "Under Japanese law, children under 6 years of age must use a child seat when travelling in a vehicle. Please install and check it yourself. If it is not installed, the shop will refuse the rental." },
          { lead: "Car navigation:", text: "Most in-car navigation systems are in Japanese; we recommend using Google Maps. No complaints regarding its functions or route guidance will be accepted." }
        ]
      },
      {
        num: "6",
        title: "Items Left Behind",
        blocks: [
          { text: "The shop accepts no responsibility. Please be sure to keep your valuables and personal belongings safe yourself." }
        ]
      },
      {
        num: "7",
        title: "Insurance Coverage & Unreported Damage",
        highlight: true,
        blocks: [
          { text: "In any accident (including collisions with animals and single-vehicle accidents), insurance is void without a police report, and the renter shall bear all losses in full.", highlight: true },
          { text: "If unreported damage is found upon return, repair costs from ¥20,000 plus a loss-of-business fee from ¥20,000 will be charged.", highlight: true },
          { text: "Therefore, please take a video of the vehicle at pick-up as evidence.", highlight: true }
        ]
      },
      {
        num: "8",
        title: "Interior Cleanliness",
        highlight: true,
        blocks: [
          { text: "Smoking is prohibited throughout the vehicle; violators will be charged ¥20,000. An additional cleaning fee of ¥5,000 applies for unusual dirt or mess.", highlight: true }
        ]
      },
      {
        num: "9",
        title: "Hidden Damage",
        blocks: [
          { text: "For damage that could not be detected at return because of snow or mud, the Company reserves the right to claim compensation within 48 hours after the car wash." }
        ]
      },
      {
        num: "10",
        title: "Gross Negligence",
        blocks: [
          { text: "If an accident is caused by drunk driving, drug-impaired driving, unlicensed driving, excessive speeding or any other illegal act or gross negligence, the shop's compensation system (CDW/NOC) shall not apply, and the renter shall pay a serious-violation additional compensation of ¥500,000 (which may not be offset against or substituted for any subsequent compensation). In addition, the renter shall bear all compensation and liability for vehicle repair costs (or, if the vehicle is written off, its market value plus towing and scrapping costs), NOC loss-of-business fees, and damage to or destruction of third-party vehicles and property, as well as personal injury or death." }
        ]
      },
      {
        num: "11",
        title: "Termination of the Rental Agreement",
        highlight: true,
        blocks: [
          { text: "If, during the rental period, the vehicle can no longer be used due to a breakdown, traffic accident, theft or other cause not attributable to the shop, the rental agreement shall terminate automatically. Upon termination of the agreement, rent already paid shall not be refunded.", highlight: true }
        ]
      }
    ]
  },

  ja: {
    agreementTitle: "レンタカー貸渡契約書",
    compensationTitle: "レンタカー補償制度のご案内",
    compensationSubtitle: "Compensation System",
    tableCaption: "事故時のご負担額比較表 （金額は日本円）",
    confirmComp: "私は、上記の補償制度および賠償責任について読み、十分に理解しました。",
    signatureLabel: "借受人署名",
    dateLabel: "日付",
    planLabels: {
      basic: "基本補償",
      cdw: "CDW",
      cdw_noc: "CDW+NOC"
    },
    planFullNames: {
      basic: "基本補償",
      cdw: "安心補償プラン（CDW）",
      cdw_noc: "フルサポートプラン（CDW+NOC）"
    },
    planPrices: {
      cdw: { compact: "3,300円/24h", other: "4,400円/24h" },
      cdw_noc: { compact: "5,500円/24h", other: "6,600円/24h" }
    },
    planHeaderNotes: {
      basic: "未加入・無料",
      cdwCompact: "小型車：3,300円/24h",
      cdwOther: "その他車種：4,400円/24h",
      nocCompact: "小型車：5,500円/24h",
      nocOther: "その他車種：6,600円/24h"
    },
    tableHeaders: ["項目", "基本補償*", "安心補償プラン（CDW）", "フルサポートプラン（CDW+NOC）"],
    tableRows: [
      { item: "対物補償\n自己負担額", basic: "100,000", cdw: "0", noc: "0" },
      { item: "車両補償\n自己負担額", basic: "150,000", cdw: "0", noc: "0" },
      { item: "NOC\n（休業補償）*", basic: "100,000\n~150,000", cdw: "100,000\n~150,000", noc: "0" },
      { item: "ロードサービス\n費用", basic: "20000～", cdw: "0*", noc: "0" },
      {
        item: "事故時の\n最大負担総額",
        basic: "400,000+\nリスク極めて高い",
        cdw: "150,000+\nリスクあり",
        noc: "0\n*全損及び特定部位の損傷を除く",
        emphasize: true
      }
    ],
    footnotes: [
      "*レンタカー乗車中の事故により運転者・同乗者が負傷（死亡および後遺障害を含む）した場合、具体的な補償範囲および上限（例：人身傷害保険の上限3,000万円等、治療費を含む）は、加入保険の保険証券および保険会社の査定に準じます。",
      "*NOC（ノン・オペレーション・チャージ／休業補償）：車両の修理期間中に貸出できないことによる営業損失の補償費用です。",
      "*ロードサービスの補償は、事故発生時に限り適用されます。"
    ],
    importantTitle: "重要なご注意",
    importantItems: [
      { text: "事故の大小にかかわらず（軽い擦り傷であっても）、必ず直ちに110番通報し、当店にご連絡ください。", emphasis: "必ず直ちに110番通報し、当店にご連絡ください。" },
      { text: "警察が発行する事故証明がない場合、保険会社は一切保険金の支払いに応じません。", emphasis: "警察が発行する事故証明がない場合、保険会社は一切保険金の支払いに応じません。" },
      { text: "相手方との示談は固く禁止します。これに反した場合、一切の結果および費用は借受人のご負担となります。", emphasis: "相手方との示談は固く禁止します。" },
      { text: "同一貸渡期間内において補償制度の適用は1回限りです。2回目の事故が発生した場合、借受人が全額を負担するものとします。" }
    ],
    exclusionsTitle: "補償制度の適用除外・免責事項",
    exclusionsLead: "（以下の場合は、補償に加入していてもお客様に全額ご負担いただきます）",
    exclusions: [
      { lead: "契約者以外の運転：", text: "契約者以外の方が運転して発生した事故。" },
      { lead: "キーの破損：", text: "紛失または破損の場合は60,000円を賠償いただきます。" },
      { lead: "特定部位の損傷：", text: "ガラス、タイヤ（パンク・空気漏れを含む）、ホイール、灯火、ルーフ外板及び車両底部の損傷は、補償の対象外です。補償制度に加入しているか否か、また車両補償の自己負担額150,000円をすでに負担しているか否かにかかわらず、上記特定部位に関する修理・交換費用はお客様が別途全額負担するものとします。" },
      { lead: "重大な違反：", text: "飲酒運転、無免許運転、速度超過、運転中の携帯電話使用等の違法行為を含みます。" },
      { lead: "道路以外の走行：", text: "海岸、河川敷、林道など正規の道路以外を走行したことによる損傷。" }
    ],
    totalLossTitle: "全損規定",
    totalLoss: "借受人の責に帰すべき事故により車両が全損（修理不能）となった場合、借受人は車両の実際の時価額に基づき賠償するものとし（参考金額600,000円～）、該当するNOC（休業補償）およびロードサービス費用を別途負担するものとします。すでに補償された費用を重複して請求することはありません。",
    totalLossEmphasis: "600,000円～",
    specialTitle: "特記事項",
    special: "返却時になって届出のない損傷が見つかった場合、その場で警察に連絡しても、警察は通常、事故証明を発行できません。手続きには約5時間かかることがあります。そのため、事故が起きたときは、必ず事故現場で直ちに警察へ届け出てください。これにより飛行機に乗り遅れた場合や追加の航空券代が発生した場合でも、当社は一切責任を負いませんので、あらかじめご了承ください。",
    rules: [
      {
        num: "1",
        title: "燃料について",
        blocks: [
          { lead: "満タン返却：", text: "ご返却時は、店舗周辺2km以内のガソリンスタンドで満タンに給油し、領収書を保管のうえ、スタッフへお渡しください。" },
          { lead: "油種の誤給油：", text: "誤った燃料を給油された場合、50万円（エンジン修理費および減価償却費を含む）をご賠償いただきます。実際の修理・洗浄および減価償却による損失がこれを上回る、または下回る場合は、実際に生じた金額で精算します。" },
          { lead: "満タン未返却：", text: "残量に応じて1,000～13,000円を申し受けます。" }
        ]
      },
      {
        num: "2",
        title: "貸渡時間の超過について",
        blocks: [
          { text: "約定の時間内にご返却できない場合は、必ず事前にご連絡ください。（当日延長料金：2,500円/時間）" }
        ]
      },
      {
        num: "3",
        title: "車両の返却について",
        blocks: [
          { text: "営業時間9:00～19:00内にご返却手続きをお願いいたします。" },
          { text: "送迎車両の運行は18:30までです。営業時間外のご返却には、別途10,000円の追加料金を申し受けます。" }
        ]
      },
      {
        num: "4",
        title: "駐車違反の処理について",
        blocks: [
          { text: "ご返却前に反則金を納付してください。納付されない場合は、駐車違反手続代行及び延滞リスク補償費25,000円を申し受けます。違反により車両がレッカー移動された場合、発生した費用は全額借受人のご負担となります。" }
        ]
      },
      {
        num: "5",
        title: "オプション装備について",
        blocks: [
          { lead: "チャイルドシート：", text: "日本の法律により、6歳未満の児童が乗車する場合はチャイルドシートを使用しなければなりません。お客様ご自身で取り付け・確認を行ってください。未装着の場合、当店は貸渡しをお断りいたします。" },
          { lead: "カーナビ：", text: "車載ナビの多くは日本語です。Googleマップのご利用をおすすめします。機能やルート案内に関するご苦情は一切お受けいたしません。" }
        ]
      },
      {
        num: "6",
        title: "忘れ物について",
        blocks: [
          { text: "当店は一切責任を負いません。貴重品および手回り品は必ずご自身で保管してください。" }
        ]
      },
      {
        num: "7",
        title: "保険の適用および未届出の損傷について",
        highlight: true,
        blocks: [
          { text: "いかなる事故（動物との衝突・自損事故を含む）も、警察への届出記録がない場合は保険が一切適用されず、損害は借受人が全額負担するものとします。", highlight: true },
          { text: "ご返却時に未届出の損傷が見つかった場合、修理費20,000円～＋営業損失費20,000円～を申し受けます。", highlight: true },
          { text: "そのため、貸渡時に証拠として車両の動画を撮影してください。", highlight: true }
        ]
      },
      {
        num: "8",
        title: "車内の清掃について",
        highlight: true,
        blocks: [
          { text: "車内は全面禁煙です。違反された場合は20,000円を賠償いただきます。著しい汚れ・散乱がある場合は、清掃費5,000円を追加で申し受けます。", highlight: true }
        ]
      },
      {
        num: "9",
        title: "隠れた損傷について",
        blocks: [
          { text: "ご返却時に積雪・泥汚れ等によりその場で発見できなかった損傷について、当社は洗車後48時間以内に賠償を請求する権利を留保します。" }
        ]
      },
      {
        num: "10",
        title: "重大な過失について",
        blocks: [
          { text: "飲酒運転、薬物運転、無免許運転、著しい速度超過等の違法行為または重大な過失により事故が発生した場合、当店の補償制度（CDW/NOC）は適用されず、借受人は重大違反付加賠償金500,000円（その後の各種賠償と相殺または代替することはできません）を支払うものとします。また、車両修理費（車両が全損・廃車となる場合は時価額ならびにレッカー費用・廃車費用）、NOC（休業補償）、第三者の車両・財物の損壊および人身の死傷に関する一切の賠償と責任は、借受人が負担するものとします。" }
        ]
      },
      {
        num: "11",
        title: "貸渡契約の終了について",
        highlight: true,
        blocks: [
          { text: "貸渡期間中、車両の故障、交通事故、盗難その他当店の責めに帰さない事由により車両の使用を継続できなくなった場合、貸渡契約は自動的に終了するものとします。契約終了の際、既にお支払いいただいた貸渡料金は返還いたしません。", highlight: true }
        ]
      }
    ]
  },

  zh: {
    agreementTitle: "租车合同",
    compensationTitle: "租车补偿制度说明",
    compensationSubtitle: "Compensation System",
    tableCaption: "事故赔付费用对比表 （金额为日元 JPY）",
    confirmComp: "本人已阅读并充分理解上述补偿制度及赔偿责任。",
    signatureLabel: "承租人签名 (Signature)",
    dateLabel: "日期 (Date)",
    planLabels: { basic: "基础补偿", cdw: "CDW", cdw_noc: "CDW+NOC" },
    planFullNames: {
      basic: "基础补偿",
      cdw: "安心补偿方案（CDW）",
      cdw_noc: "全面支持方案（CDW+NOC）"
    },
    planPrices: {
      cdw: { compact: "3,300日元/24h", other: "4,400日元/24h" },
      cdw_noc: { compact: "5,500日元/24h", other: "6,600日元/24h" }
    },
    planHeaderNotes: {
      basic: "(未购买免责)",
      cdwCompact: "小型车：3,300日元/24h",
      cdwOther: "其他车型：4,400日元/24h",
      nocCompact: "小型车：5,500日元/24h",
      nocOther: "其他车型：6,600日元/24h"
    },
    tableHeaders: ["项目", "基础补偿*", "安心补偿方案（CDW）", "全面支持方案（CDW+NOC）"],
    tableRows: [
      { item: "对物赔偿自付额", basic: "100,000", cdw: "0", noc: "0" },
      { item: "车辆损坏自付额", basic: "150,000", cdw: "0", noc: "0" },
      { item: "NOC营业损失费*", basic: "100,000\n~150,000", cdw: "100,000\n~150,000", noc: "0" },
      { item: "道路救援费用", basic: "20000〜", cdw: "0*", noc: "0" },
      { item: "事故最大\n负担总额", basic: "400,000+\n风险极高", cdw: "150,000+\n仍有风险", noc: "0\n*全损及特定部位损伤除外", emphasize: true }
    ],
    footnotes: [
      "*若因搭乘租赁车辆期间导致事故，驾驶员,乘客受伤（包含死亡以及伤残），具体赔付范围及上限（如人身伤害保险上限3,000万日元等，含医药费等）依投保保单及保险公司核定为准。",
      "*NOC营业损失费：车辆维修期间无法租赁的营业补偿费用",
      "*道路救援补偿仅限事故发生时生效"
    ],
    importantTitle: "重要注意事项",
    importantItems: [
      { text: "无论事故大小（即使是轻微刮擦），必须第一时间拨打 110 报案并联系本店。", emphasis: "必须第一时间拨打 110 报案并联系本店" },
      { text: "若无警察开具的事故证明，保险公司将一律不予理赔。", emphasis: "若无警察开具的事故证明，保险公司将一律不予理赔。" },
      { text: "严禁私下与对方和解，否则所有后果及费用由承租人自行承担。", emphasis: "严禁私下与对方和解" },
      { text: "同一租期内补偿制度只生效一次，如果发生二次事故，承租人将承担全部费用。" }
    ],
    exclusionsTitle: "补偿制度不适用与除外责任",
    exclusionsLead: "（以下情况即使加入补偿仍需客户全额赔偿）",
    exclusions: [
      { lead: "他人驾驶：", text: "签约者以外的人驾驶导致事故。" },
      { lead: "钥匙损坏：", text: "丢失或损坏需赔偿 60000日元。" },
      { lead: "特定部位损伤：", text: "玻璃、轮胎（含爆胎、漏气）、轮毂、车灯、车顶外板及底盘的损伤，均不在补偿范围内。无论是否加入补偿方案，也无论是否已承担150,000日元车辆损坏自付额，上述特定部位相关维修及更换费用均由客户另行全额承担。" },
      { lead: "严重违章：", text: "包括酒驾、无证驾驶、超速、开车使用手机等违法行为。" },
      { lead: "非路面行驶：", text: "在海滩、河床、林道等非正规道路行驶导致的损坏。" }
    ],
    totalLossTitle: "全损规定",
    totalLoss: "若因承租人应承担责任的事故导致车辆全损（无法修复），承租人须按车辆实际市场价值承担赔偿，参考金额600,000日元起，并另行承担适用的NOC营业损失费及道路救援费用，已获补偿的费用不重复收取。",
    totalLossEmphasis: "600,000日元",
    specialTitle: "特别提醒",
    special: "若还车时才发现未报警的损伤，即使当场报警，警察通常也无法开具事故证明，手续可能长达约 5 小时。因此发生事故时，请务必在事故现场立即报警。由此导致的误机或产生的额外机票费用，本公司概不承担，请务必知悉。",
    rules: [
      { num: "1", title: "关于燃油", blocks: [
        { lead: "满油归还：", text: "还车时请在店铺周边2km内加油站加满，请保存收据，并在还车时交给店员。" },
        { lead: "油种错误：", text: "若加错油，需赔偿 50 万日元（含发动机维修及折旧）；如实际维修、清洗及折旧损失超出或不足时，按实际发生金额结算。" },
        { lead: "未满归还：", text: "根据残油量，将收取1000-13000日元" }
      ]},
      { num: "2", title: "关于租赁超时", blocks: [
        { text: "如无法在约定时间内归还，请务必提前联系。（当天延长费用：2500日币/小时）" }
      ]},
      { num: "3", title: "关于车辆归还", blocks: [
        { text: "请在营业时间9：00-19:00内办理还车。" },
        { text: "接送车辆运营时间截止18:30。非营业时间还车将收取10,000日元额外费用。" }
      ]},
      { num: "4", title: "违章停车处理", blocks: [
        { text: "还车前请缴纳罚款，否则收取 25,000 日元违章代办及滞纳风险补偿费。若因违章导致车辆被移动，产生的费用由承租人全额承担。" }
      ]},
      { num: "5", title: "关于选装配件", blocks: [
        { lead: "儿童座椅：", text: "根据日本法律，未满6岁的儿童乘车时必须使用儿童座椅。请自行安装确认，未安装本店将拒绝租车。" },
        { lead: "车载导航：", text: "大部分车载导航均为日语，建议使用谷歌地图。不接受任何关于功能或路线引导的投诉。" }
      ]},
      { num: "6", title: "关于遗留物品", blocks: [
        { text: "本店概不负责，请务必自行妥善保管贵重物品及随身财物。" }
      ]},
      { num: "7", title: "保险使用&未报案伤痕", highlight: true, blocks: [
        { text: "任何事故（含撞击动物/自撞）若无警察笔录，保险一律无效，损失由承租人全额承担。", highlight: true },
        { text: "若还车时发现未报警伤痕，将收取20000日元起的维修费用+20000日元起的营业损失费用。", highlight: true },
        { text: "所以请取车时拍摄视频作为证据。", highlight: true }
      ]},
      { num: "8", title: "车内清洁", highlight: true, blocks: [
        { text: "全车禁烟，违者赔偿 20,000日元。异常脏乱加收 5,000日元 清洁费。", highlight: true }
      ]},
      { num: "9", title: "隐蔽损伤", blocks: [
        { text: "还车时若因积雪、泥泞导致现场未能发现的损伤，本公司保留在洗车后48小时内追究索赔的权利。" }
      ]},
      { num: "10", title: "重大过失", blocks: [
        { text: "因酒驾、毒驾、无证驾驶、严重超速等违法行为或重大过失引发事故的，本店补偿制度（CDW/NOC）不适用，承租人须支付 500,000 日元重大违规附加赔偿金（不冲抵或替代后续各项赔偿）。此外，车辆维修费（或车辆报废时的市场价格及拖车、报废费用）、NOC 营业损失费，以及第三方车辆与财物损毁、人员伤残或死亡的全部赔偿与责任，均由承租人承担。" }
      ]},
      { num: "11", title: "租赁协议的终止", highlight: true, blocks: [
        { text: "若在租赁期间，因车辆故障、交通事故、失窃或其他不可归责于本店的原因导致车辆无法继续使用，租赁合同将自动终止。合同终止时，已支付的租金不予退还。", highlight: true }
      ]}
    ]
  },

  ko: {
    agreementTitle: "자동차 임대차 계약서",
    compensationTitle: "렌터카 보상제도 안내",
    compensationSubtitle: "Compensation System",
    tableCaption: "사고 시 부담 비용 비교표 (금액 단위: 엔, JPY)",
    confirmComp: "본인은 위의 보상제도 및 배상 책임에 대해 읽고 충분히 이해하였습니다.",
    signatureLabel: "임차인 서명",
    dateLabel: "날짜",
    planLabels: { basic: "기본 보상", cdw: "CDW", cdw_noc: "CDW+NOC" },
    planFullNames: {
      basic: "기본 보상",
      cdw: "안심 보상 플랜 (CDW)",
      cdw_noc: "풀 서포트 플랜 (CDW+NOC)"
    },
    planPrices: {
      cdw: { compact: "¥3,300/24h", other: "¥4,400/24h" },
      cdw_noc: { compact: "¥5,500/24h", other: "¥6,600/24h" }
    },
    planHeaderNotes: {
      basic: "(미가입 / 무료)",
      cdwCompact: "소형차: ¥3,300/24h",
      cdwOther: "기타 차종: ¥4,400/24h",
      nocCompact: "소형차: ¥5,500/24h",
      nocOther: "기타 차종: ¥6,600/24h"
    },
    tableHeaders: ["항목", "기본 보상*", "안심 보상 플랜 (CDW)", "풀 서포트 플랜 (CDW+NOC)"],
    tableRows: [
      { item: "대물 배상\n자기부담금", basic: "100,000", cdw: "0", noc: "0" },
      { item: "차량 손상\n자기부담금", basic: "150,000", cdw: "0", noc: "0" },
      { item: "NOC\n영업손실비*", basic: "100,000\n~150,000", cdw: "100,000\n~150,000", noc: "0" },
      { item: "긴급출동\n(로드서비스) 비용", basic: "20000~", cdw: "0*", noc: "0" },
      { item: "사고 시\n최대 부담 총액", basic: "400,000+\n위험 매우 높음", cdw: "150,000+\n위험 남아 있음", noc: "0\n*전손 및 특정 부위 손상 제외", emphasize: true }
    ],
    footnotes: [
      "*렌터카 탑승 중 발생한 사고로 운전자 및 동승자가 부상(사망 및 후유장해 포함)을 입은 경우, 구체적인 보상 범위 및 한도(예: 인신상해보험 한도 ¥30,000,000 등, 치료비 포함)는 가입 보험증권 및 보험회사의 심사 결과에 따릅니다.",
      "*NOC(영업손실비, Non-Operation Charge): 차량 수리 기간 동안 대여할 수 없어 발생하는 영업 손실에 대한 보상 비용입니다.",
      "*긴급출동(로드서비스) 보상은 사고 발생 시에만 적용됩니다."
    ],
    importantTitle: "중요 주의사항",
    importantItems: [
      { text: "사고의 크기와 관계없이(가벼운 긁힘이라도) 반드시 즉시 110에 전화하여 경찰에 신고하고 당 매장에 연락해야 합니다.", emphasis: "반드시 즉시 110에 전화하여 경찰에 신고하고 당 매장에 연락해야 합니다" },
      { text: "경찰이 발급한 사고 증명이 없으면 보험회사는 일절 보험 처리를 하지 않습니다.", emphasis: "경찰이 발급한 사고 증명이 없으면 보험회사는 일절 보험 처리를 하지 않습니다." },
      { text: "상대방과의 사적 합의는 엄격히 금지됩니다. 이를 어길 경우 모든 결과와 비용은 임차인이 부담합니다.", emphasis: "상대방과의 사적 합의는 엄격히 금지됩니다" },
      { text: "보상제도는 동일한 대여 기간 내 1회만 적용되며, 두 번째 사고가 발생한 경우 임차인이 모든 비용을 부담합니다." }
    ],
    exclusionsTitle: "보상제도 적용 제외 및 면책 사항",
    exclusionsLead: "(다음의 경우에는 보상 플랜에 가입하였더라도 고객이 전액 배상해야 합니다)",
    exclusions: [
      { lead: "타인 운전:", text: "계약자 이외의 사람이 운전하여 발생한 사고." },
      { lead: "열쇠(키) 파손:", text: "분실 또는 파손 시 ¥60,000을 배상해야 합니다." },
      { lead: "특정 부위 손상:", text: "유리, 타이어(펑크·공기 누출 포함), 휠, 등화, 루프 외판 및 차량 하부의 손상은 보상 대상이 아닙니다. 보상제도 가입 여부와 이미 차량 손상 자기부담금 150,000엔을 부담했는지 여부와 관계없이, 위 특정 부위와 관련된 수리 및 교체 비용은 고객이 별도로 전액 부담합니다." },
      { lead: "중대한 위반:", text: "음주운전, 무면허운전, 과속, 운전 중 휴대전화 사용 등의 위법행위를 포함합니다." },
      { lead: "비포장도로 주행:", text: "해변, 하천 바닥, 임도 등 정규 도로가 아닌 곳을 주행하여 발생한 손상." }
    ],
    totalLossTitle: "전손 규정",
    totalLoss: "임차인에게 책임이 있는 사고로 차량이 전손(수리 불가)된 경우, 임차인은 차량의 실제 시장가치에 따라 배상해야 하며(참고 금액 ¥600,000부터), 해당되는 NOC 영업손실비 및 긴급출동 비용을 별도로 부담합니다. 이미 보상받은 비용은 중복하여 청구하지 않습니다.",
    totalLossEmphasis: "¥600,000",
    specialTitle: "특별 안내",
    special: "반납할 때 비로소 신고하지 않은 손상이 발견되면, 그 자리에서 경찰에 신고하더라도 경찰은 보통 사고 증명을 발급하지 못하며, 절차는 약 5시간이 걸릴 수 있습니다. 따라서 사고가 나면 반드시 사고 현장에서 즉시 경찰에 신고해 주십시오. 이로 인해 항공편을 놓치거나 추가 항공권 비용이 발생하더라도 당사는 일절 책임지지 않으니 반드시 숙지해 주십시오.",
    rules: [
      { num: "1", title: "연료", blocks: [
        { lead: "가득 주유 후 반납:", text: "차량 반납 시 매장 반경 2km 이내의 주유소에서 연료를 가득 채우고, 영수증을 보관해 두었다가 반납할 때 직원에게 제출해 주십시오." },
        { lead: "연료 오주유:", text: "잘못된 종류의 연료를 주유한 경우 ¥500,000(엔진 수리비 및 감가상각비 포함)을 배상해야 합니다. 실제 수리·세척 및 감가상각 손실이 이를 초과하거나 부족한 경우에는 실제로 발생한 금액으로 정산합니다." },
        { lead: "가득 주유하지 않은 반납:", text: "남은 연료량에 따라 ¥1,000~13,000을 징수합니다." }
      ]},
      { num: "2", title: "대여 시간 초과", blocks: [
        { text: "약정된 시간 내에 반납할 수 없는 경우 반드시 사전에 연락해 주십시오. (당일 연장 요금: ¥2,500/시간)" }
      ]},
      { num: "3", title: "차량 반납", blocks: [
        { text: "영업시간(9:00~19:00) 내에 차량을 반납해 주십시오." },
        { text: "차량 송영(픽업·샌딩) 서비스는 18:30에 종료됩니다. 영업시간 외 반납 시 ¥10,000의 추가 요금이 부과됩니다." }
      ]},
      { num: "4", title: "주정차 위반 처리", blocks: [
        { text: "차량 반납 전에 과태료를 납부해 주십시오. 납부하지 않은 경우 ¥25,000의 주정차 위반 대행 및 체납 위험 보상비를 징수합니다. 위반으로 인해 차량이 견인된 경우 발생하는 비용은 전액 임차인이 부담합니다." }
      ]},
      { num: "5", title: "옵션 장비", blocks: [
        { lead: "어린이 카시트:", text: "일본 법률에 따라, 만 6세 미만의 어린이가 차량에 탑승할 때에는 어린이 카시트를 사용해야 합니다. 직접 장착 및 확인해 주십시오. 장착하지 않을 경우 당 매장은 대여를 거절합니다." },
        { lead: "차량 내비게이션:", text: "대부분의 차량 내비게이션은 일본어입니다. 구글 지도를 사용하시기를 권합니다. 기능 또는 경로 안내에 관한 어떠한 불만도 접수하지 않습니다." }
      ]},
      { num: "6", title: "분실물", blocks: [
        { text: "당 매장은 일절 책임지지 않습니다. 귀중품 및 소지품은 반드시 본인이 직접 보관해 주십시오." }
      ]},
      { num: "7", title: "보험 적용 및 미신고 손상", highlight: true, blocks: [
        { text: "모든 사고(동물과의 충돌·단독 사고 포함)는 경찰 신고 기록이 없으면 보험이 일절 적용되지 않으며, 손해는 전액 임차인이 부담합니다.", highlight: true },
        { text: "반납 시 신고되지 않은 손상이 발견된 경우, ¥20,000부터의 수리비와 ¥20,000부터의 영업손실비를 청구합니다.", highlight: true },
        { text: "따라서 차량 인수 시 증거로 동영상을 촬영해 주십시오.", highlight: true }
      ]},
      { num: "8", title: "차량 내부 청결", highlight: true, blocks: [
        { text: "차량 내 전면 금연이며, 위반 시 ¥20,000을 배상해야 합니다. 비정상적으로 더럽거나 어지러운 경우 청소비 ¥5,000을 추가로 징수합니다.", highlight: true }
      ]},
      { num: "9", title: "숨겨진 손상", blocks: [
        { text: "반납 시 눈·진흙 등으로 인해 현장에서 발견하지 못한 손상에 대하여, 당사는 세차 후 48시간 이내에 배상을 청구할 권리를 보유합니다." }
      ]},
      { num: "10", title: "중대한 과실", blocks: [
        { text: "음주운전, 약물운전, 무면허운전, 심각한 과속 등 위법행위 또는 중대한 과실로 사고가 발생한 경우, 당 매장의 보상제도(CDW/NOC)는 적용되지 않으며, 임차인은 ¥500,000의 중대한 위반 부가 배상금(이후의 각종 배상과 상계하거나 이를 대체할 수 없음)을 지불해야 합니다. 또한 차량 수리비(차량이 폐차되는 경우 시장가격 및 견인비·폐차비), NOC 영업손실비, 그리고 제3자의 차량·재물 손괴 및 인명 상해·사망에 대한 모든 배상과 책임은 임차인이 부담합니다." }
      ]},
      { num: "11", title: "임대차 계약의 종료", highlight: true, blocks: [
        { text: "대여 기간 중 차량 고장, 교통사고, 도난 또는 기타 당 매장의 책임이 아닌 사유로 차량을 계속 사용할 수 없게 된 경우, 임대차 계약은 자동으로 종료됩니다. 계약 종료 시, 이미 지급한 대여료는 반환되지 않습니다.", highlight: true }
      ]}
    ]
  },

  th: {
    agreementTitle: "สัญญาเช่ารถยนต์",
    compensationTitle: "คำอธิบายระบบการชดเชยรถเช่า",
    compensationSubtitle: "Compensation System",
    tableCaption: "ตารางเปรียบเทียบค่าใช้จ่ายกรณีเกิดอุบัติเหตุ (หน่วย: เยน JPY)",
    confirmComp: "ข้าพเจ้าได้อ่านและเข้าใจระบบการชดเชยและความรับผิดในการชดใช้ค่าเสียหายข้างต้นโดยละเอียดแล้ว",
    signatureLabel: "ลายมือชื่อผู้เช่า",
    dateLabel: "วันที่",
    planLabels: { basic: "การชดเชยพื้นฐาน", cdw: "CDW", cdw_noc: "CDW+NOC" },
    planFullNames: {
      basic: "การชดเชยพื้นฐาน",
      cdw: "แผนคุ้มครองอุ่นใจ (CDW)",
      cdw_noc: "แผนคุ้มครองเต็มรูปแบบ (CDW+NOC)"
    },
    planPrices: {
      cdw: { compact: "¥3,300/24 ชม.", other: "¥4,400/24 ชม." },
      cdw_noc: { compact: "¥5,500/24 ชม.", other: "¥6,600/24 ชม." }
    },
    planHeaderNotes: {
      basic: "(ไม่ได้ซื้อเพิ่ม / ฟรี)",
      cdwCompact: "รถขนาดเล็ก: ¥3,300/24 ชม.",
      cdwOther: "รถประเภทอื่น: ¥4,400/24 ชม.",
      nocCompact: "รถขนาดเล็ก: ¥5,500/24 ชม.",
      nocOther: "รถประเภทอื่น: ¥6,600/24 ชม."
    },
    tableHeaders: ["รายการ", "การชดเชยพื้นฐาน*", "แผนคุ้มครองอุ่นใจ (CDW)", "แผนคุ้มครองเต็มรูปแบบ (CDW+NOC)"],
    tableRows: [
      { item: "ค่าเสียหายส่วนแรก\n(ทรัพย์สินบุคคลภายนอก)", basic: "100,000", cdw: "0", noc: "0" },
      { item: "ค่าเสียหายส่วนแรก\n(ตัวรถเช่า)", basic: "150,000", cdw: "0", noc: "0" },
      { item: "NOC\nค่าขาดรายได้*", basic: "100,000\n~150,000", cdw: "100,000\n~150,000", noc: "0" },
      { item: "ค่าบริการช่วยเหลือ\nฉุกเฉินบนท้องถนน", basic: "20000~", cdw: "0*", noc: "0" },
      { item: "ยอดรับผิดชอบสูงสุด\nกรณีเกิดอุบัติเหตุ", basic: "400,000+\nความเสี่ยงสูงมาก", cdw: "150,000+\nยังมีความเสี่ยง", noc: "0\n*ยกเว้นรถเสียหายทั้งคันและความเสียหายของชิ้นส่วนเฉพาะ", emphasize: true }
    ],
    footnotes: [
      "*หากเกิดอุบัติเหตุระหว่างโดยสารรถเช่า และผู้ขับขี่หรือผู้โดยสารได้รับบาดเจ็บ (รวมถึงเสียชีวิตและทุพพลภาพ) ขอบเขตและวงเงินการชดเชย (เช่น ประกันภัยการบาดเจ็บส่วนบุคคลวงเงินสูงสุด ¥30,000,000 รวมค่ารักษาพยาบาล) ให้เป็นไปตามกรมธรรม์และการพิจารณาของบริษัทประกันภัย",
      "*NOC (ค่าขาดรายได้, Non-Operation Charge): ค่าชดเชยรายได้ที่สูญเสียไปเนื่องจากไม่สามารถให้เช่ารถได้ในระหว่างการซ่อม",
      "*การชดเชยค่าบริการช่วยเหลือฉุกเฉินบนท้องถนนใช้เฉพาะกรณีเกิดอุบัติเหตุเท่านั้น"
    ],
    importantTitle: "ข้อควรระวังสำคัญ",
    importantItems: [
      { text: "ไม่ว่าอุบัติเหตุจะเล็กหรือใหญ่ (แม้เป็นเพียงรอยขีดข่วนเล็กน้อย) ต้องโทรแจ้งตำรวจที่หมายเลข 110 และติดต่อทางร้านทันที", emphasis: "ต้องโทรแจ้งตำรวจที่หมายเลข 110 และติดต่อทางร้านทันที" },
      { text: "หากไม่มีหลักฐานการเกิดอุบัติเหตุที่ออกโดยตำรวจ บริษัทประกันภัยจะไม่ดำเนินการเคลมใด ๆ ทั้งสิ้น", emphasis: "หากไม่มีหลักฐานการเกิดอุบัติเหตุที่ออกโดยตำรวจ บริษัทประกันภัยจะไม่ดำเนินการเคลมใด ๆ ทั้งสิ้น" },
      { text: "ห้ามตกลงยอมความกับคู่กรณีเองโดยเด็ดขาด มิฉะนั้นผู้เช่าต้องรับผิดชอบผลที่ตามมาและค่าใช้จ่ายทั้งหมดเอง", emphasis: "ห้ามตกลงยอมความกับคู่กรณีเองโดยเด็ดขาด" },
      { text: "ระบบการชดเชยใช้ได้เพียงครั้งเดียวภายในระยะเวลาเช่าเดียวกัน หากเกิดอุบัติเหตุครั้งที่สอง ผู้เช่าต้องรับผิดชอบค่าใช้จ่ายทั้งหมด" }
    ],
    exclusionsTitle: "กรณีที่ระบบการชดเชยไม่ถูกนำมาใช้และข้อยกเว้นความรับผิด",
    exclusionsLead: "(ในกรณีต่อไปนี้ แม้จะซื้อแผนคุ้มครองแล้ว ลูกค้ายังต้องชดใช้เต็มจำนวน)",
    exclusions: [
      { lead: "ผู้อื่นขับขี่:", text: "อุบัติเหตุที่เกิดจากบุคคลอื่นที่ไม่ใช่ผู้ลงนามในสัญญาเป็นผู้ขับขี่" },
      { lead: "กุญแจเสียหาย:", text: "กรณีสูญหายหรือเสียหายต้องชดใช้ ¥60,000" },
      { lead: "ความเสียหายของชิ้นส่วนเฉพาะ:", text: "ความเสียหายของกระจก ยาง (รวมยางระเบิดและยางรั่ว) ล้อ ไฟรถ แผ่นหลังคาด้านนอก และช่วงล่างของรถ ไม่อยู่ในความคุ้มครอง ไม่ว่าจะสมัครแผนการชดเชยหรือไม่ และไม่ว่าได้ชำระค่าเสียหายส่วนแรกสำหรับตัวรถเช่า 150,000 เยน แล้วหรือไม่ ค่าซ่อมและค่าเปลี่ยนที่เกี่ยวข้องกับชิ้นส่วนเฉพาะดังกล่าว ลูกค้าต้องรับผิดชอบเพิ่มเติมเต็มจำนวน" },
      { lead: "การฝ่าฝืนกฎหมายร้ายแรง:", text: "รวมถึงการเมาแล้วขับ การขับขี่โดยไม่มีใบอนุญาต การขับรถเร็วเกินกำหนด และการใช้โทรศัพท์มือถือขณะขับรถ" },
      { lead: "การขับขี่นอกถนน:", text: "ความเสียหายที่เกิดจากการขับขี่บนชายหาด ท้องแม่น้ำ ถนนในป่า หรือเส้นทางที่ไม่ใช่ถนนปกติ" }
    ],
    totalLossTitle: "ข้อกำหนดกรณีรถเสียหายทั้งคัน",
    totalLoss: "หากรถเสียหายทั้งคัน (ไม่สามารถซ่อมได้) จากอุบัติเหตุที่ผู้เช่าต้องรับผิดชอบ ผู้เช่าต้องชดใช้ตามมูลค่าตลาดจริงของรถ โดยมีจำนวนอ้างอิงเริ่มต้นที่ ¥600,000 และต้องรับผิดชอบค่า NOC และค่าบริการช่วยเหลือฉุกเฉินที่เกี่ยวข้องแยกต่างหาก ค่าใช้จ่ายที่ได้รับการชดเชยแล้วจะไม่เรียกเก็บซ้ำ",
    totalLossEmphasis: "¥600,000",
    specialTitle: "ข้อควรทราบพิเศษ",
    special: "หากพบความเสียหายที่ยังไม่ได้แจ้งความเมื่อคืนรถ แม้จะแจ้งตำรวจทันที ณ ที่นั้น ตำรวจมักออกหลักฐานการเกิดอุบัติเหตุให้ไม่ได้ และขั้นตอนอาจใช้เวลานานถึงประมาณ 5 ชั่วโมง ดังนั้นหากเกิดอุบัติเหตุ กรุณาแจ้งตำรวจทันทีที่เกิดเหตุ บริษัทฯ จะไม่รับผิดชอบใด ๆ ต่อการตกเครื่องบินหรือค่าตั๋วเครื่องบินเพิ่มเติมที่เกิดขึ้น โปรดรับทราบ",
    rules: [
      { num: "1", title: "น้ำมันเชื้อเพลิง", blocks: [
        { lead: "คืนรถพร้อมน้ำมันเต็มถัง:", text: "เมื่อคืนรถ กรุณาเติมน้ำมันให้เต็มถังที่สถานีบริการน้ำมันในรัศมี 2 กม. จากร้าน โปรดเก็บใบเสร็จไว้ และเมื่อคืนรถมอบให้พนักงาน" },
        { lead: "เติมน้ำมันผิดประเภท:", text: "หากเติมน้ำมันผิดประเภท ต้องชดใช้ค่าเสียหาย ¥500,000 (รวมค่าซ่อมเครื่องยนต์และค่าเสื่อมราคา) หากค่าซ่อม การทำความสะอาด และค่าเสื่อมราคาที่เกิดขึ้นจริงสูงหรือต่ำกว่าจำนวนดังกล่าว ให้คิดตามจำนวนที่เกิดขึ้นจริง" },
        { lead: "คืนรถโดยน้ำมันไม่เต็มถัง:", text: "จะเรียกเก็บเงิน ¥1,000–13,000 ตามปริมาณน้ำมันที่เหลืออยู่" }
      ]},
      { num: "2", title: "การคืนรถเกินเวลา", blocks: [
        { text: "หากไม่สามารถคืนรถภายในเวลาที่ตกลงไว้ โปรดแจ้งล่วงหน้าทุกครั้ง (ค่าขยายเวลาภายในวันเดียวกัน: ¥2,500/ชั่วโมง)" }
      ]},
      { num: "3", title: "การคืนรถ", blocks: [
        { text: "กรุณาคืนรถภายในเวลาทำการ 9:00–19:00 น." },
        { text: "บริการรถรับ-ส่งให้บริการถึงเวลา 18:30 น. การคืนรถนอกเวลาทำการจะมีค่าธรรมเนียมเพิ่มเติม ¥10,000" }
      ]},
      { num: "4", title: "การฝ่าฝืนกฎการจอดรถ", blocks: [
        { text: "กรุณาชำระค่าปรับก่อนคืนรถ มิฉะนั้นจะเรียกเก็บค่าธรรมเนียมชดเชยความเสี่ยงด้านการดำเนินการแทนและค่าปรับค้างชำระ ¥25,000 หากรถถูกยกย้ายเนื่องจากการฝ่าฝืน ผู้เช่าต้องรับผิดชอบค่าใช้จ่ายที่เกิดขึ้นทั้งหมดเต็มจำนวน" }
      ]},
      { num: "5", title: "อุปกรณ์เสริม", blocks: [
        { lead: "คาร์ซีทเด็ก:", text: "ตามกฎหมายญี่ปุ่น เด็กอายุไม่ถึง 6 ปีที่โดยสารในรถต้องใช้คาร์ซีทเด็ก กรุณาติดตั้งและตรวจสอบด้วยตนเอง หากไม่ติดตั้ง ทางร้านจะปฏิเสธการให้เช่า" },
        { lead: "ระบบนำทางในรถ:", text: "ระบบนำทางในรถส่วนใหญ่เป็นภาษาญี่ปุ่น แนะนำให้ใช้ Google Maps ทางร้านไม่รับข้อร้องเรียนใด ๆ เกี่ยวกับฟังก์ชันหรือการนำทางเส้นทาง" }
      ]},
      { num: "6", title: "ทรัพย์สินที่ลืมไว้ในรถ", blocks: [
        { text: "ทางร้านไม่รับผิดชอบใด ๆ ทั้งสิ้น กรุณาเก็บรักษาของมีค่าและทรัพย์สินส่วนตัวด้วยตนเอง" }
      ]},
      { num: "7", title: "การใช้ประกันภัยและความเสียหายที่ไม่ได้แจ้งความ", highlight: true, blocks: [
        { text: "อุบัติเหตุใด ๆ (รวมถึงการชนสัตว์หรืออุบัติเหตุรถคันเดียว) หากไม่มีบันทึกการแจ้งความต่อตำรวจ ประกันภัยจะไม่คุ้มครองทั้งสิ้น และผู้เช่าต้องรับผิดชอบความเสียหายทั้งหมดเต็มจำนวน", highlight: true },
        { text: "หากพบความเสียหายที่ไม่ได้แจ้งความเมื่อคืนรถ จะเรียกเก็บค่าซ่อมตั้งแต่ ¥20,000 และค่าขาดรายได้ตั้งแต่ ¥20,000", highlight: true },
        { text: "ดังนั้น กรุณาถ่ายวิดีโอสภาพรถขณะรับรถไว้เป็นหลักฐาน", highlight: true }
      ]},
      { num: "8", title: "ความสะอาดภายในรถ", highlight: true, blocks: [
        { text: "ห้ามสูบบุหรี่ภายในรถโดยเด็ดขาด ผู้ฝ่าฝืนต้องชดใช้ ¥20,000 หากรถสกปรกหรือรกผิดปกติ จะเรียกเก็บค่าทำความสะอาดเพิ่มอีก ¥5,000", highlight: true }
      ]},
      { num: "9", title: "ความเสียหายที่ตรวจไม่พบ", blocks: [
        { text: "สำหรับความเสียหายที่ไม่สามารถตรวจพบได้ ณ เวลาคืนรถเนื่องจากหิมะหรือโคลน บริษัทฯ ขอสงวนสิทธิ์ในการเรียกร้องค่าเสียหายภายใน 48 ชั่วโมงหลังการล้างรถ" }
      ]},
      { num: "10", title: "ความประมาทเลินเล่ออย่างร้ายแรง", blocks: [
        { text: "หากเกิดอุบัติเหตุจากการเมาแล้วขับ การขับขี่ภายใต้ฤทธิ์ยาเสพติด การขับขี่โดยไม่มีใบอนุญาต การขับรถเร็วเกินกำหนดอย่างร้ายแรง หรือการกระทำผิดกฎหมายอื่น ๆ หรือความประมาทเลินเล่ออย่างร้ายแรง ระบบการชดเชยของทางร้าน (CDW/NOC) จะไม่ถูกนำมาใช้ และผู้เช่าต้องชำระค่าชดเชยเพิ่มเติมกรณีฝ่าฝืนร้ายแรง ¥500,000 (ไม่สามารถนำไปหักกลบหรือใช้แทนค่าชดเชยอื่นใดในภายหลังได้) นอกจากนี้ ผู้เช่าต้องรับผิดชอบค่าชดเชยและความรับผิดทั้งหมด ได้แก่ ค่าซ่อมรถ (หรือกรณีรถต้องถูกทิ้งซาก คือมูลค่าตามราคาตลาด รวมค่ายกลากและค่าทำลายซาก) ค่า NOC (ค่าขาดรายได้) ความเสียหายต่อรถและทรัพย์สินของบุคคลภายนอก ตลอดจนการบาดเจ็บหรือเสียชีวิตของบุคคล" }
      ]},
      { num: "11", title: "การสิ้นสุดสัญญาเช่า", highlight: true, blocks: [
        { text: "หากในระหว่างระยะเวลาเช่า รถไม่สามารถใช้งานต่อได้เนื่องจากรถเสีย อุบัติเหตุจราจร การโจรกรรม หรือสาเหตุอื่นที่ไม่ใช่ความรับผิดชอบของทางร้าน สัญญาเช่านี้จะสิ้นสุดลงโดยอัตโนมัติ เมื่อสัญญาสิ้นสุดลง ค่าเช่าที่ชำระแล้วจะไม่ได้รับคืน", highlight: true }
      ]}
    ]
  }

};
