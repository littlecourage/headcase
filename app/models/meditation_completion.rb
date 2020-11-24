class MeditationCompletion < ApplicationRecord

  validates :user_pack_id, presence: true
  validates :med_id, presence: true

  belongs_to :meditation,
    foreign_key: :med_id,
    class_name: "Meditation"

  belongs_to :user_pack,
    foreign_key: :user_pack_id,
    class_name: 'UserPack'

  has_one :user,
    through: :user_pack,
    source: :user

end