import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {flexGrow: 1},
  container: {
    flexGrow: 1,
    backgroundColor: '#E8EAED',
    paddingHorizontal: 20,
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'white',
    borderTopColor: '#C0C0C0',
    borderWidth: 1,
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#C0C0C0',
    color: 'black',
    borderWidth: 1,
    width: '70%',
  },
  button: {
    height: '100%',
    flexGrow: 1,
    paddingHorizontal: 20,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2873bf',
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    zIndex: 100,
  },
});
