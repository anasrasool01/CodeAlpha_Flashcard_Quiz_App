package com.codealpha_flashcard_quiz_app

import android.os.Bundle // Import this for onCreate method
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "CodeAlpha_Flashcard_Quiz_App"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flag [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  // Add the onCreate method here
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    // Additional setup for react-native-screens
    // This prevents crashes and ensures screens are managed correctly
    // for improved navigation performance
  }
}