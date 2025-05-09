---
title: "ASUS Ascent GX10で仮想通貨マイニング―電力コストと利益を試算"
date: 2025-05-10
tags: [technology, crypto, hardware]
layout: base.njk
description: "ASUSのAIミニスーパーコンピューター「Ascent GX10」を仮想通貨マイニング用途に転用した場合の適性通貨、日次電気代、収入、利益を日本の電力単価で試算しました。"
---

## はじめに  
ASUSがまもなく発売する **Ascent GX10** は、NVIDIA Grace‑Blackwell「GB10」スーパー チップを採用した卓上サイズのAIマシンです。128 GBの統合メモリと最大1,000 TOPSの推論性能を備えつつ、消費電力はピークでも約170 Wに抑えられると発表されています。:contentReference[oaicite:0]{index=0}  
本記事では、同機を個人レベルの**GPUマイニング**に転用した場合、どの通貨が有望か、1日あたりの電気代・収益・最終利益を、日本の平均電力単価で概算します。  

## GX10のハードウェア仕様とマイニング適性  
![GX10外観イメージ](../img/gx10_front.jpg)  
GB10は20コアArm CPUとBlackwell世代GPUを同パッケージ化し、NVLink‑C2CでCPU‑GPU間の帯域をPCIe 5.0比5倍に高めています。:contentReference[oaicite:1]{index=1}  
RTX 4090に匹敵する2 GH/s級のKaspaハッシュレートが報告されているBlackwellベースGPUを240 Wで駆動した場合の効率は約0.0083 GH/Wですが、GX10は170 W制限により1.8 GH/s前後に落ち着くと推定されます。:contentReference[oaicite:2]{index=2}  
グラフィック出力も備えるため、Ravencoin（KawPow）やErgo（Autolykos）などGPU寄りアルゴリズム全般を扱えますが、Kaspa（kHeavyHash）は**メモリ帯域依存度が低く効率が高い**ため、家庭用電力単価の高い日本でも黒字化しやすい選択肢となります。:contentReference[oaicite:3]{index=3}  

## 電気代の計算  
GX10を24時間連続稼働すると、  
- 消費電力量：0.17 kW × 24 h ＝ **4.08 kWh**  
- 日本の平均家庭用電力単価：36.699 円/kWh（2024年9月時点）:contentReference[oaicite:4]{index=4}  
- **日次電気代：約150 円（≒1.05 USD）**  

## 日次収益シミュレーション  
最新のRTX 4090実測値では、Kaspa 2 GH/s・240 W構成で**1.22 USD/日**の総収入が報告されています。:contentReference[oaicite:5]{index=5}  
ハッシュレートをGX10想定の1.8 GH/sに比例させ、消費電力差も考慮すると総収入は **約1.10 USD（165 円）/日** と推算できます。  
- 総収入：165 円  
- 電気代：150 円  
- **日次利益：15 円**（月あたり約450 円）  

参考までに、より電力制約の少ないRTX 5090（410 W）ではGRIN等で19 USD/日以上の収入例もありますが、日本の高電力コスト環境では同クラスGPUでも赤字になるケースが多い点に注意が必要です。:contentReference[oaicite:6]{index=6}  

## まとめ：導入判断のポイント  
![マイニング概念図](../img/mining_concept.jpg)  
1. **最有力通貨はKaspa**：メモリ帯域依存が低く、Blackwell GPUの効率を活かせる。  
2. **電力コストが収益を圧迫**：36.7 円/kWhでは日利15 円程度。電力単価が20 円/kWh以下の事業用契約や地方電力を確保できない限り、大きな利益は期待しにくい。  
3. **AI推論との兼業**：AI開発や推論用途で昼間稼働し、夜間にマイニングを回す運用なら設備投資をより有効活用できる。  
4. **為替・難易度変動リスク**：Kaspa価格やネットワーク難易度、円安・円高で損益が大きく変わるため、定期的にWhatToMine等で再試算し、撤退ラインを明確にすることが推奨される。:contentReference[oaicite:7]{index=7}  

Ascent GX10は革新的なAIミニスーパーコンピューターですが、日本の家庭で「マイニング専用機」として使う場合、現状の電力単価では**趣味レベルの微益**に留まります。AI研究とマイニングを両立させるハイブリッド運用こそが、同機を最も有効活用するシナリオと言えるでしょう。  
