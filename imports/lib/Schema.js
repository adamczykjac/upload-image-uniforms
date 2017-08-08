import SimpleSchema2 from 'simpl-schema';
import ImageField from '../components/ui/ImageField'

export default sampleSchema = new SimpleSchema2({
    name: {
        type: String,
        defaultValue: 'John Doe'
    },

    picture: {
        type: String,
        uniforms: ImageField
    }
})
