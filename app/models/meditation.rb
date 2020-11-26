class Meditation < ApplicationRecord

  validates :pack_id, presence: true
  validates :order, presence: true, uniqueness: { scope: :pack_id }

  belongs_to :pack,
    foreign_key: :pack_id,
    class_name: "Pack"

  has_many :meditation_completions,
    foreign_key: :med_id,
    class_name: "MeditationCompletion"

  has_many :user_packs,
    through: :meditation_completions,
    source: :user_pack

  has_one_attached :track



end