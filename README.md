# gmcngine-banners

GMCNgine banners exposes all the types of missing children banners available for the GMCNgine platform.

### Usage

```
<MissingBanners data={data} agency={agency} type={bannerType} language={language} printTrigger={component}/>
```

This library will only expose one banner at the time, the way the user will choose each banner would need to be implemented on the repository that uses this library.

In the background, it uses React, react-to-print, i18next, qrcode.react and typescript.

**<MissingBanners/>**

| Name           |    Type    |  Description |
| -------------- | :--------: | -----------------------------------------------------------------------: |
| `data`         |   ICase    | The case information to display |
| `agency`       |  IAgency   | The agency information in order to get the agency logo |
| `type`         | BannerType | One of the four types of banners |
| `language?`    |   string   | The language from i18next in order to translate the banners |
| `printTrigger` |  function  | A function that returns the component that will trigger the print prompt |
| ` qrCodeURL`   |   string   | URL that the qrCode will redirect the user to |
