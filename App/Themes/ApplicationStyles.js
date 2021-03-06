import Fonts from './Fonts'
import Metrics from './Metrics'
import Colors from './Colors'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    fragmentContainer: {
      flex: 1,
      marginTop: Metrics.doubleBaseMargin,
      marginBottom: Metrics.doubleBaseMargin,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent
    },
    section: {
      margin: Metrics.section,
      padding: Metrics.baseMargin
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,
      color: Colors.snow,
      marginVertical: Metrics.smallMargin,
      textAlign: 'center'
    },
    subtitle: {
      color: Colors.snow,
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: Colors.text
    },
    screenTitleText: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20
    },
    scrollCenterContainer: {
      flexGrow: 1
    },
    customContainer: {
      flex: 1,
      justifyContent: 'center',
      paddingBottom: Metrics.navBarHeight + 20
      // marginTop: Metrics.navBarHeight
    },
    formContainer: {
      flex: 1,
      backgroundColor: Colors.silver,
      marginLeft: Metrics.baseMargin,
      marginRight: Metrics.baseMargin,
      borderRadius: Metrics.buttonRadius
    },
    linkActionText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    hasNavbar: {
      marginBottom: Metrics.navBarHeight
    },
    defaultMarginTop: {
      marginTop: Metrics.doubleBaseMargin
    },
    cardContent: {
      width: (Metrics.screenWidth / 2) - 25,
      minWidth: (Metrics.screenWidth / 2) - 25,
      maxWidth: (Metrics.screenWidth / 2) - 25,
      height: 360,
      minHeight: 360,
      maxHeight: 360,
      borderColor: 'grey',
      borderWidth: 2,
      borderRadius: Metrics.buttonRadius,
      margin: 7
    },
    titleLabel: {
      backgroundColor: '#2F1F37',
      color: 'white',
      padding: 5
    }
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center'
  }
}

export default ApplicationStyles
