import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

//* review schema
const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' }, //! THIS NEEDS A REQUIRED TRUE - HOW TO GENERATE RANDOM USER?
  rating: { type: Number, required: true, min: 1, max: 5 }
},
{
  timestamps: true
})

const dateSchema = new mongoose.Schema({
  day: { type: Number },
  month: { type: Number },
  year: { type: Number }
})
  
const locationSchema = new mongoose.Schema({
  latitude: { type: Number },
  longitude: { type: Number }
})
  

//* Experience schema
const experienceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  locationCoord: locationSchema ,
  date: [dateSchema],
  duration: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: [{ type: String, required: true }],
  attendees: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  host: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, //! CURRENTLY ALL ANNA (FIRST USER IN DB - NEED TO HAVE RANDOM)
  price: { type: String, required: true },
  thingsToKnow: [{ type: Object }],
  languages: [{ type: String }],
  accessibilty: [{ type: String }],
  whatIsIncluded: [{ type: String }],
  reviews: [reviewSchema] //! ASSUME THIS REQUIRES SOMETHING LIKE ...REQ.PARAMS, REVIEWSCHEMAYAR
})

//*virtual field
experienceSchema.virtual('averageRating')
  .get(function () {
    if (!this.reviews.length) return '0.00'
    const sumOfRatings = this.reviews.reduce((acc, review) => {
      if (!review.rating) return acc
      return acc + review.rating
    }, 0)
    return (sumOfRatings / this.reviews.length).toFixed(2)
  })

experienceSchema.set('toJSON', { virtuals: true })
experienceSchema.plugin(uniqueValidator)

export default mongoose.model('Experience', experienceSchema)