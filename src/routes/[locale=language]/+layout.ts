import type { LayoutLoad } from '../$types';
import { error } from '@sveltejs/kit';

export const load: LayoutLoad = (parent) => {
  const locale = parent.params.locale;
  if (locale === 'en') {
    return {
      locale: 'en',
      seo: {
        title: "ICSF Select6 – World's most intelligent selective jet fluxer."
      },
      translations: []
    };
  }
  if (locale === 'ja') {
    // TODO: fetch data
    return {
      locale: 'ja',
      seo: {
        title: 'ICSF Select6 - 世界で最もインテリジェントなセレクティブ・ジェット・フラックス。'
      },
      translations: [
        {
          en: "ICSF Select6 – World's most intelligent selective jet fluxer.",
          ja: 'ICSF Select6 - 世界で最もインテリジェントなセレクティブ・ジェット・フラックス。'
        },
        { en: 'What is ICSF?', ja: 'ICSFとは？' },
        {
          en: 'ICSF Select6 is our stand-alone jet fluxing machine, also known as a jet fluxer.',
          ja: 'ICSF Select6は、ジェットフラクサーとしても知られる、当社の独立型ジェットフラックス装置です。'
        },
        {
          en: 'Our innovative fluxer offers a high speed, high precision, real selective fluxing process. The machine is designed to optimize the amount of flux for each individual solder joint, maintaining the required cycle times, even for high volume wave soldering.',
          ja: '当社の革新的なフラックス塗布装置は、高速、高精度、実選択的なフラックス塗布プロセスを提供します。この装置は、個々のはんだ接合部に対してフラックスの量を最適化するように設計されており、大量のウェーブはんだ付けでも必要なサイクルタイムを維持します。'
        },
        {
          en: 'ICSF Select6 is suitable for electronics manufacturers who do:',
          ja: 'ICSFセレクト6は、このような電子機器メーカーに適している：'
        },

        { en: 'Download specification (PDF)', ja: '仕様書ダウンロード (PDF)' },
        { en: 'Play video', ja: 'ビデオ再生' },
        { en: 'Request Simulation', ja: 'シミュレーションのリクエスト' },
        {
          en: 'Send us a photo of your circuit board and we will send back to you a detailed report that can simulate how fast, how precise ICSF can jet flux your board for your project, for free!',
          ja: 'お客様の回路基板の写真をお送りいただければ、ICSFがお客様のプロジェクトにどれだけ速く、どれだけ正確に基板をジェットフラックスできるかをシミュレーションできる詳細なレポートを無料でお送りします！'
        },
        { en: 'Ask question', ja: '質問する' },
        { en: 'Where to buy?', ja: 'どこで買う？' },
        {
          en: "World's most intelligent selective **jet fluxer**.",
          ja: '世界で最もインテリジェントな選択式**ジェットフラックス**。'
        },
        {
          en: 'Contact',
          ja: '連絡先'
        },
        {
          en: 'Address',
          ja: '住所'
        },
        {
          en: 'Email',
          ja: 'Eメール'
        },
        {
          en: 'Phone',
          ja: '電話番号'
        },
        {
          en: 'Where to buy?',
          ja: 'どこで買う？'
        },
        {
          en: 'All the companies below are approved and trained suppliers of ICSF Select6:',
          ja: '以下の会社はすべて、ICSF Select6の認可を受け、トレーニングを受けたサプライヤーです：'
        },
        {
          en: 'Go back',
          ja: '戻る'
        },
        {
          en: 'Continue',
          ja: '続ける'
        },
        {
          en: 'Please provide a top down picture of your circuit board.',
          ja: '回路基板の上面写真をご提供ください。'
        },
        { en: 'Example photo:', ja: '写真例：' },
        { en: 'Your photo:', ja: 'あなたの写真：' },
        {
          en: 'Please select an image of your circuit board.',
          ja: '回路基板の画像を選択してください。'
        },
        {
          en: 'Please select an image of your circuit board.',
          ja: '回路基板の画像を選択してください。'
        },
        {
          en: 'Sorry, we were unable to upload your file.',
          ja: 'ファイルをアップロードできませんでした。'
        },
        { en: 'File size is too large.', ja: 'ファイルサイズが大きすぎます。' },
        { en: 'No file selected...', ja: '選択されたファイルがありません...' },
        { en: 'Maximum file size:', ja: '最大ファイルサイズ：' },
        { en: 'Singapore', ja: 'シンガポール' },
        { en: 'India', ja: 'インド' },
        { en: 'Thailand', ja: 'タイ' },
        { en: 'Philippines', ja: 'フィリピン' },
        { en: 'Vietnam', ja: 'ベトナム' },
        { en: 'Hungary', ja: 'ハンガリー' },
        { en: 'Japan', ja: '日本' },
        { en: 'Philippines', ja: 'フィリピン' },
        { en: 'China', ja: '中国' },
        { en: 'Australia', ja: 'オーストラリア' },
        { en: 'Indonesia', ja: 'インドネシア' },
        { en: 'Malaysia', ja: 'マレーシア' },
        { en: 'Mexico', ja: 'メキシコ' },
        { en: 'United States of America', ja: 'アメリカ' },
        { en: 'Thailand', ja: 'タイ' },
        {
          en: 'Please provide the specs of your circuit board',
          ja: '回路基板の仕様をお知らせください'
        },
        { en: 'Project name', ja: 'プロジェクト名' },
        { en: 'Pallet width', ja: 'パレット幅' },
        { en: 'For example: 420mm or 30 inches', ja: '例 420mmまたは30インチ' },
        { en: 'Pallet length', ja: 'パレットの長さ' },
        { en: 'For example: 450mm or 17 inches', ja: '例 450mmまたは17インチ' },
        { en: 'Wave solder conveyor speed', ja: 'ウェーブはんだコンベア速度' },
        { en: 'optional', ja: 'オプション' },
        { en: 'Please enter a value', ja: '値を入力してください' },
        {
          en: 'Please provide the specs of your circuit board',
          ja: '回路基板の仕様をお知らせください。'
        },
        { en: 'Required cycle time', ja: '必要なサイクル時間' },
        { en: 'Flux brand or type', ja: 'フラックスのブランドまたはタイプ' },
        { en: 'For example: Interflux', ja: '例えば、こうだ：Interflux' },
        { en: 'Actual flux consumption', ja: '実際のフラックス消費量' },
        { en: 'Board reference', ja: '基板リファレンス' },
        { en: 'Solder process', ja: 'はんだプロセス' },
        { en: 'Actual flux application process', ja: '実際のフラックス塗布工程' },
        { en: 'Known issues with the process', ja: 'プロセスの既知の問題' },
        { en: 'spray fluxing', ja: 'スプレーフラックス' },
        { en: 'jet fluxing', ja: 'ジェットフラックス' },
        { en: 'foam fluxing', ja: '発泡フラックス' },
        { en: 'Known issues with the process', ja: 'プロセスに関する既知の問題' },
        { en: 'Please select an option', ja: 'オプションを選択してください' },
        { en: 'selective soldering', ja: '選択はんだ付け' },
        { en: 'wave soldering', ja: 'ウェーブソルダリング' },
        { en: 'other', ja: 'その他' },
        { en: 'Contact detail', ja: '連絡先詳細' },
        { en: 'Full name', ja: '氏名' },
        { en: 'Company name', ja: '会社名' },
        { en: 'Please enter your name', ja: 'お名前を入力してください' },
        { en: 'Please enter your email', ja: 'Eメールを入力してください' },
        { en: 'Contact details', ja: '連絡先' },
        { en: 'Submit', ja: '投稿する' },
        { en: 'Sorry', ja: '申し訳ない' },
        {
          en: 'We were unable to submit your request. We do apologies. Please use the contact button below.',
          ja: 'リクエストを送信できませんでした。申し訳ございません。下記のお問い合わせボタンをご利用ください。'
        },
        { en: 'Homepage', ja: 'ホームページ' },
        { en: 'Contact us', ja: 'お問い合わせ' },
        { en: 'See logs', ja: '過去ログを見る' },
        { en: 'Success', ja: '成功' },
        {
          en: 'Thank you for the request. It is submitted successfully! We will get back to you shortly via email!',
          ja: 'リクエストありがとうございました。正常に送信されました！折り返しメールにてご連絡いたします！'
        },
        {
          en: 'Please enter at least 2 characters',
          ja: '2文字以上入力してください。'
        },
        {
          en: 'Please enter a valid email',
          ja: '有効なEメールを入力してください'
        }
      ]
    };
  }
  // TODO: redirect to English or show 404?
  error(404, 'Not found');
};
