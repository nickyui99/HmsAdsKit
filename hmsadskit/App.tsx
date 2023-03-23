import React, {useEffect} from 'react';
import {Button, SafeAreaView, ScrollView, Text, useColorScheme, View,} from 'react-native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';
import styles from "./src/utils/styles";
import {HMSBanner, HMSInstream, HMSInterstitial, HMSNative, HMSReward, HMSSplash, BannerAdSizes} from '@hmscore/react-native-hms-ads';

let adBannerElement, instreamRef;

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    useEffect(() => {

        HMSSplash.setAdId("testd7c5cewoj6") // Video ad.
            .then(res => console.log(res));
        HMSSplash.show()
            .then(res => console.log("HMSSplash displayed"));

        adBannerElement.getInfo()
            .then((res) => console.log("HMSBanner, ref.getInfo", res))
            .catch((err) => console.warn(err));

        instreamRef.loadAd();
        instreamRef.getInfo()
            .then((res) => {
                console.log("HMSInstream, ref.getInfo", res);
            })
            .catch((err) => console.warn(err));

        HMSSplash.adDismissedListenerAdd(() => { // Add a listener.
            console.log('HMSSplash adDismissed');
            instreamRef.register();
            instreamRef.play();
        });
        HMSReward.setAdId("testx9dtjwj8hp") // Video ad.
            .then(res=>console.log(res));
        HMSReward.loadAd().then(res=>console.log(res));
    }, []);

    const onPlayAds = () => {
        instreamRef.getInfo()
            .then((res) => {
                console.log(res);
                if (res.isPlaying) {
                    console.log("pause");
                    instreamRef.pause();
                } else {
                    instreamRef.play();
                    console.log("play");
                }
            })
            .catch((err) => console.warn(err));
    }

    const onMuteAds = () => {
        instreamRef.getInfo()
            .then((res) => {
                console.log(res)
                if (res.isMute) {
                    instreamRef.unmute();
                } else {
                    instreamRef.mute();
                }
            })
            .catch((err) => console.warn(err));
    }

    const showRewardedAds = () => {
        HMSReward.show();
    }


    return (
        <SafeAreaView style={[backgroundStyle, styles.container, styles.padding_sm]}>
            <ScrollView>
                <Text style={styles.title}>HMS Core Ads Kit</Text>
                <View style={styles.margin_vertical_sm}>
                    <Text>HMS Banner Ads</Text>
                    <HMSBanner
                        style={{height: 100, width: "100%"}}
                        ref={(el) => (adBannerElement = el)}
                        bannerAdSize={"360_144"}
                        onAdLoaded={(_) => {
                            console.log('HMSBanner onAdLoaded');
                        }}
                        onAdFailed={(e) => {
                            console.warn('HMSBanner onAdFailed', e.nativeEvent);
                        }}
                        adId="testw6vs28auh3"// <== your ad slot id goes here
                    />
                </View>
                <View style={styles.margin_vertical_sm}>
                    <Text>HMS Roll Ads</Text>
                    <HMSInstream
                        style={{height: 189, width: "100%"}}
                        adId="testy3cglm3pj0"
                        maxCount={10}
                        totalDuration={60}
                        ref={(el) => (instreamRef = el)}
                        onAdLoaded={(_) => {
                            console.log('HMSInstream onAdLoaded');
                        }}
                        onAdFailed={(e) => {
                            console.warn('HMSInstream onAdFailed', e.nativeEvent);
                        }}
                    />
                    <Button title={"Play/Pause"} onPress={onPlayAds}/>
                    <Button title={"Mute/Unmute"} onPress={onMuteAds}/>
                </View>
                <View style={styles.margin_vertical_sm}>
                    <Text>HMS Native Ads</Text>
                    <HMSNative
                        style={{height: 322}}
                    />
                </View>
                <View>
                    <Button title={"Show Rewarded Ads"} onPress={showRewardedAds}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default App;
